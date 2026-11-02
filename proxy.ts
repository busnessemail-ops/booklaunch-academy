import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const privateRoutePrefixes = [
  "/dashboard",
  "/lessons",
  "/stages",
  "/book-planner",
  "/launch-workspace",
];

function isPrivateRoute(pathname: string) {
  return privateRoutePrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export async function proxy(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Keep the prototype usable until the owner configures a Supabase project.
  if (!url || !key) return NextResponse.next({ request });

  let response = NextResponse.next({ request });
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  // Refresh the session and verify the signed-in user's claims on the server.
  const { data, error } = await supabase.auth.getClaims();

  if (isPrivateRoute(request.nextUrl.pathname) && (error || !data?.claims?.sub)) {
    const signInUrl = new URL("/auth", request.url);
    signInUrl.searchParams.set("next", request.nextUrl.pathname);
    const redirectResponse = NextResponse.redirect(signInUrl);

    // Preserve any refreshed or cleared Supabase cookies on the redirect.
    response.cookies.getAll().forEach((cookie) => redirectResponse.cookies.set(cookie));
    return redirectResponse;
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
