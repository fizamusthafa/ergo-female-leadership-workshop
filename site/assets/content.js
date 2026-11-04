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
  'ergo-data-cleaning': { app: 'Excel', title: 'Data Cleaning', what: 'ERGO’s rules for any data clean-up: originals untouched, clean tables, every change flagged, nothing guessed, and a Data_Quality sheet with live counts and a readiness verdict.', trigger: '"clean", "check", "is it ready"' },
  'ergo-calculations': { app: 'Excel', title: 'Calculations', what: 'How ERGO builds any calculation: live formulas, inputs in one place, check cells, scenarios side by side and a plain-language documentation sheet.', trigger: '"calculate", "KPIs", "scenarios", "what if"' },
  'ergo-pivot-analysis': { app: 'Excel', title: 'Pivot Analysis', what: 'Real PivotTables from the clean data, then a one-sentence headline and the top three drivers, one-offs separated from trends.', trigger: '"break down", "what drives", "PivotTables"' },
  'ergo-exec-dashboard': { app: 'Excel', title: 'Exec Dashboard', what: 'One screen for the board: KPI tiles, sentence headlines on every chart, ERGO red and greys, all linked to the data.', trigger: '"dashboard", "one-pager", "board summary"' },
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
      explore: { pick: 'upload' },
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
    mission: 'The board meets on Thursday and wants to know why claims are up. Bring a claims review you can stand behind, from raw data to a page you can send.',
    kit: { file: 'downloads/excel-kit.zip', size: 'about 140 KB', contents: ['claims-workbook.xlsx', '4 skill folders'] },
    setup: [
      'Download the kit and unzip it. Inside you’ll find <code>claims-workbook.xlsx</code>, a fictional export of 3,100 policies and about 330 claims from Q1–Q3, and a <code>skills</code> folder.',
      'Upload <code>claims-workbook.xlsx</code> to your OneDrive.',
    ],
    pack: {
      intro: 'Four skills, about three minutes. Your prompt says what you need. The skills hold how ERGO does it: never touch the original data, live formulas, real PivotTables, one-screen dashboards in ERGO colours. They work on any workbook, not just this one.',
      files: [['ergo-data-cleaning', 'downloads/ergo-data-cleaning.zip'], ['ergo-calculations', 'downloads/ergo-calculations.zip'], ['ergo-pivot-analysis', 'downloads/ergo-pivot-analysis.zip'], ['ergo-exec-dashboard', 'downloads/ergo-exec-dashboard.zip']],
      fileNote: 'Unzip them. Excel reads skills from folders, each containing a <code>SKILL.md</code>. They’re also already in the kit’s <code>skills</code> folder.',
      steps: [
        { text: 'Open <code>claims-workbook.xlsx</code> in Excel for the web and select <b>Copilot</b>. In the Copilot pane select <b>…</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b> → <b>Add in OneDrive</b>. If you see <b>Create skills folder</b>, select it first.', gif: 'assets/media/xls-skill-add.gif' },
        { text: 'Your OneDrive <b>skills</b> folder opens. Select <b>Create or upload</b> → <b>Folder upload</b> and upload the four skill folders, one by one. Folders, not ZIPs.', gif: 'assets/media/xls-skill-folder.gif' },
        { text: 'Back in Excel, select <b>Refresh</b> in <b>Custom skills</b> and check that all four are listed and switched on. Make sure <b>Allow editing</b> is on so Copilot can build sheets.' },
      ],
      gifNote: 'Recorded in rehearsal with an earlier workshop skill. The clicks are the same.',
    },
    steps: [
      {
        title: 'Clean before you count', goal: 'Data cleaning: never analyse data you haven’t checked.', time: 6,
        open: 'claims-workbook.xlsx',
        prompt: 'You are my claims data analyst. Before we analyse anything, check the Claims and Policies sheets: duplicate claims and policies, missing amounts, invalid or impossible dates, amounts stored as text, inconsistent region, line-of-business and status names (use the Lookups sheet), and claims without a matching policy. Clean the data into new sheets and create a Data_Quality sheet with the issue counts, the affected IDs and a short verdict on whether the data is ready for analysis.',
        skills: ['ergo-data-cleaning'],
        adds: ['Claims and Policies stay untouched; the clean data goes into new tables', 'German formats such as “1.234,50” are converted, gaps are never guessed', 'Every changed row is flagged in a Data_Flags column with an amber fill', 'Unusable rows are excluded with Include_in_Analysis, not deleted', 'Each count is a live formula, with a log of every transformation and why'],
        wow: 'A Data_Quality sheet with 42 issues across twelve checks, the affected claim and policy IDs, a “Ready with caveats” verdict and a log of every change. Claims_Clean and Policies_Clean sit next to the originals.',
        media: { type: 'image', image: 'assets/media/xls-step1.jpg', caption: 'Data_Quality: verdict, live issue counts, IDs, treatment and the transformation log.' },
        yours: { text: 'Add your own rule to the skill. Open <code>ergo-data-cleaning/SKILL.md</code> in your OneDrive skills folder and add a line under the checks, for example “A claim reported more than 30 days after the loss date is a late report: flag it.” Save, select <b>Refresh</b> and ask again.', prompt: 'Run the data checks again and tell me what changed.' },
        check: ['Twelve checks and 42 issues in total', 'Verdict: Ready with caveats, 323 of 326 claims usable', 'Claims and Policies unchanged; Claims_Clean and Policies_Clean added'],
        fallback: { file: 'downloads/fallback/xls-step1.xlsx', images: ['assets/media/xls-step1.jpg'] },
      },
      {
        title: 'The numbers and the what-ifs', goal: 'Calculations: KPIs and scenarios a reviewer can trace cell by cell.', time: 7,
        open: 'the same workbook',
        prompt: 'Now calculate the claims KPIs for the board from the cleaned data. For each line of business and in total: policies, earned premium, number of claims, claim frequency per 1,000 policies, average claim, incurred (paid plus reserve), loss ratio against the target on the Assumptions sheet, and combined ratio. Then apply the Base, Adverse and Severe scenarios from Assumptions (reserve inflation, IBNR load and the extra storm load for Property) and give me a scenario-weighted loss ratio. Put it on a new sheet called KPI_Model and explain the method on a sheet called Assumptions_Documentation.',
        skills: ['ergo-calculations'],
        adds: ['Every result is a live formula; no typed numbers', 'All inputs stay on Assumptions, in grey, and nothing is hard-coded', 'Total ratios are recalculated from totals, never averaged', 'Check cells show OK when the parts add up and the weights make 100%', 'EUR without decimals, ratios to one decimal, scenarios called sensitivities'],
        wow: 'KPI_Model with every number as a live formula: a loss ratio of 73.5% against a 65.4% target, Property far above the rest, and a scenario-weighted loss ratio of 80.9%. The check cells show OK.',
        media: { type: 'image', image: 'assets/media/xls-step2.jpg', caption: 'KPI_Model: summary on top, one row per line of business, scenarios side by side.' },
        yours: { text: 'Move a weight and watch the model follow. On <b>Assumptions</b>, change Severe from 15% to 25% and Base from 50% to 40%. The weighted loss ratio goes to about 83.0%, because every number is a formula.', prompt: null },
        check: ['Loss ratio 73.5% against a target of 65.4%; combined ratio 99.3%', 'Property 96.5% against 62%; Motor 63.4% against 68%', 'Weighted loss ratio 80.9% (Base 74.9%, Adverse 82.8%, Severe 96.1%)'],
        fallback: { file: 'downloads/fallback/xls-step2.xlsx', images: ['assets/media/xls-step2.jpg'] },
      },
      {
        title: 'Follow the tracks', goal: 'PivotTables: find out what is driving the number.', time: 6,
        open: 'the same workbook',
        prompt: 'Why is the loss ratio above target? Build PivotTables from the cleaned claims on a new sheet called Pivot_Analysis: incurred by region and line of business, by line and cause of loss, and by loss month. Then tell me the three biggest drivers, and which of them are one-off events and which are trends.',
        skills: ['ergo-pivot-analysis'],
        adds: ['Real PivotTables you can re-slice, not pasted copies', 'Built on the clean table, with excluded claims filtered out', 'Largest first, months in order, % of total where it helps', 'A one-sentence headline and three drivers, one-offs separated from trends', 'What the pivots can’t tell you, and small samples marked'],
        wow: 'Three PivotTables and a headline: Property is above target because of one storm. 36 claims in Bayern and Baden-Württemberg in August add EUR 166,560, 45% of Property incurred.',
        media: { type: 'image', image: 'assets/media/xls-step3.jpg', caption: 'Pivot_Analysis: headline and drivers on top, three PivotTables below.' },
        yours: { text: 'Select a PivotTable and add a slicer for <b>Region</b>, or ask a follow-up:', prompt: 'Show the same view for Motor only. Is anything unusual there?' },
        check: ['August incurred is EUR 279,920, 2.6× any other month', 'Top cause: Motor · Collision, 80 claims and EUR 262,580', 'Without the storm, Property’s loss ratio would be about 54%'],
        fallback: { file: 'downloads/fallback/xls-step3.xlsx', images: ['assets/media/xls-step3.jpg'] },
      },
      {
        title: 'The view from the top', goal: 'Dashboard: the board gets the message in ten seconds.', time: 6,
        open: 'the same workbook',
        prompt: 'Build a one-screen claims dashboard for the board on a new sheet called Dashboard. KPI tiles for loss ratio, combined ratio, number of claims and incurred, each compared with its target or total. Then charts for the loss ratio against target by line of business, the monthly trend, the top causes of loss and the scenario view. Link everything to the model so it updates when the data changes.',
        skills: ['ergo-exec-dashboard'],
        adds: ['One screen: title with the period, a one-line message, the illustrative label', 'Every chart headline is a sentence that says the message', 'ERGO red for the focus, greys for targets, no pies, no 3D, no gridlines', 'Values labelled directly, amounts in EUR thousands', 'A source line naming the workbook and sheets'],
        wow: 'A dashboard with four tiles and five charts, each headline telling you what to see. Property is the only bar above its target and August stands out in the trend.',
        media: { type: 'image', image: 'assets/media/xls-step4.jpg', caption: 'Dashboard: tiles across the top, charts with sentence headlines below.' },
        yours: { text: 'Ask for a version for a different audience.', prompt: 'Make a second dashboard for the Property team only.' },
        check: ['Loss ratio tile 73.5%, ▲ 8.1 pts against the 65.4% target', 'Property is the only line above its target', 'The August spike is visible in the monthly trend'],
        fallback: { file: 'downloads/fallback/xls-step4.xlsx', images: ['assets/media/xls-step4.jpg'] },
      },
      {
        title: 'Send it as a web page', goal: 'A branded HTML file from one prompt, no skill needed.', time: 5,
        open: 'the same workbook',
        how: 'When the code appears, copy it, paste it into Notepad and save it as <code>claims-dashboard.html</code> (in “Save as type” choose <b>All files</b>). Double-click the file to open it in your browser.',
        prompt: 'Turn this dashboard into one self-contained HTML page I can send to the board. Use ERGO’s style: red #BF1629 for the focus, charcoal #242424 text on white, Segoe UI or Arial, and the word “ERGO” as a text logo in the header. Show the four KPI tiles and four charts as inline SVG, and add dropdown filters for line of business and region that update the tiles and charts. Put “Illustrative figures for training purposes, not ERGO results” in the footer. No external files, fonts or links. Show the complete HTML file in one code block.',
        skills: [],
        wow: 'A branded web page with working filters, built from your workbook in one prompt. Filter to Property and the loss ratio jumps to 96.5%.',
        media: { type: 'image', image: 'assets/media/xls-step5.jpg', caption: 'Example page, saved as claims-dashboard.html and opened in the browser.' },
        yours: { text: 'Ask for the same page in German, or for your own team.', prompt: 'Make a German version of this page for the supervisory board.' },
        check: ['It opens in the browser with no internet connection', 'Filtering to Property shows a 96.5% loss ratio', 'The illustrative label is in the footer'],
        fallback: { file: 'downloads/fallback/claims-dashboard.html', images: ['assets/media/xls-step5.jpg'] },
      },
    ],
    sideQuests: [
      { id: 'xls-scenario', title: 'Your own scenario', time: 4, prompt: 'Add a fourth scenario, “Hail season”: weight 10%, reserve inflation 10%, IBNR load 8%, extra Property load 15%. Take the 10% from Base so the weights still add to 100%.', what: 'Design a stress nobody asked for yet, and see the model take it.' },
      { id: 'xls-bridge', title: 'Bridge to PowerPoint', time: 5, prompt: 'Make this slide board-ready.', what: 'Copy the loss ratio chart onto a slide and watch the ERGO Brand skill style it. Needs the PowerPoint skills.' },
      { id: 'xls-plain', title: 'No jargon', time: 3, prompt: 'Explain loss ratio, combined ratio, reserves and IBNR to someone outside insurance finance, in five sentences, using this workbook as the example.', what: 'The same story for an audience outside finance.' },
      { id: 'my-voice', title: 'My Voice', time: 8, voice: true, what: 'Teach Copilot how you write, then use it for your note to the board.' },
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
  'ergo-data-cleaning': ['🔦', 'Headlamp'], 'ergo-calculations': ['⌚', 'Altimeter'], 'ergo-pivot-analysis': ['🔭', 'Binoculars'], 'ergo-exec-dashboard': ['📸', 'Summit camera'],
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
  'xls-1': ['Read Claims, Policies, Assumptions and Lookups', 'Find duplicates, blanks and impossible dates', 'Convert “1.234,50” amounts stored as text', 'Map region, line and status names to Lookups', 'Match claims to policies', 'Write Data_Quality with live counts and a verdict'],
  'xls-2': ['Use only rows marked Include_in_Analysis', 'Count claims and sum incurred per line with SUMIFS', 'Pull targets and expense ratios from Assumptions', 'Apply the three scenarios and their weights', 'Add check cells and Assumptions_Documentation'],
  'xls-3': ['Build PivotTables on Claims_Clean', 'Region × line, line × cause, loss month', 'Sort largest first, add % of total', 'Spot the August spike in Property', 'Write the headline and three drivers'],
  'xls-4': ['Pick four KPI tiles and their comparisons', 'Choose charts that tell the story', 'Write a sentence headline for each chart', 'Apply ERGO red and greys', 'Link everything to KPI_Model'],
  'xls-5': ['Read the dashboard figures and the clean data', 'Embed the data in the page', 'Draw tiles and SVG charts in ERGO style', 'Wire up the line and region filters', 'Return one HTML code block'],
};

// Radio messages from Copilot, triggered once after a step is done. Never a trap: an invitation.
ADV.radio = {
  ppt: [
    { id: 'ppt-r1', after: 2, title: 'Weather change', text: 'The Chair just called: two supervisory board members would prefer the pack in German.', prompt: 'Make a German version of this board pack for the supervisory board.', quest: 'ppt-german' },
    { id: 'ppt-r2', after: 4, title: 'Visitor at base camp', text: 'A journalist has asked about the claims automation plan. Want to add them to your rehearsal?', prompt: 'Add a journalist and an activist investor to the rehearsal.', quest: 'ppt-persona' },
  ],
  xls: [
    { id: 'xls-r1', after: 2, title: 'Message from the reserving team', text: 'Hail season is coming and the team wants a fourth scenario in the model before Thursday.', prompt: 'Add a fourth scenario, “Hail season”: weight 10%, reserve inflation 10%, IBNR load 8%, extra Property load 15%. Take the 10% from Base so the weights still add to 100%.', quest: 'xls-scenario' },
    { id: 'xls-r2', after: 4, title: 'Message from the summit', text: 'The CEO loves the dashboard. Can the loss ratio chart go straight onto a board slide?', prompt: 'Make this slide board-ready.', quest: 'xls-bridge' },
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
