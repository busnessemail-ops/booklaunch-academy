"use client";
import { useEffect, useState } from "react";
import { totalLessons } from "@/lib/course-data";
import { loadCloudCompletedLessonCount } from "@/lib/supabase/learner-data";

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

export function DashboardProgress() {
  const [localCompleted, setLocalCompleted] = useState(0);
  const [cloudCompleted, setCloudCompleted] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    const refresh = () => {
      if (cloudCompleted === null) {
        setLocalCompleted(readCompletedCount());
      } else {
        loadCloudCompletedLessonCount().then(count => {
          if (active && count !== null) setCloudCompleted(count);
        });
      }
    };
    window.addEventListener("storage", refresh);
    window.addEventListener("bla-progress-change", refresh);

    loadCloudCompletedLessonCount().then(count => {
      if (!active) return;
      if (count === null) setLocalCompleted(readCompletedCount());
      else setCloudCompleted(count);
      setReady(true);
    });

    return () => {
      active = false;
      window.removeEventListener("storage", refresh);
      window.removeEventListener("bla-progress-change", refresh);
    };
  }, [cloudCompleted]);

  const completed = cloudCompleted ?? localCompleted;
  const percentage = Math.round((completed / totalLessons) * 100);
  return (
    <section className="mb-8 rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Your progress</p>
          <h2 className="mt-2 text-xl font-bold">{ready ? `${completed} of ${totalLessons} lessons completed` : "Loading your progress…"}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{cloudCompleted === null ? "Progress saved in this browser on this device." : "Progress synced from your learner account."}</p>
        </div>
        <p className="text-2xl font-bold tabular-nums">{ready ? `${percentage}%` : "—"}</p>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${ready ? percentage : 0}%` }} />
      </div>
    </section>
  );
}
