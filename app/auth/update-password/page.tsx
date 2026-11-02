"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (password !== confirm) {
      setError("The passwords do not match.");
      return;
    }
    setBusy(true);
    try {
      const supabase = createClient();
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData.user) throw new Error("Your reset link is invalid or has expired. Please request a new one.");
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) throw updateError;
      router.replace("/dashboard");
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Your password could not be updated. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return <main className="mx-auto flex min-h-screen max-w-xl items-center px-6 py-12">
    <section className="w-full rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
      <Link href="/" className="text-sm font-bold tracking-widest text-primary">BOOKLAUNCH ACADEMY</Link>
      <h1 className="mt-7 text-3xl font-bold">Choose a new password</h1>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Create a new password for your author account. Use at least 8 characters.</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <label className="block text-sm font-medium">New password
          <input type="password" required minLength={8} autoComplete="new-password" value={password} onChange={event => setPassword(event.target.value)} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5" />
        </label>
        <label className="block text-sm font-medium">Confirm new password
          <input type="password" required minLength={8} autoComplete="new-password" value={confirm} onChange={event => setConfirm(event.target.value)} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5" />
        </label>
        {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <button disabled={busy} className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white disabled:opacity-60">{busy ? "Updating…" : "Update password"}</button>
      </form>
    </section>
  </main>;
}
