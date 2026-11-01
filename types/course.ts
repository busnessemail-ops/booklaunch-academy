export type StageSlug = "create-book" | "publish-book" | "launch-book";
export type Lesson = { id:number; title:string; duration:string; stage:StageSlug };
export type Stage = { slug:StageSlug; number:number; title:string; description:string; lessons:Lesson[] };