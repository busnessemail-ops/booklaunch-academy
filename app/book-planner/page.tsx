import Link from "next/link";
import { BookPlanner } from "@/components/book-planner";

export const metadata = { title: "Book Planner | BookLaunch Academy" };

export default function BookPlannerPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <header className="flex items-center justify-between gap-4">
        <Link href="/dashboard" className="font-bold text-primary">BOOKLAUNCH ACADEMY</Link>
        <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">Back to dashboard</Link>
      </header>
      <section className="py-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Author workspace</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Your Book Planner</h1>
        <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">Capture the foundations of your book project in one place. You can update your plan as your idea develops.</p>
      </section>
      <BookPlanner />
    </main>
  );
}
