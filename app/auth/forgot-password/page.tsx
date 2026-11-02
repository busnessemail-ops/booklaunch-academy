"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    setError("");
    try {
      const supabase = createClient();
      const redirectTo = window.location.origin + "/auth/callback?next=/auth/update-password";
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
      if (resetError) throw resetError;
      setMessage("If an account exists for that email address, a password-reset link has been sent. Please check your inbox.");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "We could not request a reset link. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return <main className="mx-auto flex min-h-screen max-w-xl items-center px-6 py-12">
    <section className="w-full rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
      <Link href="/" className="text-sm font-bold tracking-widest text-primary">BOOKLAUNCH ACADEMY</Link>
      <h1 className="mt-7 text-3xl font-bold">Reset your password</h1>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Enter the email address connected to your author account. We will send you a secure reset link.</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <label className="block text-sm font-medium">Email address
          <input type="email" required autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5" />
        </label>
        {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        {message && <p role="status" className="rounded-lg bg-muted p-3 text-sm">{message}</p>}
        <button disabled={busy} className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white disabled:opacity-60">{busy ? "Sending…" : "Send reset link"}</button>
      </form>
      <Link href="/auth" className="mt-5 inline-block text-sm font-semibold text-primary">← Back to sign in</Link>
    </section>
  </main>;
}
