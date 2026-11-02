"use client";
import { useState } from "react";

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
  function update(field: keyof BookPlan, value: string) {
    setPlan(current => ({ ...current, [field]: value }));
    setSaved(false);
  }
  function save() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(plan));
      setSaved(true);
    } catch {
      setSaved(false);
      window.alert("Your browser could not save this plan. Check your browser storage settings and try again.");
    }
  }
  const fields: { key: keyof Pick<BookPlan, "title" | "genre" | "reader" | "promise" | "targetDate">; label: string; placeholder: string }[] = [
    { key: "title", label: "Working book title", placeholder: "A title you can change later" },
    { key: "genre", label: "Subject or genre", placeholder: "e.g. Personal development, romance, history" },
    { key: "reader", label: "Who is this book for?", placeholder: "Describe the reader you want to reach" },
    { key: "promise", label: "What will readers gain or experience?", placeholder: "Describe the central value, story or experience" },
    { key: "targetDate", label: "Target completion date", placeholder: "" }
  ];
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
          <button onClick={save} className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white">Save my book plan</button>
          {saved && <span role="status" className="text-sm font-medium text-emerald-700">Saved in this browser</span>}
        </div>
      </section>
      <p className="text-xs leading-5 text-muted-foreground">Your project details are currently saved only in this browser and on this device. Do not use this prototype for confidential or sensitive material. Cloud accounts and synchronisation will be added in a later development phase.</p>
    </div>
  );
}
