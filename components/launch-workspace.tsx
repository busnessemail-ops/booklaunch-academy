"use client";

import { useEffect, useState } from "react";

type Reader = { id: number; name: string; bookSent: boolean; feedback: string; followUp: string };
type LaunchData = {
  title: string;
  date: string;
  audience: string;
  goal: string;
  message: string;
  channels: string;
  budget: string;
  tasks: boolean[];
  campaign: boolean[];
  readers: Reader[];
};
const key = "bla-launch-workspace-v1";
const launchTasks = [
  "Confirm publication date and allow time for platform review",
  "Finalise manuscript, cover and interior files",
  "Review book description, keywords, categories and price",
  "Test the book page and all purchase or preview links",
  "Prepare author biography, cover image and book excerpt",
  "Draft launch emails and social media posts",
  "Contact relevant podcasts, newsletters or book communities",
  "Confirm advance readers have received their copies",
  "Schedule launch-day announcement and follow-up messages",
  "Review results and record lessons after launch"
];
const campaignTasks = [
  "The central book message is clear and accurate",
  "All campaign images and text are mine or properly licensed",
  "Email subscribers have given the required permission",
  "Every message has a clear purpose and appropriate call to action",
  "Links, dates, prices and availability have been checked",
  "Posts and materials are accessible and readable",
  "Partner and reader requests are voluntary and transparent",
  "No message promises guaranteed sales, rankings or reviews",
  "A backup plan exists if publication is delayed",
  "A post-launch review date is in the calendar"
];
const empty: LaunchData = {
  title: "", date: "", audience: "", goal: "", message: "", channels: "", budget: "",
  tasks: launchTasks.map(() => false),
  campaign: campaignTasks.map(() => false),
  readers: []
};
function load(): LaunchData {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return empty;
    const value = JSON.parse(raw) as Partial<LaunchData>;
    return {
      ...empty, ...value,
      tasks: launchTasks.map((_, i) => Boolean(value.tasks?.[i])),
      campaign: campaignTasks.map((_, i) => Boolean(value.campaign?.[i])),
      readers: Array.isArray(value.readers) ? value.readers : []
    };
  } catch { return empty; }
}
function Progress({ done, total }: { done: number; total: number }) {
  const percent = total ? Math.round(done / total * 100) : 0;
  return <div className="mt-3">
    <div className="flex justify-between text-xs text-muted-foreground"><span>{done} of {total} complete</span><span>{percent}%</span></div>
    <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-all" style={{ width: percent + "%" }} /></div>
  </div>;
}
export function LaunchWorkspace() {
  const [data, setData] = useState<LaunchData>(empty);
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(false);
  const [readerName, setReaderName] = useState("");
  const [readerFollowUp, setReaderFollowUp] = useState("");
  useEffect(() => { setData(load()); setReady(true); }, []);
  function update<K extends keyof LaunchData>(field: K, value: LaunchData[K]) {
    setData(current => ({ ...current, [field]: value }));
    setSaved(false);
  }
  function save() {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
      setSaved(true);
    } catch { window.alert("Your browser could not save this workspace. Check its storage settings and try again."); }
  }
  function addReader() {
    const name = readerName.trim();
    if (!name) return;
    update("readers", [...data.readers, { id: Date.now(), name, bookSent: false, feedback: "Not received", followUp: readerFollowUp }]);
    setReaderName("");
    setReaderFollowUp("");
  }
  function updateReader(id: number, field: keyof Reader, value: string | boolean) {
    update("readers", data.readers.map(reader => reader.id === id ? { ...reader, [field]: value } : reader));
  }
  const fieldClass = "mt-2 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm font-normal outline-none focus:border-primary";
  return <div className="space-y-7">
    <section className="rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Tool 01</p><h2 className="mt-2 text-xl font-bold">Book Launch Planner</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Set the direction for your launch and keep your key decisions together.</p></div>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Planning</span>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Book title<input className={fieldClass} value={data.title} onChange={e => update("title", e.target.value)} placeholder="Your working or final title" /></label>
        <label className="text-sm font-semibold">Target publication date<input className={fieldClass} type="date" value={data.date} onChange={e => update("date", e.target.value)} /></label>
        <label className="text-sm font-semibold">Who do you want to reach?<textarea className={fieldClass} rows={3} value={data.audience} onChange={e => update("audience", e.target.value)} placeholder="Describe your ideal reader" /></label>
        <label className="text-sm font-semibold">Main launch goal<textarea className={fieldClass} rows={3} value={data.goal} onChange={e => update("goal", e.target.value)} placeholder="What is the most important outcome you are working towards?" /></label>
        <label className="text-sm font-semibold sm:col-span-2">Your central book message<textarea className={fieldClass} rows={3} value={data.message} onChange={e => update("message", e.target.value)} placeholder="In a few sentences, explain what the book offers and who it is for." /></label>
        <label className="text-sm font-semibold">Channels you plan to use<textarea className={fieldClass} rows={2} value={data.channels} onChange={e => update("channels", e.target.value)} placeholder="Email, website, social media, podcasts..." /></label>
        <label className="text-sm font-semibold">Maximum launch budget (optional)<input className={fieldClass} value={data.budget} onChange={e => update("budget", e.target.value)} placeholder="Set a limit you can afford" /></label>
      </div>
    </section>
    <section className="rounded-2xl border border-border bg-card p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">Tool 02</p><h2 className="mt-2 text-xl font-bold">Launch Preparation Checklist</h2><p className="mt-2 text-sm text-muted-foreground">Tick off each task as you complete it.</p>
      <Progress done={data.tasks.filter(Boolean).length} total={launchTasks.length} />
      <div className="mt-5 space-y-3">{launchTasks.map((task, i) => <label key={task} className="flex cursor-pointer items-start gap-3 rounded-lg py-1 text-sm"><input type="checkbox" className="mt-0.5 size-4 accent-primary" checked={data.tasks[i]} onChange={e => update("tasks", data.tasks.map((v, j) => j === i ? e.target.checked : v))} /><span className={data.tasks[i] ? "text-muted-foreground line-through" : ""}>{task}</span></label>)}</div>
    </section>
    <section className="rounded-2xl border border-border bg-card p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">Tool 03</p><h2 className="mt-2 text-xl font-bold">Advance Reader Tracker</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Track invited readers by name or a private alias. Participation and reviews must remain voluntary; never ask for a positive rating.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <input className={fieldClass+" mt-0"} value={readerName} onChange={e => setReaderName(e.target.value)} placeholder="Reader name or alias" aria-label="Reader name or alias" />
        <input className={fieldClass+" mt-0"} type="date" value={readerFollowUp} onChange={e => setReaderFollowUp(e.target.value)} aria-label="Optional follow-up date" />
        <button type="button" onClick={addReader} disabled={!readerName.trim()} className="rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white disabled:opacity-40">Add reader</button>
      </div>
      {data.readers.length === 0 ? <p className="mt-5 rounded-xl bg-muted p-4 text-sm text-muted-foreground">No readers added yet. Add a name or alias to begin your tracker.</p> :
        <div className="mt-5 space-y-3">{data.readers.map(reader => <div key={reader.id} className="grid gap-3 rounded-xl border border-border p-4 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-center">
          <div><p className="font-semibold">{reader.name}</p><p className="text-xs text-muted-foreground">{reader.followUp ? "Follow up: "+reader.followUp : "No follow-up date"}</p></div>
          <label className="text-xs font-medium text-muted-foreground">Copy sent<select className={fieldClass+" mt-1 py-2"} value={reader.bookSent ? "yes" : "no"} onChange={e => updateReader(reader.id, "bookSent", e.target.value === "yes")}><option value="no">Not yet</option><option value="yes">Sent</option></select></label>
          <label className="text-xs font-medium text-muted-foreground">Feedback status<select className={fieldClass+" mt-1 py-2"} value={reader.feedback} onChange={e => updateReader(reader.id, "feedback", e.target.value)}><option>Not received</option><option>Received privately</option><option>Review posted voluntarily</option><option>Declined / no response</option></select></label>
          <button type="button" onClick={() => update("readers", data.readers.filter(item => item.id !== reader.id))} className="text-sm text-red-700 hover:underline">Remove</button>
        </div>)}</div>}
      <p className="mt-4 text-xs leading-5 text-muted-foreground">Avoid storing email addresses or sensitive personal information here. Check each retailer’s current review policies and disclose free copies when required.</p>
    </section>
    <section className="rounded-2xl border border-border bg-card p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">Tool 04</p><h2 className="mt-2 text-xl font-bold">Campaign Quality Checklist</h2><p className="mt-2 text-sm text-muted-foreground">A final quality check before you publish or send campaign materials.</p>
      <Progress done={data.campaign.filter(Boolean).length} total={campaignTasks.length} />
      <div className="mt-5 space-y-3">{campaignTasks.map((task, i) => <label key={task} className="flex cursor-pointer items-start gap-3 rounded-lg py-1 text-sm"><input type="checkbox" className="mt-0.5 size-4 accent-primary" checked={data.campaign[i]} onChange={e => update("campaign", data.campaign.map((v, j) => j === i ? e.target.checked : v))} /><span className={data.campaign[i] ? "text-muted-foreground line-through" : ""}>{task}</span></label>)}</div>
    </section>
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" onClick={save} disabled={!ready} className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">Save launch workspace</button>
      {saved && <span role="status" className="text-sm font-medium text-emerald-700">Saved in this browser</span>}
    </div>
    <p className="text-xs leading-5 text-muted-foreground">This prototype stores the launch plan, checklist and reader tracker in this browser on this device only. It is not a shared database or a secure contact-management system. Save your work regularly; cloud accounts and synchronisation are planned for a later phase.</p>
  </div>;
}
