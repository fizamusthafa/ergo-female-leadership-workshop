// All workshop content in one place. Pages render from this file.
// Figures quoted here come from input/fact-sheet.md (illustrative, not ERGO results).
window.ADV = window.ADV || {};

ADV.config = {
  // Facilitator: paste the link to a shared Form or Whiteboard for the finale wall.
  wallUrl: '',
  // Floating Copilot companion (tips and radio messages). Parked for now; set to true to bring it back.
  buddy: false,
  totalMinutes: 45,
  chapters: [
    { from: 0, to: 5, title: 'Find your trail', note: 'Intro, quiz and reveal. Group the room by trail.' },
    { from: 5, to: 8, title: 'Anatomy of a skill', note: 'Everyone scrolls the anatomy page.' },
    { from: 8, to: 38, title: 'On the trail', note: 'First: pack your gear (add the skills, 2 min). Then core steps 1-4. Step 5 and side quests for fast finishers.' },
    { from: 38, to: 45, title: 'Finale', note: 'Live board rehearsal, one Excel scenario, and "what skill would your team need?"' },
  ],
};

ADV.label = 'Illustrative figures for training purposes, not ERGO results';

ADV.skills = {
  'ergo-brand': { app: 'PowerPoint', title: 'ERGO Brand', what: 'Restyles any slide into ERGO board style: message headlines, one red accent, flat charts. Never changes a figure.', trigger: '"make these slides board-ready"' },
  'ergo-board-pack': { app: 'PowerPoint', title: 'Board Pack', what: 'Turns raw notes into five board slides: message, KPI strip, what changed, risks, decision. Speaker notes included.', trigger: '"board pack", "what we need from the board"' },
  'ergo-board-sparring': { app: 'PowerPoint', title: 'Board Sparring', what: 'The Chair, the CFO, a supervisor and the works council each ask their toughest question, with an answer from your deck.', trigger: '"rehearse", "what will they ask"' },
  'ergo-data-controls': { app: 'Excel', title: 'Data Controls', what: 'Checks a loan tape before any model runs: duplicates, blanks, bad dates, numbers stored as text, mismatched collateral. Writes a Controls_Audit with a readiness verdict.', trigger: '"check this loan tape", "is it ready"' },
  'ergo-ifrs9-ecl': { app: 'Excel', title: 'IFRS 9 ECL', what: 'Builds a staged, scenario-weighted ECL with live formulas, collateral stress and a plain-language assumptions sheet.', trigger: '"calculate the ECL"' },
  'ergo-ecl-explainability': { app: 'Excel', title: 'ECL Explainability', what: 'Turns the ECL into a committee story: stage view, driver bridge, waterfall and “What changed and why”.', trigger: '"explain this ECL", "risk committee"' },
  'my-voice': { app: 'Any', title: 'My Voice', what: 'Your own writing style as rules. You build this one yourself in a side quest.', trigger: '"in my voice"', sideQuest: true },
};

ADV.badges = {
  'clippy': { icon: '📎', title: "Clippy's friend", what: 'You met Clippy. Hands up in the room!' },
  'haiku-summary': { icon: '🌸', title: 'Haiku summary', what: 'A hidden skill: any file, summarised in 17 syllables.', download: 'downloads/haiku-summary.zip' },
  'all-quests': { icon: '🏔️', title: 'Summit', what: 'Every side quest on your trail completed.' },
  'souvenir': { icon: '🎁', title: 'Souvenir', what: 'You brought back a sentence from Copilot.' },
};

ADV.personas = {
  ppt: { name: 'Storyteller', line: 'You turn complexity into one clear message.' },
  xls: { name: 'Analyst', line: 'You spot what is off in the numbers before anyone else.' },
  m365: { name: 'Orchestrator', line: 'You keep twelve workstreams moving and everyone aligned.' },
};

ADV.quiz = [
  { q: 'Your Sunday-evening dread is…', a: [['ppt', 'a deck for Monday’s board'], ['xls', 'a spreadsheet nobody has checked'], ['m365', 'an inbox with 214 unread']] },
  { q: 'In meetings you’re the one who…', a: [['ppt', 'tells the story'], ['xls', 'asks “what do the numbers say?”'], ['m365', 'makes sure everyone’s aligned afterwards']] },
  { q: 'Your superpower is…', a: [['ppt', 'turning complexity into one clear message'], ['xls', 'spotting what’s off in the numbers'], ['m365', 'keeping twelve workstreams moving']] },
];

ADV.trails = {
  ppt: {
    app: 'PowerPoint', name: 'The Board Meeting', persona: 'Storyteller',
    mission: 'The board meets next week on Q3. Walk in prepared.',
    kit: { file: 'downloads/powerpoint-kit.zip', size: 'about 0.6 MB', contents: ['messy-draft.pptx', 'board-pack-start.pptx', 'cfo-raw-notes.docx', 'q3-figures.xlsx', 'ergo-board-template.potx', '3 skill ZIPs'] },
    setup: [
      'Download the kit and unzip it once. Keep the three files inside <code>skills/</code> zipped.',
      'Upload <code>messy-draft.pptx</code>, <code>board-pack-start.pptx</code> and <code>cfo-raw-notes.docx</code> to your OneDrive.',
    ],
    pack: {
      intro: 'Three skills, about two minutes. Without them Copilot still helps, but it won’t work the ERGO way.',
      files: [['ergo-brand', 'downloads/ergo-brand.zip'], ['ergo-board-pack', 'downloads/ergo-board-pack.zip'], ['ergo-board-sparring', 'downloads/ergo-board-sparring.zip']],
      fileNote: 'Keep them zipped. PowerPoint reads the ZIP directly.',
      steps: [
        { text: 'Open <code>messy-draft.pptx</code> in PowerPoint for the web and select <b>Copilot</b>. In the Copilot pane select <b>…</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b>.', gif: 'assets/media/ppt-skill-add.gif' },
        { text: 'Select <b>Upload</b> and choose <code>ergo-brand.zip</code>. Repeat for <code>ergo-board-pack.zip</code> and <code>ergo-board-sparring.zip</code>.', gif: 'assets/media/ppt-skill-upload.gif' },
        { text: 'Make sure <b>Custom skills</b> and all three skills are switched on. Select <b>Refresh</b> if one is missing.' },
      ],
      gifNote: 'Recorded in rehearsal with an earlier workshop skill. The clicks are the same.',
    },
    steps: [
      {
        title: 'The brand makeover', goal: 'See what a skill does in one move.', time: 5,
        open: 'messy-draft.pptx', prompt: 'Make these slides board-ready.', skills: ['ergo-brand'],
        wow: 'Same facts, now in ERGO style: message headlines, clean layout, one red accent and a proper chart.',
        media: { type: 'compare', before: 'assets/media/messy-draft-s2.jpg', after: 'assets/media/ppt-step1-s2.jpg', caption: 'Drag to compare. Before: the messy draft. After: with the ERGO Brand skill.' },
        yours: { text: 'Open <b>Custom skills</b>, select <b>ergo-brand</b> and change “Maximum 3 bullets” to “Maximum 2 bullets”. Ask again and watch the slides follow your rule.', prompt: 'Make these slides board-ready.' },
        check: ['Every number is unchanged', 'Titles are full sentences that say “so what”', 'One red accent per slide; the 3D chart is now flat'],
        fallback: { file: 'downloads/fallback/ppt-step1.pptx', images: ['assets/media/ppt-step1-s1.jpg', 'assets/media/ppt-step1-s2.jpg', 'assets/media/ppt-step1-s3.jpg'] },
      },
      {
        title: 'Raw notes → board pack', goal: 'Watch a skill carry a whole format.', time: 8,
        open: 'board-pack-start.pptx, with cfo-raw-notes.docx attached', prompt: 'Turn the CFO’s notes into a board pack for next week’s meeting.', skills: ['ergo-board-pack', 'ergo-brand'],
        how: 'In the Copilot pane, select <b>+</b> (Add) and attach <code>cfo-raw-notes.docx</code> from OneDrive before you send the prompt.',
        wow: 'Three pages of messy notes become a five-slide ERGO board deck, with speaker notes, in about a minute.',
        media: { type: 'morph', notes: ['assets/media/cfo-notes-p1.jpg', 'assets/media/cfo-notes-p2.jpg', 'assets/media/cfo-notes-p3.jpg'], slides: ['assets/media/ppt-step2-s1.jpg', 'assets/media/ppt-step2-s2.jpg', 'assets/media/ppt-step2-s3.jpg', 'assets/media/ppt-step2-s4.jpg', 'assets/media/ppt-step2-s5.jpg'], caption: 'Three pages of notes in, five board slides out.' },
        yours: null,
        check: ['Five slides: message, KPI strip, what changed, risks and outlook, decision', 'The KPI strip compares with plan and prior year', 'Each slide has speaker notes with a source line'],
        fallback: { file: 'downloads/fallback/ppt-step2.pptx', images: ['assets/media/ppt-step2-s1.jpg', 'assets/media/ppt-step2-s2.jpg', 'assets/media/ppt-step2-s3.jpg', 'assets/media/ppt-step2-s4.jpg', 'assets/media/ppt-step2-s5.jpg'] },
      },
      {
        title: 'Sharpen the story', goal: 'Make the deck argue something.', time: 6,
        open: 'your new board pack', prompt: 'What’s the one message of this deck? Make sure the last slide says exactly what we need from the board.', skills: ['ergo-board-pack'],
        wow: 'One sentence the whole room can repeat, and a decision slide that can be read in five seconds.',
        media: { type: 'compare', before: 'assets/media/ppt-step2-s5.jpg', after: 'assets/media/ppt-step3-s5.jpg', caption: 'Drag to compare the decision slide before and after sharpening.' },
        yours: { text: 'Ask for the same message for a different audience.', prompt: 'Now give me the same message for our claims teams, in two sentences.' },
        check: ['A one-sentence message of 20 words or fewer', 'The last slide starts with “Decision needed:”', 'The ask, amount, timing and recommendation are all visible'],
        fallback: { file: 'downloads/fallback/ppt-step3.pptx', images: ['assets/media/ppt-step3-s1.jpg', 'assets/media/ppt-step3-s5.jpg'] },
      },
      {
        title: 'Boardroom rehearsal', goal: 'Walk in feeling prepared.', time: 8,
        open: 'your sharpened board pack', prompt: 'Rehearse the board meeting with me. What will they ask?', skills: ['ergo-board-sparring'],
        wow: 'The Chair, the CFO, a supervisor and the works council take their seats. Each asks the hardest fair question, with an answer built from your deck.',
        media: { type: 'panel', image: 'assets/media/ppt-step4-s6.jpg', caption: 'The panel takes its seats.' },
        yours: { text: 'Add a persona of your choice to the panel.', prompt: 'Add an activist investor to the panel.' },
        check: ['Four people, four questions', 'Every suggested answer points to a slide', 'One question to practise out loud first'],
        fallback: { file: 'downloads/fallback/ppt-step4.pptx', images: ['assets/media/ppt-step4-s6.jpg'] },
      },
      {
        title: 'Leave-behind', goal: 'Take something home.', time: 4, optional: true,
        open: 'your board pack', prompt: 'Give me a cue card from my speaker notes and a 60-second version I can say out loud.', skills: ['ergo-board-pack'],
        wow: 'A cue card slide with the three numbers to remember, and a script you can say in one minute.',
        media: { type: 'image', image: 'assets/media/ppt-step5-s7.jpg', caption: 'The cue card. The 60-second script is in its speaker notes.' },
        yours: null,
        check: ['Five one-line messages', 'Three numbers to remember', 'About 150 words to say out loud, ending with the ask'],
        fallback: { file: 'downloads/fallback/ppt-step5.pptx', images: ['assets/media/ppt-step5-s7.jpg'] },
      },
    ],
    sideQuests: [
      { id: 'ppt-persona', title: 'A tougher panel', time: 3, prompt: 'Add a journalist and an activist investor to the rehearsal.', what: 'Two more seats at the table, same rules.' },
      { id: 'ppt-german', title: 'Auf Deutsch, bitte', time: 4, prompt: 'Make a German version of this board pack for the supervisory board.', what: 'The same pack, ready for German-speaking board members.' },
      { id: 'ppt-townhall', title: 'Town hall', time: 4, prompt: 'Turn this board pack into a three-minute town-hall talk for employees.', what: 'Same facts, different audience, different tone.' },
      { id: 'my-voice', title: 'My Voice', time: 8, voice: true, what: 'Teach Copilot how you write, then run your speaker notes through it.' },
    ],
  },
  xls: {
    app: 'Excel', name: 'The Numbers Room', persona: 'Analyst',
    mission: 'The risk committee meets on Thursday. Bring an expected credit loss (ECL) number you can defend.',
    kit: { file: 'downloads/excel-kit.zip', size: 'about 25 KB', contents: ['ecl-loan-book.xlsx', '3 skill folders'] },
    setup: [
      'Download the kit and unzip it. Inside you’ll find <code>ecl-loan-book.xlsx</code>, a fictional book of 60 commercial real estate and residential loans, and a <code>skills</code> folder.',
      'Upload <code>ecl-loan-book.xlsx</code> to your OneDrive.',
    ],
    pack: {
      intro: 'Three skills, about two minutes. Each one replaces a long, expert prompt with your team’s method, so a short question is enough.',
      files: [['ergo-data-controls', 'downloads/ergo-data-controls.zip'], ['ergo-ifrs9-ecl', 'downloads/ergo-ifrs9-ecl.zip'], ['ergo-ecl-explainability', 'downloads/ergo-ecl-explainability.zip']],
      fileNote: 'Unzip them. Excel reads skills from folders, each containing a <code>SKILL.md</code>. They’re also already in the kit’s <code>skills</code> folder.',
      steps: [
        { text: 'Open <code>ecl-loan-book.xlsx</code> in Excel for the web and select <b>Copilot</b>. In the Copilot pane select <b>…</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b> → <b>Add in OneDrive</b>. If you see <b>Create skills folder</b>, select it first.', gif: 'assets/media/xls-skill-add.gif' },
        { text: 'Your OneDrive <b>skills</b> folder opens. Select <b>Create or upload</b> → <b>Folder upload</b> and upload the three skill folders, one by one. Folders, not ZIPs.', gif: 'assets/media/xls-skill-folder.gif' },
        { text: 'Back in Excel, select <b>Refresh</b> in <b>Custom skills</b> and check that all three are listed and switched on. Make sure <b>Allow editing</b> is on so Copilot can build sheets.' },
      ],
      gifNote: 'Recorded in rehearsal with an earlier workshop skill. The clicks are the same.',
    },
    steps: [
      {
        title: 'Meet the loan book', goal: 'Start from a strong baseline: Copilot is already a good analyst.', time: 4,
        open: 'ecl-loan-book.xlsx', prompt: 'What’s in this workbook, and is it ready for an ECL calculation?', skills: [],
        wow: 'In seconds Copilot reads five sheets, explains what each is for, and already spots some of the data problems.',
        media: { type: 'image', image: 'assets/media/xls-step1.jpg', caption: 'Example of what Copilot finds at first look.' },
        yours: null,
        check: ['Five data sheets: Loan_Tape, Collateral, Risk_Params, Macro_Scenarios, HaircutPolicy', 'A first warning about duplicates, blanks or numbers stored as text', 'Base, Adverse and Severe scenarios with their weights'],
        fallback: { file: 'downloads/fallback/xls-step1.xlsx', images: ['assets/media/xls-step1.jpg'] },
      },
      {
        title: 'Controls before calculation', goal: 'Never calculate on data you haven’t checked.', time: 8,
        open: 'the same workbook', prompt: 'Check this loan tape before we calculate ECL.', skills: ['ergo-data-controls'],
        without: 'You are my credit risk analyst. Validate the workbook before we calculate ECL. In Loan_Tape, check for duplicate LoanID, missing Balance_EUR, missing Stage, invalid dates, DSCR/LTV stored as text, and inconsistent Country names (DE/Germany/Deutschland). In Collateral, check for LoanID mismatches (loans without collateral and collateral without loans) and missing PropertyValue_EUR. Create a new sheet called Controls_Audit with issue counts, the affected LoanIDs, and a short “model readiness” conclusion. Also show exactly what transformations you applied and why.',
        wow: 'A Controls_Audit sheet with 35 issues across ten checks, the affected LoanIDs, a “conditionally ready” verdict and a log of every transformation. Plus a clean copy of the loan tape; the original stays untouched.',
        media: { type: 'image', image: 'assets/media/xls-step2.jpg', caption: 'Controls_Audit: live issue counts, LoanIDs, treatment and the transformation log.' },
        yours: { text: 'Add your own control to the skill. Open <code>ergo-data-controls/SKILL.md</code> in your OneDrive skills folder, add a check such as “LTV above 100%” or “DSCR below 1.0”, save, select <b>Refresh</b> and ask again.', prompt: 'Check this loan tape before we calculate ECL.' },
        check: ['A Controls_Audit sheet with ten checks and 35 issues in total', 'Verdict: conditionally ready, 58 of 60 loans usable', 'A Loan_Tape_Clean sheet; Loan_Tape itself unchanged'],
        fallback: { file: 'downloads/fallback/xls-step2.xlsx', images: ['assets/media/xls-step2.jpg'] },
      },
      {
        title: 'Scenario-weighted ECL', goal: 'A number a reviewer can follow, cell by cell.', time: 9,
        open: 'the same workbook', prompt: 'Calculate the scenario-weighted ECL.', skills: ['ergo-ifrs9-ecl'],
        without: 'Now build an IFRS9-style scenario-weighted ECL calculation that is reviewable. Use Risk_Params to map Segment -> Base_PD_12m, LGD, EAD_CCF, Stage2_PD_Multiplier, Stage3_LGD_Addon. Use Macro_Scenarios weights and apply scenario overlays so that PD and LGD respond to the scenario shocks with sensible caps (0–100% for PD). Stage logic: Stage 1 uses 12-month PD. Stage 2 uses Stage2_PD_Multiplier applied to PD. Stage 3 assumes PD = 100% and LGD increased by Stage3_LGD_Addon. Collateral logic: Use Collateral.PropertyValue_EUR and HaircutPolicy to adjust collateral under CRE_Price_Shock and derive a stressed LGD impact. Create a new sheet called Model_Output with EAD, PD/LGD/ECL per scenario and Weighted_ECL. Create a sheet called Assumptions_Documentation that explains the formulas, caps, and mappings in plain language.',
        wow: 'Model_Output with EAD, PD, LGD and ECL for every loan in Base, Adverse and Severe, all as live formulas, and an Assumptions_Documentation sheet in plain language. Weighted ECL: EUR 49.24m.',
        media: { type: 'image', image: 'assets/media/xls-step3.jpg', caption: 'Model_Output: scenario summary on top, one formula-driven row per loan below.' },
        yours: { text: 'Move a weight and watch the model follow: on <b>Macro_Scenarios</b>, change Severe from 15% to 25% and Base from 50% to 40%. Weighted ECL updates instantly, because every number is a formula.', prompt: null },
        check: ['ECL by scenario: Base EUR 38.60m, Adverse EUR 52.91m, Severe EUR 76.12m', 'Weighted ECL EUR 49.24m, 6.87% of EAD', 'An Assumptions_Documentation sheet that explains caps and mappings'],
        fallback: { file: 'downloads/fallback/xls-step3.xlsx', images: ['assets/media/xls-step3.jpg'] },
      },
      {
        title: 'Defend it in committee', goal: 'Explain the number, not just show it.', time: 7,
        open: 'the same workbook', prompt: 'Help me explain this ECL to the risk committee.', skills: ['ergo-ecl-explainability'],
        without: 'Create explainability for Weighted_ECL so I can defend it in a risk committee. On a new sheet called ECL_Explainability: Show total Weighted_ECL, breakdown by Stage, and a driver view that separates: (1) Stage effect (share from Stage 2 and Stage 3), (2) Collateral effect (baseline vs stressed LGD), (3) Macro overlay effect (Base ECL vs Weighted ECL). Add a simple waterfall chart (or equivalent) and write a short narrative titled “What changed and why.”',
        wow: 'A waterfall from a Stage 1 view (EUR 4.6m) to Weighted ECL (EUR 49.24m): staging adds 34.0m, the macro overlay 5.3m and falling property prices another 5.3m. Then a short “What changed and why” in plain language.',
        media: { type: 'image', image: 'assets/media/xls-step4.jpg', caption: 'ECL_Explainability: stage view, driver bridge, waterfall and the narrative.' },
        yours: { text: 'Ask for the same story for a different audience.', prompt: 'Rewrite “What changed and why” for a board member who isn’t a risk specialist, in three sentences.' },
        check: ['Stage 3 is 77% of Weighted ECL; Stage 2 and 3 together 89%', 'The bridge adds up exactly (the check cell shows OK)', 'A waterfall chart and a “What changed and why” narrative'],
        fallback: { file: 'downloads/fallback/xls-step4.xlsx', images: ['assets/media/xls-step4.jpg'] },
      },
      {
        title: 'Ask the numbers', goal: 'Have a conversation with your model.', time: 4, optional: true,
        open: 'the same workbook', prompt: 'Which five loans drive most of the ECL, and why?', prompt2: 'What if the Severe property price shock is −40% instead of −30%?', skills: ['ergo-ecl-explainability'],
        wow: 'Five loans carry 80% of Weighted ECL. One of them, L046, is only there because its missing stage was assumed to be Stage 2: a data point worth confirming before Thursday.',
        media: { type: 'image', image: 'assets/media/xls-step5.jpg', caption: 'Example answers.' },
        yours: null,
        check: ['L004, L054, L026, L029 (all Stage 3) and L046', 'A −40% Severe shock moves Weighted ECL to about EUR 50.38m', 'Answers cite the loans or cells they used'],
        fallback: { file: 'downloads/fallback/xls-step5.xlsx', images: ['assets/media/xls-step5.jpg'] },
      },
    ],
    sideQuests: [
      { id: 'xls-stress', title: 'Your own scenario', time: 4, prompt: 'Add a fourth scenario, “Office slump”: weight 10%, PD multiplier 2.0, LGD add-on 5%, property price shock −35%. Rebalance the other weights so they add to 100%.', what: 'Design a stress nobody asked for yet, and see the model take it.' },
      { id: 'xls-bridge', title: 'Bridge to PowerPoint', time: 5, prompt: 'Make this slide board-ready.', what: 'Copy the waterfall chart onto a slide and watch the ERGO Brand skill style it. Needs the PowerPoint skills.' },
      { id: 'xls-plain', title: 'No jargon', time: 3, prompt: 'Explain ECL, PD, LGD and EAD to someone outside risk, in five sentences, using this loan book as the example.', what: 'The same story for a non-risk audience.' },
      { id: 'my-voice', title: 'My Voice', time: 8, voice: true, what: 'Teach Copilot how you write, then use it for your committee note.' },
    ],
  },
  m365: {
    app: 'Microsoft Copilot', name: 'The Orchestrator', persona: 'Orchestrator', comingSoon: true,
    mission: 'Coming soon. Ask your facilitator which trail to join today.',
  },
};

ADV.voiceQuest = {
  steps: [
    'Copy two or three short pieces of your own non-confidential writing, or use the sample texts.',
    'Paste them into Copilot with the prompt below.',
    'Read the rules Copilot proposes. Change anything that does not sound like you.',
    'Save the result as <code>SKILL.md</code> in a folder named <code>my-voice</code> and upload it like the other skills.',
    'Test it on something you made today.',
  ],
  prompt: 'Read these texts and fill in the my-voice skill template: describe my voice as short, testable rules.',
  test: 'Rewrite the speaker notes on slide 1 in my voice.',
  files: [['downloads/my-voice-SKILL.md', 'my-voice template'], ['downloads/sample-voice-texts.md', 'sample texts']],
};

ADV.library = [
  { mood: '🎯 Sharpen', items: [
    ['Say the message of this slide in one sentence.', 'One sentence, 20 words or fewer.'],
    ['Cut this slide to three bullets without losing a number.', 'Three bullets; the rest moves to the speaker notes.'],
    ['What’s the weakest sentence in this deck?', 'One sentence quoted, with a stronger rewrite.'],
  ] },
  { mood: '🔄 Reshape', items: [
    ['Turn this into a one-page memo for the board.', 'A memo with a subject line, the message first and the ask last.'],
    ['Make this a table: unit, actual, plan, gap.', 'A four-column table, ready to paste.'],
    ['Turn the decision slide into an email to the Chair.', 'A short email draft. You send it, not Copilot.'],
  ] },
  { mood: '🌍 Translate', items: [
    ['Make a German version for the supervisory board.', 'The same slides in German, figures unchanged.'],
    ['Explain this to a new team member in five sentences.', 'Plain language, no abbreviations.'],
    ['What would our customers care about in this?', 'Two or three points from a customer’s point of view.'],
  ] },
  { mood: '📊 Go deeper', items: [
    ['Which month changed the quarter?', 'August, and why.'],
    ['What’s the biggest risk hiding in these numbers?', 'One risk, the evidence for it, and what to watch.'],
    ['What would change your recommendation?', 'The two or three facts that would flip the decision.'],
  ] },
  { mood: '🧠 Learn', items: [
    ['Which custom skill did you use, and what did it change?', 'The skill name and the rules it followed.'],
    ['What would you add to this skill to make it better?', 'Two or three concrete rule suggestions.'],
    ['Write a skill for a task I repeat every week: [describe it].', 'A draft SKILL.md with a name, description and rules.'],
  ] },
];

ADV.anatomy = {
  skill: 'ergo-board-pack',
  parts: [
    { key: 'name', match: /^name:/, title: 'Name', text: 'What you see in the skills list. Short, unique, matches the folder.' },
    { key: 'when', match: /^description:/, title: 'When to use it', text: 'Copilot reads this to decide when the skill applies. That is why you never have to name it.' },
    { key: 'how', match: /^## Structure|^## Speaker notes|^## Style|^## Sharpening|^## Leave-behind|^Use only/, title: 'Instructions', text: 'Your method, step by step: the order, the rules, what never to do.' },
    { key: 'out', match: /^## When you finish/, title: 'Output', text: 'What “done” looks like, so every run ends the same way.' },
  ],
  rules: [
    ['Deck structure', 'Message first, then KPIs, then why, then risks, then the ask'],
    ['KPI strip', 'Four or five tiles; actual vs plan and prior year'],
    ['Headlines', 'Full sentences that say “so what”'],
    ['Colour', 'White, charcoal text, one red accent'],
    ['Charts', 'Flat 2D, labelled directly, no gridlines'],
    ['Sources', 'A source line on every slide'],
  ],
};

// ---------- Summit expedition layer (animations) ----------
// Each skill is a piece of gear in the backpack.
ADV.gear = {
  'ergo-brand': ['🧭', 'Compass'], 'ergo-board-pack': ['🗺️', 'Map'], 'ergo-board-sparring': ['🪢', 'Rope team'],
  'ergo-data-controls': ['🔦', 'Headlamp'], 'ergo-ifrs9-ecl': ['🌦️', 'Weather radar'], 'ergo-ecl-explainability': ['🔭', 'Binoculars'],
  'my-voice': ['🚩', 'Your own flag'],
};

// Altitudes: base camp, then one camp per core step; the optional step plants a flag on the summit.
ADV.altitude = { base: 1200, perStep: 450, flag: 50 };

// "Watch Copilot think": what the Copilot pane typically shows for each step (an illustration, not a recording).
ADV.think = {
  'ppt-1': ['Read the three slides and their figures', 'Apply ERGO Brand: headlines, colours, bullets', 'Rewrite topic titles as “so what” headlines', 'Replace the 3D chart with a flat, labelled chart', 'Check: every number unchanged'],
  'ppt-2': ['Read the CFO’s notes (3 pages)', 'Find the one message for the board', 'Build five slides in the ERGO structure', 'Separate one-off from structural causes', 'Write speaker notes with the source line'],
  'ppt-3': ['Read all five slides and notes', 'Condense the deck into one sentence', 'Rewrite the last slide as “Decision needed:”', 'Put the ask, amount and recommendation up front'],
  'ppt-4': ['Read the deck and speaker notes', 'Seat the panel: Chair, CFO, supervisor, works council', 'Find each person’s hardest fair question', 'Draft answers that point to a slide', 'Pick the question to practise first'],
  'ppt-5': ['Collect the five slide messages', 'Pick the three numbers to remember', 'Add a cue card slide', 'Write about 150 words to say out loud'],
  'xls-1': ['Read the five sheets and their columns', 'Profile the loan tape: segments, stages, countries', 'Look for blanks, duplicates and odd values', 'Explain the scenarios and their weights'],
  'xls-2': ['Run duplicate, blank and date checks on Loan_Tape', 'Find DSCR and LTV stored as text', 'Match Collateral to loans in both directions', 'Write Controls_Audit with live counts', 'Build Loan_Tape_Clean and log every change'],
  'xls-3': ['Map segments to Risk_Params', 'Compute EAD with the CCF', 'Apply stage logic and scenario overlays with caps', 'Stress collateral with haircuts and price shocks', 'Write Model_Output and Assumptions_Documentation'],
  'xls-4': ['Total Weighted ECL and split it by stage', 'Bridge: stage, macro and collateral effects', 'Check that the bridge adds up', 'Draw the waterfall', 'Write “What changed and why”'],
  'xls-5': ['Rank loans by Weighted ECL', 'Look at stage, LTV and collateral for each', 'Answer in plain language', 'Point to the loans and cells used'],
};

// Radio messages from Copilot, triggered once after a step is done. Never a trap: an invitation.
ADV.radio = {
  ppt: [
    { id: 'ppt-r1', after: 2, title: 'Weather change', text: 'The Chair just called: two supervisory board members would prefer the pack in German.', prompt: 'Make a German version of this board pack for the supervisory board.', quest: 'ppt-german' },
    { id: 'ppt-r2', after: 4, title: 'Visitor at base camp', text: 'A journalist has asked about the claims automation plan. Want to add them to your rehearsal?', prompt: 'Add a journalist and an activist investor to the rehearsal.', quest: 'ppt-persona' },
  ],
  xls: [
    { id: 'xls-r1', after: 2, title: 'Message from the credit team', text: 'L046 is Stage 1, not missing: the system export dropped it. How much does that change?', prompt: 'If L046 is Stage 1 instead of the assumed Stage 2, how much does Weighted ECL change?', quest: 'xls-stress' },
    { id: 'xls-r2', after: 4, title: 'Message from the summit', text: 'The CRO loves the waterfall. Can it go straight onto a committee slide?', prompt: 'Make this slide board-ready.', quest: 'xls-bridge' },
  ],
};

// The companion's lines. Short, friendly, never more than one sentence or two.
ADV.buddyLines = {
  anatomy: 'Hi, I’m your Copilot for this climb. Scroll down to see what a skill is made of.',
  base: 'I’ll climb with you. First stop: get the kit and add the skills.',
  step: 'Copy the prompt and paste it into my pane in {app}. I’ll wait here.',
  copied: 'Got it. Paste it into Copilot in {app}. Come back when you see the result.',
  done: 'Camp reached. +{m} m.',
  summit: 'Summit! {alt} m. Want to try a scenic detour, or head to the finale?',
  quests: 'Scenic detours. Pick any, they’re short.',
  library: 'Pick a mood, copy a prompt, try it on anything you made today.',
  finale: 'Look how far you climbed. Let’s make your summit certificate.',
  playground: 'That’s all a skill is: rules you can change.',
};
