"use client";
import { useSyncExternalStore } from "react";
import { totalLessons } from "@/lib/course-data";

function readCompletedCount() {
  if (typeof window === "undefined") return 0;
  let count = 0;
  for (let id = 1; id <= totalLessons; id += 1) {
    try {
      const value = window.localStorage.getItem(`bla-lesson-${id}`);
      if (value && Boolean((JSON.parse(value) as { done?: boolean }).done)) count += 1;
    } catch {
      // Ignore an individual damaged browser-storage entry.
    }
  }
  return count;
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("bla-progress-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("bla-progress-change", callback);
  };
}

export function DashboardProgress() {
  const completed = useSyncExternalStore(subscribe, readCompletedCount, () => 0);
  const percentage = Math.round((completed / totalLessons) * 100);
  return (
    <section className="mb-8 rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Your progress</p>
          <h2 className="mt-2 text-xl font-bold">{completed} of {totalLessons} lessons completed</h2>
          <p className="mt-1 text-sm text-muted-foreground">Your progress is saved in this browser on this device.</p>
        </div>
        <p className="text-2xl font-bold tabular-nums">{percentage}%</p>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${percentage}%` }} />
      </div>
    </section>
  );
}
