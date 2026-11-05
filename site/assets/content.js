// All workshop content in one place. Pages render from this file.
// Every figure in the sample files is invented (illustrative, not ERGO results).
window.ADV = window.ADV || {};

ADV.config = {
  // Facilitator: paste the link to a shared Form or Whiteboard for the share-out wall.
  wallUrl: '',
  // Floating Copilot companion. Parked; set to true to bring it back.
  buddy: false,
  totalMinutes: 60,
  chapters: [
    { from: 0, to: 5, title: 'Get started', note: 'Everyone opens the site and picks their room. Open the web apps, not the desktop apps. Model on Auto. No premium licence? Pair up.' },
    { from: 5, to: 50, title: 'On the trail', note: 'Prompts first, skills later. Anyone can skip ahead: every step has its own start file. Use the waiting time for the parallel task.' },
    { from: 50, to: 60, title: 'Prepare the share-out', note: 'Two people per group prepare two minutes for the room monitor or the main room.' },
  ],
};

ADV.event = { name: 'ERGO Female Leadership Summit', date: '17 November 2026', city: 'Berlin', sessions: '11:15–13:30' };
ADV.label = 'Illustrative figures for training purposes, not ERGO results';

// Rooms and groups. Basic and Advanced follow the same trail; Advanced moves faster and skips ahead.
ADV.rooms = [
  { id: 'de-meer', room: 'De Meer', group: '1 Basic', trail: 'xls', level: 'basic', assigned: 17, capacity: 20 },
  { id: 'olimpico', room: 'Olimpico', group: '1 Advanced', trail: 'xls', level: 'advanced', assigned: 14, capacity: 14 },
  { id: 'ballymore', room: 'Ballymore', group: '2 Basic', trail: 'ppt', level: 'basic', assigned: 15, capacity: 20 },
  { id: 'warm-up', room: 'Warm-up', group: '2 Advanced', trail: 'ppt', level: 'advanced', assigned: 16, capacity: 16 },
  { id: 'hall-of-fame', room: 'Hall of Fame', group: '3 Basic', trail: 'cos', level: 'basic', assigned: 26, capacity: 30 },
  { id: 'anfield', room: 'Anfield', group: '3 Advanced', trail: 'cos', level: 'advanced', assigned: 12, capacity: 12 },
];
ADV.levels = { basic: 'Basic', advanced: 'Advanced' };

// Shown at the start of every trail.
ADV.basics = [
  ['🌐', 'Use the web apps', 'Open Excel, PowerPoint and Outlook in the browser, not the desktop apps. Some features, such as Interactive Slides and the <b>Add skill</b> button, only appear on the web.'],
  ['⚙️', 'Leave the model on Auto', 'If Copilot offers a model choice, keep <b>Auto</b>. Today is about what you ask, not which model answers.'],
  ['👥', 'No premium licence?', 'Pair up with a neighbour and work on one screen. You can still follow every step.'],
  ['⏭️', 'Skip whenever you like', 'Every step has its own start file, so you never need the result of an earlier step.'],
];

// Troubleshooting, shown (collapsed) on every trail page. Trail-specific items are added per trail.
ADV.trouble = [
  ['There’s no skills folder in my OneDrive', 'In the Copilot pane, select <b>…</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Create OneDrive folder</b>. Copilot creates it. Then select <b>Open skills folder</b>.'],
  ['The Add skill button is missing', 'You’re probably in the desktop app. Open the same file in the browser (<b>File</b> → <b>Open in browser</b>, or via office.com) and look again.'],
  ['My skill isn’t showing up yet', 'It can take a few minutes after the upload. Select <b>Refresh</b> under <b>Custom skills</b>, wait a moment and ask again. The folder name must match the <code>name:</code> line in SKILL.md.'],
  ['How do I know a skill was used?', 'Look for a line like <b>“Loaded … skill”</b> in the Copilot chat, just above the answer.'],
  ['I don’t have a premium Copilot licence', 'Work with a partner on one screen. Copy the prompts into their Copilot and take turns.'],
];

ADV.skills = {
  'ergo-register-cleaner': { app: 'Excel', title: 'Register Cleaner', what: 'Your own skill, from our template: standardises a KPI register, applies colour rules, adds a summary row and logs every change.', trigger: '"clean my register", "prepare the monthly KPI file"', zip: 'downloads/ergo-register-cleaner.zip', md: 'downloads/ergo-register-cleaner-SKILL.md' },
  'ergo-brand': { app: 'PowerPoint', title: 'ERGO Brand', what: 'Restyles any deck in ERGO board style: message headlines, one red accent, flat charts. Never changes a figure.', trigger: '"make these slides board-ready"', zip: 'downloads/ergo-brand.zip', md: 'downloads/ergo-brand-SKILL.md' },
  'ergo-board-sparring': { app: 'PowerPoint', title: 'Board Rehearsal', what: 'Our version of the skill you build in step 7: the Chair, the CFO, a supervisor and the works council each ask their hardest question, answered from your deck.', trigger: '"rehearse", "what will they ask"', zip: 'downloads/ergo-board-sparring.zip', md: 'downloads/ergo-board-sparring-SKILL.md' },
  'interactive-slides-workaround': { app: 'PowerPoint', title: 'Interactive Slides (workaround)', what: 'Only if the Interactive Slide button is missing: turns one slide into a clickable overview that links to detail slides.', trigger: '"make this slide interactive"', zip: 'downloads/interactive-slides-workaround.zip', md: 'downloads/interactive-slides-workaround-SKILL.md' },
  'chief-of-staff': { app: 'Copilot Chat', title: 'Chief-of-Staff agent', kind: 'agent', what: 'The agent you build in Agent Builder: knows your priorities, organises your day and week, and drafts replies in your voice.', trigger: '@mention it in Copilot Chat or Outlook' },
  'my-voice': { app: 'Any', title: 'My Voice', what: 'Your writing style as short rules. Built into your Chief-of-Staff agent, or used as a skill on its own.', trigger: '"in my voice"', md: 'downloads/my-voice-SKILL.md' },
};

ADV.badges = {
  'clippy': { icon: '📎', title: "Clippy's friend", what: 'You met Clippy. Hands up in the room!' },
  'haiku-summary': { icon: '🌸', title: 'Haiku summary', what: 'A hidden skill: any file, summarised in 17 syllables.', download: 'downloads/haiku-summary.zip' },
  'all-quests': { icon: '🏔️', title: 'Summit', what: 'Every side quest on your trail completed.' },
  'souvenir': { icon: '🎁', title: 'Souvenir', what: 'You brought back a sentence from Copilot.' },
};

ADV.personas = {
  xls: { name: 'Analyst', line: 'You spot what is off in the numbers before anyone else.' },
  ppt: { name: 'Storyteller', line: 'You turn complexity into one clear message.' },
  cos: { name: 'Orchestrator', line: 'You keep twelve workstreams moving and everyone aligned.' },
};

ADV.quiz = [
  { q: 'Your Sunday-evening dread is…', a: [['ppt', 'a deck for Monday’s board'], ['xls', 'a spreadsheet nobody has checked'], ['cos', 'an inbox with 214 unread']] },
  { q: 'In meetings you’re the one who…', a: [['ppt', 'tells the story'], ['xls', 'asks “what do the numbers say?”'], ['cos', 'makes sure everyone’s aligned afterwards']] },
  { q: 'Your superpower is…', a: [['ppt', 'turning complexity into one clear message'], ['xls', 'spotting what’s off in the numbers'], ['cos', 'keeping twelve workstreams moving']] },
];

// How to upload a skill, per app. Used wherever a step adds a custom skill.
ADV.upload = {
  ppt: {
    steps: [
      { text: 'In the Copilot pane, select <b>…</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b>.', gif: 'assets/media/ppt-skill-add.gif' },
      { text: 'Select <b>Upload</b> and choose the ZIP, or drag the file onto the pane. Keep it zipped.', gif: 'assets/media/ppt-skill-upload.gif' },
      { text: 'Check the skill is switched on. If it’s missing, select <b>Refresh</b> and give it a minute.' },
    ],
  },
  xls: {
    steps: [
      { text: 'In the Copilot pane, select <b>…</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b>. If you see <b>Create OneDrive folder</b>, select it first.', gif: 'assets/media/xls-skill-add.gif' },
      { text: 'Select <b>Upload</b> and choose the ZIP. Or select <b>Add in OneDrive</b> and use <b>Create or upload</b> → <b>Folder upload</b> for the unzipped folder.', gif: 'assets/media/xls-skill-folder.gif' },
      { text: 'Back in Excel, select <b>Refresh</b> and check the skill is switched on. Make sure <b>Allow editing</b> is on.' },
    ],
  },
  gifNote: 'Screen recordings from our rehearsal, made with an earlier skill. The clicks are the same.',
};

ADV.trails = {
  // ======================================================================
  // Trail 1 · Excel · Performance Review
  // ======================================================================
  xls: {
    app: 'Excel', tool: 'Excel', name: 'The Numbers Room', persona: 'Analyst', group: 1, useCase: 'Performance Review',
    web: ['Excel for the web', 'https://excel.cloud.microsoft'],
    mission: 'A messy half-year performance register lands on your desk before the leadership meeting. Understand it, extend it, clean it and turn it into a dashboard.',
    kit: { file: 'downloads/excel-kit.zip', size: 'about 130 KB', contents: ['kpi-register.xlsx', 'kpi-register-clean.xlsx', 'kpi-register-dashboard.xlsx', 'kpi-register-q3.xlsx', 'project-updates.txt', 'skill template'] },
    setup: [
      'Download the kit and unzip it.',
      'Upload the four <code>.xlsx</code> files to your OneDrive and open <code>kpi-register.xlsx</code> in Excel for the web. Copilot in Excel only works on files saved in OneDrive or SharePoint.',
      'Select <b>Copilot</b> on the Home tab to open the pane.',
    ],
    levels: {
      basic: 'Aim for steps 1–5. Take steps 6–9 if you have time.',
      advanced: 'Move quickly through steps 1–4, then pick from 5–9, or jump straight to the side quest <b>Bring your own skill</b>.',
    },
    trouble: [
      ['Copilot is greyed out in Excel', 'Save the file to OneDrive or SharePoint and turn on <b>AutoSave</b>. Copilot needs a saved, online file.'],
      ['Copilot changed something I didn’t want', 'Press <b>Ctrl+Z</b>, or ask Copilot to undo it. Your start files are always there to download again.'],
    ],
    steps: [
      {
        title: 'What am I looking at?', goal: 'Understand: let Copilot explain a table you have never seen before.', time: 4,
        start: [['downloads/kpi-register.xlsx', 'kpi-register.xlsx']],
        prompt: 'What am I looking at in this table?',
        prompt2: 'What looks inconsistent or messy in this data?',
        wow: 'Copilot reads the whole register in seconds: six countries, five KPIs, January to June. The second question gets it listing the mess: € next to EUR, dates in four formats, Deutschland next to Germany.',
        check: ['A plain-language summary of the columns and the period', 'Copilot names the countries and KPIs in the register', 'At least two kinds of mess: currencies, dates or spellings'],
      },
      {
        title: 'One formula, every row', goal: 'Extend: add a calculated column that works for 1 row or 10,000.', time: 5,
        start: [['downloads/kpi-register.xlsx', 'kpi-register.xlsx']],
        prompt: 'Add a column that shows how far Actual is from Target, in percent. Use a formula.',
        prompt2: 'Explain the formula in plain words. What happens if this table grows to 10,000 rows?',
        wow: 'A new column, filled down the whole table. Click any cell and you see the same formula. It works for one row or ten thousand, and it updates when a number changes.',
        yours: { text: 'Change one Actual value and watch the percentage update on its own.' },
        check: ['A new column with a percentage in every row', 'Clicking a cell shows a formula, not a typed number', 'Rows without an Actual stay empty or are flagged'],
      },
      {
        title: 'Bring in outside data', goal: 'Enrich: add information that isn’t in the workbook yet.', time: 7, test: true,
        start: [['downloads/kpi-register.xlsx', 'kpi-register.xlsx'], ['downloads/project-updates.txt', 'project-updates.txt']],
        intro: 'Pick one. The first two use the web, the third uses your work data. For the third, imagine the notes in <code>project-updates.txt</code> are in your mailbox.',
        variants: [
          ['From the web', 'Add a column with the current EUR exchange rate for each currency in this table, and name your source.'],
          ['From the web', 'Add an industry benchmark for each KPI as a new column, with the source.'],
          ['From your emails and notes', 'Fill in Latest_Status on the Initiatives sheet with the latest status of each initiative from my emails and meeting notes.'],
        ],
        alt: { label: 'If web or work data isn’t available in your tenant', text: 'Open <code>project-updates.txt</code>, copy all of it, and paste it in after this prompt:', prompt: 'Here are the latest project notes. Fill in Latest_Status on the Initiatives sheet with one short sentence per initiative, based only on these notes:' },
        note: 'Whether Copilot in Excel can search the web or read your emails depends on your organisation’s settings. We’re still testing this in ERGO’s tenant, which is why the fallback prompt is there.',
        wow: 'The register now knows something it didn’t before: an exchange rate with its source, or a status for every initiative, pulled from notes in seconds.',
        check: ['A new column or filled Latest_Status cells', 'Copilot says where the information came from', 'Nothing in the existing columns changed'],
      },
      {
        title: 'Clean it up', goal: 'Clean and standardise: one messy column at a time.', time: 6,
        start: [['downloads/kpi-register.xlsx', 'kpi-register.xlsx']],
        prompt: 'Clean the Currency column: use ISO codes such as EUR and PLN everywhere, and show me what you changed.',
        prompt2: 'Now convert every date in Reported_On to the format yyyy-mm-dd and tell me which ones you couldn’t read.',
        more: { label: 'Advanced', prompt: 'Standardise the country, business unit and KPI names, and list which spellings you merged.' },
        note: 'Basic groups: one column is enough. The point is to see Copilot explain what it changed.',
        wow: '€, Euro and eur become EUR; zł becomes PLN; 04.03.2026 and 4 Mar 2026 become 2026-03-04. Copilot tells you what it changed, so you can check it.',
        check: ['Only ISO codes left in Currency', 'One date format in Reported_On', 'Dates that don’t exist, such as 31 June, are flagged, not guessed'],
      },
      {
        title: 'Colour tells the story', goal: 'Conditional formatting: see what matters without reading every number.', time: 4,
        start: [['downloads/kpi-register-clean.xlsx', 'kpi-register-clean.xlsx']],
        prompt: 'Highlight the Variance_vs_Target column: red below −10%, amber from −10% to 0%, green from 0% up.',
        prompt2: 'Also shade every row with Status “Off track” in light red.',
        yours: { text: 'Change the thresholds to the ones your team uses and ask again.' },
        wow: 'The red cells jump out. You see which countries and KPIs are behind before you read a single number.',
        check: ['Three colours in Variance_vs_Target', 'Off-track rows shaded', 'The rules show up under Home → Conditional Formatting → Manage Rules'],
      },
      {
        title: 'A skill Microsoft already wrote', goal: 'Use one of Excel’s built-in skills on the finished table.', time: 5,
        start: [['downloads/kpi-register-clean.xlsx', 'kpi-register-clean.xlsx']],
        intro: 'Excel comes with skills built in. Type <b>@</b> in the Copilot prompt box to see them, or select <b>+</b> → <b>Choose plugins and skills</b>. Pick one:',
        variants: [
          ['Formatting', '@theme-design Make this workbook look professional and consistent.'],
          ['Visualisation', '@chart-design Create a chart that compares Actual and Target by country for Gross written premium.'],
          ['Analysis', '@clean-data Check this workbook for data issues and explain what you find.'],
        ],
        note: 'Microsoft is still rolling these skills out. If you don’t see one, try another, or ask your trainer.',
        wow: 'The chat says which skill it loaded, then follows rules Microsoft wrote for that task. It is the same idea as a custom skill, written by someone else.',
        check: ['The chat shows that a skill was loaded', 'The sheet or chart changed the way the skill describes'],
      },
      {
        title: 'Dashboard, level 1', goal: 'A native Excel dashboard with PivotTables and charts.', time: 7,
        start: [['downloads/kpi-register-clean.xlsx', 'kpi-register-clean.xlsx']],
        prompt: 'Create a dashboard on a new sheet with PivotTables and charts: Actual vs Target by country, the monthly trend of Actual_EUR, and how many KPIs are on track, at risk and off track.',
        media: { type: 'image', image: 'assets/media/kpi-dashboard.jpg', caption: 'One possible result. Yours will look different.' },
        wow: 'A new sheet with PivotTables and charts, built from your register. Change a number in the register, refresh, and the dashboard follows.',
        check: ['A new sheet with at least two PivotTables', 'Charts next to them', 'Spot-check one country: the totals match the register'],
      },
      {
        title: 'Dashboard, level 2', goal: 'Make the dashboard interactive.', time: 6,
        start: [['downloads/kpi-register-dashboard.xlsx', 'kpi-register-dashboard.xlsx']],
        prompt: 'Make this dashboard interactive: add slicers for Country and KPI and a timeline for Month, connected to all PivotTables.',
        variants: [['Only if you see it: a built-in skill that’s still rolling out', '@interactive-canvas Turn this workbook into an interactive executive review I can click through.', { how: 'Type <b>@</b> in the Copilot prompt box. If <b>interactive-canvas</b> isn’t in the list, skip this: most people won’t have it yet.' }]],
        note: '<code>interactive-canvas</code> is a Microsoft built-in skill for Excel, but it’s still rolling out and isn’t available to everyone. The slicers above work everywhere.',
        wow: 'Click Poland and every PivotTable and chart follows. Your dashboard now answers questions you haven’t asked yet.',
        check: ['Slicers for Country and KPI', 'Clicking a slicer changes every PivotTable', 'A timeline for Month, if your Excel supports it'],
      },
      {
        title: 'Dashboard, final stage', goal: 'An HTML dashboard from one prompt, designed your way.', time: 8,
        start: [['downloads/kpi-register-clean.xlsx', 'kpi-register-clean.xlsx']],
        switchTo: { pill: 'Copilot Chat, not Excel', title: 'This step leaves Excel', text: 'Open Microsoft 365 Copilot Chat in a new tab. Select <b>+</b> (or type <b>/</b>) and attach <code>kpi-register-clean.xlsx</code> from OneDrive, then send the prompt there.', url: 'https://m365.cloud.microsoft/chat', cta: 'Open Copilot Chat' },
        prompt: 'Create a self-contained HTML dashboard from the Register sheet of kpi-register-clean.xlsx: KPI tiles, a chart of Actual vs Target by country and a monthly trend. Use ERGO’s colours (red #BF1629, charcoal #242424, white), the word “ERGO” as a text logo, and the label “Illustrative figures for training purposes, not ERGO results” in the footer. No external files or links. Show the complete HTML in one code block.',
        ideas: ['Add a filter by country', 'Add a search box for KPIs', 'Let me select several countries at once', 'Make the tiles clickable so they filter the charts', 'Add a switch between English and German'],
        how: 'If Copilot Chat shows a preview, try it right there. To keep the page, copy the code, paste it into Notepad and save it as <code>dashboard.html</code> (under “Save as type” choose <b>All files</b>). Double-click the file to open it in your browser.',
        note: 'Why not in Excel? HTML dashboards don’t render inside Excel yet in every tenant, so this step uses Copilot Chat with your workbook attached.',
        wow: 'A web page with your numbers, in ERGO colours. Then make it yours: every idea below is one more prompt.',
        check: ['The file opens in your browser', 'Tiles and charts show the register’s numbers', 'At least one idea of your own added'],
      },
    ],
    sideQuests: [
      { id: 'xls-byo', type: 'byo', title: 'Bring your own skill', time: 15, skill: 'ergo-register-cleaner' },
      { id: 'xls-to-ppt', type: 'link', title: 'Finished early?', time: 0, what: 'Go to the PowerPoint trail and build a board deck from a memo.', href: 'trail.html?t=ppt', cta: 'PowerPoint trail →' },
    ],
    byo: {
      why: 'You just did steps 4–6 by hand. If you do this every month, a skill does it in one go, and always the same way.',
      parts: [
        ['Name and description', 'When Copilot should use it, with trigger phrases such as “clean my register” or “prepare the monthly KPI file”.'],
        ['Steps', 'Standardise currencies and dates, fix spelling variants, flag missing values, apply colour rules with thresholds, add a summary row.'],
        ['Output rules', 'What the finished sheet looks like: column order, colours, table name.'],
        ['Don’t rules', 'Never delete rows. List every change in a note.'],
      ],
      steps: [
        'Download the template below.',
        'Change one rule to fit your team, for example a different threshold or colour. Lines marked <code>Change this rule</code> are a good place to start.',
        'Upload it. The clicks are shown below.',
        'Open the second messy file, <code>kpi-register-q3.xlsx</code>, and ask: <b>Clean my register.</b>',
        'Check the result. If something is off, fix the instructions.',
        'Upload the new version and run it again.',
      ],
      files: [['downloads/kpi-register-q3.xlsx', 'Second messy file: kpi-register-q3.xlsx']],
      prompt: 'Clean my register.',
      builder: '@skill-builder Save what we just did to a new skill.',
      ideas: [
        ['ERGO monthly report formatter', 'Same layout, colours and summary row every month.'],
        ['KPI commentary writer', 'Three bullet points per KPI in management language.'],
        ['Data quality checker', 'Lists the problems in a sheet without changing anything.'],
      ],
      success: 'Your skill worked if Copilot says it loaded the skill, and the second file looks like the first one did after step 6.',
    },
  },

  // ======================================================================
  // Trail 2 · PowerPoint · Executive Presentation
  // ======================================================================
  ppt: {
    app: 'PowerPoint', tool: 'PowerPoint', name: 'The Board Meeting', persona: 'Storyteller', group: 2, useCase: 'Executive Presentation',
    web: ['PowerPoint for the web', 'https://powerpoint.cloud.microsoft'],
    mission: 'The board meets next week. Build the deck from a memo and the numbers, rehearse the questions, then make it ERGO.',
    kit: { file: 'downloads/powerpoint-kit.zip', size: 'about 250 KB', contents: ['board-memo.docx', 'q3-figures.xlsx', 'board-pack-ready.pptx', 'messy-draft.pptx', '3 skill ZIPs'] },
    setup: [
      'Download the kit and unzip it once. Keep the files in <code>skills/</code> zipped.',
      'Upload <code>board-memo.docx</code>, <code>q3-figures.xlsx</code>, <code>board-pack-ready.pptx</code> and <code>messy-draft.pptx</code> to your OneDrive.',
      'Open PowerPoint for the web and select <b>Copilot</b> on the Home tab.',
    ],
    levels: {
      basic: 'Aim for steps 1–4, then step 6 if you have time.',
      advanced: 'Run steps 1–4 quickly, then go for 5–8. Step 8 is for you.',
    },
    trouble: [
      ['Creating the deck takes ages', 'That’s normal: a few minutes. Don’t wait. Open <code>board-pack-ready.pptx</code> in a new tab and do step 2.'],
      ['Copilot can’t find my Word file', 'Make sure it’s in OneDrive, then attach it with <b>+</b> (Add) → <b>Attach</b>, or type <b>/</b> and start typing the file name.'],
      ['I can’t edit my interactive slide', 'That’s by design: interactive slides are changed by prompting Copilot, not by clicking into the slide. Keep the Copilot pane open and describe the change.'],
    ],
    steps: [
      {
        title: 'A deck from a document', goal: 'Start this first: it takes a few minutes.', time: 6,
        start: [['downloads/board-memo.docx', 'board-memo.docx'], ['downloads/q3-figures.xlsx', 'q3-figures.xlsx']],
        open: 'a new blank presentation in PowerPoint for the web',
        how: 'In the Copilot pane, select <b>+</b> (Add) and attach <code>board-memo.docx</code> from OneDrive, or type <b>/</b> and pick the file. Then send one of these:',
        variants: [
          ['Word only', 'Create a board presentation from this document.'],
          ['Word plus Excel numbers', 'Create a board presentation from this document. Use the figures in q3-figures.xlsx for a KPI slide.'],
        ],
        waiting: { text: 'This takes a few minutes. Don’t wait: open <code>board-pack-ready.pptx</code> in a new tab and go to step 2.', href: 2 },
        media: { type: 'morph', notes: ['assets/media/cfo-notes-p1.jpg', 'assets/media/cfo-notes-p2.jpg', 'assets/media/cfo-notes-p3.jpg'], slides: ['assets/media/ppt-step2-s1.jpg', 'assets/media/ppt-step2-s2.jpg', 'assets/media/ppt-step2-s3.jpg', 'assets/media/ppt-step2-s4.jpg', 'assets/media/ppt-step2-s5.jpg'], caption: 'Three pages of notes in, a board deck out. Yours will look different.' },
        wow: 'Three pages of notes become a full board deck with speaker notes, while you work on something else.',
        check: ['A deck with a title slide and the memo’s main points', 'Speaker notes on the slides', 'With the Excel variant: a slide with the Q3 figures'],
      },
      {
        title: 'Rehearse the board', goal: 'Know the questions before the board asks them.', time: 8,
        start: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx']],
        prompt: 'What is this deck about?',
        prompt2: 'What questions could the board ask me about this deck?',
        more: { label: 'Then', prompt: 'Add each question and a short answer to the speaker notes of the slide it belongs to.' },
        media: { type: 'panel', image: 'assets/media/ppt-step4-s6.jpg', caption: 'The panel takes its seats.' },
        wow: 'The hardest fair questions, before the meeting, with an answer for each in the notes of the right slide.',
        yours: { text: 'Pick the board member you’re most nervous about.', prompt: 'Which of these questions would the CFO ask first, and how should I answer in two sentences?' },
        check: ['A short summary of the deck', 'Five or more questions a board would ask', 'Questions and answers in the speaker notes'],
      },
      {
        title: 'One slide, two ways', goal: 'Compare a text slide with an image-generated one.', time: 6,
        start: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx']],
        variants: [
          ['Without image generation (fast)', 'Add a slide after slide 2 that shows our three priorities for 2027 as three columns, each with an icon. No pictures.'],
          ['With image generation', 'Add the same slide again, this time with a generated image of a modern claims service team.'],
        ],
        note: 'Watch the clock: how long does each one take, and which would you show the board?',
        wow: 'Two versions of the same slide. One appears in seconds, the other takes longer and looks different. You choose.',
        check: ['Two new slides with the same three priorities', 'One with icons only, one with a generated image', 'You know which you’d keep, and why'],
      },
      {
        title: 'Auf Deutsch, bitte', goal: 'Translate the deck for the supervisory board.', time: 4,
        start: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx']],
        prompt: 'Make a German version of this deck for the supervisory board.',
        wow: 'The same deck in German, figures unchanged, ready for German-speaking board members.',
        check: ['Every slide in German', 'Numbers and dates unchanged', 'Speaker notes translated too'],
      },
      {
        title: 'Interactive Slides', goal: 'A built-in skill: a slide your audience can click through.', time: 6,
        start: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx'], ['downloads/q3-figures.xlsx', 'q3-figures.xlsx']],
        how: 'Select <b>Interactive Slide</b> on the <b>Home</b> or <b>Insert</b> tab. Pick a category (<b>Summary</b>, <b>Timeline</b>, <b>Dashboard</b>, <b>Comparison</b>) or <b>Custom</b>. You’ll also find <b>Create interactive slide</b> in the Copilot pane under <b>+</b> → <b>Choose skills</b>. To use the figures, type <b>/</b> and pick <code>q3-figures.xlsx</code>.',
        variants: [
          ['Dashboard from your Excel file', 'Create an interactive dashboard slide from /q3-figures.xlsx: tabs for gross written premium, combined ratio and operating result, each comparing the business units with plan and prior year.'],
          ['Timeline from the deck', 'Create an interactive timeline slide of the next steps in this deck, so I can click through each step and see what happens and who decides.'],
        ],
        more: { label: 'Then refine it by prompting', prompt: 'Make the charts bar charts, add a filter by business unit, and match the colours to this deck.' },
        alt: { label: 'If the Interactive Slide button is missing', text: 'Check you’re in PowerPoint for the web. If it’s still not there, upload our workaround skill (clicks as in step 6). It builds a clickable overview with links to detail slides:', prompt: 'Make slide 3 interactive: one tile per KPI that links to a detail slide, and a “Back to overview” link on every detail slide.' },
        skillFiles: ['interactive-slides-workaround'],
        note: 'Change an interactive slide by prompting Copilot, not by editing the slide itself. In a Teams meeting (PowerPoint Live) every attendee clicks around on their own and doesn’t see the presenter’s clicks, so it’s great to explore and less suited to presenting. Optional: try it in pairs in a Teams meeting on the room monitor. Viewers don’t need a Copilot licence. Exported to PDF, the slide becomes a still image.',
        wow: 'A slide that works like a small app: tabs, filters and steps your audience can explore, filled with the numbers from your own workbook.',
        check: ['A slide you can click through in Slide Show: tabs, filters or steps', 'The numbers match q3-figures.xlsx (for example Group GWP EUR 4,125m)', 'You changed it at least once by prompting'],
      },
      {
        title: 'Make it ERGO', goal: 'Your first custom skill: the ERGO brand.', time: 7,
        start: [['downloads/messy-draft.pptx', 'messy-draft.pptx']],
        open: 'your deck from step 1, or messy-draft.pptx',
        upload: { skill: 'ergo-brand', app: 'ppt', explore: true },
        prompt: 'Make these slides board-ready.',
        media: { type: 'compare', before: 'assets/media/messy-draft-s2.jpg', after: 'assets/media/ppt-step1-s2.jpg', caption: 'Drag to compare. Before: the messy draft. After: with the ERGO Brand skill.' },
        wow: 'Same facts in ERGO style: message headlines, clean layout, one red accent and a flat chart. You never named the skill: Copilot read its description and picked it.',
        yours: { text: 'Open <b>Custom skills</b>, select <b>ergo-brand</b> and change “Maximum 3 bullets” to “Maximum 2 bullets”. Ask again and watch the slides follow your rule.', prompt: 'Make these slides board-ready.' },
        check: ['“Loaded ergo-brand skill” (or similar) in the chat', 'Every number unchanged', 'Message headlines and one red accent per slide'],
        skills: ['ergo-brand'],
      },
      {
        title: 'Turn it into a skill', goal: 'You’ll rehearse every board meeting. Turn exactly that into a skill.', time: 6,
        start: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx']],
        prompt: 'Turn what we did in step 2 into a custom skill: summarise the deck, list the questions the board could ask, and add each question with a short answer to the speaker notes of the right slide. Write it as a SKILL.md with a name, a description of when to use it, and numbered steps.',
        how: 'Copy the SKILL.md Copilot writes. Then select <b>…</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b> → <b>Create manually</b> and paste it in.',
        more: { label: 'Test it', prompt: 'Rehearse the board meeting with me. What will they ask?' },
        alt: { label: 'If your own skill doesn’t work yet', text: 'Upload our version, Board Rehearsal, and test it with the same prompt.' },
        skillFiles: ['ergo-board-sparring'],
        wow: 'A routine you did once is now a skill. Next quarter, one sentence does it.',
        check: ['A SKILL.md with name, description and steps', 'The skill shows up under Custom skills', '“Loaded … skill” when you test it'],
        skills: ['ergo-board-sparring'],
      },
      {
        title: 'Record a skill', goal: 'Advanced: show Copilot once, reuse it everywhere.', time: 6, level: 'advanced',
        start: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx'], ['downloads/messy-draft.pptx', 'messy-draft.pptx']],
        how: '<ol><li>Select <b>+</b> → <b>Choose skills</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b> → <b>Record a skill</b>.</li><li>Make simple changes by hand, for example make the heading bigger, and set all slide text to Arial.</li><li>Select <b>Stop</b>, review the draft Copilot writes, and upload it.</li><li>Open the other deck and reuse it. Say the scope out loud:</li></ol>',
        variants: [
          ['All slides', 'Apply my recorded skill to all slides in this deck.'],
          ['This slide only', 'Apply my recorded skill to this slide only.'],
        ],
        more: { label: 'Bonus, outside PowerPoint', prompt: 'Turn this deck into an email to my team.' },
        wow: 'You never wrote a rule. You showed Copilot once, and now the other deck looks the same.',
        check: ['A recorded skill under Custom skills', 'The other deck changed in the scope you asked for'],
      },
    ],
    sideQuests: [
      { id: 'ppt-persona', title: 'A tougher panel', time: 3, prompt: 'Add a journalist and an activist investor to the rehearsal.', what: 'Two more seats at the table, same rules.' },
      { id: 'ppt-townhall', title: 'Town hall', time: 4, prompt: 'Turn this board deck into a three-minute town-hall talk for employees.', what: 'Same facts, different audience, different tone.' },
      { id: 'ppt-to-cos', type: 'link', title: 'Finished early?', time: 0, what: 'Try the Chief-of-Staff trail and build your own agent.', href: 'trail.html?t=cos', cta: 'Chief-of-Staff trail →' },
    ],
  },

  // ======================================================================
  // Trail 3 · Chief of Staff · Outlook / Copilot Chat
  // ======================================================================
  cos: {
    app: 'Copilot Chat & Outlook', tool: 'Outlook / Copilot Chat', name: 'The Chief of Staff', persona: 'Orchestrator', group: 3, useCase: 'Chief-of-Staff',
    web: ['Microsoft 365 Copilot', 'https://m365.cloud.microsoft/chat'],
    mission: 'Make Copilot your own Chief of Staff. Start with prompts, notice what you do every day, then build an agent that does it your way.',
    kit: { file: 'downloads/chief-of-staff-kit.zip', size: 'about 10 KB', contents: ['demo-meeting-transcript.txt', 'sample-emails.md', 'my-priorities.md', 'sample-voice-texts.md'] },
    setup: [
      'Download the kit and unzip it. Nothing needs uploading yet.',
      'Open Microsoft 365 Copilot in the browser (<b>m365.cloud.microsoft</b>) and keep Outlook for the web open in a second tab.',
      'Your mailbox doesn’t have workshop content, so the kit has a demo meeting transcript and sample emails. Imagine they are yours.',
    ],
    levels: {
      basic: 'Aim for step 1 and an agent from step 2 with starter prompts.',
      advanced: 'Run step 1 quickly, build the full agent in step 2 including My Voice, then go for steps 3–5.',
    },
    trouble: [
      ['I can’t find Agent Builder', 'In Microsoft 365 Copilot, look for <b>Agents</b> → <b>New agent</b> (or <b>Create agent</b>) in the left pane. If it isn’t there, it may not be enabled in your tenant yet: ask your trainer and pair up.'],
      ['Copilot doesn’t find any emails', 'Your mailbox may be new or empty. Use <code>sample-emails.md</code>: paste it in and ask the same question.'],
      ['My agent can’t send or draft emails', 'That’s expected: agents built in Agent Builder can read but not write. See step 3 for the trick.'],
    ],
    steps: [
      {
        title: 'Prompts first', goal: 'Copilot Chat as your Chief of Staff, with no setup.', time: 10,
        open: 'Microsoft 365 Copilot Chat',
        intro: 'Try these one by one. The first three use your own mailbox and calendar. The last one uses a demo meeting.',
        variants: [
          ['Your day', 'Prioritise my day.'],
          ['Your week', 'Prioritise my week.'],
          ['Your inbox', 'Which emails from last week still need a reply? Draft replies for the three most important.', { how: 'Open a draft reply in Outlook and edit it before sending, or don’t send it at all.' }],
          ['A meeting', 'Summarise this meeting: decisions, action items with owners and dates, and open questions.', { files: [['downloads/demo-meeting-transcript.txt', 'demo-meeting-transcript.txt']], how: 'Imagine this was your meeting. Download the transcript, then in Copilot Chat select <b>+</b> and upload the file. Or open it, copy all the text and paste it after the prompt.' }],
        ],
        alt: { label: 'If your mailbox is empty', files: [['downloads/sample-emails.md', 'sample-emails.md']], text: 'Download the sample emails, open the file, copy all of it and paste it in after this prompt:', prompt: 'Here are emails from last week. Which still need a reply? Draft replies for the three most important:' },
        wow: 'In a few minutes: a prioritised day, the replies you owe, and a meeting reduced to decisions and actions. You’ll want this every morning. That’s where the agent comes in.',
        check: ['A prioritised list for your day or week', 'At least one draft reply you edited', 'A meeting summary with owners and dates'],
      },
      {
        title: 'Build your Chief-of-Staff agent', goal: 'You do this every day. Build an agent that does it your way.', time: 15, test: true,
        start: [['downloads/my-priorities.md', 'my-priorities.md'], ['downloads/sample-voice-texts.md', 'sample-voice-texts.md']],
        open: 'Microsoft 365 Copilot → Agents → New agent',
        how: 'Describe the agent in the chat on the left. Don’t paste long instructions: describe it like you would to a new assistant, then make small tweaks in <b>Configure</b>.',
        prompt: 'Create an agent called “My Chief of Staff”. It helps me, a Head of Customer Service, organise my day and week, decide which emails need a reply, and draft replies in my voice. Everything from my team is priority 1. Requests from the board office are answered the same day. For meetings without an agenda, suggest I ask for one.',
        build: [
          ['Personalise it', 'Add your role, your three priorities and your own rules, for example “everything from my team is priority 1”.'],
          ['Add My Voice', 'Paste three of your own emails or messages, or the samples from <code>sample-voice-texts.md</code>, and ask: <q>Describe my tone of voice in the instructions so drafts sound like me.</q> Or upload them as knowledge.'],
          ['Add knowledge', 'Upload <code>my-priorities.md</code> under <b>Knowledge</b>, and switch on file upload so you can give it documents later.'],
          ['Starter prompts', '“Organise my day” · “Organise my week” · “What do I need to do today?” · “Draft a reply in my voice”.'],
          ['An icon', 'In <b>Configure</b>, change the icon. Ask Copilot to create one, or upload your own.'],
        ],
        use: { label: 'Open and use your agent', steps: [
          'Select <b>Create</b> in the top right. Agent Builder saves the agent for you.',
          'When it says your agent is ready, select <b>Go to agent</b>. Later you’ll find it under <b>Agents</b> in the left pane of Copilot Chat.',
          'You’re now chatting with your agent: its name is at the top. Select one of the starter prompts, or type the test prompt below.',
        ] },
        more: { label: 'Test it', prompt: 'Draft a reply in my voice to the most urgent email from my team.' },
        wow: 'An agent that knows your role, your rules and how you write. Next Monday, “Organise my week” is one click.',
        check: ['The agent appears under Agents', 'Its instructions mention your priorities and your tone', 'A test draft that sounds like you'],
        skills: ['chief-of-staff', 'my-voice'],
      },
      {
        title: 'The agent reads, Copilot writes', goal: 'Use the agent in context, then let Copilot Chat do the writing.', time: 6,
        switchTo: { pill: 'New Copilot Chat', title: 'Start a new Copilot Chat window', text: 'Leave Agent Builder. Open Copilot Chat in a new tab (or select <b>New chat</b>), so you’re in normal Copilot Chat, not in the agent you just built.', url: 'https://m365.cloud.microsoft/chat', cta: 'Open Copilot Chat' },
        how: 'Agents built in Agent Builder can read but not write. So ask the agent first, then remove it from the chat and let Copilot draft or send. Very few people know this.',
        variants: [
          ['1 · Ask the agent', '@My Chief of Staff Which emails do I need to write today?', { how: 'In the new chat, type <b>@</b> and pick <b>My Chief of Staff</b>.' }],
          ['2 · Remove the agent, then ask Copilot', 'Draft those replies, short and in my voice, so I can review them in Outlook.'],
        ],
        note: 'To remove the agent, select the <b>×</b> on its name above the prompt box, or start a new chat without it.',
        wow: 'Your agent’s judgement plus Copilot’s ability to write: the list of replies, then the drafts, in one conversation.',
        check: ['The agent answered with a list', 'Copilot drafted the replies without the agent selected', 'At least one draft opened in Outlook'],
      },
      {
        title: 'Your agent in Outlook', goal: 'Bring the agent to where the emails are.', time: 5,
        open: 'Outlook for the web',
        how: 'Open the Copilot pane in Outlook and pick your agent, or type <b>@</b> and its name.',
        prompt: '@My Chief of Staff What do I need to do today?',
        wow: 'The same agent, right next to your inbox.',
        check: ['Your agent answers inside Outlook', 'It uses your priorities and rules'],
      },
      {
        title: 'Weekly briefing as a Page', goal: 'A briefing you can tick off.', time: 6, test: true,
        prompt: 'Create my weekly briefing: top priorities, meetings that matter, replies I owe, and a to-do list I can tick off.',
        how: 'Then select <b>Edit in Pages</b> (or ask Copilot to put it in a Copilot Page) and turn the to-dos into a checklist.',
        note: 'Without Cowork, Copilot can only recommend calendar clean-up, such as cancelling a meeting. It can’t do it for you. Researcher is optional and slower.',
        wow: 'A living page: your week, in one place, with boxes to tick.',
        check: ['A Copilot Page with your briefing', 'A to-do list you can tick off'],
      },
    ],
    sideQuests: [
      { id: 'cos-researcher', title: 'Researcher (optional, slow)', time: 8, prompt: 'Research what changed in customer service expectations in German insurance this year and give me three implications for my team.', what: 'A deeper, slower answer with sources. Start it, then do something else.' },
      { id: 'cos-to-xls', type: 'link', title: 'Finished early?', time: 0, what: 'Try the Excel trail and clean a messy KPI register.', href: 'trail.html?t=xls', cta: 'Excel trail →' },
    ],
  },
};

// Bonus track for anyone who finishes early, on every trail.
ADV.bonus = {
  title: 'Bonus: Copilot Notebooks',
  text: 'Pick a project or a customer of your choice. Create a notebook, add the files, notes and pages that matter, then try the audio overview. No prompts this time: it’s yours to explore.',
};

ADV.shareOut = {
  intro: 'Two people from your group present for two minutes, on the room monitor or in the main room. Prepare it together.',
  parts: [
    ['What we tried', 'One sentence about your trail and how far you got.'],
    ['The moment it clicked', 'Show it on screen: the slide, the dashboard or the agent.'],
    ['Where it struggled', 'Honest is useful. What didn’t work, or took longer than expected?'],
    ['Monday morning', 'One thing each of you will use next week.'],
    ['The skill or agent our team would build', 'Finish the sentence: “Our team’s skill would…”'],
  ],
  prompt: 'Help me prepare a two-minute share-out of what our group did today. We tried [trail], the moment it clicked was [moment], it struggled with [problem], and on Monday we will [plan]. Keep it to five short bullet points.',
  stayLive: 'This site stays live for a few more days, so try the other trails too.',
};

// Facilitator view only (presenter mode): still to be confirmed.
ADV.openPoints = [
  'Is Agent Builder enabled in ERGO’s tenants? There are several.',
  'Rebecca tests the prompts in an ERGO environment.',
  'Test with a user without usage-based billing and not on Frontier: the experience differs.',
  'Interactive Slides: Microsoft’s rollout to PowerPoint for the web finished end of October 2026 and there are no admin controls. Confirm the button shows in ERGO’s tenant.',
  'Do web data and work data (emails) work in Excel in ERGO’s tenant? (Trail 1, step 3)',
  'Which built-in Excel skills are live in ERGO’s tenant? @theme-design, @chart-design, @clean-data and @interactive-canvas are still rolling out. (Trail 1, steps 6 and 8)',
];

ADV.library = [
  { mood: '🎯 Sharpen', items: [
    ['Say the message of this slide in one sentence.', 'One sentence, 20 words or fewer.'],
    ['Cut this slide to three bullets without losing a number.', 'Three bullets; the rest moves to the speaker notes.'],
    ['What’s the weakest sentence in this deck?', 'One sentence quoted, with a stronger rewrite.'],
  ] },
  { mood: '🔄 Reshape', items: [
    ['Turn this into a one-page memo for the board.', 'A memo with a subject line, the message first and the ask last.'],
    ['Make this a table: unit, actual, target, gap.', 'A four-column table, ready to paste.'],
    ['Turn this into an email to my team.', 'A short email draft. You send it, not Copilot.'],
  ] },
  { mood: '🌍 Translate', items: [
    ['Make a German version for the supervisory board.', 'The same content in German, figures unchanged.'],
    ['Explain this to a new team member in five sentences.', 'Plain language, no abbreviations.'],
    ['What would our customers care about in this?', 'Two or three points from a customer’s point of view.'],
  ] },
  { mood: '🧠 Learn', items: [
    ['Which skill did you use, and what did it change?', 'The skill name and the rules it followed.'],
    ['What would you add to this skill to make it better?', 'Two or three concrete rule suggestions.'],
    ['Write a skill for a task I repeat every week: [describe it].', 'A draft SKILL.md with a name, description and steps.'],
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

// ---------- Summit expedition layer (kept light) ----------
// Each skill or agent is a piece of gear in the backpack.
ADV.gear = {
  'ergo-register-cleaner': ['🔦', 'Headlamp'],
  'ergo-brand': ['🧭', 'Compass'], 'ergo-board-sparring': ['🪢', 'Rope team'], 'interactive-slides-workaround': ['🗺️', 'Map'],
  'chief-of-staff': ['📟', 'Radio'], 'my-voice': ['🚩', 'Your own flag'],
};
ADV.altitude = { base: 1200, perStep: 300, flag: 50 };
ADV.think = {};
ADV.radio = {};

ADV.buddyLines = {
  anatomy: 'Hi, I’m your Copilot for this climb. Scroll down to see what a skill is made of.',
  base: 'I’ll climb with you. First stop: open the web app.',
  step: 'Copy the prompt and paste it into my pane in {app}. I’ll wait here.',
  copied: 'Got it. Paste it into Copilot in {app}. Come back when you see the result.',
  done: 'Camp reached. +{m} m.',
  summit: 'Summit! {alt} m. Time to prepare your share-out.',
  quests: 'Scenic detours. Pick any.',
  library: 'Every prompt from every trail, step by step.',
  finale: 'Look how far you climbed. Let’s make your summit certificate.',
  playground: 'That’s all a skill is: rules you can change.',
};
