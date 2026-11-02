"use client";
import { useState } from "react";

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

  function save(nextDone = done, nextNotes = notes) {
    const value = { notes: nextNotes, done: nextDone };
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      window.dispatchEvent(new Event("bla-progress-change"));
      setNotes(nextNotes);
      setDone(nextDone);
    } catch {
      window.alert("Your browser could not save this lesson. Check your browser storage settings and try again.");
    }
  }

  return (
    <section className="mt-10 rounded-2xl border border-border bg-card p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">Your lesson workspace</p>
      <h2 className="mt-2 text-xl font-bold">Put the lesson into practice</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Write down your ideas and actions for “{lessonTitle}”. Your notes and completion status are saved in this browser on this device.</p>
      <label htmlFor="lesson-notes" className="mt-5 block text-sm font-semibold">My notes and action points</label>
      <textarea id="lesson-notes" value={notes} onChange={(event) => setNotes(event.target.value)} rows={5} placeholder="What have you learned? What will you do next?" className="mt-2 w-full rounded-xl border border-border bg-background p-3 text-sm outline-none focus:border-primary" />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button onClick={() => save()} className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold">Save notes</button>
        <button onClick={() => save(!done)} className={`rounded-lg px-4 py-2.5 text-sm font-semibold ${done ? "bg-emerald-100 text-emerald-800" : "bg-primary text-white"}`}>{done ? "✓ Lesson completed — undo" : "Mark lesson as complete"}</button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{done ? "This lesson is marked complete in this browser." : "Mark the lesson complete when you have finished the reading and practical work."}</p>
    </section>
  );
}
