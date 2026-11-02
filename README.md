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

Complete these steps when the owner is ready to activate real learner accounts.

1. Create a Supabase project and keep its database region and project details recorded safely.
2. Copy `.env.example` to `.env.local` for local development.
3. In Supabase Project Settings > API, copy the Project URL and the anon/publishable key into `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. These are the only Supabase values this browser application needs. Never use a service-role or secret key in a `NEXT_PUBLIC_` variable.
4. Open the Supabase SQL Editor and run the complete `supabase/schema.sql` file. This creates the learner tables, profile-creation trigger, indexes and Row Level Security policies.
5. In Authentication > URL Configuration, set the Site URL to the eventual production website origin. Add the exact local and production callback URLs to the Redirect URLs allowlist. The application uses `/auth/callback` for both email confirmation and password recovery; allow the callback URL with its `next` query parameter (or a narrowly scoped callback wildcard if required by the Supabase dashboard). Do not allow arbitrary external redirect destinations.
6. In Authentication settings, configure email confirmation and review the confirmation email template so its link returns to the application's `/auth/callback` route.
7. For local testing, put the two public values in `.env.local` and restart the development server. For production, add those same two public values to the hosting provider's environment-variable settings for the production environment, then redeploy.
8. Once the application has a production domain, add that domain's callback URL to the Supabase Redirect URLs allowlist and verify the password-reset email returns to `/auth/update-password`.

### Account and data acceptance tests

Before inviting learners, test with two separate email accounts:

- Create an account and complete the email-confirmation link.
- Sign in, sign out, and sign back in.
- Request a password-reset email, open its link, and set a new password.
- Change the display name on the Account page.
- Save lesson notes and mark a lesson complete.
- Save the Book Planner and Launch Workspace.
- Sign in as the second test account and confirm it cannot see the first account's profile, lesson progress or workspace data.
- Sign back into the first account in a separate browser/device and confirm cloud-saved work is available.
- Test the optional import of anonymous browser work and confirm it does not overwrite existing cloud records.

Never expose a Supabase service-role key in browser code, commit real environment values, or paste secret keys into chat. The SQL policies restrict each signed-in learner to rows bearing their own authenticated user ID. Do not invite real learners until the account and isolation tests above have passed.

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
