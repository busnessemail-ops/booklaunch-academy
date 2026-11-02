import Link from "next/link";
import { stages, totalLessons } from "@/lib/course-data";
import { DashboardProgress } from "@/components/dashboard-progress";

export const metadata = { title: "Dashboard" };

export default function Dashboard() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="font-bold text-primary">BOOKLAUNCH ACADEMY</Link>
        <span className="text-sm text-muted-foreground">Your author workspace</span>
      </header>
      <section className="py-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Your author journey starts here</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Welcome to your workspace</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Three stages. {totalLessons} practical lessons. One clear path from your first idea to your book launch.</p>
      </section>
      <DashboardProgress />
      <div className="grid gap-5 md:grid-cols-3">
        {stages.map((stage) => (
          <article key={stage.slug} className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-semibold text-primary">STAGE 0{stage.number}</p>
            <h2 className="mt-3 text-xl font-bold">{stage.title}</h2>
            <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{stage.description}</p>
            <p className="mt-4 text-xs text-muted-foreground">{stage.lessons.length} lessons</p>
            <Link href={`/stages/${stage.slug}`} className="mt-5 inline-flex rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white">Explore stage →</Link>
          </article>
        ))}
      </div>
      <p className="mt-8 text-xs text-muted-foreground">Prototype note: progress and lesson notes are stored in this browser only. Accounts and cloud synchronisation are planned for a later milestone.</p>
    </main>
  );
}
