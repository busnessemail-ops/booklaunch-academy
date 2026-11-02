"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function AccountStatus() {
  const [email, setEmail] = useState<string | null>(null);
  const [configured, setConfigured] = useState(false);
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return;

    let active = true;
    const supabase = createClient();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) setEmail(session?.user.email ?? null);
    });

    supabase.auth.getUser()
      .then(({ data, error }) => {
        if (!active) return;
        if (!error) setEmail(data.user?.email ?? null);
        setConfigured(true);
        setReady(true);
      })
      .catch(() => {
        if (!active) return;
        setConfigured(true);
        setReady(true);
      });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  async function signOut() {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setEmail(null);
      router.replace("/auth");
      router.refresh();
    } catch {
      setEmail(null);
    }
  }

  if (!ready || !configured || !email) {
    return <Link href="/auth" className="rounded-lg border border-border px-3 py-2 text-sm font-semibold">Account / Sign in</Link>;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="max-w-48 truncate text-sm text-muted-foreground" title={email}>{email}</span>
      <Link href="/account" className="rounded-lg border border-border px-3 py-2 text-sm font-semibold">My account</Link>
      <button type="button" onClick={signOut} className="rounded-lg border border-border px-3 py-2 text-sm font-semibold">Sign out</button>
    </div>
  );
}
