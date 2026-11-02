# BookLaunch Academy

An interactive learning platform designed to guide aspiring authors from book idea to publication and launch.

## Current milestone

Committed application features:

- Next.js App Router, TypeScript and Tailwind CSS foundation
- Responsive dashboard introducing the three-stage learning path
- Stage pages listing all 34 planned lessons
- Individual lesson routes with previous/next navigation
- Full teaching content, learning outcomes, practical assignments and reflection prompts for Lessons 1–16
- Lesson notes and completion status saved locally in the current browser
- Dashboard progress summary that updates as lessons are marked complete
- GitHub Actions workflow configured to run type checking, linting and a production build on pushes and pull requests

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

## Roadmap

1. Complete the teaching material, examples, exercises and worksheets for all 34 lessons.
2. Add account registration and sign-in.
3. Connect Supabase for secure, persistent book projects, notes and learner progress.
4. Expand the author workspace with practical tools and optional AI-assisted workflows.
5. Prepare deployment and production checks.

## Important implementation notes

- Lesson completion and notes are currently stored in browser local storage. They are not yet synchronised between devices or accounts.
- Lessons 1–16 currently contain full teaching material. Remaining lesson pages are clearly marked as content in preparation.
- The Book Planner provides a local-browser project brief for a working title, subject or genre, intended reader, reader promise, format, target date and notes.
- Supabase and OpenAI environment variables are placeholders; those services are not connected yet.
- The curriculum is an original educational framework organised into three stages: Create Your Book; Publish and Position Your Book; Launch, Market and Scale. It is not a transcription of any third-party video course.
- No income, bestseller ranking or sales outcome is guaranteed.
