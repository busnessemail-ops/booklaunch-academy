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
    let active = true;
    try {
      const supabase = createClient();
      supabase.auth.getUser().then(({ data, error }) => {
        if (!active) return;
        if (!error) setEmail(data.user?.email ?? null);
        setConfigured(true);
        setReady(true);
      });
      const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
        if (active) setEmail(session?.user.email ?? null);
      });
      return () => {
        active = false;
        listener.subscription.unsubscribe();
      };
    } catch {
      setReady(true);
      return () => { active = false; };
    }
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
      <button type="button" onClick={signOut} className="rounded-lg border border-border px-3 py-2 text-sm font-semibold">Sign out</button>
    </div>
  );
}
