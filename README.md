# BookLaunch Academy

An interactive learning platform designed to guide aspiring authors from book idea to publication and launch.

## Current milestone

Committed application features:

- Next.js App Router, TypeScript and Tailwind CSS foundation
- Responsive dashboard introducing the three-stage learning path
- Stage pages listing all 34 lessons
- Full teaching content, learning outcomes, practical assignments and reflection prompts for Lessons 1–34
- Lesson notes and completion status with browser-local fallback and Supabase cloud persistence when configured
- Dashboard progress summary with account-aware cloud progress
- Book Planner and Launch Workspace with account-scoped browser caches and Supabase cloud persistence when configured
- Optional, user-confirmed import of existing anonymous browser work into an account; existing cloud records are not overwritten
- Supabase sign-up/sign-in interface, email-confirmation callback, sign-out control and session-refresh proxy
- Initial Supabase SQL schema with Row Level Security policies for learner profiles, book projects, lesson progress and author workspaces
- GitHub Actions checks for type checking, linting and production builds

## Run locally

Requirements: Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Supabase setup (code integration committed; project configuration still required)

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` using the project URL and anon/publishable key from Supabase.
4. In the Supabase SQL Editor, run `supabase/schema.sql`.
5. In Supabase Authentication settings, configure the site's local and production redirect URLs, including `/auth/callback`.
6. Add the same public environment values to the hosting provider before enabling account features in production.

Never expose a Supabase service-role key in browser code or commit real environment values. The SQL policies restrict each signed-in learner to rows bearing their own authenticated user ID.

## Roadmap

1. Configure a real Supabase project and verify email confirmation, sign-in and sign-out.
2. Run end-to-end tests for cloud saving, account isolation, local-work import and cross-device access.
3. Test password recovery, profile updates, account-aware access and production security checks.
4. Deploy the application and verify it in a live browser.
5. Expand the author workspace with practical tools and optional AI-assisted workflows.

## Important implementation notes

- Supabase authentication and cloud persistence are implemented in the application code, but they are not active until a real Supabase project, SQL schema and environment values are configured.
- When Supabase is configured and a learner is signed in, lesson notes/completion and both workspaces can be saved to that learner's protected cloud records. Without configuration or sign-in, browser-local storage remains the fallback.
- Signed-in browser caches are separated by account. Anonymous browser work can be imported only after the learner explicitly confirms ownership; existing cloud records are not overwritten.
- Real account creation, email confirmation, cross-device synchronisation and Row Level Security still require end-to-end testing against the owner's Supabase project.
- Lessons 1–34 contain structured teaching material, exercises and reflection prompts.
- The curriculum is an original educational framework organised into three stages: Create Your Book; Publish and Position Your Book; Launch, Market and Scale.
- No income, bestseller ranking or sales outcome is guaranteed.
