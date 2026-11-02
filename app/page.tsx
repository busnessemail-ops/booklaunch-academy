import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm font-bold tracking-widest text-primary">BOOKLAUNCH ACADEMY</p>
      <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
        Turn your book idea into a published launch.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
        A practical, step-by-step workspace for creating, publishing and marketing your book.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link className="inline-flex rounded-xl bg-primary px-5 py-3 font-semibold text-white" href="/dashboard">
          Enter your workspace →
        </Link>
        <Link className="inline-flex rounded-xl border border-border px-5 py-3 font-semibold" href="/auth">
          Create account / Sign in
        </Link>
      </div>
    </main>
  );
}
