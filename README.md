# BookLaunch Academy

An interactive learning platform designed to guide aspiring authors from book idea to publication and launch.

## Current milestone

Committed application features:

- Next.js App Router, TypeScript and Tailwind CSS foundation
- Responsive dashboard introducing the three-stage learning path
- Stage pages listing all 34 lessons
- Full teaching content, learning outcomes, practical assignments and reflection prompts for Lessons 1–34
- Lesson notes and completion status saved locally in the current browser
- Dashboard progress summary
- Book Planner and Launch Workspace, currently saved locally in the browser
- Supabase sign-up/sign-in interface, callback route and session-refresh proxy foundation
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

## Supabase setup (not yet connected)

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` using the project URL and anon/publishable key from Supabase.
4. In the Supabase SQL Editor, run `supabase/schema.sql`.
5. In Supabase Authentication settings, configure the site's local and production redirect URLs, including `/auth/callback`.
6. Add the same public environment values to the hosting provider before enabling account features in production.

Never expose a Supabase service-role key in browser code or commit real environment values. The SQL policies restrict each signed-in learner to rows bearing their own authenticated user ID.

## Roadmap

1. Connect and test Supabase authentication with a real project.
2. Connect learner data to the protected Supabase tables and provide a safe import path for existing browser-only work.
3. Complete account-aware access and production security checks.
4. Deploy the application and verify it in a live browser.
5. Expand the author workspace with practical tools and optional AI-assisted workflows.

## Important implementation notes

- The authentication interface and Supabase integration foundation are committed, but real account creation and cloud saving are not active until a Supabase project and environment values are configured.
- Lesson completion, notes, Book Planner data and Launch Workspace data remain in browser local storage for now. They are not synchronised between devices or accounts.
- Existing browser data is not automatically deleted or overwritten by the account setup.
- Lessons 1–34 contain structured teaching material, exercises and reflection prompts.
- The curriculum is an original educational framework organised into three stages: Create Your Book; Publish and Position Your Book; Launch, Market and Scale.
- No income, bestseller ranking or sales outcome is guaranteed.
