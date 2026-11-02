"use client";
import { useEffect, useState } from "react";
import { loadWorkspace, saveWorkspace, type SaveLocation } from "@/lib/supabase/learner-data";

type BookPlan = { title: string; genre: string; reader: string; promise: string; format: string; targetDate: string; notes: string };
const storageKey = "bla-book-plan";
const emptyPlan: BookPlan = { title: "", genre: "", reader: "", promise: "", format: "Not decided", targetDate: "", notes: "" };

function loadPlan(): BookPlan {
  if (typeof window === "undefined") return emptyPlan;
  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? { ...emptyPlan, ...(JSON.parse(raw) as Partial<BookPlan>) } : emptyPlan;
  } catch {
    return emptyPlan;
  }
}

export function BookPlanner() {
  const [plan, setPlan] = useState<BookPlan>(loadPlan);
  const [saved, setSaved] = useState(false);
  const [ready, setReady] = useState(false);
  const [location, setLocation] = useState<SaveLocation>("local");
  const [syncMessage, setSyncMessage] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;
    loadWorkspace<BookPlan>("book-planner", storageKey, emptyPlan).then(result => {
      if (!active) return;
      setPlan(result.data);
      setLocation(result.location);
      setSyncMessage(result.message ?? "");
      setReady(true);
    });
    return () => { active = false; };
  }, []);

  function update(field: keyof BookPlan, value: string) {
    setPlan(current => ({ ...current, [field]: value }));
    setSaved(false);
  }

  async function save() {
    setSaving(true);
    try {
      const result = await saveWorkspace("book-planner", storageKey, plan);
      setLocation(result.location);
      setSyncMessage(result.message ?? "");
      setSaved(true);
    } finally {
      setSaving(false);
    }
  }

  const fields: { key: keyof Pick<BookPlan, "title" | "genre" | "reader" | "promise" | "targetDate">; label: string; placeholder: string }[] = [
    { key: "title", label: "Working book title", placeholder: "A title you can change later" },
    { key: "genre", label: "Subject or genre", placeholder: "e.g. Personal development, romance, history" },
    { key: "reader", label: "Who is this book for?", placeholder: "Describe the reader you want to reach" },
    { key: "promise", label: "What will readers gain or experience?", placeholder: "Describe the central value, story or experience" },
    { key: "targetDate", label: "Target completion date", placeholder: "" }
  ];

  if (!ready) return <p className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">Loading your saved book plan…</p>;

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-border bg-card p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Your book at a glance</p>
        <h2 className="mt-2 text-xl font-bold">Build your book project brief</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Start with a few simple decisions. You can return and change these details as your idea develops.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {fields.map(field => <label key={field.key} className="block text-sm font-semibold">{field.label}
            <input type={field.key === "targetDate" ? "date" : "text"} value={plan[field.key]} onChange={event => update(field.key, event.target.value)} placeholder={field.placeholder} className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm font-normal outline-none focus:border-primary" />
          </label>)}
          <label className="block text-sm font-semibold">Preferred format
            <select value={plan.format} onChange={event => update("format", event.target.value)} className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm font-normal outline-none focus:border-primary">
              <option>Not decided</option><option>eBook</option><option>Paperback</option><option>Hardcover</option><option>eBook and print</option><option>Audiobook</option>
            </select>
          </label>
        </div>
        <label className="mt-5 block text-sm font-semibold">Project notes
          <textarea rows={5} value={plan.notes} onChange={event => update("notes", event.target.value)} placeholder="Ideas, research questions, chapter thoughts or next steps..." className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm font-normal outline-none focus:border-primary" />
        </label>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button onClick={save} disabled={!ready || saving} className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">{saving ? "Saving…" : "Save my book plan"}</button>
          {saved && <span role="status" className="text-sm font-medium text-emerald-700">{location === "cloud" ? "Saved to your account" : "Saved in this browser"}</span>}
        </div>
        {syncMessage && <p role="status" className="mt-3 text-xs text-muted-foreground">{syncMessage}</p>}
      </section>
      <p className="text-xs leading-5 text-muted-foreground">{location === "cloud" ? "Your plan is saved to your account and cached on this device." : "Your plan is saved in this browser on this device. Sign in and save to store it in your account."} Cloud saving requires the owner to configure Supabase.</p>
    </div>
  );
}
