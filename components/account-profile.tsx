"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

export function AccountProfile() {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const configured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    if (!configured) return;
    async function load() {
      try {
        const supabase = createClient();
        const { data: auth, error: authError } = await supabase.auth.getUser();
        if (authError) throw authError;
        if (!auth.user) {
          if (active) setError("Please sign in to view your account.");
          return;
        }
        const { data, error: profileError } = await supabase
          .from("profiles")
          .select("display_name")
          .eq("id", auth.user.id)
          .maybeSingle();
        if (profileError) throw profileError;
        if (active) {
          setEmail(auth.user.email ?? "");
          setDisplayName(data?.display_name ?? "");
        }
      } catch (caught) {
        if (active) setError(caught instanceof Error ? caught.message : "Your profile could not be loaded.");
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => { active = false; };
  }, [configured]);

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");
    try {
      const supabase = createClient();
      const { data: auth, error: authError } = await supabase.auth.getUser();
      if (authError) throw authError;
      if (!auth.user) throw new Error("Please sign in again to update your profile.");
      const { error: saveError } = await supabase.from("profiles").upsert({
        id: auth.user.id,
        display_name: displayName.trim() || null,
        updated_at: new Date().toISOString(),
      }, { onConflict: "id" });
      if (saveError) throw saveError;
      setMessage("Your author profile has been saved.");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Your profile could not be saved.");
    } finally {
      setSaving(false);
    }
  }

  if (!configured) return <p className="rounded-xl border border-border bg-card p-6 text-sm leading-6 text-muted-foreground">Account profiles will become available after the owner connects the Supabase project and applies the database setup.</p>;
  if (loading) return <p className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">Loading your account…</p>;

  return <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-primary">Account details</p>
      <h2 className="mt-2 text-xl font-bold">Your author profile</h2>
      <p className="mt-2 text-sm text-muted-foreground">Your email is used to sign in. Add a display name to personalise your author workspace.</p>
    </div>
    <div className="mt-6 rounded-xl bg-muted p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Account email</p>
      <p className="mt-1 break-all text-sm font-medium">{email || "Not available"}</p>
    </div>
    <form onSubmit={save} className="mt-6 space-y-4">
      <label className="block text-sm font-medium">Display name
        <input type="text" maxLength={80} value={displayName} onChange={event => setDisplayName(event.target.value)} placeholder="How should we address you?" className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5" />
      </label>
      {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      {message && <p role="status" className="rounded-lg bg-muted p-3 text-sm">{message}</p>}
      <button disabled={saving} className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white disabled:opacity-60">{saving ? "Saving…" : "Save profile"}</button>
    </form>
    <div className="mt-8 border-t border-border pt-6">
      <h3 className="font-semibold">Password and security</h3>
      <p className="mt-2 text-sm text-muted-foreground">If you need to change a forgotten password, you can request a secure reset link.</p>
      <Link href="/auth/forgot-password" className="mt-3 inline-block text-sm font-semibold text-primary">Reset password →</Link>
    </div>
  </section>;
}
