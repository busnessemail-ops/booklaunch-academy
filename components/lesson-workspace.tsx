"use client";
import { useEffect, useState } from "react";
import { loadLesson, saveLesson, type SaveLocation } from "@/lib/supabase/learner-data";

type SavedLesson = { notes?: string; done?: boolean };

function readLesson(key: string): SavedLesson {
  if (typeof window === "undefined") return {};
  try {
    const saved = window.localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as SavedLesson) : {};
  } catch {
    return {};
  }
}

export function LessonWorkspace({ lessonId, lessonTitle }: { lessonId: number; lessonTitle: string }) {
  const key = `bla-lesson-${lessonId}`;
  const [initial] = useState(() => readLesson(key));
  const [notes, setNotes] = useState(initial.notes ?? "");
  const [done, setDone] = useState(Boolean(initial.done));
  const [location, setLocation] = useState<SaveLocation>("local");
  const [syncMessage, setSyncMessage] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;
    loadLesson(lessonId, { notes: initial.notes ?? "", done: Boolean(initial.done) }).then(result => {
      if (!active) return;
      setNotes(result.data.notes);
      setDone(result.data.done);
      setLocation(result.location);
      setSyncMessage(result.message ?? "");
    });
    return () => { active = false; };
  }, [lessonId, initial.done, initial.notes]);

  async function save(nextDone = done, nextNotes = notes) {
    setSaving(true);
    const value = { notes: nextNotes, done: nextDone };
    try {
      const result = await saveLesson(lessonId, value);
      setNotes(nextNotes);
      setDone(nextDone);
      setLocation(result.location);
      setSyncMessage(result.message ?? "");
      window.dispatchEvent(new Event("bla-progress-change"));
    } catch {
      setSyncMessage("Your browser could not save this lesson. Check your browser storage settings and try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="mt-10 rounded-2xl border border-border bg-card p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">Your lesson workspace</p>
      <h2 className="mt-2 text-xl font-bold">Put the lesson into practice</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Write down your ideas and actions for “{lessonTitle}”.</p>
      <label htmlFor="lesson-notes" className="mt-5 block text-sm font-semibold">My notes and action points</label>
      <textarea id="lesson-notes" value={notes} onChange={(event) => setNotes(event.target.value)} rows={5} placeholder="What have you learned? What will you do next?" className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary" />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button disabled={saving} onClick={() => save()} className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold disabled:opacity-50">{saving ? "Saving…" : "Save notes"}</button>
        <button disabled={saving} onClick={() => save(!done)} className={`rounded-lg px-4 py-2.5 text-sm font-semibold disabled:opacity-50 ${done ? "bg-emerald-100 text-emerald-800" : "bg-primary text-white"}`}>{done ? "✓ Lesson completed — undo" : "Mark lesson as complete"}</button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{done ? "This lesson is marked complete." : "Mark the lesson complete when you have finished the reading and practical work."}</p>
      <p role="status" className="mt-2 text-xs text-muted-foreground">
        {location === "cloud" ? "Saved to your account and this device." : "Saved in this browser on this device."}
        {syncMessage ? ` ${syncMessage}` : ""}
      </p>
    </section>
  );
}
