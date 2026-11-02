"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    setError("");

    try {
      const supabase = createClient();
      if (mode === "signup") {
        const { data, error: authError } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
        });
        if (authError) throw authError;
        if (data.session) window.location.assign("/dashboard");
        else setMessage("Your account request was received. Check your email for a confirmation link before signing in.");
      } else {
        const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
        if (authError) throw authError;
        window.location.assign("/dashboard");
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6 py-12">
      <section className="w-full rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
        <Link href="/" className="text-sm font-bold tracking-widest text-primary">BOOKLAUNCH ACADEMY</Link>
        <h1 className="mt-7 text-3xl font-bold">{mode === "signup" ? "Create your author account" : "Welcome back"}</h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Save your learning journey and, once cloud storage is connected, access your work across devices.</p>
        <div className="mt-6 flex gap-2 rounded-xl bg-muted p-1">
          <button type="button" onClick={() => { setMode("signup"); setMessage(""); setError(""); }} className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${mode === "signup" ? "bg-background shadow-sm" : "text-muted-foreground"}`}>Create account</button>
          <button type="button" onClick={() => { setMode("signin"); setMessage(""); setError(""); }} className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${mode === "signin" ? "bg-background shadow-sm" : "text-muted-foreground"}`}>Sign in</button>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium">Email address
            <input type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5" />
          </label>
          <label className="block text-sm font-medium">Password
            <input type="password" required minLength={8} autoComplete={mode === "signup" ? "new-password" : "current-password"} value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5" />
            {mode === "signup" && <span className="mt-1 block text-xs text-muted-foreground">Use at least 8 characters.</span>}
          </label>
          {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          {message && <p role="status" className="rounded-lg bg-muted p-3 text-sm">{message}</p>}
          <button disabled={busy} className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white disabled:opacity-60">{busy ? "Please wait…" : mode === "signup" ? "Create account" : "Sign in"}</button>
        </form>
        <p className="mt-6 text-xs leading-5 text-muted-foreground">Account access becomes active after the owner connects Supabase and configures its allowed redirect URLs. Your existing locally saved planner and lesson data will not be deleted by creating an account.</p>
        <Link href="/" className="mt-5 inline-block text-sm font-semibold text-primary">← Back to home</Link>
      </section>
    </main>
  );
}
