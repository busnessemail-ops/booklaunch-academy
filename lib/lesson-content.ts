export type LessonSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type LessonTeaching = { introduction: string; outcomes: string[]; sections: LessonSection[]; exercise: { title: string; instructions: string[]; deliverable: string }; reflection: string[] };
export const lessonTeaching: Record<number, LessonTeaching> = {
  1: {
    introduction: "A book is both a creative work and a product that must reach the right readers. Understanding the journey from idea to reader helps you make better decisions before you invest months in writing.",
    outcomes: ["Describe the main stages between an idea and a published book.", "Compare traditional, self and hybrid publishing at a high level.", "Explain why reader value, quality and realistic planning matter."],
    sections: [
      { heading: "Think like an author and a project owner", paragraphs: ["A successful author does more than write pages. The work includes choosing a reader and a clear promise, creating a useful or engaging manuscript, preparing it for publication, making it discoverable, and learning from reader feedback.", "You do not need to master every skill immediately. Treat the book as a sequence of manageable decisions. Each stage should produce something concrete that makes the next stage easier."] },
      { heading: "The three main publishing routes", paragraphs: ["Traditional publishing: a publishing house selects a manuscript and typically manages editing, production and distribution. The process is selective and may involve agents, proposals and longer timelines. Authors usually exchange some control for the publisher’s services.", "Self-publishing: the author manages or hires help for editing, design, production, distribution and promotion. It offers more control, but the author is responsible for quality, costs, decisions and marketing.", "Hybrid publishing: models vary considerably. Some charge authors for defined services while offering professional support. Examine contracts, ownership, fees, distribution claims and the publisher’s track record before paying."] },
      { heading: "Understand the complete book lifecycle", paragraphs: ["A book moves through concept, reader research, planning, writing, editing, design, publication, launch and ongoing discovery. The decisions are connected: understanding your reader can influence the content, title, cover direction, description and marketing message.", "Build a simple plan before spending heavily. Identify which tasks you can do yourself and where professional help may improve the result."] },
      { heading: "Set realistic expectations", paragraphs: ["Publishing does not guarantee income, bestseller status or a large audience. A first book is a serious creative project and a learning opportunity. Make decisions based on reader value, quality, budget and evidence—not promises of guaranteed success."] }
    ],
    exercise: { title: "Map your author journey", instructions: ["Write one sentence describing the kind of book you may want to create.", "List the reader you hope to serve and the value you want the book to provide.", "Choose the publishing route you are currently most interested in. Record what you still need to learn before deciding.", "List three skills or services you may need: for example, editing, cover design, formatting or promotion."], deliverable: "A one-page author project snapshot. It is a working draft, not a permanent commitment." },
    reflection: ["What would make this book worthwhile even if it did not become a bestseller?", "Which part of the process feels most unfamiliar, and what is one small step you can take to understand it?"]
  },
  2: {
    introduction: "A strong book idea sits at the intersection of your interests, a reader’s needs and a subject you can develop with care. The goal of this lesson is not to find a perfect idea immediately; it is to generate promising possibilities and assess which one deserves further research.",
    outcomes: ["Generate several possible book concepts instead of committing too early.", "Distinguish a broad topic from a focused book idea.", "Use a simple idea filter to identify concepts worth exploring."],
    sections: [
      { heading: "Start with topics, then move towards a promise", paragraphs: ["A topic is broad: cooking, leadership, gardening or personal finance. A book idea is more specific. It identifies a reader, a situation or interest, and what the book will help the reader understand, experience or do.", "For example, “gardening” is a topic. “A beginner’s guide to growing herbs in a small apartment” is a more focused concept because it names a reader, a context and a useful direction. Fiction ideas can be focused in a similar way through protagonist, conflict, setting and emotional promise."] },
      { heading: "Use your experience without assuming everyone shares it", paragraphs: ["Consider skills you have developed, problems you have worked through, questions people ask you, subjects you study consistently, and stories you feel compelled to tell. Your personal experience can provide a starting point, but it does not automatically prove there is a readership.", "For nonfiction, be honest about the limits of your expertise. Research carefully, distinguish personal experience from established evidence, and seek qualified review for specialist or high-stakes topics. For fiction, consider the characters, conflicts and worlds you can sustain across a complete narrative."] },
      { heading: "Generate before you judge", paragraphs: ["Set a short timer and write down at least ten possible concepts. Do not edit while brainstorming. Combine ideas, change the audience, narrow the setting or explore a different format. A list gives you options and reduces the pressure to make the first idea work.", "Try prompts such as: What do beginners repeatedly misunderstand? What do readers wish existed in a clearer form? Which experience could become a compelling story? What question would I enjoy researching for several months?"] },
      { heading: "Apply a practical idea filter", bullets: ["Reader clarity: can you describe a likely reader in one or two sentences?", "Value or appeal: can you explain why that reader might choose this book?", "Scope: can the idea fit a realistic book rather than an endless subject?", "Commitment: are you interested enough to keep working when writing becomes difficult?", "Credibility and resources: can you research and develop the subject responsibly?", "Distinctiveness: can you identify a particular angle, voice, setting or approach?"] , paragraphs: ["Score each idea from 1 to 5 against these filters. The score is not market proof; it is a way to compare your own candidates and decide what to investigate next."] }
    ],
    exercise: { title: "Create your idea shortlist", instructions: ["Write down at least ten book ideas without judging them.", "Choose your three most promising ideas and describe the intended reader for each.", "Score each shortlisted idea from 1 to 5 for reader clarity, value, scope, commitment, credibility and distinctiveness.", "Select one idea to investigate further. Note the biggest assumption you still need to test."], deliverable: "A shortlist of three concepts, with one provisional front-runner and its biggest unanswered question." },
    reflection: ["Which idea would you still care about after the excitement of starting has passed?", "Are you choosing this idea because it serves a reader, or mainly because you expect it to be easy or profitable?"]
  },
  3: {
    introduction: "Idea validation is the process of gathering evidence before committing substantial time and money. It does not require expensive market reports. You can begin by understanding readers, examining comparable books and testing whether your proposed angle solves a real problem or offers a compelling experience.",
    outcomes: ["Explain the difference between personal enthusiasm and evidence of reader interest.", "Research comparable books and reader feedback responsibly.", "Write a clear validation hypothesis and identify next research steps."],
    sections: [
      { heading: "Validation is evidence gathering, not a guarantee", paragraphs: ["No research method can promise that a book will sell. Validation reduces avoidable uncertainty by testing assumptions: who might read the book, what they want, what alternatives exist and why your approach may be useful or appealing.", "Avoid treating one enthusiastic friend, a social-media poll or a high sales rank as conclusive proof. Look for several independent signals and record what each signal can—and cannot—tell you."] },
      { heading: "Describe the reader and the need", paragraphs: ["Write a specific reader hypothesis. For nonfiction, consider the reader’s current situation, knowledge level, goals, frustrations and questions. For fiction, consider genre expectations, themes, emotional experience and the kinds of stories readers seek.", "Then write the need or appeal in plain language. What does the reader want to learn, solve, feel or experience? What alternatives do they use today?"] },
      { heading: "Study comparable books", bullets: ["Search books in the relevant subject or genre and record titles that appear genuinely comparable.", "Read descriptions, tables of contents or previews where available to understand positioning and scope.", "Look at reader reviews across a range of ratings. Notice repeated praise, unmet expectations and common complaints.", "Identify what is already well served and where a different audience, format, depth, voice or perspective may add value.", "Do not copy another author’s text, branding, cover design or distinctive creative expression."], paragraphs: ["Comparable books are not competitors to imitate. They help you understand reader expectations and the landscape your book would enter. A gap may be an underserved audience, a confusing explanation, a fresh perspective or a different reading experience."] },
      { heading: "Test your assumptions with real conversations", paragraphs: ["Speak with people who resemble your intended readers. Ask open questions about their current behaviour and needs rather than asking only whether they like your idea. For example: “What have you tried already?” “What is difficult about it?” “Which books or resources have you used?” and “What was missing?”", "If you share a concept, explain that it is early and invite honest criticism. Do not pressure people to praise it or mistake polite encouragement for purchase intent."] },
      { heading: "Make a go, refine or pause decision", paragraphs: ["After research, decide whether to proceed, narrow the audience, change the promise, gather more evidence or pause the concept. A refined idea is not a failure. The purpose of validation is to improve the project before the largest investment is made.", "Keep a simple evidence log: what you investigated, what you observed, how reliable the signal is, and what decision it supports."] }
    ],
    exercise: { title: "Build a one-page validation brief", instructions: ["Write your current book concept and intended reader hypothesis.", "List five comparable books, authors or alternative resources and what each appears to offer.", "Record three repeated reader questions, needs or criticisms you noticed in public feedback.", "Plan three short conversations with people who fit your intended readership. Prepare open-ended questions.", "Write your current decision: proceed, refine, research further or pause—and explain why."], deliverable: "A one-page validation brief with evidence, assumptions and a next-step decision." },
    reflection: ["What evidence would make you change your current idea?", "Which of your beliefs about the reader is still only an assumption?"]
  },
  4: {
    introduction: "Knowing exactly who your book is for makes every later decision clearer. A defined reader helps you choose the right scope, language, examples, genre signals and ways to reach the people most likely to value the book.",
    outcomes: ["Describe a primary reader without trying to appeal to everyone.", "Distinguish demographic details from motivations and reading needs.", "Create a practical reader profile to guide the book."],
    sections: [
      { heading: "Why a specific reader matters", paragraphs: ["A book written for everyone often feels too general to connect deeply with anyone. A clear primary reader gives you a useful point of focus. It does not mean other people cannot enjoy the book; it means you have a real person in mind when making editorial and marketing choices.", "For fiction, the reader profile may focus on genre, preferred themes, tone, pacing and emotional experience. For nonfiction, it may focus on the reader’s current knowledge, goals, circumstances and questions."] },
      { heading: "Look beyond age and location", paragraphs: ["Demographic information can sometimes help, but it rarely explains the whole reading decision. Consider what the reader is trying to achieve, what they already know, what frustrates them, what they have tried and what would make a book feel trustworthy or enjoyable.", "Avoid stereotypes. Two readers of the same age or profession may have very different needs. Use observable behaviours and motivations rather than assumptions about a group."] },
      { heading: "Create a primary reader profile", bullets: ["Situation: what is happening in the reader’s life or what kind of story are they seeking?", "Knowledge or genre familiarity: beginner, experienced, specialist, or new to this type of story?", "Goals and interests: what do they hope to learn, solve, explore or feel?", "Obstacles and preferences: what makes existing resources or stories less satisfying?", "Reading context: when, where and how might they read this book?", "Trust and expectations: what evidence, voice, style or genre conventions matter to them?"] , paragraphs: ["Keep the profile realistic and concise. It is a working hypothesis, not a fictional biography that you must treat as fact. Update it as you learn from actual readers."] },
      { heading: "Use the profile to guide decisions", paragraphs: ["Check whether your proposed content, examples, vocabulary, length and format suit the reader you described. For fiction, check that the premise, voice and genre promise are aligned with reader expectations while still allowing originality.", "A reader profile should help you make decisions, not restrict creativity. If your concept changes, revisit the profile and make sure the intended reader still makes sense."] }
    ],
    exercise: { title: "Write your ideal reader profile", instructions: ["Write one sentence describing the primary reader or likely fiction audience.", "Describe their situation, interests, knowledge level and goals or reading preferences.", "List three questions, frustrations or experiences your book should address.", "Write down what this reader might currently use or read instead.", "Identify one assumption in your profile that you need to validate through research or conversation."], deliverable: "A one-page primary reader profile to use when planning and evaluating your book." },
    reflection: ["Have you described a real type of reader or an imaginary audience based on assumptions?", "What would you change in your book if you focused on this reader rather than trying to appeal to everyone?"]
  },
  5: {
    introduction: "Researching comparable books helps you understand the landscape your book will enter. The purpose is to learn about reader expectations, positioning and opportunities—not to copy another author’s work or assume that visible popularity guarantees your own sales.",
    outcomes: ["Find genuinely comparable books in your subject or genre.", "Record useful information about positioning, format and reader feedback.", "Identify a credible way your book could be distinct."],
    sections: [
      { heading: "Choose meaningful comparisons", paragraphs: ["A comparable book serves a similar reader, explores a related subject, belongs to the same genre or competes for a similar reading occasion. It does not have to be identical to your idea. Choose a manageable group of recent and relevant titles, then include older influential works when they still shape reader expectations.", "For nonfiction, compare the reader problem, depth, approach and format. For fiction, compare genre, premise, tone, themes and audience expectations."] },
      { heading: "Build a simple comparison record", bullets: ["Title, author, publication date and format.", "The audience and promise communicated by the description.", "The main subjects, story elements or scope shown in the contents or preview.", "Cover signals and category or genre positioning.", "Recurring praise and criticism in reader reviews.", "Questions or needs that appear underserved."] , paragraphs: ["Use public information and your own observations. A sales rank, review count or bestseller label is only a snapshot and does not reveal profit, long-term demand or whether the same audience will choose your book."] },
      { heading: "Read reviews for patterns", paragraphs: ["Read a range of positive, mixed and critical reviews. Look for repeated themes rather than reacting to one person's opinion. Readers may praise clarity, pacing, practical examples or character development; they may criticise missing detail, confusing structure, weak editing or a mismatch between description and content.", "Reviews are subjective and may not represent every reader. Treat them as clues that help you ask better questions, not as instructions to satisfy every individual preference."] },
      { heading: "Find your own position", paragraphs: ["A useful distinction may come from a more specific audience, a different setting, a clearer structure, a fresh point of view, a distinct voice or a format that suits the reader. You do not need to claim that no similar book exists. Explain honestly what your book offers and why that approach matters.", "Never copy text, illustrations, cover layouts, branding or distinctive creative expression. Learn from the market while creating an original work."] }
    ],
    exercise: { title: "Create a comparable-books analysis", instructions: ["Find five books that are genuinely relevant to your idea and intended reader.", "Record each book’s title, author, format, publication date and central promise.", "Review descriptions, previews and a balanced sample of reader feedback.", "Write down three repeated reader expectations and three possible gaps or opportunities.", "Draft two sentences explaining how your book will be distinct without claiming unsupported uniqueness."], deliverable: "A comparison sheet covering five books and a short positioning statement for your own project." },
    reflection: ["What did comparable books teach you about reader expectations?", "Is your proposed difference meaningful to readers, or merely different for its own sake?"]
  },
  6: {
    introduction: "Your book concept brings the idea, reader and research together into a clear creative direction. It is the working blueprint that helps you decide what belongs in the book, what should be left out and how to explain the project to readers or collaborators.",
    outcomes: ["Turn a broad idea into a focused book concept.", "Write a clear concept statement and reader promise.", "Set boundaries for the book’s scope and approach."],
    sections: [
      { heading: "Bring the key decisions together", paragraphs: ["A useful concept connects the subject or story, the intended reader, the central promise and the reason this book is worth creating. It should be specific enough to guide decisions while remaining flexible enough to improve as you research and write.", "For nonfiction, clarify the problem, outcome, method or organising idea. For fiction, clarify the protagonist, central conflict, setting, stakes and the experience you want the reader to have."] },
      { heading: "Write a one-sentence concept", paragraphs: ["Use a simple working structure: “This book is for [reader] who wants or enjoys [need or interest], and it offers [approach, story or distinctive experience].” This is a planning tool, not necessarily your final marketing description.", "If the sentence becomes long or vague, you may be combining too many audiences, topics or promises. Try narrowing the focus until the central idea is easy to understand."] },
      { heading: "Define scope and boundaries", bullets: ["What must the book include to fulfil its promise?", "What related subjects or storylines are outside its scope?", "What level of detail or reading experience is appropriate?", "What research, interviews, permissions or expert review may be needed?", "What format, approximate length or structure seems realistic at this stage?"] , paragraphs: ["Boundaries protect the project from becoming endless. They also help readers understand what the book does and does not attempt to cover."] },
      { heading: "Check that the concept is coherent", paragraphs: ["Compare the concept with your reader profile and market research. Does the reader have a reason to care? Does the proposed content or story deliver what the concept suggests? Is the project manageable with your time, skills and resources?", "Ask a few suitable readers to explain the concept back to you in their own words. If they consistently misunderstand it, simplify the wording or rethink the focus."] }
    ],
    exercise: { title: "Prepare your book concept brief", instructions: ["Write a one-sentence concept using your intended reader and the central promise or story.", "Write a short paragraph explaining why this book matters to that reader.", "List five things the book must include and three things it will deliberately leave out.", "Describe the intended tone, style and format.", "List the biggest open questions and the next research or planning step for each."], deliverable: "A concise book concept brief that can guide your title, outline and manuscript planning." },
    reflection: ["Could a reader understand what this book is about from your concept statement?", "What will you deliberately exclude to keep the book focused and achievable?"]
  },

  7: {
    introduction: "A strong title attracts attention while setting accurate expectations. A subtitle can add context, clarify the audience or explain the benefit. Together, they should help the right reader understand what kind of book this is without exaggeration or confusion.",
    outcomes: ["Generate several title directions before choosing one.", "Evaluate a title for clarity, memorability and reader fit.", "Use a subtitle to add useful context without making unsupported claims."],
    sections: [
      { heading: "Understand the job of a title", paragraphs: ["A title is one of the first signals a potential reader sees. It should be appropriate to the book’s subject or genre, easy to understand and distinctive enough to remember. It does not need to explain every detail; the cover and description can provide additional context.", "For fiction, consider tone, genre expectations, atmosphere and the central hook. For nonfiction, consider clarity, audience, subject and the outcome or perspective the book offers."] },
      { heading: "Generate and compare options", bullets: ["Write at least 15 rough title ideas without judging them immediately.", "Try descriptive, evocative, question-based and benefit-led approaches where appropriate.", "Say each title aloud and check spelling, pronunciation and likely interpretation.", "Ask a few target readers what they expect from each option.", "Search book catalogues and the wider web for confusingly similar titles or established brands."] , paragraphs: ["A title search is a practical screening step, not legal clearance. Avoid names that could mislead readers or create confusion with another author, series or brand."] },
      { heading: "Use a subtitle with purpose", paragraphs: ["A subtitle can clarify a broad or creative main title. It may identify the topic, audience, approach or scope. It should add information rather than repeat the title in different words.", "Keep it readable at thumbnail size and ensure it accurately reflects the manuscript. Avoid guarantees, unsupported superlatives and keyword stuffing."] },
      { heading: "Check the title against the whole book", paragraphs: ["Compare your preferred title and subtitle with your concept brief and reader profile. Does the title fit the actual content? Does it signal the right genre or subject? Could a reader reasonably misunderstand the promise?", "Before publication, check the current rules of your chosen retailer and seek qualified legal advice if you have concerns about trademarks, brand conflicts or rights."] }
    ],
    exercise: { title: "Create a title shortlist", instructions: ["Generate at least 15 possible main titles.", "Choose your five strongest options and write a possible subtitle for each.", "Score each pair from 1 to 5 for clarity, reader fit, memorability, accuracy and distinctiveness.", "Ask three people who resemble your intended readers what each title suggests.", "Choose a provisional title and list any availability, similarity or legal questions to investigate."], deliverable: "A ranked shortlist of five title-and-subtitle combinations and one provisional choice." },
    reflection: ["Does your preferred title attract the intended reader while accurately representing the book?", "What might someone misunderstand when they see the title without any other context?"]
  },
  8: {
    introduction: "An outline turns your concept into an organised route through the book. It gives you enough structure to begin writing while leaving room for discoveries, stronger examples and creative changes as the manuscript develops.",
    outcomes: ["Choose an outline structure suited to fiction or nonfiction.", "Arrange chapters in a logical and engaging sequence.", "Create a workable chapter plan with a clear purpose for each part."],
    sections: [
      { heading: "Choose a structure that serves the reader", paragraphs: ["Nonfiction structures often move from foundations to practical application, from problem to solution, or through a sequence of steps. A reference guide may be organised by topic. Choose the order that makes the material easiest to understand and use.", "Fiction outlines may follow acts, turning points, character arcs, timelines or interwoven plotlines. Some writers plan in detail; others prefer a lighter outline. The right method is the one that helps you finish a coherent story."] },
      { heading: "Build the book's backbone", paragraphs: ["Start with the beginning, middle and end—or the major parts of a nonfiction argument. Write down the essential stages, ideas or events before dividing them into chapters. Check that each part contributes to the overall reader experience.", "A chapter should have a reason to exist. If two chapters perform the same job, consider combining them. If a chapter tries to do too much, divide it into clearer sections."] },
      { heading: "Plan each chapter", bullets: ["Working chapter title and its main purpose.", "The question, event or idea the chapter addresses.", "Key points, scenes, evidence, examples or research needed.", "How the chapter connects to what comes before and after.", "A clear takeaway, transition or reason to continue reading."] , paragraphs: ["For nonfiction, note where you need reliable sources, expert input or fact-checking. For fiction, track character motivation, conflict, consequences and continuity."] },
      { heading: "Keep the outline flexible", paragraphs: ["An outline is a planning tool, not a contract. You may discover a better order or remove material while drafting. Record major changes and check that the book still fulfils its concept and reader promise.", "Estimate a realistic scope and writing schedule. A manageable outline is more useful than an elaborate plan that delays the manuscript indefinitely."] }
    ],
    exercise: { title: "Draft your book outline", instructions: ["Choose a structure that suits your book and explain why.", "List the major parts or story movements in the order readers will encounter them.", "Create a provisional chapter list with a one-sentence purpose for each chapter.", "Add key examples, scenes, research tasks or sources needed for each chapter.", "Review the sequence and identify missing steps, repetition or sections that seem out of place."], deliverable: "A working table of contents with chapter purposes and a list of research or development tasks." },
    reflection: ["Does the outline take the reader on a clear journey?", "Which chapter is least clear, and what decision would make its purpose stronger?"]
  },
  9: {
    introduction: "Writing the manuscript is where your plan becomes a complete reading experience. A repeatable routine, clear drafting goals and a willingness to revise will help you make steady progress without expecting every first sentence to be perfect.",
    outcomes: ["Set a realistic manuscript-writing routine.", "Use drafting techniques to maintain momentum.", "Track progress while protecting the quality and purpose of the book."],
    sections: [
      { heading: "Set a sustainable writing target", paragraphs: ["Choose a writing frequency and session length that fit your real schedule. A modest, repeatable target is often more useful than an ambitious plan that cannot be maintained. Track time, words, scenes or completed sections—whichever best reflects your work.", "Set a provisional manuscript scope based on the book's purpose and comparable titles, but do not force the writing to meet an arbitrary word count."] },
      { heading: "Separate drafting from editing", paragraphs: ["During an early draft, focus on getting the ideas, scenes or argument onto the page. Mark gaps with notes such as [research needed] or [check timeline] rather than interrupting every paragraph to solve them.", "Editing while drafting is sometimes useful, but constant polishing can slow progress. Experiment with focused drafting sessions followed by separate review sessions."] },
      { heading: "Write with the reader in mind", bullets: ["Use language and explanations appropriate to the intended reader.", "Support nonfiction claims with credible evidence and distinguish fact from opinion or personal experience.", "Give fiction scenes a purpose through character, conflict, change or atmosphere.", "Use examples and transitions to help readers follow the journey.", "Keep a research log and record source details as you work."] , paragraphs: ["Avoid copying material into your manuscript. Quote only when justified, use appropriate attribution and permissions where required, and check the rules that apply to your publication and jurisdiction."] },
      { heading: "Maintain momentum and review progress", paragraphs: ["At the end of each session, write a short note about what comes next. This makes it easier to restart. If you miss a target, adjust the plan rather than treating one difficult week as failure.", "Review the manuscript at planned milestones. Check whether the structure still works, whether the reader promise is being fulfilled and what research or support remains necessary."] }
    ],
    exercise: { title: "Create your manuscript writing plan", instructions: ["Estimate a realistic manuscript scope and a target completion period.", "Choose specific writing days and session lengths for the next two weeks.", "Break your outline into small drafting milestones.", "Create a simple progress log for words, scenes or sections completed.", "Draft the first section or scene without trying to perfect it, then note the next writing action."], deliverable: "A two-week writing schedule, progress tracker and first manuscript draft section." },
    reflection: ["What writing routine can you maintain even during a busy week?", "What usually interrupts your writing, and what practical change could reduce that interruption?"]
  },
  10: {
    introduction: "Editing improves the manuscript's meaning, structure and reading experience. Proofreading then focuses on surface errors. These are different stages, and a polished book usually benefits from more than one kind of review.",
    outcomes: ["Distinguish developmental editing, line or copy editing and proofreading.", "Review a manuscript systematically at different levels.", "Decide when professional editorial help is appropriate."],
    sections: [
      { heading: "Edit in layers", paragraphs: ["Developmental or structural editing considers the big picture: organisation, argument, pacing, plot, character development, completeness and reader expectations. It is usually most useful before sentence-level polishing.", "Line editing improves clarity, flow, tone and expression. Copy editing checks grammar, usage, consistency, facts and style. Proofreading is a final check of the designed or formatted text for remaining typographical and layout errors. Service names can vary, so agree on the exact scope before hiring an editor."] },
      { heading: "Review structure before sentences", bullets: ["Does the book fulfil the promise made by its concept and description?", "Is the order logical, engaging and easy to follow?", "Are there gaps, repeated ideas, unsupported claims or unnecessary sections?", "For fiction, do character choices, motivations, plot events and timelines remain coherent?", "Does each chapter contribute to the whole?"] , paragraphs: ["Consider feedback from suitable beta readers or subject experts. Give reviewers focused questions and make clear whether you want feedback on structure, clarity, accuracy or reader engagement."] },
      { heading: "Check clarity, consistency and accuracy", paragraphs: ["Create a style sheet for spelling choices, names, dates, capitalisation, terminology and formatting conventions. Verify quotations, citations, statistics, permissions and factual claims. For specialist topics, arrange appropriate expert review.", "Read sections aloud or change the format to notice awkward sentences. Automated writing tools can help flag possible issues, but they can miss context and introduce errors. A human author remains responsible for the final text."] },
      { heading: "Know when to hire help", paragraphs: ["A qualified editor can provide an independent perspective and identify issues you may no longer notice after repeated revisions. Compare samples, references, services, timelines and written agreements. Avoid anyone promising guaranteed sales, bestseller status or publication success.", "Budget and schedule for editing before publication. If you cannot hire every service, prioritise the kind of review that addresses the manuscript's greatest risks and arrange a careful final proofread."] }
    ],
    exercise: { title: "Build an editing plan", instructions: ["Read your manuscript or a substantial sample and list the five biggest structural issues.", "Choose the editing stages your book needs and define the scope of each.", "Create a style sheet for names, spelling, terms, dates and formatting.", "Ask two or three suitable readers for focused feedback, or prepare questions for a professional editor.", "Create a correction log and prioritise changes by impact on reader understanding and trust."], deliverable: "An editing plan, initial style sheet and prioritised revision list." },
    reflection: ["Are you polishing sentences before resolving larger structural problems?", "Which part of the manuscript would benefit most from an independent reader or professional review?"]
  },
  11: {
    introduction: "Finalising a manuscript means preparing a complete, consistent and publication-ready source file. It is the handover point between writing and production, where you confirm that the content, permissions and supporting materials are in order.",
    outcomes: ["Complete a final manuscript quality-control review.", "Check permissions, citations and front or back matter.", "Prepare organised files for editing, design and formatting."],
    sections: [
      { heading: "Complete the final content review", paragraphs: ["Confirm that all chapters are present and in the intended order. Check headings, cross-references, tables, images, captions, footnotes and appendices. Remove drafting notes, placeholders and comments that should not appear in the published book.", "For nonfiction, check factual claims, source references and dates. For fiction, review continuity, character names, chronology, point of view and unresolved plot threads."] },
      { heading: "Check rights and permissions", paragraphs: ["Make a record of material you did not create yourself, including photographs, illustrations, charts, long quotations, song lyrics and other third-party content. Determine whether permission, a licence, attribution or another legal basis is required before publication.", "Do not assume that material found online is free to reuse. Keep copies of licences and written permissions, and seek qualified legal guidance where the position is unclear."] },
      { heading: "Prepare the manuscript package", bullets: ["A clean, editable manuscript file with consistent styles and chapter breaks.", "A separate list of images, tables, captions and placement notes, where relevant.", "A source and permissions record.", "Author name, acknowledgements, dedication, foreword or other front matter as applicable.", "Author biography, references, appendices, glossary or resources as appropriate.", "A short handover note describing special formatting or production requirements."] , paragraphs: ["Keep a separate backup and use clear version names and dates. Avoid sending multiple files with unclear labels to editors or designers."] },
      { heading: "Set a production handover standard", paragraphs: ["Agree with your editor, designer or formatter which file format they need and how corrections should be returned. Keep one master manuscript and record approved changes so that later versions do not become confused.", "A final manuscript is not the same as a final printed proof. After layout and cover production, you will still need to inspect the designed files and a physical proof where applicable."] }
    ],
    exercise: { title: "Prepare your manuscript handover checklist", instructions: ["Confirm that all chapters and supporting sections are present and in order.", "Remove placeholders, drafting comments and unresolved editorial notes.", "Review names, dates, references, captions, tables and internal cross-references.", "Complete a permissions and source log for third-party material.", "Save a clean master file, a backup and a short production handover note."], deliverable: "A final manuscript package and a completed pre-production checklist." },
    reflection: ["What could still prevent your manuscript from being safely handed to an editor or designer?", "Have you documented the source and permission status of every third-party item you intend to publish?"]
  },
  12: {
    "introduction": "Choosing how to publish affects control, cost, production, distribution and the work you must manage. This lesson helps you compare routes based on your goals rather than promises or assumptions.",
    "outcomes": [
      "Compare traditional, self-publishing and service-based publishing models.",
      "Identify costs, rights and contract terms to investigate.",
      "Choose a provisional route that fits your book and resources."
    ],
    "sections": [
      {
        "heading": "Understand the main publishing models",
        "paragraphs": [
          "Traditional publishing usually involves a publisher selecting a manuscript or proposal and taking responsibility for agreed production and distribution activities. The process can be selective and slow, and contract terms determine rights, royalties, advances and responsibilities.",
          "Self-publishing means you act as the publisher and coordinate editing, design, formatting, distribution and marketing. You retain more decision-making control, but you also carry the costs and responsibility.",
          "Some businesses describe themselves as hybrid or assisted publishers. Services and standards vary widely. Examine exactly what you are buying and who controls the rights."
        ]
      },
      {
        "heading": "Compare control, cost and support",
        "bullets": [
          "Creative control: who approves the title, cover, edits, price and publication date?",
          "Costs: what is paid upfront, deducted from royalties or charged later?",
          "Rights: which formats, territories, languages and time periods are covered?",
          "Distribution: which retailers, libraries or markets are actually reached?",
          "Support: what editing, design, marketing and reporting services are included?",
          "Exit terms: how can rights or files be recovered if the relationship ends?"
        ]
      },
      {
        "heading": "Evaluate service providers carefully",
        "paragraphs": [
          "Request a written breakdown of deliverables, fees, timelines and revision limits. Ask to see examples of books they have produced and speak with authors where possible. Be cautious of pressure to pay quickly, vague distribution claims, guaranteed bestseller promises or contracts that transfer broad rights without clear value.",
          "A paid service is not automatically a publisher, and a publisher's label does not guarantee quality. Judge the agreement and evidence, not the marketing language."
        ]
      },
      {
        "heading": "Make a decision for this project",
        "paragraphs": [
          "Your best route depends on the book, your desired control, budget, timeline, appetite for business tasks and access to professional support. You can make a provisional choice now and revisit it after researching the next lessons."
        ]
      }
    ],
    "exercise": {
      "title": "Create a publishing-route comparison",
      "instructions": [
        "Write down your top three priorities: for example, control, professional support, speed or low upfront cost.",
        "Compare traditional and self-publishing, plus any assisted service you are considering, against those priorities.",
        "List likely costs, rights questions and services you need to verify.",
        "Write down three questions you would ask any publisher or service provider before signing.",
        "Choose a provisional route and explain what evidence could change your mind."
      ],
      "deliverable": "A one-page publishing route comparison and a list of due-diligence questions."
    },
    "reflection": [
      "Which responsibilities are you willing and able to manage yourself?",
      "What contract term or financial claim would you want an independent professional to review?"
    ]
  },
  13: {
    "introduction": "Copyright, ISBNs and other identifiers are important parts of publishing administration, but they serve different purposes. This lesson introduces the concepts and encourages you to verify the rules for the country and publishing route you choose.",
    "outcomes": [
      "Explain the basic purpose of copyright and an ISBN.",
      "Understand that ISBN requirements and availability vary by country and format.",
      "Prepare a rights and identifier checklist before publication."
    ],
    "sections": [
      {
        "heading": "Understand copyright at a basic level",
        "paragraphs": [
          "Copyright generally protects original expression fixed in a tangible form, such as the wording of a manuscript or original illustrations. It does not normally protect a bare idea, title or general concept. The exact rules, exceptions and registration systems vary by jurisdiction.",
          "In many countries, copyright arises automatically when qualifying work is created; registration may be available or useful for evidence or enforcement but is not universally required. Do not assume that a website's upload terms or a copyright notice replaces legal advice."
        ]
      },
      {
        "heading": "Know what an ISBN does",
        "paragraphs": [
          "An International Standard Book Number is a product identifier used in book supply chains, catalogues and retail systems. It helps identify a particular book edition and format. It is not proof of copyright and does not by itself protect your writing.",
          "ISBN rules differ between national agencies. Some self-publishing services provide a free platform-specific identifier; others allow you to supply your own. Consider imprint details, distribution plans and future control before choosing."
        ]
      },
      {
        "heading": "Check edition and format requirements",
        "bullets": [
          "A paperback, hardcover and eBook may require separate identifiers depending on the national ISBN agency and distribution platform.",
          "A revised edition may need a new ISBN where the changes are substantial under applicable rules.",
          "Some platforms use their own identifiers for digital books, and an ISBN may be optional for particular channels.",
          "An ISBN does not replace barcodes, copyright notices, legal deposit duties or retailer metadata requirements."
        ]
      },
      {
        "heading": "Keep a rights and permissions record",
        "paragraphs": [
          "Record the author or rights holder, collaborators, licences, permissions, image sources and any agreements affecting publication. If you use a pen name, co-author, translator or commissioned illustrator, make ownership and permitted uses clear in writing.",
          "For legal questions about copyright ownership, fair use or fair dealing, public-domain status, contracts or international rights, consult the relevant official authority or a qualified lawyer in the applicable jurisdiction."
        ]
      }
    ],
    "exercise": {
      "title": "Prepare your rights and ISBN checklist",
      "instructions": [
        "Identify the country where you expect to publish or obtain an ISBN.",
        "List every contributor and any third-party text, image, chart or other material in your manuscript.",
        "Record the formats and distribution channels you are considering.",
        "Find the official national ISBN agency or platform guidance and note the requirements that apply.",
        "Write down unresolved copyright, permission, co-author or contract questions for qualified advice."
      ],
      "deliverable": "A rights-and-permissions register and a country-specific ISBN research checklist."
    },
    "reflection": [
      "Can you identify who owns or has permission to use every element in your book?",
      "Have you checked official requirements rather than relying on advice intended for another country?"
    ]
  },
  14: {
    "introduction": "A book cover is a key part of how readers recognise a book and decide whether to investigate it. A strong cover communicates genre, tone and subject clearly while remaining readable at both full size and thumbnail size.",
    "outcomes": [
      "Identify the core jobs of a front cover, spine and back cover.",
      "Develop a clear visual brief for a designer.",
      "Review cover concepts for readability, genre fit and technical requirements."
    ],
    "sections": [
      {
        "heading": "Treat the cover as reader communication",
        "paragraphs": [
          "The cover should signal what kind of reading experience the book offers. Readers use visual cues to recognise genre, subject, tone and intended audience. A beautiful design can still be ineffective if it sends the wrong signal or hides the title at small sizes.",
          "Study current books aimed at a similar readership to understand conventions. Use this research to brief an original design, not to copy another cover's composition, artwork or branding."
        ]
      },
      {
        "heading": "Prepare a useful design brief",
        "bullets": [
          "Working title, subtitle and author name, with exact spelling.",
          "Genre or subject and the primary reader.",
          "The central promise, mood or story atmosphere.",
          "Comparable covers and what you like or dislike about their visual approach.",
          "Required formats, trim size, page count estimate and publishing platform.",
          "Any imagery, colours, symbols or topics that must be included or avoided."
        ]
      },
      {
        "heading": "Understand the complete cover",
        "paragraphs": [
          "An eBook cover is usually a front-cover image. Print editions may need a full wrap including front, spine and back. Spine width depends on production specifications such as page count, paper and binding, so it should be finalised using the printer or platform's current template.",
          "Back-cover copy, author biography, barcode area and publisher marks may have specific placement requirements. Confirm the platform's current dimensions, bleed, resolution, file type and safe zones before approving final artwork."
        ]
      },
      {
        "heading": "Review and approve professionally",
        "paragraphs": [
          "Check title and author readability at thumbnail size, contrast, visual hierarchy, genre fit, spelling and image quality. Confirm that the designer has appropriate commercial rights for fonts, stock images and illustrations, and obtain a written agreement covering the files and uses you need.",
          "Request a proof at actual size where possible. Do not approve a print cover based only on a screen preview; check trim, bleed, spine and back-cover layout against the final production template."
        ]
      }
    ],
    "exercise": {
      "title": "Write your cover design brief",
      "instructions": [
        "Describe your book's reader, genre and central promise in a few sentences.",
        "Collect five comparable covers and note the visual conventions they share.",
        "Choose three visual directions that could suit your book without copying existing artwork.",
        "Write a one-page brief including title, subtitle, author name, format and design requirements.",
        "Create a review checklist for thumbnail readability, spelling, rights and print specifications."
      ],
      "deliverable": "A designer-ready cover brief and a practical cover approval checklist."
    },
    "reflection": [
      "Would a reader understand the likely genre or subject from your cover at a small size?",
      "Have you verified the image and font rights for the intended commercial use?"
    ]
  },
  15: {
    "introduction": "Interior formatting turns your edited manuscript into a readable, professional book file. Print and digital editions have different technical and reading requirements, so formatting should be planned around the formats and platforms you intend to use.",
    "outcomes": [
      "Distinguish print layout from eBook formatting.",
      "Prepare a clean manuscript for formatting.",
      "Check an interior proof for consistency, readability and production errors."
    ],
    "sections": [
      {
        "heading": "Prepare before formatting",
        "paragraphs": [
          "Formatting works best after major editing is complete. Use consistent paragraph and heading styles, clear chapter breaks and properly managed footnotes, tables and images. Remove unnecessary spaces, manual line breaks and inconsistent styling that can create layout problems.",
          "Keep a clean master manuscript separate from the formatted output. Agree with your formatter on the file types, revision process and who is responsible for correcting layout issues."
        ]
      },
      {
        "heading": "Understand print layout",
        "paragraphs": [
          "Print books use a selected trim size, margins, gutters, page numbers, running heads and typography. The inside margin must allow for binding, while images and elements near page edges may require bleed. Requirements depend on the printer, binding and book specifications.",
          "Front matter, chapter openings, headings, tables, references and back matter should follow a consistent design system. Check widows, orphans, awkward page breaks, blank pages and image resolution."
        ]
      },
      {
        "heading": "Understand eBook formatting",
        "paragraphs": [
          "Reflowable eBooks adapt text to different screen sizes and reader settings. They need a logical heading structure, navigable table of contents, accessible text and well-behaved images. Fixed-layout eBooks are appropriate for some highly visual books but are less flexible for ordinary text reading.",
          "Do not assume a print PDF is a suitable eBook file. Use the formats accepted by your chosen retailer or distributor and validate the exported file in relevant preview tools."
        ]
      },
      {
        "heading": "Proof the actual output",
        "bullets": [
          "Check chapter order, headings, page numbers and table of contents links.",
          "Inspect images, captions, tables, footnotes and special characters.",
          "Review margins, gutters, bleed and page breaks in print proofs.",
          "Test eBook navigation and appearance on more than one screen size where possible.",
          "Check accessibility basics such as meaningful heading order and readable contrast.",
          "Correct errors in the source and regenerate the final output rather than patching multiple inconsistent files."
        ]
      }
    ],
    "exercise": {
      "title": "Create an interior formatting specification",
      "instructions": [
        "Choose the formats you intend to publish and list the platforms you are considering.",
        "Select a provisional print trim size if relevant, then verify current platform specifications.",
        "Prepare a clean sample chapter using consistent heading and paragraph styles.",
        "Write a formatting brief covering fonts, chapter openings, images, tables and navigation.",
        "Create a proofing checklist and record issues found in a sample export."
      ],
      "deliverable": "A formatting brief, clean sample chapter and print/eBook proofing checklist."
    },
    "reflection": [
      "Are your source files clean enough that another person can format them reliably?",
      "Have you checked the final output in the format and preview environment readers will use?"
    ]
  },
  16: {
    "introduction": "A book description helps a potential reader understand what the book offers and decide whether it is right for them. It should be accurate, engaging and focused on the reader—not a list of vague claims or exaggerated promises.",
    "outcomes": [
      "Identify the key elements of an effective book description.",
      "Write copy that fits fiction or nonfiction expectations.",
      "Edit the description for clarity, accuracy and reader relevance."
    ],
    "sections": [
      {
        "heading": "Understand the description's purpose",
        "paragraphs": [
          "The description is a sales and discovery asset. It should quickly establish the book's subject or story, identify the likely reader and communicate a reason to keep reading or explore the sample. It must match the actual contents and the cover's promise.",
          "Avoid unsupported superlatives, guaranteed outcomes, misleading comparisons and claims that the book cannot substantiate. Trust is more valuable than inflated copy."
        ]
      },
      {
        "heading": "Structure nonfiction copy",
        "bullets": [
          "Open with a recognisable problem, question, goal or situation faced by the intended reader.",
          "Explain what the book covers and how its approach is useful or distinctive.",
          "Mention relevant features such as exercises, examples or step-by-step guidance only if they are genuinely included.",
          "Set realistic expectations about who will benefit and what the book does not attempt to cover.",
          "Close with a clear invitation to explore the book."
        ]
      },
      {
        "heading": "Structure fiction copy",
        "paragraphs": [
          "Introduce the protagonist, setting or situation and the central disruption or conflict. Establish the stakes and tone without summarising every plot event. Leave the reader with a compelling question or tension, and avoid spoilers that weaken the reading experience.",
          "Use language and genre signals that match the story. A romance, thriller, fantasy novel and literary novel may need different emphasis, but each should make the premise and emotional promise clear."
        ]
      },
      {
        "heading": "Edit for platform and reader",
        "paragraphs": [
          "Lead with the strongest relevant information because readers may see only the opening lines in some contexts. Use short paragraphs and formatting supported by the retailer. Check character limits and metadata rules on the specific platform; these can change.",
          "Read the description beside the cover and title. Ask whether the three elements tell a consistent story about the book. Invite a few target readers to explain what they think the book is about after reading the copy."
        ]
      }
    ],
    "exercise": {
      "title": "Draft and test your book description",
      "instructions": [
        "Write a one-sentence summary of the book's central promise or premise.",
        "Draft a short opening that speaks to the intended reader.",
        "Add the main benefits or story stakes without listing every chapter or revealing major spoilers.",
        "Write a closing invitation and remove unsupported claims or generic hype.",
        "Ask two target readers what they expect from the book after reading the draft, then revise any mismatch."
      ],
      "deliverable": "A polished first book description and notes from a simple reader-comprehension test."
    },
    "reflection": [
      "Does your description make the right reader curious while accurately representing the book?",
      "Which sentence is doing the most useful work, and which sentence could be removed?"
    ]
  },
  17: {
    "introduction": "Keywords and categories help readers and retailers understand where your book belongs. Accurate metadata supports discovery, but does not guarantee rankings or sales.",
    "outcomes": [
      "Explain the role of book metadata.",
      "Research phrases readers use.",
      "Select accurate keywords and categories."
    ],
    "sections": [
      {
        "heading": "Understand metadata",
        "paragraphs": [
          "Metadata includes title, subtitle, author, description, language, format, publication date, identifiers, keywords and subject categories. Retailers use it to organise listings and help readers decide whether a book is relevant.",
          "Keep metadata consistent with the actual book. Misleading keywords or categories can frustrate readers and breach platform rules."
        ]
      },
      {
        "heading": "Research reader language",
        "bullets": [
          "Write phrases a target reader might use for the topic, genre, problem or experience.",
          "Review retailer suggestions, comparable descriptions and reader questions.",
          "Separate broad topics from specific search intent.",
          "Prioritise relevance over popularity and record when you researched each phrase."
        ],
        "paragraphs": [
          "Nonfiction readers may search by problem, skill or experience level. Fiction readers may search by genre, subgenre, themes and tone. Think like the reader rather than stuffing a listing with unrelated terms."
        ]
      },
      {
        "heading": "Choose relevant categories",
        "paragraphs": [
          "Select the closest accurate categories offered by the platform. A relevant category helps the right reader find the book; an unrelated category chosen only to chase rankings is misleading. Category systems and selection limits can change, so consult current platform instructions."
        ]
      },
      {
        "heading": "Keep details consistent",
        "paragraphs": [
          "Check spelling, author name, series, edition, language and format. Ensure keywords and categories are supported by the book's content. Avoid competitor names, unrelated popular terms and prohibited promotional wording."
        ]
      }
    ],
    "exercise": {
      "title": "Build a metadata research sheet",
      "instructions": [
        "Describe your book and intended reader in plain language.",
        "List at least 15 phrases readers might use to find it.",
        "Group phrases by topic, reader level, problem, genre or theme.",
        "Review current metadata rules for your intended platform.",
        "Choose provisional keywords and categories and explain their relevance."
      ],
      "deliverable": "A metadata worksheet with reader phrases, provisional keywords, categories and platform notes."
    },
    "reflection": [
      "Would a reader searching these terms genuinely expect your book?",
      "Which choices are supported by evidence and which are guesses?"
    ]
  },
  18: {
    "introduction": "Pricing affects reader expectations and the amount an author may receive per sale. A sound price considers format, comparable books, production costs, platform terms and your publishing goals.",
    "outcomes": [
      "Identify factors that influence book pricing.",
      "Distinguish list price from royalties and net proceeds.",
      "Build a provisional pricing approach."
    ],
    "sections": [
      {
        "heading": "Start with the reader and book",
        "paragraphs": [
          "Consider length, format, subject, production quality, audience and the experience offered. Compare books serving a similar reader and purpose rather than choosing the cheapest or most expensive title in a broad category.",
          "A short guide, illustrated reference, specialist textbook and novel have different reader expectations and production economics."
        ]
      },
      {
        "heading": "Understand the money behind a sale",
        "paragraphs": [
          "The list price is not necessarily the amount the author receives. Retailer terms may involve royalty rates, printing or delivery costs, taxes, discounts, currency conversion and other adjustments. Calculations vary by platform, territory, format and agreement.",
          "Use the current official royalty or printing calculator. Model likely proceeds for each relevant market rather than relying on a headline percentage."
        ]
      },
      {
        "heading": "Plan a sustainable price",
        "bullets": [
          "Set a regular price that fits reader expectations and your goals.",
          "Compare relevant titles in the same market and format.",
          "Model print production costs and estimated proceeds.",
          "Check whether temporary launch discounts are permitted.",
          "Avoid assuming low prices create demand or high prices prove quality.",
          "Review the price when costs or platform terms change."
        ]
      },
      {
        "heading": "Make a responsible decision",
        "paragraphs": [
          "Treat early estimates as scenarios, not sales forecasts. Avoid basing financial decisions on guaranteed outcomes. Keep flexibility to revise pricing when real reader response becomes available."
        ]
      }
    ],
    "exercise": {
      "title": "Create a pricing worksheet",
      "instructions": [
        "List formats and territories you may sell in.",
        "Research comparable books and record current prices.",
        "Use official platform tools to estimate proceeds at several prices.",
        "Record costs, assumptions, taxes and deductions to verify.",
        "Choose a provisional range and explain what evidence could change it."
      ],
      "deliverable": "A pricing worksheet with comparable titles, price scenarios and unresolved assumptions."
    },
    "reflection": [
      "Are you confusing retail price with the amount you receive?",
      "What makes your proposed price fair to the intended reader?"
    ]
  },
  19: {
    "introduction": "Amazon Kindle Direct Publishing is one route for independently publishing eligible eBooks and print books. This lesson explains the general workflow; verify current requirements in your own KDP account before submission.",
    "outcomes": [
      "Understand the broad KDP workflow.",
      "Prepare files and listing information.",
      "Recognise rights, quality and account responsibilities."
    ],
    "sections": [
      {
        "heading": "Understand KDP",
        "paragraphs": [
          "KDP offers tools for eligible Kindle eBooks and print-on-demand paperbacks and hardcovers in supported markets. Authors provide content, cover and listing details and must have the rights to publish the material.",
          "Features, file requirements, territories and royalty terms can change. Current KDP help pages and your account are the final authority."
        ]
      },
      {
        "heading": "Prepare your materials",
        "bullets": [
          "A final, proofread manuscript in a supported format.",
          "A cover file meeting current specifications.",
          "Accurate title, subtitle, author, series and edition details.",
          "A clear description, relevant keywords and categories.",
          "ISBN or platform identifier decisions for print, where applicable.",
          "Rights confirmation, permissions and required account information."
        ]
      },
      {
        "heading": "Complete and preview the listing",
        "paragraphs": [
          "Follow the current book setup workflow. Enter details consistently, select only territories and rights you control, upload the correct manuscript and cover, and inspect the platform preview carefully.",
          "Check chapter order, margins, page breaks, images, cover alignment and warnings. Correct the source files and upload revised versions when needed."
        ]
      },
      {
        "heading": "Review publication responsibilities",
        "paragraphs": [
          "Before submitting, review description, price, territories, formats and preview. Review timing and availability are controlled by the platform and are not guaranteed to be instant.",
          "After publication, monitor the listing, order a proof where appropriate, correct errors and keep source files and rights records organised. Never use fake reviews or unauthorised content."
        ]
      }
    ],
    "exercise": {
      "title": "Prepare a KDP readiness checklist",
      "instructions": [
        "Read current official KDP guidance for your chosen format.",
        "Gather manuscript, cover and metadata files.",
        "Confirm rights and document permissions.",
        "Prepare a draft listing worksheet with description, keywords, categories, territories and price assumptions.",
        "Use the official previewer or sample workflow to identify checks required before submission."
      ],
      "deliverable": "A KDP readiness checklist and draft listing worksheet; publishing immediately is not required."
    },
    "reflection": [
      "Have you checked current official requirements for your format?",
      "What could cause a listing to be rejected, delayed or misleading?"
    ]
  },
  20: {
    "introduction": "Books can be distributed through retailers, aggregators and direct-sales channels. The right mix depends on audience, formats, territory, control and provider terms.",
    "outcomes": [
      "Distinguish direct retailer publishing from aggregator distribution.",
      "Compare reach, fees, royalties and control.",
      "Plan a manageable distribution approach."
    ],
    "sections": [
      {
        "heading": "Understand channel types",
        "paragraphs": [
          "Some services publish directly to a retailer. Aggregators distribute eligible titles to multiple retailers, libraries or subscription services. Direct sales through your website can offer more customer relationship control but require payment, delivery, customer service and legal compliance.",
          "Print-on-demand produces copies after orders. Other print routes may require inventory, storage and fulfilment. eBook, print and audiobook channels have different providers and file specifications."
        ]
      },
      {
        "heading": "Compare important terms",
        "bullets": [
          "Retailer and territory coverage.",
          "Formats supported and print or library distribution.",
          "Royalty calculations, fees, discounts and payment thresholds.",
          "Exclusivity or promotional programme restrictions.",
          "Control over price, metadata, updates and withdrawal.",
          "Reporting, customer support and file requirements."
        ]
      },
      {
        "heading": "Avoid exclusivity conflicts",
        "paragraphs": [
          "Some programmes require exclusivity for a format, territory or promotional period. Read current terms before distributing the same edition elsewhere. Record which edition is available through each service and the terms accepted."
        ]
      },
      {
        "heading": "Choose a simple channel strategy",
        "paragraphs": [
          "Start with a manageable number of channels where your readers shop and that you can support. Expand when there is a clear reason. For print, confirm who handles printing, returns and shipping. For direct sales, check consumer protection, tax, privacy and digital-content rules in your markets."
        ]
      }
    ],
    "exercise": {
      "title": "Create a distribution comparison",
      "instructions": [
        "List intended formats.",
        "Identify two or three relevant retailers or distribution services.",
        "Compare coverage, fees, royalties, exclusivity and file requirements using official documentation.",
        "Record restrictions that may prevent multi-channel distribution.",
        "Choose a starting plan and a date to review it."
      ],
      "deliverable": "A distribution comparison and provisional channel plan."
    },
    "reflection": [
      "Does each channel reach a real audience you want to serve?",
      "Have you checked exclusivity and withdrawal terms?"
    ]
  },
  21: {
    "introduction": "An author brand is the consistent identity and experience readers associate with your work. It helps the right audience recognise your books without requiring an artificial persona.",
    "outcomes": [
      "Define an authentic author identity.",
      "Align your message with your books and readers.",
      "Create consistent brand elements across reader touchpoints."
    ],
    "sections": [
      {
        "heading": "Define your author identity",
        "paragraphs": [
          "Your identity may include your name or pen name, genres or subjects, voice, values, visual style and the experience readers can expect. It helps readers understand the connection between you and your work.",
          "Begin with the reader: what helps the intended audience recognise your work and decide whether it is relevant? Avoid unsupported credentials or claims."
        ]
      },
      {
        "heading": "Create a clear author message",
        "bullets": [
          "Who you write for or what kind of stories or knowledge you offer.",
          "Subjects, themes or genres connecting your work.",
          "What makes your perspective meaningful to readers.",
          "A short, accurate author biography.",
          "A consistent name, profile image or visual direction where appropriate."
        ]
      },
      {
        "heading": "Build consistency with flexibility",
        "paragraphs": [
          "Use consistent author-name spelling, biography and links across your website, retailer pages, newsletters and social profiles. A simple visual style can help recognition, but clarity and authenticity matter more than elaborate design.",
          "If you write unrelated genres or use pen names, consider whether separate identities would make expectations clearer. Weigh audience overlap, privacy and the work of maintaining multiple profiles."
        ]
      },
      {
        "heading": "Protect trust and boundaries",
        "paragraphs": [
          "Be honest about qualifications, endorsements and reader results. Respect privacy, obtain permission for images and testimonials, and avoid fake followers, fake reviews or manipulative engagement. Decide what personal information you want to share publicly."
        ]
      }
    ],
    "exercise": {
      "title": "Write your author brand foundation",
      "instructions": [
        "Write one sentence describing the books or reading experiences you offer.",
        "Describe your primary reader and what they should recognise about your work.",
        "Draft an accurate, relevant author biography.",
        "Choose three brand qualities and explain how they appear in your writing and communication.",
        "List profiles and pages that should use consistent names, biography and links."
      ],
      "deliverable": "A one-page author brand guide with positioning, reader, biography and consistency checklist."
    },
    "reflection": [
      "Does your identity help readers understand your work?",
      "Which personal boundaries should you maintain as your public presence grows?"
    ]
  },
  22: {
    "introduction": "An author website gives readers a stable place to learn about you, discover your books and stay connected. It should be useful, trustworthy, accessible and maintained.",
    "outcomes": [
      "Identify essential author website pages and functions.",
      "Plan clear navigation and reader-focused content.",
      "Understand basic privacy, accessibility, security and maintenance."
    ],
    "sections": [
      {
        "heading": "Decide what the website should do",
        "paragraphs": [
          "A website can introduce you and your books, provide samples or resources, share events, collect newsletter subscriptions and link to legitimate retailers. Choose a few clear goals rather than adding features without a purpose.",
          "A focused site with a strong book page and a way to receive updates may be more effective than a large site with empty sections."
        ]
      },
      {
        "heading": "Plan essential pages",
        "bullets": [
          "Home: a clear introduction and route to your current book or main action.",
          "About: an accurate author biography and relevant background.",
          "Books: descriptions, formats, cover images, samples and legitimate purchase links.",
          "Contact: a suitable professional contact method or protected form.",
          "News or events: only if you can keep information current.",
          "Privacy information: explain data collection and use where required."
        ]
      },
      {
        "heading": "Make the reader journey simple",
        "paragraphs": [
          "Use clear navigation, readable text, mobile-friendly layouts, descriptive page titles and meaningful links. Provide appropriate image text alternatives, labelled forms, keyboard navigation and sufficient contrast.",
          "Each book page should explain what the book is, who it is for and where readers can learn more or buy it. Test links and forms on desktop and mobile."
        ]
      },
      {
        "heading": "Protect and maintain the site",
        "paragraphs": [
          "Use reputable hosting, unique passwords and multi-factor authentication. Update software, maintain backups and limit access. Collect only necessary personal data and follow appropriate privacy and consent practices.",
          "A template policy does not automatically make a website legally compliant. Requirements depend on location, visitors, analytics, cookies, email tools and sales. Seek qualified advice where needed and review the site regularly."
        ]
      }
    ],
    "exercise": {
      "title": "Create your author website blueprint",
      "instructions": [
        "Choose the website's main purpose and one action for readers.",
        "Sketch navigation using the essential pages.",
        "Draft a homepage introduction and book-page outline.",
        "List forms, analytics, cookies, mailing-list tools and data collected.",
        "Create a launch checklist for mobile layout, accessibility, privacy, security, backups and links."
      ],
      "deliverable": "A sitemap, homepage message, book-page outline and pre-launch checklist."
    },
    "reflection": [
      "Can a first-time visitor quickly understand who you are and where to go?",
      "What personal data will the site collect and how will you protect it?"
    ]
  }
};