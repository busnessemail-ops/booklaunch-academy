"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type ImportSummary = { lessons: number; workspaces: number };

function readJson(key: string): unknown | null {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) as unknown : null;
  } catch {
    return null;
  }
}

export function ImportLocalWork() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function importWork() {
    const confirmed = window.confirm(
      "Copy existing BookLaunch Academy work saved in this browser into the account you are signed in with? Existing cloud records will not be overwritten. Only continue if this browser work belongs to you."
    );
    if (!confirmed) return;

    setBusy(true);
    setMessage("");
    try {
      const supabase = createClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError) throw authError;
      if (!authData.user) {
        setMessage("Please sign in before importing browser work.");
        return;
      }

      const userId = authData.user.id;
      const { data: existingLessons, error: lessonReadError } = await supabase
        .from("lesson_progress")
        .select("lesson_id");
      if (lessonReadError) throw lessonReadError;
      const existingLessonIds = new Set((existingLessons ?? []).map(row => row.lesson_id));
      const lessonRows: { user_id: string; lesson_id: number; notes: string; completed: boolean }[] = [];

      for (let lessonId = 1; lessonId <= 34; lessonId += 1) {
        if (existingLessonIds.has(lessonId)) continue;
        const value = readJson(`bla-lesson-${lessonId}`) as { notes?: unknown; done?: unknown } | null;
        if (!value) continue;
        const notes = typeof value.notes === "string" ? value.notes : "";
        const completed = Boolean(value.done);
        if (!notes.trim() && !completed) continue;
        lessonRows.push({ user_id: userId, lesson_id: lessonId, notes, completed });
      }

      if (lessonRows.length) {
        const { error } = await supabase.from("lesson_progress").insert(lessonRows);
        if (error) throw error;
      }

      const { data: existingWorkspaces, error: workspaceReadError } = await supabase
        .from("author_workspaces")
        .select("workspace_type");
      if (workspaceReadError) throw workspaceReadError;
      const existingTypes = new Set((existingWorkspaces ?? []).map(row => row.workspace_type));
      const workspaceRows: { user_id: string; workspace_type: "book-planner" | "launch-workspace"; workspace_data: unknown }[] = [];

      const bookPlan = readJson("bla-book-plan");
      if (!existingTypes.has("book-planner") && bookPlan && typeof bookPlan === "object") {
        workspaceRows.push({ user_id: userId, workspace_type: "book-planner", workspace_data: bookPlan });
      }
      const launchPlan = readJson("bla-launch-workspace-v1");
      if (!existingTypes.has("launch-workspace") && launchPlan && typeof launchPlan === "object") {
        workspaceRows.push({ user_id: userId, workspace_type: "launch-workspace", workspace_data: launchPlan });
      }

      if (workspaceRows.length) {
        const { error } = await supabase.from("author_workspaces").insert(workspaceRows);
        if (error) throw error;
      }

      const summary: ImportSummary = { lessons: lessonRows.length, workspaces: workspaceRows.length };
      setMessage(`Import complete: ${summary.lessons} lesson records and ${summary.workspaces} workspace records copied. Existing cloud records were left unchanged.`);
      window.dispatchEvent(new Event("bla-progress-change"));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "The import could not be completed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="my-8 rounded-2xl border border-border bg-card p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">Data transfer</p>
      <h2 className="mt-2 text-xl font-bold">Bring your existing browser work into your account</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
        If you used BookLaunch Academy before creating an account, you can copy saved lesson notes, completion records and planner work into your signed-in account. This is optional and requires your confirmation. Existing cloud records are never overwritten.
      </p>
      <button type="button" onClick={importWork} disabled={busy} className="mt-4 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold disabled:opacity-50">
        {busy ? "Importing…" : "Import existing browser work"}
      </button>
      {message && <p role="status" className="mt-3 text-sm text-muted-foreground">{message}</p>}
    </section>
  );
}
