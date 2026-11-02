-- BookLaunch Academy: initial private learner-data schema.
-- Run this in the Supabase SQL Editor after creating a Supabase project.
-- Every learner-owned table is protected by Row Level Security (RLS).

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.book_projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'My book project',
  project_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id integer not null check (lesson_id between 1 and 34),
  completed boolean not null default false,
  notes text not null default '',
  updated_at timestamptz not null default now(),
  unique (user_id, lesson_id)
);

create table if not exists public.author_workspaces (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  workspace_type text not null check (workspace_type in ('book-planner', 'launch-workspace')),
  workspace_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique (user_id, workspace_type)
);

alter table public.profiles enable row level security;
alter table public.book_projects enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.author_workspaces enable row level security;

drop policy if exists "Learners can view their own profile" on public.profiles;
create policy "Learners can view their own profile" on public.profiles
  for select to authenticated using ((select auth.uid()) = id);
drop policy if exists "Learners can update their own profile" on public.profiles;
create policy "Learners can update their own profile" on public.profiles
  for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
drop policy if exists "Learners can create their own profile" on public.profiles;
create policy "Learners can create their own profile" on public.profiles
  for insert to authenticated with check ((select auth.uid()) = id);

drop policy if exists "Learners manage their own book projects" on public.book_projects;
create policy "Learners manage their own book projects" on public.book_projects
  for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "Learners manage their own lesson progress" on public.lesson_progress;
create policy "Learners manage their own lesson progress" on public.lesson_progress
  for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "Learners manage their own workspaces" on public.author_workspaces;
create policy "Learners manage their own workspaces" on public.author_workspaces
  for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create index if not exists book_projects_user_id_idx on public.book_projects(user_id);
create index if not exists lesson_progress_user_id_idx on public.lesson_progress(user_id);
create index if not exists author_workspaces_user_id_idx on public.author_workspaces(user_id);
