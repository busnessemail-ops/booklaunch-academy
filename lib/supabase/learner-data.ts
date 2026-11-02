import { createClient } from "@/lib/supabase/client";

export type SaveLocation = "local" | "cloud";

export type SyncResult<T> = {
  data: T;
  location: SaveLocation;
  message?: string;
};

function readLocal<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function accountStorageKey(key: string, userId: string) {
  return `${key}:account:${userId}`;
}

export async function loadWorkspace<T>(
  workspaceType: "book-planner" | "launch-workspace",
  localKey: string,
  fallback: T,
): Promise<SyncResult<T>> {
  try {
    const supabase = createClient();
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;
    if (!authData.user) return { data: readLocal(localKey, fallback), location: "local" };

    // Never show another signed-in user's browser cache to this account.
    const scopedKey = accountStorageKey(localKey, authData.user.id);
    const scopedLocal = readLocal(scopedKey, fallback);
    const { data, error } = await supabase
      .from("author_workspaces")
      .select("workspace_data")
      .eq("workspace_type", workspaceType)
      .maybeSingle();

    if (error) throw error;
    if (!data) return { data: scopedLocal, location: "local" };

    const cloudData = data.workspace_data as T;
    window.localStorage.setItem(scopedKey, JSON.stringify(cloudData));
    return { data: cloudData, location: "cloud" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Cloud storage could not be reached.";
    return { data: fallback, location: "local", message };
  }
}

export async function saveWorkspace<T>(
  workspaceType: "book-planner" | "launch-workspace",
  localKey: string,
  value: T,
): Promise<SyncResult<T>> {
  try {
    const supabase = createClient();
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;

    if (!authData.user) {
      window.localStorage.setItem(localKey, JSON.stringify(value));
      return { data: value, location: "local", message: "Sign in to save this work to your account." };
    }

    const scopedKey = accountStorageKey(localKey, authData.user.id);
    window.localStorage.setItem(scopedKey, JSON.stringify(value));
    const { error } = await supabase.from("author_workspaces").upsert(
      {
        user_id: authData.user.id,
        workspace_type: workspaceType,
        workspace_data: value,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,workspace_type" },
    );
    if (error) throw error;

    return { data: value, location: "cloud" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Cloud save failed.";
    return { data: value, location: "local", message };
  }
}

export async function loadLesson(
  lessonId: number,
  localValue: { notes: string; done: boolean },
): Promise<SyncResult<{ notes: string; done: boolean }>> {
  try {
    const supabase = createClient();
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;
    if (!authData.user) return { data: localValue, location: "local" };

    const scopedKey = accountStorageKey(`bla-lesson-${lessonId}`, authData.user.id);
    const scopedLocal = readLocal(scopedKey, { notes: "", done: false });
    const { data, error } = await supabase
      .from("lesson_progress")
      .select("notes, completed")
      .eq("lesson_id", lessonId)
      .maybeSingle();

    if (error) throw error;
    if (!data) return { data: scopedLocal, location: "local" };

    const value = { notes: data.notes ?? "", done: Boolean(data.completed) };
    window.localStorage.setItem(scopedKey, JSON.stringify(value));
    return { data: value, location: "cloud" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Cloud storage could not be reached.";
    return { data: { notes: "", done: false }, location: "local", message };
  }
}

export async function saveLesson(
  lessonId: number,
  value: { notes: string; done: boolean },
): Promise<SyncResult<{ notes: string; done: boolean }>> {
  try {
    const supabase = createClient();
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;

    if (!authData.user) {
      window.localStorage.setItem(`bla-lesson-${lessonId}`, JSON.stringify(value));
      return { data: value, location: "local", message: "Sign in to save lesson progress to your account." };
    }

    const scopedKey = accountStorageKey(`bla-lesson-${lessonId}`, authData.user.id);
    window.localStorage.setItem(scopedKey, JSON.stringify(value));
    const { error } = await supabase.from("lesson_progress").upsert(
      {
        user_id: authData.user.id,
        lesson_id: lessonId,
        notes: value.notes,
        completed: value.done,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,lesson_id" },
    );
    if (error) throw error;

    return { data: value, location: "cloud" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Cloud save failed.";
    return { data: value, location: "local", message };
  }
}

export async function loadCloudCompletedLessonCount(): Promise<number | null> {
  try {
    const supabase = createClient();
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;
    if (!authData.user) return null;

    const { data, error } = await supabase
      .from("lesson_progress")
      .select("lesson_id, completed");
    if (error) throw error;
    return (data ?? []).filter((lesson) => Boolean(lesson.completed)).length;
  } catch {
    return null;
  }
}
