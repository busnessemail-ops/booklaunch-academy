import type { Stage } from "@/types/course";
const titles = [
["Understanding the Book Business","Finding Your Book Idea","Validating Your Book Idea","Identifying Your Ideal Reader","Researching Your Competition","Developing Your Book Concept","Choosing Your Title and Subtitle","Creating Your Book Outline","Writing Your Manuscript","Editing and Proofreading","Finalising Your Manuscript"],
["Understanding Publishing Options","Copyright and ISBN","Designing Your Book Cover","Book Interior Formatting","Writing Your Book Description","Book Keywords and Categories","Pricing Your Book","Amazon KDP Publishing","Other Publishing Platforms","Building Your Author Brand","Creating Your Author Website"],
["Understanding Book Launches","Building an Email List","Creating an Advance Reader Team","Preparing Your Launch Campaign","Social Media Marketing","Influencer and Podcast Outreach","Book Reviews and Reputation","Amazon Advertising","Promotions and Special Offers","Measuring Book Sales","Building Long-Term Book Sales","Creating Your Next Book"]
];
const slugs = ["create-book","publish-book","launch-book"] as const;
const names = ["Create Your Book","Publish and Position Your Book","Launch, Market and Scale"];
const descriptions = ["Develop a strong book idea, understand your readers and create a polished manuscript.","Choose the right publishing route and prepare your book for professional publication.","Build an ethical launch plan, reach readers and grow your author business over time."];
let id=1;
export const stages: Stage[] = titles.map((group,i)=>({slug:slugs[i],number:i+1,title:names[i],description:descriptions[i],lessons:group.map(title=>({id:id++,title,duration:"20–35 min",stage:slugs[i]}))}));
export const lessons = stages.flatMap(s=>s.lessons);
export const totalLessons = lessons.length;