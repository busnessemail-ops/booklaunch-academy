import Link from "next/link";
import { notFound } from "next/navigation";
import { lessons, stages } from "@/lib/course-data";
import { lessonTeaching } from "@/lib/lesson-content";
import { LessonWorkspace } from "@/components/lesson-workspace";
export function generateStaticParams(){return lessons.map(l=>({lessonId:String(l.id)}));}
export default async function LessonPage({params}:{params:Promise<{lessonId:string}>}){
  const {lessonId}=await params;
  const lesson=lessons.find(l=>l.id===Number(lessonId));
  if(!lesson)notFound();
  const stage=stages.find(s=>s.slug===lesson.stage)!;
  const index=stage.lessons.findIndex(l=>l.id===lesson.id);
  const previous=lessons.find(l=>l.id===lesson.id-1);
  const next=lessons.find(l=>l.id===lesson.id+1);
  const teaching=lessonTeaching[lesson.id];
  return <main className="mx-auto max-w-3xl px-6 py-10">
    <Link href={`/stages/${stage.slug}`} className="text-sm font-semibold text-primary">← Back to {stage.title}</Link>
    <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground"><span>Stage {stage.number} · Lesson {index+1}</span><span>{lesson.duration}</span></div>
    <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{lesson.title}</h1>
    {teaching ? <>
      <p className="mt-5 text-lg leading-8 text-muted-foreground">{teaching.introduction}</p>
      <section className="mt-8 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-bold">By the end of this lesson, you will be able to</h2>
        <ul className="mt-4 space-y-3">{teaching.outcomes.map(item=><li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="font-bold text-primary">✓</span><span>{item}</span></li>)}</ul>
      </section>
      <article className="mt-9 space-y-9">
        {teaching.sections.map(section=><section key={section.heading}>
          <h2 className="text-xl font-bold">{section.heading}</h2>
          {section.paragraphs?.map((p,i)=><p key={i} className="mt-3 text-sm leading-7 text-muted-foreground">{p}</p>)}
          {section.bullets&&<ul className="mt-4 space-y-3">{section.bullets.map(item=><li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="text-primary">•</span><span>{item}</span></li>)}</ul>}
        </section>)}
      </article>
      <section className="mt-10 rounded-2xl border border-primary/20 bg-card p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Practical assignment</p>
        <h2 className="mt-2 text-xl font-bold">{teaching.exercise.title}</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-muted-foreground">{teaching.exercise.instructions.map(item=><li key={item} className="pl-1">{item}</li>)}</ol>
        <p className="mt-5 rounded-xl bg-muted p-4 text-sm leading-6"><strong>What you should have:</strong> {teaching.exercise.deliverable}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-lg font-bold">Take a moment to reflect</h2>
        <ul className="mt-3 space-y-3">{teaching.reflection.map(q=><li key={q} className="rounded-xl border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">{q}</li>)}</ul>
      </section>
    </> : <section className="mt-8 rounded-2xl border border-border bg-card p-6"><p className="font-semibold">Full lesson content is being prepared</p><p className="mt-2 text-sm leading-6 text-muted-foreground">This lesson is part of the course roadmap. Its tutorial, examples and practical worksheet will be added as we build through the curriculum.</p></section>}
    <LessonWorkspace lessonId={lesson.id} lessonTitle={lesson.title}/>
    <nav className="mt-8 flex items-center justify-between border-t border-border pt-6 text-sm">{previous?<Link href={`/lessons/${previous.id}`} className="text-primary">← Previous lesson</Link>:<span/>}{next?<Link href={`/lessons/${next.id}`} className="font-semibold text-primary">Next lesson →</Link>:<Link href="/dashboard" className="font-semibold text-primary">Finish stage →</Link>}</nav>
  </main>;
}