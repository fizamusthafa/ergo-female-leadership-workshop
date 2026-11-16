// All workshop content in one place. Pages render from this file.
// Every figure in the sample files is invented (illustrative, not ERGO results).
window.ADV = window.ADV || {};

ADV.config = {
  // Facilitator: paste the link to a shared Form or Whiteboard for the share-out wall.
  wallUrl: '',
  // Floating Copilot companion. Parked; set to true to bring it back.
  buddy: false,
  // Presenter countdown. Off by default. Set countdown to true to show it on every room laptop,
  // or turn it on for one laptop with index.html?presenter&countdown (or &countdown=75, &countdown=off).
  countdown: false,
  // Session length in minutes; the countdown starts here and the chapters below assume it.
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
  ['👥', 'No premium licence?', 'Pair up with a neighbour and work on one screen. You can still follow every step.', 'licence'],
  ['⏭️', 'Skip whenever you like', 'Every step has its own start file, so you never need the result of an earlier step.'],
];

// Troubleshooting, shown (collapsed) on every trail page. Trail-specific items are added per trail.
ADV.trouble = [
  ['There’s no skills folder in my OneDrive', 'In the Copilot pane, select <b>…</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Create OneDrive folder</b>. Copilot creates it. Then select <b>Open skills folder</b>.'],
  ['The Add skill button is missing', 'You’re probably in the desktop app. Open the same file in the browser (<b>File</b> → <b>Open in browser</b>, or via office.com) and look again.'],
  ['My skill isn’t showing up yet', 'It can take a few minutes after the upload. Select <b>Refresh</b> under <b>Custom skills</b>, wait a moment and ask again. The folder name must match the <code>name:</code> line in SKILL.md.'],
  ['How do I know a skill was used?', 'Look for a line like <b>“Loaded … skill”</b> in the Copilot chat, just above the answer.'],
  ['I don’t have a premium Copilot licence', 'Work with a partner on one screen. Copy the prompts into their Copilot and take turns.', 'licence'],
];

ADV.skills = {
  'ergo-register-cleaner': { app: 'Excel', title: 'Register Cleaner', what: 'Your own skill, from our template: standardises a KPI register on any sheet, applies colour rules, adds a summary row and logs every change.', trigger: '"clean my register", "prepare the monthly KPI file"', zip: 'downloads/ergo-register-cleaner.zip', md: 'downloads/ergo-register-cleaner-SKILL.md' },
  'ergo-brand': { app: 'PowerPoint', title: 'ERGO Brand', what: 'Restyles any deck in ERGO board style: message headlines, one red accent, flat charts. Never changes a figure.', trigger: '"make these slides board-ready"', zip: 'downloads/ergo-brand.zip', md: 'downloads/ergo-brand-SKILL.md' },
  'ergo-deck': { app: 'PowerPoint', title: 'ERGO Deck', what: 'Rebuilds slides in the ERGO layout: red message titles, the ERGO logo, KPI tiles, grey panels, takeaway bands and flat charts. Native shapes, so everything stays editable. Never changes a figure.', trigger: '"ERGO deck", "ERGO style", "slides for ERGO"', zip: 'downloads/ergo-deck.zip', md: 'downloads/ergo-deck-SKILL.md' },
  'ergo-board-sparring': { app: 'PowerPoint', title: 'Board Rehearsal', what: 'Our version of the skill you build in step 4: the Chair, the CFO, a supervisor and the works council each ask their hardest question, answered from your deck.', trigger: '"rehearse", "what will they ask"', zip: 'downloads/ergo-board-sparring.zip', md: 'downloads/ergo-board-sparring-SKILL.md' },
  'ergo-motion-slides': { app: 'PowerPoint', title: 'ERGO Motion', what: 'Animated, clickable ERGO slides: tiles that count up, charts that grow. Live HTML inside the slide, the same mechanism as Interactive Slides, with a still picture for PDF.', trigger: '"animated ERGO slides", "ERGO motion slides"', zip: 'downloads/ergo-motion-slides.zip', md: 'downloads/ergo-motion-slides-SKILL.md' },
  'interactive-slides-workaround': { app: 'PowerPoint', title: 'Interactive Slides (workaround)', what: 'Only if the Interactive Slide button is missing: turns one slide into a clickable overview that links to detail slides.', trigger: '"make this slide interactive"', zip: 'downloads/interactive-slides-workaround.zip', md: 'downloads/interactive-slides-workaround-SKILL.md' },
  'chief-of-staff': { app: 'Copilot Chat', title: 'Your Chief of Staff', kind: 'agent', what: 'Your custom instructions plus a scheduled morning sweep: knows your priorities, writes your to-do list before you arrive, and drafts replies in your voice. No agent needed.', trigger: 'every weekday at 07:45, or open your Workspace' },
  'my-voice': { app: 'Any', title: 'My Voice', what: 'Your writing style as short rules, saved as a Copilot Chat skill. Use it whenever you ask for something in your voice.', trigger: '"in my voice"', md: 'downloads/my-voice-SKILL.md' },
};

ADV.badges = {
  'clippy': { icon: '📎', title: "Clippy's friend", what: 'You met Clippy. Hands up in the room!' },
  'haiku-summary': { icon: '🌸', title: 'Haiku summary', what: 'A hidden skill: any file, summarised in 17 syllables.', download: 'downloads/haiku-summary.zip' },
  'all-quests': { icon: '🏔️', title: 'Summit', what: 'Every side quest on your trail completed.' },
  'ppt-pick-deck': { icon: '🏛️', title: 'Brand keeper', what: 'You’d take ERGO Deck back to your desk: editable ERGO slides your team can keep working on.' },
  'ppt-pick-motion': { icon: '🎬', title: 'Showrunner', what: 'You’d take ERGO Motion back to your desk: one animated slide for the moment in the room.' },
  'ppt-pick-both': { icon: '🎼', title: 'Director', what: 'ERGO Deck for the pack, ERGO Motion for the key moment.' },
  'ppt-pick-brand': { icon: '🧭', title: 'Minimalist', what: 'You’d take ERGO Brand: rules only, nothing to run, slides stay as they are.' },
  'ppt-pick-builtin': { icon: '🧰', title: 'Pragmatist', what: 'PowerPoint’s built-in skills are enough for you, for now.' },
  'cos-pick-catchup': { icon: '🌅', title: 'Early riser', what: 'You want to walk in already knowing what matters and who is waiting.' },
  'cos-pick-prep': { icon: '🎯', title: 'Well briefed', what: 'No meeting that counts without a short brief beforehand.' },
  'cos-pick-follow': { icon: '🤝', title: 'Closer', what: 'Promises, replies and decisions: nothing you agreed to slips.' },
  'cos-pick-think': { icon: '♟️', title: 'Strategist', what: 'You want a sparring partner for the hard calls, not a secretary.' },
  'cos-pick-time': { icon: '🛡️', title: 'Guardian of time', what: 'Fewer meetings, protected focus time, and a calendar that works for you.' },
  'cos-pick-wait': { icon: '🔭', title: 'Observer', what: 'You’ll watch it work for a while before you hand anything over. Fair.' },
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
  // Trail 1 · Excel · Performance Review  (one workbook for the whole trail)
  // ======================================================================
  xls: {
    app: 'Excel', tool: 'Excel', logo: 'assets/img/brands/excel.png', name: 'The Numbers Room', persona: 'Analyst', group: 1, useCase: 'Performance Review',
    web: ['Excel for the web', 'https://excel.cloud.microsoft'],
    mission: 'A messy half-year performance register lands on your desk before the leadership meeting. Understand it, clean it, make the formulas do the thinking, and turn it into a dashboard. All in one workbook.',
    kit: { file: 'downloads/excel-kit.zip', size: 'about 150 KB', contents: ['kpi-workbook.xlsx', 'project-updates.txt', 'skill template'] },
    setup: [
      'Download <code>kpi-workbook.xlsx</code> with the red button above. It lands in your Downloads folder.',
      'Open OneDrive in the browser: <a href="https://onedrive.cloud.microsoft" target="_blank" rel="noopener">onedrive.cloud.microsoft</a>. Select <b>+ Create or upload</b> → <b>Files upload</b> and choose <code>kpi-workbook.xlsx</code>, or drag the file into the OneDrive window.',
      'Select the file in OneDrive. It opens in <b>Excel for the web</b>, in your browser. If the desktop app opens instead, close it and choose <b>Open in browser</b>.',
      'Select <b>Copilot</b> on the Home tab. Copilot in Excel only works on files saved in OneDrive or SharePoint.',
      'Start on the <b>Start_Here</b> sheet: it lists which sheet each step uses. That’s the only workbook you need today.',
    ],
    openHow: true,
    workbook: { file: 'downloads/kpi-workbook.xlsx', name: 'kpi-workbook.xlsx' },
    levels: {
      basic: 'Aim for steps 1–3. Take steps 4 and 5 if you have time.',
      advanced: 'Move quickly through step 1, spend time on the formulas in step 2, then pick from 3–5, or jump straight to the side quest <b>Bring your own skill</b>. Finish with the Advanced focus: <b>Copilot Workspaces</b> on the side-quest page.',
    },
    trouble: [
      ['Copilot is greyed out in Excel', 'Save the file to OneDrive or SharePoint and turn on <b>AutoSave</b>. Copilot needs a saved, online file.'],
      ['Copilot changed something I didn’t want', 'Press <b>Ctrl+Z</b>, or ask Copilot to undo it. The prepared <b>_Ready</b> sheets are there if you want a clean start.'],
      ['I skipped a step and my data isn’t clean', 'Use the <b>Register_Ready</b> sheet: it’s the cleaned register, ready for steps 2–5. For step 5 there’s also <b>Dashboard_Ready</b>.'],
    ],
    steps: [
      {
        title: 'Understand and clean', viz: 'xlclean', goal: 'Let Copilot explain a table you’ve never seen, then fix the mess.', time: 10,
        sheet: 'Register',
        tasks: [
          { title: 'What am I looking at?',
            prompt: 'What am I looking at on the Register sheet?',
            prompt2: 'What looks inconsistent or messy in this data?',
            note: 'If Copilot suggests changes with a <b>Fortfahren</b> (Continue) button: review the list, leave the changes you want ticked, untick the rest, then select <b>Fortfahren</b> to apply them.' },
          { title: 'Clean it up',
            prompt: 'On the Register sheet, clean the Currency column: use ISO codes such as EUR and PLN everywhere, and show me what you changed.',
            prompt2: 'Now convert every date in Reported_On to the format yyyy-mm-dd and tell me which ones you couldn’t read.',
            more: { label: 'Advanced', prompt: 'Standardise the country, business unit and KPI names using the Lookups sheet, and list which spellings you merged.' },
            note: 'Basic groups: one column is enough. The point is to see Copilot explain what it changed. If a <b>Fortfahren</b> (Continue) button appears, check the suggested changes, keep the relevant ones ticked and select <b>Fortfahren</b> to apply them.' },
        ],
        wow: 'Copilot reads the register in seconds: six countries, five KPIs, January to June. Then €, Euro and eur become EUR, 04.03.2026 becomes 2026-03-04, and Copilot tells you what it changed so you can check it.',
        check: ['A plain-language summary of the columns and the period', 'Only ISO codes in Currency, one date format in Reported_On', 'Dates that don’t exist, such as 31 June, are flagged, not guessed'],
      },
      {
        title: 'Formulas that think', viz: 'xlformula', goal: 'XLOOKUP, LET and a formula you didn’t have to write. On every row, for 1 or 10,000 rows.', time: 12,
        sheet: 'Register_Ready',
        intro: 'From here on, work on <b>Register_Ready</b>: the cleaned register as a table. It doesn’t matter how far you got with the clean-up.',
        tasks: [
          { title: 'Look things up',
            prompt: 'On Register_Ready, add two columns, Region and Country_Manager, using XLOOKUP on the tblCountries table on the Lookups sheet.',
            prompt2: 'Explain the formula in plain words. What happens if this table grows to 10,000 rows?' },
          { title: 'Let the numbers judge',
            prompt: 'Add a column Performance to Register_Ready: compare Actual with Target and return On track, At risk or Off track, using the Better_When, Amber_Threshold and Red_Threshold for each KPI from tblKPIs on the Lookups sheet. Use LET and XLOOKUP.',
            prompt2: 'Which rows did the owners report as “On track” while the numbers say At risk or Off track? List them by owner.',
            note: 'Watch out: for Claims paid, Operating costs and Customer complaints, lower is better. That’s why the lookup to Better_When matters. <b>An empty list is the right answer for this file:</b> the owners’ Status follows the same thresholds as tblKPIs, so every report matches the numbers (107 On track, 42 At risk, 28 Off track). In a real register, this is where the surprises show up.' },
          { title: 'Explain a formula you didn’t write',
            prompt: 'Explain the formula in Summary!H5 step by step, in plain words. Then tell me what would change if the Red_Threshold for Gross written premium were 5% instead of 8%.',
            note: 'The <b>Summary</b> sheet was built with SUMIFS, XLOOKUP, LET and IFS. Cell H5 is highlighted.' },
        ],
        wow: 'Region, manager and a performance verdict on every row, all as live formulas. Click any cell and you see the same formula, whether the table has 180 rows or 10,000. And the gap between what owners reported and what the numbers say is now a list, not a feeling.',
        yours: { text: 'On the Lookups sheet, change the Red_Threshold for Gross written premium from 8% to 5%. Watch the Summary sheet: Austria turns Off track on its own, because every number is a formula.' },
        check: ['Region and Country_Manager filled on every row by XLOOKUP', 'A Performance column that treats “lower is better” KPIs correctly', 'A plain-language explanation of Summary!H5'],
      },
      {
        title: 'Bring in outside data', viz: 'xlfetch', goal: 'Add information that isn’t in the workbook yet.', time: 8, test: true,
        sheet: 'FX_Rates and Initiatives',
        files: [['downloads/project-updates.txt', 'project-updates.txt']],
        intro: 'Pick one. The first two use the web, the third uses your work data. For the third, imagine the notes in <code>project-updates.txt</code> are in your mailbox.',
        tasks: [
          { title: 'Pick one',
            variants: [
              ['From the web', 'Update Rate_to_EUR on the FX_Rates sheet with today’s exchange rates, and add the source and date. Then tell me how Actual_EUR on Register_Ready changed.'],
              ['From the web', 'Add an industry benchmark for each KPI in tblKPIs on the Lookups sheet, with the source.'],
              ['From your emails and notes', 'Fill in Latest_Status on the Initiatives sheet with the latest status of each initiative from my emails and meeting notes.'],
            ],
            alt: { label: 'If web or work data isn’t available in your tenant', text: 'Open <code>project-updates.txt</code>, copy all of it, and paste it in after this prompt:', prompt: 'Here are the latest project notes. Fill in Latest_Status on the Initiatives sheet with one short sentence per initiative, based only on these notes:' },
            note: 'Whether Copilot in Excel can search the web or read your emails depends on your organisation’s settings. We’re still testing this in ERGO’s tenant, which is why the fallback prompt is there.' },
        ],
        wow: 'Change one exchange rate and every euro figure follows, because the lookups you built in step 2 do the work. Or every initiative gets a status, pulled from notes in seconds.',
        check: ['New rates, a benchmark column or filled Latest_Status cells', 'Copilot says where the information came from', 'Nothing in the existing columns broke'],
      },
      {
        title: 'Make it readable', viz: 'xlcolour', goal: 'Colour and a built-in skill: see what matters without reading every number.', time: 8,
        sheet: 'Register_Ready',
        tasks: [
          { title: 'Colour tells the story',
            prompt: 'On Register_Ready, colour the Performance column: red for Off track, amber for At risk, green for On track. Also shade every row with Status “Off track” in light red.',
            note: 'No Performance column yet? Ask for red when Actual is more than 8% worse than Target, amber up to 8%, green otherwise.' },
          { title: 'A skill Microsoft already wrote',
            intro: 'Excel comes with skills built in. Type <b>@</b> in the Copilot prompt box to see them. Pick one:',
            variants: [
              ['Formatting', '@theme-design Format this workbook in ERGO colours: ERGO red (#BF1528) for headers and highlights, charcoal grey (#242424) for text, white backgrounds. Keep it consistent across all sheets.'],
              ['Visualisation', '@chart-design Create a chart that compares Actual and Target by country for Gross written premium.'],
              ['Analysis', '@clean-data Check the Register sheet for data issues and explain what you find.'],
            ],
            note: '<b>This takes a moment:</b> Copilot reads the whole workbook first and only then formats the sheets, so it can look unfinished for a while. Microsoft is still rolling these skills out. If you don’t see one, try another, or ask your trainer.' },
        ],
        wow: 'The red cells jump out, and the chat says which built-in skill it loaded. That’s the same idea as a custom skill, written by someone else.',
        check: ['Three colours in Performance and off-track rows shaded', 'The chat shows that a built-in skill was loaded'],
      },
      {
        title: 'Dashboards', viz: 'xldash', goal: 'From PivotTables to slicers to an interactive HTML dashboard, rendered right in Excel.', time: 15,
        sheet: 'Register_Ready (or Dashboard_Ready)',
        tasks: [
          { title: 'Level 1: PivotTables and charts',
            prompt: 'Create a dashboard on a new sheet from tblRegister with PivotTables and charts: Actual_EUR vs Target_EUR by country, the monthly trend of Gross written premium, and how many entries are on track, at risk and off track.',
            media: { type: 'image', image: 'assets/media/kpi-dashboard.jpg', caption: 'The prepared Dashboard_Ready sheet. Yours will look different.' } },
          { title: 'Level 2: make it interactive',
            prompt: 'Make this dashboard interactive: add slicers for Country and KPI and a timeline for Month, connected to all PivotTables.',
            note: 'Didn’t build your own dashboard? Use the <b>Dashboard_Ready</b> sheet.' },
          { title: 'Final stage: an HTML dashboard in Excel',
            how: 'Excel’s built-in skill <b>interactive-canvas</b> builds an interactive HTML dashboard and shows it right next to your workbook. It stays connected to the data. Type <b>@</b> in the Copilot prompt box and pick <b>interactive-canvas</b>, or copy the prompt as it is:',
            prompt: '@interactive-canvas Create an interactive dashboard from the Register_Ready sheet: KPI tiles, a chart of Actual vs Target by country and a monthly trend. Use ERGO’s colours (red #BF1528, charcoal #242424, white), the word “ERGO” as a text logo, and the label “Illustrative figures for training purposes, not ERGO results” in the footer.',
            ideas: [
              ['Add a filter by country', 'Update the existing dashboard: add a filter by country. Keep everything else and show me the rendered dashboard, not only the code.'],
              ['Add a search box for KPIs', 'Update the existing dashboard: add a search box for KPIs. Keep everything else and show me the rendered dashboard, not only the code.'],
              ['Let me select several countries at once', 'Update the existing dashboard: let me select several countries at once. Keep everything else and show me the rendered dashboard, not only the code.'],
              ['Make the KPI tiles clickable so they filter the charts', 'Update the existing dashboard: make the KPI tiles clickable so they filter the charts. Keep everything else and show me the rendered dashboard, not only the code.'],
              ['Add a switch between English and German', 'Update the existing dashboard: add a switch between English and German. Keep everything else and show me the rendered dashboard, not only the code.'],
            ],
            alt: { label: 'If you only see code', text: 'Ask Copilot to bring the dashboard back. If that doesn’t work, copy the code, paste it into Notepad and save it as <code>dashboard.html</code> (under “Save as type” choose <b>All files</b>), then double-click the file to open it in your browser.', prompt: 'Show me the rendered dashboard again, with all the changes so far. Don’t return only code.' },
            note: 'Add one idea at a time and check the dashboard after each one. <b>@interactive-canvas</b> is still rolling out: if it isn’t in the @ list, use task D.' },
          { title: 'Plan B: the same dashboard in Copilot Chat',
            switchTo: { pill: 'Copilot Chat, not Excel', title: 'Only if @interactive-canvas isn’t there: this task leaves Excel', text: 'Open Microsoft 365 Copilot Chat in a new tab. Select <b>+</b> (or type <b>/</b>) and attach <code>kpi-workbook.xlsx</code> from OneDrive, then send the prompt there.', url: 'https://m365.cloud.microsoft/chat', cta: 'Open Copilot Chat' },
            prompt: 'Create a self-contained HTML dashboard from the Register_Ready sheet of kpi-workbook.xlsx: KPI tiles, a chart of Actual vs Target by country and a monthly trend. Use ERGO’s colours (red #BF1629, charcoal #242424, white), the word “ERGO” as a text logo, and the label “Illustrative figures for training purposes, not ERGO results” in the footer. No external files or links. Show the complete HTML in one code block.',
            how: 'Copilot Chat shows a preview you can try right there. The “Make it yours” ideas in task C work here too, one at a time.',
            alt: { label: 'If you only see code', text: 'Ask for the preview again. Or copy the code, paste it into Notepad and save it as <code>dashboard.html</code> (under “Save as type” choose <b>All files</b>), then double-click the file to open it in your browser.', prompt: 'Show me the rendered dashboard again as a preview, with all the changes so far. Don’t return only code.' } },
        ],
        wow: 'A dashboard built from your register, then one you can click through, then an HTML dashboard in ERGO colours, rendered next to your data, that you designed yourself.',
        check: ['A new sheet with at least two PivotTables and charts', 'Slicers that change every PivotTable', 'A rendered HTML dashboard with at least one idea of your own'],
      },
    ],
    sideQuests: [
      { id: 'xls-byo', type: 'byo', title: 'Bring your own skill', time: 15, skill: 'ergo-register-cleaner' },
      { id: 'xls-to-ppt', type: 'link', title: 'Finished early?', time: 0, what: 'Go to the PowerPoint trail and build a board deck from a memo.', href: 'trail.html?t=ppt', cta: 'PowerPoint trail →' },
    ],
    byo: {
      why: 'You cleaned and coloured the register by hand in steps 1 and 4. If you do this every month, a skill does it in one go, and always the same way.',
      parts: [
        ['Name and description', 'When Copilot should use it, with trigger phrases such as “clean my register” or “prepare the monthly KPI file”.'],
        ['Steps', 'Standardise currencies and dates, fix spelling variants, flag missing values, apply colour rules with thresholds, add a summary row.'],
        ['Output rules', 'What the finished sheet looks like: column order, colours, table name.'],
        ['Don’t rules', 'Never delete rows. List every change in a note.'],
      ],
      steps: [
        'Download the template <code>ergo-register-cleaner.zip</code> (button above) and unzip it: right-click → <b>Extract all</b>. You get a folder <code>ergo-register-cleaner</code> with one file, <code>SKILL.md</code>.',
        'Open <code>SKILL.md</code> in Notepad and change one rule to fit your team, for example a different threshold or colour. Lines marked <code>Change this rule</code> are a good place to start. Save.',
        'Upload the folder: <b>Custom skills</b> → <b>Add</b> → <b>Add in OneDrive</b> → <b>Create or upload</b> → <b>Folder upload</b>. The clicks are shown below.',
        'In the same workbook, go to the <b>Register_Q3</b> sheet: a second messy register. Ask: <b>Clean my register on the Register_Q3 sheet.</b>',
        'Check the result. If something is off, fix the instructions.',
        'Upload the new version and run it again.',
      ],
      files: [['downloads/ergo-register-cleaner.zip', 'ergo-register-cleaner.zip (the template)'], ['downloads/ergo-register-cleaner-SKILL.md', 'ergo-register-cleaner-SKILL.md (just to read)']],
      prompt: 'Clean my register on the Register_Q3 sheet.',
      builder: '@skill-builder Save what we just did to a new skill.',
      ideas: [
        ['ERGO monthly report formatter', 'Same layout, colours and summary row every month.'],
        ['KPI commentary writer', 'Three bullet points per KPI in management language.'],
        ['Data quality checker', 'Lists the problems in a sheet without changing anything.'],
      ],
      success: 'Your skill worked if Copilot says it loaded the skill, and Register_Q3 comes out as clean as Register_Ready.',
    },
  },

  // ======================================================================
  // Trail 2 · PowerPoint · Executive Presentation
  // ======================================================================
  ppt: {
    app: 'PowerPoint', tool: 'PowerPoint', logo: 'assets/img/brands/powerpoint.png', name: 'The Board Meeting', persona: 'Storyteller', group: 2, useCase: 'Executive Presentation',
    web: ['PowerPoint for the web', 'https://powerpoint.cloud.microsoft'],
    mission: 'The board meets next week. Build the deck from a memo and the numbers, rehearse the questions, then make it ERGO.',
    kit: { file: 'downloads/powerpoint-kit.zip', size: 'about 300 KB', contents: ['board-memo.docx', 'q3-figures.xlsx', 'board-pack-ready.pptx', 'skills-upload-as-zip/ (5 skill ZIPs)', 'START-HERE.txt'] },
    setup: [
      'Download the kit, <code>powerpoint-kit.zip</code>, with the red button above. It lands in your Downloads folder.',
      'Unzip it on your laptop first: right-click the ZIP → <b>Extract all</b>. OneDrive can’t open a ZIP, so don’t upload the ZIP itself.',
      'Open OneDrive in the browser (<a href="https://onedrive.cloud.microsoft" target="_blank" rel="noopener">onedrive.cloud.microsoft</a>), select <b>+ Create or upload</b> → <b>Files upload</b> and upload these three files from the unzipped folder: <code>board-memo.docx</code>, <code>q3-figures.xlsx</code> and <code>board-pack-ready.pptx</code>. From step 2 on, everything happens in one deck: <code>board-pack-ready.pptx</code>.',
      'Leave the folder <code>skills-upload-as-zip</code> on your laptop for now. Each skill is its own ZIP because you add skills to Copilot one at a time, only when a step needs one. PowerPoint takes each ZIP as it is, so don’t unzip them.',
      'Open PowerPoint for the web and select <b>Copilot</b> on the Home tab.',
    ],
    levels: {
      basic: 'Aim for steps 1 and 2, then step 3 (at least tasks A and B) if you have time.',
      advanced: 'Run steps 1 and 2 quickly, then go for 3 and 4: make slides move with ERGO Motion, record a skill. Finish with the Advanced focus: <b>Copilot Workspaces</b> on the side-quest page.',
    },
    trouble: [
      ['Creating the deck takes ages', 'That’s normal: a few minutes. Don’t wait. Open <code>board-pack-ready.pptx</code> in a new tab and do task B.'],
      ['Copilot can’t find my Word file', 'Make sure it’s in OneDrive, then attach it with <b>+</b> (Add) → <b>Attach</b>, or type <b>/</b> and start typing the file name.'],
      ['I want to try two things at once', 'A second browser tab opens the same file, not a copy: changes show up in both tabs, and editing while Copilot works on the deck can clash. Use <b>File › Save As › Save a copy</b> and try the other idea in the copy.'],
      ['I can’t edit my interactive slide', 'That’s by design: interactive slides are changed by prompting Copilot, not by clicking into the slide. Keep the Copilot pane open and describe the change.'],
    ],
    steps: [
      {
        title: 'Build and rehearse', goal: 'Start the deck, and rehearse the board while it builds.', time: 14,
        files: [['downloads/board-memo.docx', 'board-memo.docx'], ['downloads/q3-figures.xlsx', 'q3-figures.xlsx'], ['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx']],
        tasks: [
          { title: 'A deck from a document (start this first)',
            open: 'a new blank presentation',
            how: 'In the Copilot pane, select <b>+</b> (Add) and attach <code>board-memo.docx</code> from OneDrive, or type <b>/</b> and pick the file. Then send one of these:',
            variants: [
              ['Word only', 'Create a board presentation from this document.'],
              ['Word plus Excel numbers', 'Create a board presentation from this document. Use the figures in q3-figures.xlsx for a KPI slide.'],
            ],
            waiting: { text: 'This takes a few minutes. Don’t wait: open <code>board-pack-ready.pptx</code> in a new tab and do task B.' },
            media: { type: 'morph', notes: ['assets/media/cfo-notes-p1.jpg', 'assets/media/cfo-notes-p2.jpg', 'assets/media/cfo-notes-p3.jpg'], slides: ['assets/media/ppt-step2-s1.jpg', 'assets/media/ppt-step2-s2.jpg', 'assets/media/ppt-step2-s3.jpg', 'assets/media/ppt-step2-s4.jpg', 'assets/media/ppt-step2-s5.jpg'], caption: 'Three pages of notes in, a board deck out. Yours will look different.' } },
          { title: 'Rehearse the board (while it builds)',
            open: 'board-pack-ready.pptx in a new tab',
            prompt: 'What is this deck about?',
            prompt2: 'What questions could the board ask me about this deck?',
            more: { label: 'Then', prompt: 'Add each question and a short answer to the speaker notes of the slide it belongs to.' },
            media: { type: 'panel', image: 'assets/media/ppt-step4-s6.jpg', caption: 'The panel takes its seats.' } },
        ],
        wow: 'Three pages of notes become a full board deck while you prepare for the hardest fair questions, with an answer for each in the notes of the right slide.',
        yours: { text: 'Pick the board member you’re most nervous about.', prompt: 'Which of these questions would the CFO ask first, and how should I answer in two sentences?' },
        check: ['A new deck with the memo’s main points and speaker notes', 'Five or more questions a board would ask', 'Questions and answers in the speaker notes'],
      },
      {
        title: 'Shape the deck', viz: 'pptshape', goal: 'Add, translate and make it interactive.', time: 14,
        files: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx']],
        intro: 'From here on you work in one deck: <code>board-pack-ready.pptx</code>. Your own deck from step 1 works for this step too.',
        tasks: [
          { title: 'One slide, two ways',
            variants: [
              ['Without image generation (fast)', 'Add a slide after slide 2 that shows our three priorities for 2027 as three columns, each with an icon. No pictures.'],
              ['With image generation', 'Add the same slide again, this time with a generated image of a modern claims service team.'],
            ],
            note: 'Watch the clock: how long does each one take, and which would you show the board?',
            waiting: { text: 'The version with the generated image takes longer, and the Copilot pane is busy until it’s done. Use the time on PowerPoint itself:',
              tips: [['Designer:', 'select a slide, then <i>Design › Designer</i>. PowerPoint suggests layouts for that slide, no prompt needed.'],
                ['Speaker notes:', 'select <i>Notes</i> at the bottom of the window and read what Copilot wrote in step 1.'],
                ['Slide Sorter:', '<i>View › Slide Sorter</i> shows the whole storyline at once. Drag slides into a better order.']] } },
          { title: 'Auf Deutsch, bitte, or in your language',
            fields: ['lang'],
            prompt: 'Make a {lang} version of this deck for the supervisory board.',
            note: 'Pick a language or type your own. Copilot saves the translation as a new copy (in PowerPoint for the web, next to the original or in your OneDrive) and leaves this deck as it is, so keep working here. Figures, layout and speaker notes come along.' },
          { title: 'Interactive Slides',
            how: 'Select <b>Interactive Slide</b> on the <b>Home</b> or <b>Insert</b> tab. Pick a category (<b>Summary</b>, <b>Timeline</b>, <b>Dashboard</b>, <b>Comparison</b>) or <b>Custom</b>. It’s also in the Copilot pane as <b>Create interactive slide</b>.',
            variants: [
              ['Dashboard from this deck', 'Create an interactive dashboard slide from the figures in this deck: tabs for gross written premium, combined ratio and operating result, each comparing actual with plan and prior year.'],
              ['Timeline from the deck', 'Create an interactive timeline slide of the next steps in this deck, so I can click through each step and see what happens and who decides.'],
            ],
            more: { label: 'Then refine it by prompting', prompt: 'Make the charts bar charts, add a filter by business unit, and match the colours to this deck.' },
            alt: { fold: true, label: 'No Interactive Slide button?', text: 'The button and the built-in skill <b>Create interactive slide</b> in the Copilot pane are the same feature, so if one is missing the other usually is too. Check you’re in PowerPoint for the web, not the desktop app, and look for the skill by typing <b>@</b> in the prompt box. If neither is there, the feature hasn’t reached your account yet. Then our workaround skill (same clicks as step 3) builds a clickable overview with ordinary PowerPoint links to detail slides:', prompt: 'Make slide 3 interactive: one tile per KPI that links to a detail slide, and a “Back to overview” link on every detail slide.' },
            skillFiles: ['interactive-slides-workaround'],
            note: 'Change an interactive slide by prompting, not by editing the slide. In a Teams meeting every attendee clicks around on their own, so it’s great to explore and less suited to presenting. Optional: try it in pairs in a Teams meeting on the room monitor. Viewers don’t need a Copilot licence.' },
        ],
        wow: 'A new slide two ways, the whole deck in another language, and a slide your audience can click through, built from the numbers in your deck.',
        check: ['Two versions of the priorities slide, and you know which you’d keep', 'A translated copy of the deck, figures unchanged', 'An interactive slide you can click through in Slide Show'],
      },
      {
        title: 'Make it ERGO', viz: 'skillflow', goal: 'PowerPoint’s own skills first, then two of yours: ERGO Deck for the layout, ERGO Motion for a slide that moves. All in one deck.', time: 14,
        files: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx']],
        intro: 'Stay in <code>board-pack-ready.pptx</code>. The CFO office left three rough draft slides at the end, in the section <b>Drafts from the CFO office</b>. You restyle them with your skills and compare the results side by side, in the same deck. The prompts name the section, not slide numbers, because the numbers shift with every slide you added in step 2.',
        tasks: [
          { title: 'Skills PowerPoint already has',
            how: 'Copilot in PowerPoint comes with skills built in. Type <b>@</b> in the prompt box to see them, or select <b>+</b> → <b>Choose plugins</b> → <b>Manage plugins</b>. Try one or two:',
            variants: [
              ['Explain this presentation', 'Explain this presentation to me in five sentences, as if I had to present it in ten minutes.'],
              ['Review this presentation', 'Review this presentation like a board secretary: what is unclear, what is missing, and which slide would you cut?'],
              ['Visualize this slide (select the risks slide first)', 'Visualize this slide: turn its text into a simple diagram.'],
              ['Speaker notes', 'Write speaker notes for every slide in the section “Board pack”: what I say in under a minute each, in plain words, key number first.'],
            ],
            note: 'Built-in skills work for everyone, in any deck. Custom skills, next, add what only your company knows: its layout, its words, its rules.' },
          { title: 'Add your skills', upload: { skills: ['ergo-deck', 'ergo-motion-slides'], app: 'ppt', explore: true } },
          { title: 'ERGO Deck: restyle the drafts',
            open: 'board-pack-ready.pptx and scroll to the section Drafts from the CFO office',
            prompt: 'Rebuild only the slides in the section “Drafts from the CFO office” (the three slides titled Q3 Results, P&C update and Investment) as board-ready ERGO slides. Leave every other slide as it is and keep every figure unchanged.',
            why: { steps: ['Copilot compares “ERGO slides” with the descriptions of your skills and loads <b>ERGO Deck</b>. If it doesn’t, pick it yourself with <b>@</b>.', 'The skill runs a small script that rebuilds each slide in the ERGO layout: red message title, logo top right, KPI tiles, grey panels, a red takeaway band.', 'Every figure is copied, never changed, and every text box stays editable.'], check: 'The chat says the ERGO Deck skill was used.' },
            note: 'If Copilot adds the ERGO slides next to the drafts instead of replacing them, keep both: that’s your before and after. If the chat doesn’t mention ERGO Deck, start a new chat, type <b>@</b>, pick <b>ergo-deck</b> from the list and paste the prompt again. If a skill changed more than you asked for, press <b>Ctrl+Z</b>, or go back with <b>File › Info › Version history</b>.',
            waiting: { text: 'ERGO Deck runs a small script, so it needs a minute or two. Don’t edit the deck while Copilot is working on it. Instead:',
              tips: [['Read the rules:', 'open <a href="downloads/ergo-deck-SKILL.md" target="_blank" rel="noopener">the ERGO Deck SKILL.md</a> and pick three rules you expect to see on the new slides, for example the logo, the title colour and the takeaway band. Check them when the slides arrive.'],
                ['Predict:', 'which of the three drafts will change the most? Tell your neighbour, then check.']] },
            media: { type: 'compare', before: 'assets/media/messy-draft-s1.jpg', after: 'assets/media/ergo-deck-s1.jpg', caption: 'Drag to compare. Before: draft slide 6. After: the same figures in the ERGO Deck layout.' },
            alt: { fold: true, label: 'ERGO Deck doesn’t load', files: [['downloads/ergo-brand.zip', 'ergo-brand.zip']], text: 'Use <b>ERGO Brand</b> instead: a lighter skill with only rules, no script. It tidies the slides you have (message headlines, at most 3 bullets, one red accent) and never changes a figure. Switch ERGO Deck off in Custom skills first, so the two don’t compete.', prompt: 'Make the slides in the section “Drafts from the CFO office” (the three slides titled Q3 Results, P&C update and Investment) board-ready. Leave every other slide as it is.' } },
          { title: 'ERGO Motion: a slide that moves', level: 'advanced',
            prompt: 'Add an animated ERGO slide at the end of this deck with the Q3 KPIs from the KPI slide in the board pack: tiles that count up and a bar chart of actual against plan that grows.',
            prompt2: 'Start the Slide Show from the new slide and watch it move.',
            note: 'Motion slides are live HTML inside PowerPoint, like Interactive Slides in step 2. You change them by prompting, not by typing into the slide, and in a PDF they become a still picture. If ERGO Deck loads instead, type <b>@</b> and pick <b>ergo-motion-slides</b>. If the slide stays blank in the editor, open <b>Slide Show › From Current Slide</b>: it plays there.',
            waiting: { text: 'ERGO Motion takes about three minutes. Don’t edit the deck while Copilot works on it. Presenting is fine, so get ready for the board:',
              tips: [['Rehearse with Coach:', 'in <i>Slide Show › Rehearse with Coach</i>, present two slides out loud and get feedback on pace, filler words and reading from the slide.'],
                ['Live subtitles:', 'turn on <i>Slide Show › Always Use Subtitles</i>, then start the show and speak: PowerPoint subtitles you live, and can translate them.'],
                ['Presenter View:', '<i>Slide Show › Presenter View</i> shows your speaker notes and the next slide while the room sees only the slide.']] } },
        ],
        wow: 'One deck, three versions of the same figures: the rough drafts, ERGO Deck’s editable slides and ERGO Motion’s animated one. Same brand, two skills, two jobs.',
        poll: { id: 'ppt-skill', q: 'Which skill would you take back to your desk?', help: 'Look at the drafts and your new slides side by side, then pick one. Your answer unlocks a badge.',
          options: [['ppt-pick-deck', 'ERGO Deck'], ['ppt-pick-motion', 'ERGO Motion'], ['ppt-pick-both', 'Both, for different jobs'], ['ppt-pick-brand', 'ERGO Brand (Plan B)'], ['ppt-pick-builtin', 'The built-in skills are enough']] },
        explain: {
          q: 'What exactly does ERGO Motion do, and which one should I use?', viz: 'slidekinds',
          lead: 'ERGO Motion builds the slide as a small web page (HTML) and places it inside your PowerPoint slide. That is why it can do things normal slides can’t: numbers that count up, bars that grow, elements you can click. Many people like HTML slides for storytelling, because the animation walks the audience through the message. It is the same mechanism PowerPoint itself now uses for Interactive Slides, which you tried in step 2.',
          cols: [
            ['Standard slides (ERGO Deck)', ['Text boxes, shapes and charts you know', 'Click into any text and edit it yourself', 'Works everywhere: PDF, print, older PowerPoint', 'Colleagues can keep working on it without Copilot']],
            ['HTML slides (ERGO Motion)', ['Animations and interaction: count-ups, growing charts, clicks', 'Strong for a story you present live', 'To change it, you ask Copilot again: you can’t type into the slide', 'Takes a few minutes to build; in a PDF it becomes a still picture']],
          ],
          tip: 'Rule of thumb: standard slides for anything people will edit, print or forward. One HTML slide where you want a moment in the room, for example the key number at the end of the board story.',
        },
        yours: { text: 'Open <b>Custom skills</b>, select <b>ergo-deck</b> and change “at most ~5 short bullets” to “at most 3 short bullets”. Ask again and watch the slides follow your rule. This shows how you can change a custom skill’s rules to fit your own needs.', prompt: 'Rebuild only the slides in the section “Drafts from the CFO office” (the three slides titled Q3 Results, P&C update and Investment) as board-ready ERGO slides. Leave every other slide as it is and keep every figure unchanged.' },
        check: ['The ERGO logo and a red message title on the restyled draft slides, every number unchanged', 'Drafts and ERGO slides side by side in the same deck', 'Advanced: an ERGO Motion slide that moves in Slide Show'],
        skills: ['ergo-deck', 'ergo-motion-slides'],
      },
      {
        title: 'Turn it into skills', viz: 'pptrecord', goal: 'You’ll do this before every board meeting. Turn it into a skill.', time: 12,
        files: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx']],
        tasks: [
          { title: 'Write a skill by prompting',
            prompt: 'Turn what we did in step 1 into a custom skill: summarise the deck, list the questions the board could ask, and add each question with a short answer to the speaker notes of the right slide. Write it as a SKILL.md with a name, a description of when to use it, and numbered steps.',
            how: 'Copy the SKILL.md Copilot writes. Then select <b>…</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b> → <b>Create manually</b> and paste it in.',
            more: { label: 'Test it', prompt: 'Rehearse the board meeting with me. What will they ask?' },
            alt: { label: 'If your own skill doesn’t work yet', text: 'Upload our version, Board Rehearsal (ZIP below, same clicks as step 3), and test it with the same prompt.' },
            skillFiles: ['ergo-board-sparring'] },
          { title: 'Record a skill (Advanced)', level: 'advanced',
            how: '<ol><li>Select <b>+</b> → <b>Choose skills</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b> → <b>Record a skill</b>.</li><li>Make simple changes by hand, for example make the heading bigger, and set all slide text to Arial.</li><li>Select <b>Stop</b>, review the draft Copilot writes, and upload it.</li><li>Go to another slide and reuse it. Say the scope out loud:</li></ol>',
            variants: [
              ['All slides', 'Apply my recorded skill to all slides in this deck.'],
              ['This slide only', 'Apply my recorded skill to this slide only.'],
            ] },
          { title: 'Bonus: from deck to email',
            open: 'your deck in PowerPoint for the web',
            how: 'Type the prompt in the <b>Copilot pane in PowerPoint</b>, with the deck open. Copilot writes the email text in the pane. Copy it, open Outlook, start a new email and paste it in. Copilot in PowerPoint doesn’t create or send the email itself.',
            prompt: 'Turn this deck into an email to my team.' },
        ],
        wow: 'A routine you did once is now a skill. Next quarter, one sentence does it. And with recording, you never wrote a rule: you showed Copilot once.',
        check: ['Your skill shows up under Custom skills', '“Loaded … skill” when you test it', 'Advanced: the slides changed in the scope you asked for'],
        skills: ['ergo-board-sparring'],
      },
    ],
    sideQuests: [
      { id: 'ppt-persona', title: 'A tougher panel', time: 3, prompt: 'Add a journalist and an activist investor to the rehearsal.', what: 'Two more seats at the table, same rules.' },
      { id: 'ppt-townhall', title: 'Town hall', time: 4, prompt: 'Turn this board deck into a three-minute town-hall talk for employees.', what: 'Same facts, different audience, different tone.' },
      { id: 'ppt-to-cos', type: 'link', title: 'Finished early?', time: 0, what: 'Try the Chief-of-Staff trail: a morning briefing that writes itself.', href: 'trail.html?t=cos', cta: 'Chief-of-Staff trail →' },
    ],
  },

  // ======================================================================
  // Trail 3 · Chief of Staff · Outlook / Copilot Chat
  // ======================================================================
  cos: {
    app: 'Copilot Chat & Outlook', tool: 'Outlook / Copilot Chat', logo: 'assets/img/brands/outlook.png', premium: true, name: 'The Chief of Staff', persona: 'Orchestrator', group: 3, useCase: 'Chief-of-Staff',
    web: ['Microsoft 365 Copilot', 'https://m365.cloud.microsoft/chat'],
    mission: 'Make Copilot your own Chief of Staff, with no agent to build. One prompt sweeps your meetings, emails and chats. Copilot remembers how you work, runs the sweep every morning, and a Workspace turns your biggest topic into a podcast for the way home.',
    kit: { file: 'downloads/chief-of-staff-kit.zip', size: 'about 10 KB', contents: ['demo-meeting-transcript.txt', 'sample-emails.md', 'my-priorities.md', 'sample-voice-texts.md'] },
    // The Workspace is step 4 here, so the Workspaces bonus track isn't repeated on the side-quest page.
    noBonus: true,
    setup: [
      'Open Microsoft 365 Copilot in the browser (<b>m365.cloud.microsoft</b>) and keep Outlook for the web open in a second tab.',
      'Everyone on this trail has a Microsoft 365 Copilot licence, so the prompts work on your own calendar, emails, chats and files.',
      'Work with your own content. Only if something is missing, for example an empty mailbox, open the <b>Plan B</b> box on the step: it has sample files you can use instead. You don’t need the kit unless you want everything offline.',
      'You don’t need agents. Everything in the four steps comes with your Copilot licence. If you also have Agent Builder, the Planner agent or Cowork, the side quests show what they add.',
    ],
    levels: {
      basic: 'Aim for the morning sweep in step 1, your rules and a memory test in step 2 and one scheduled prompt in step 3. In step 4, let Copilot find your topic, put it in a Workspace and generate your podcast.',
      advanced: 'Run steps 1 to 3 quickly, then spend your time in step 4: the podcast first, then flashcards or an infographic from the same files. Then pick side quests: Planner, Cowork or Agent Builder, if you have them.',
    },
    trouble: [
      ['Copilot doesn’t find any emails or meetings', 'Your mailbox may be new or empty. Open the <b>Plan B</b> box under the prompt and use the sample emails and the demo transcript instead.'],
      ['Copilot didn’t flag or pin anything', 'Email actions from chat may not have reached you yet. Ask Copilot to list the emails instead, and flag them yourself in Outlook.'],
      ['I can’t find Personalization or Memory', 'Open <b>Settings</b> (your profile picture or <b>…</b>) → <b>Personalization</b>. Not there yet? Keep your rules in your Workspace or a Word file and paste them at the start of a chat.'],
      ['Copilot doesn’t show a Send or Create card', 'Check that <b>Work IQ</b> is switched on (top left). Actions from chat may not have reached you yet: then select <b>Open</b> or ask Copilot to draft it, and send it from Outlook yourself.'],
      ['My skill isn’t used', 'Wait until the card shows <b>Try skill</b> after <b>Save skill</b>, then start a <b>new chat</b> and use the trigger words, for example “in my voice”. Open <b>Reasoned for …</b> to see which skills were used.'],
      ['There’s no Schedule option on my prompt', 'Hover over the prompt you sent, not Copilot’s answer, and look for the clock icon or <b>…</b> → <b>Schedule</b>. If it isn’t there, it isn’t switched on for you yet: save the prompt instead and run it each morning.'],
      ['I can’t find Workspaces', 'Look in the left pane of Microsoft 365 Copilot. Workspaces used to be called <b>Notebooks</b>, so you may still see that name.'],
      ['The Study guide shows no flashcards or quiz', 'Flashcards, the quiz, topics, fill in the blanks and matching are built only from Word, PowerPoint and PDF files, each under about 100,000 characters and not protected. Emails, meetings and Excel only give you the summary. Add a Word, PowerPoint or PDF file, or use the Plan B prompt for flashcards in a Copilot Page.'],
      ['Copilot says it can’t make flashcards', 'Ask for them <b>in a Copilot Page</b>: “Create interactive flashcards in a Copilot Page…”. Plain chat has no flashcard mode.'],
    ],
    steps: [
      {
        title: 'The morning sweep', viz: 'cossweep', goal: 'One prompt that goes through your meetings, emails and chats, then Copilot acts on it: emails, meetings, your inbox.', time: 12,
        open: 'Microsoft 365 Copilot Chat',
        tasks: [
          { title: 'Sweep everything at once',
            how: '<b>Work IQ</b> is what makes this possible: with the <b>Work IQ</b> switch on (top left, 1 in the picture), Copilot can read your emails, calendar, Teams chats and files, only the ones you’re allowed to see, and it knows who you work with. Switch it off and the same question only uses the web. The chips below the prompt box (2) are ready-made Work IQ prompts. One prompt, several jobs:',
            media: [{ image: 'assets/img/cos/chat-5-workiq.png', caption: '<b>1</b> Work IQ on = your work data. <b>2</b> Ready-made Work IQ prompts such as Inbox Triage and Meeting Prep.' }],
            prompt: 'Go through my meetings from yesterday and today, my unread and flagged emails, and my Teams chats from the last two days. Tell me 1) what I promised and to whom, 2) who is waiting for me, and 3) which decisions I need to make. Then give me a prioritised to-do list for today, most urgent first, and tell me which emails need a reply.',
            alt: { fold: true, label: 'My mailbox is empty', files: [['downloads/sample-emails.md', 'sample-emails.md'], ['downloads/demo-meeting-transcript.txt', 'demo-meeting-transcript.txt']], text: 'Imagine these are yours. Upload both files with <b>+</b>, or open them, copy the text and paste it after this prompt:', prompt: 'Here are last week’s emails and a meeting transcript. Tell me what I promised, who is waiting for me and which decisions I need to make. Then give me a prioritised to-do list for today and tell me which emails need a reply:' } },
          { title: 'Let Copilot tidy your inbox', test: true,
            how: 'Copilot can now act on your inbox, not only talk about it: flag, pin, archive, mark as read. Check Outlook in the other tab afterwards.',
            prompt: 'Flag the emails that need a reply from me today, and pin the most urgent one.',
            more: { label: 'Then draft', prompt: 'Draft replies to the three most urgent emails, short and with a clear next step, so I can review them in Outlook.' },
            note: 'Nothing is sent. Open each draft in Outlook and edit it before sending, or don’t send it at all.' },
          { title: 'Let Copilot act for you, with a colleague', test: true,
            how: 'Work IQ also knows your organisation. Team up with someone in your group and type each other’s name, pick a colleague you’d like to meet, or type your own name to try it alone. It works with strangers too: Copilot uses the company directory and both calendars. It always shows a card first, so you check before anything happens.',
            fields: ['who'],
            variants: [
              ['Get to know a colleague', 'Who is {who}? Their role, team and manager, and anything we already have in common: shared meetings, emails, files or people we both work with. If we have nothing in common yet, suggest three good questions for a first coffee.', { how: 'Worked together before? You get projects and overlap. Never met? You get role and team from the directory, and three questions to start with. Copilot only uses what you are already allowed to see.' }],
              ['Find a time together', 'Find 30 minutes next week during working hours when {who} and I are both free, and set up a meeting called "Coffee after the summit".', { how: 'Copilot checks both calendars: a green tick on each person (1) means free. Pick one of the options (2), then <b>Send invite for option …</b> below the calendar.' }],
              ['Write and send an email', 'Send an email to {who} with the subject "Coffee after the summit?" saying: "Great to work with you today. My three next steps from the workshop: 1) …, 2) …, 3) …. Coffee next week?"', { how: 'You get an Outlook card with To, subject and text. <b>Send</b> (1) sends it, <b>Open</b> (2) opens the draft in Outlook. Until you select one, nothing has been sent (3).' }],
              ['Move a meeting', 'Move my "Coffee after the summit" meeting with {who} to Thursday at 14:00.', { how: 'You see the new slot on a mini calendar (1). If it clashes or is outside working hours, Copilot says so. Select <b>Send invite</b> (2) to move it.' }],
            ],
            note: 'You stay in control: nothing is sent or booked until you select the button on the card. Your colleague gets a real email or invite, so agree it in your group first, or use your own name.',
            media: [
              { image: 'assets/img/cos/chat-10-people.png', caption: 'Someone you work with: their current project and where your work overlaps.' },
              { image: 'assets/img/cos/chat-9-find-time.png', caption: 'Find a time: <b>1</b> both free, <b>2</b> pick an option, then Send invite.' },
              { image: 'assets/img/cos/chat-6-email.png', caption: 'Email card: <b>1</b> Send, <b>2</b> Open in Outlook, <b>3</b> not sent yet.' },
              { image: 'assets/img/cos/chat-8-move.png', caption: 'Move a meeting: <b>1</b> the new slot, <b>2</b> Send invite.' },
            ] },
        ],
        wow: 'One prompt read your calendar, inbox and chats, told you who is waiting for you. Then Copilot found a time with a colleague and wrote the email, and nothing went out before you checked the card. Step 3 makes the sweep happen on its own.',
        check: ['A list of what you promised and who is waiting for you', 'A prioritised to-do list for today', 'A time found with a colleague, or an email sent from a Copilot card'],
      },
      {
        title: 'Make it remember you', viz: 'memory', goal: 'Your role, your rules and your voice in every chat. No brief to paste, no agent to build.', time: 12, test: true,
        open: 'Microsoft 365 Copilot Chat',
        tasks: [
          { title: 'Write your rules',
            how: 'These instructions apply to <b>every</b> chat, so keep them general: who you are, what matters to you now, how you like your answers. The chief-of-staff role comes in step 4, in its own Workspace. Fill in the fields; the prompt writes itself.',
            fields: ['role', 'focus', 'rule'],
            prompt: 'Help me write custom instructions for Copilot that apply to every chat: who I am, what matters to me right now and how I like my answers. My role: {role}. What I’m focused on right now: {focus}. My most important rule: {rule}. Ask me up to three questions first, then give me the instructions as one short block of text.' },
          { title: 'Save it so Copilot remembers',
            use: { label: 'Save your instructions', steps: [
              'Copy the instructions from Copilot’s answer.',
              'Open <b>…</b> (top right) → <b>Settings</b> → <b>Personalization</b> (1). Next to <b>Customize Copilot</b>, select <b>Manage</b> (2).',
              'Paste your instructions into the box, add any suggestion chips you like (for example <b>Use bullet points for summaries</b>) and select <b>Save customization</b>.',
              'Check that <b>Saved memories</b> (3) is switched on. From now on every chat knows how you work, in Copilot Chat, in Outlook and on your phone.',
            ] },
            media: [
              { image: 'assets/img/cos/chat-1-personalization.png', caption: '<b>1</b> Personalization, <b>2</b> Customize Copilot → Manage, <b>3</b> Saved memories.' },
              { image: 'assets/img/cos/chat-2-custom-instructions.png', caption: '<b>1</b> your instructions, <b>2</b> suggestions to add, <b>3</b> Save customization.' },
            ] },
          { title: 'Turn your voice into a skill',
            how: 'A <b>skill</b> is a small set of rules Copilot uses when your request matches its description, here whenever you say “in my voice”. Copilot Chat can write and save one for you. Copy three short emails or messages you wrote (your <b>Sent items</b> are a good place to look) and paste them after this prompt:',
            prompt: 'Create a skill called my-voice. Use it whenever I ask you to write or rewrite something in my voice. Describe my voice as short, testable rules based on these three messages I wrote:',
            more: { label: 'Then, in a new chat', prompt: 'Rewrite this in my voice: "Dear all, I would like to inform you that the steering committee meeting has been rescheduled to Thursday. Please kindly prepare your updates."' },
            alt: { fold: true, label: 'I don’t want to use my own emails', files: [['downloads/sample-voice-texts.md', 'sample-voice-texts.md']], text: 'Use these three sample messages instead: open the text, select <b>Copy all</b> and paste it after the prompt above.' },
            note: 'Select <b>Save skill</b> on the card and wait until it shows <b>Try skill</b>. In the new chat, open <b>Reasoned for …</b>: it says <b>Using skills from my-voice</b>. Same idea works for anything you do often: a daily triage, a meeting-prep checklist, a board-update format.',
            media: [
              { image: 'assets/img/cos/chat-3-save-skill.png', caption: 'Copilot wrote the voice rules. Select <b>Save skill</b>.' },
              { image: 'assets/img/cos/chat-4-skill-used.png', caption: 'In a new chat: <b>Using skills from my-voice</b>. Short, direct, signed off like you.' },
            ] },
          { title: 'See memory at work',
            how: 'Memory also learns from what you tell it. Pick one preference, or write your own, and tell Copilot to remember it.',
            fields: ['pref'],
            prompt: 'Remember that {pref}.',
            variants: [
              ['Then, in a new chat', 'Summarise the most important emails I received this week.'],
              ['Check what it knows', 'What do you remember about me?'],
            ],
            note: 'Notice the difference in the answer. You can see and delete everything Copilot remembers under <b>Settings</b> → <b>Personalization</b> → <b>Saved memories</b> → <b>Manage</b>.' },
        ],
        wow: 'Copilot now knows your role, your priorities, how you write and how you like your answers, in every chat. That’s what most people build an agent for.',
        check: ['Your rules saved under Customize Copilot', 'A saved my-voice skill, and an answer that says “Using skills from my-voice”', 'One preference remembered, and an answer that follows it'],
        skills: ['my-voice'],
      },
      {
        title: 'Schedule it', viz: 'cosschedule', goal: 'Your morning sweep runs before you reach your desk, every working day.', time: 5, test: true,
        open: 'Microsoft 365 Copilot Chat',
        tasks: [
          { title: 'Schedule the morning sweep',
            prompt: 'Go through my meetings today, my unread and flagged emails, and my Teams chats since yesterday. Tell me 1) what I promised, 2) who is waiting for me, and 3) which decisions I need to make. Then give me a prioritised to-do list for today and the replies that can’t wait.',
            use: { label: 'Then schedule it', steps: [
              'Send the prompt once and check the answer.',
              'Hover over your prompt. Icons appear below it: select the clock, <b>Schedule this prompt</b> (1 in the first picture).',
              'In <b>Create a schedule</b>: set the time to <b>07:45</b> (1), select <b>S</b> and <b>S</b> to switch off the weekend (2), keep <b>Receive an email when responses are ready</b> if you want it in your inbox (3), then <b>Save</b> (4).',
              'Check the <b>Until</b> date: a schedule ends on that day, so move it further out if you like. The answer then waits in this chat every morning.',
            ] },
            media: [
              { image: 'assets/img/cos/schedule-1-hover.png', caption: 'Hover over your prompt: <b>1</b> Schedule this prompt, <b>2</b> Save prompt.' },
              { image: 'assets/img/cos/schedule-2-dialog.png', caption: '<b>1</b> time, <b>2</b> weekend off, <b>3</b> email when ready, <b>4</b> Save.' },
            ] },
          { title: 'Add the week in review',
            how: 'Send this in a new chat, then schedule it <b>weekly</b>, on Friday at 15:00.',
            prompt: 'My week in review: what got done, what slipped, which replies I still owe, and the three things I must not drop next week.' },
          { title: 'Keep it one click away',
            how: 'Hover over a prompt you want again and select the bookmark, <b>Save prompt</b> (2 in the first picture above). You find it later in the <b>Prompt Gallery</b>, next to the prompts your company publishes.',
            note: 'You can change or stop a schedule later from the same menu.' },
        ],
        wow: 'Tomorrow at 07:45, before your first coffee, Copilot has read your calendar, inbox and chats and written your to-do list. On Friday afternoon, your week reviews itself.',
        check: ['A daily morning sweep, scheduled', 'A weekly review for Friday, scheduled', 'Your favourite prompt saved in the Prompt Gallery'],
        skills: ['chief-of-staff'],
      },
      {
        title: 'Your briefing podcast', viz: 'cospodcast',
        poll: { id: 'cos-pick', q: 'Monday, 8:00. What would you hand over first?', help: 'Not which feature you liked: what you would actually let a chief of staff take off your plate. Your answer unlocks a badge.',
          options: [['cos-pick-catchup', 'Catching up: what happened, who’s waiting'], ['cos-pick-prep', 'Getting ready for the meetings that count'], ['cos-pick-follow', 'Following through on promises and replies'], ['cos-pick-think', 'Thinking a big decision through'], ['cos-pick-time', 'Protecting my time'], ['cos-pick-wait', 'Nothing yet: I’ll keep watching']] }, goal: 'One real topic, one Workspace, one podcast: your chief of staff briefs you on the way home.', time: 16, test: true,
        open: 'Microsoft 365 Copilot → Workspaces (or Notebooks)',
        tasks: [
          { title: 'Let Copilot find your topic',
            how: 'No preparation needed: Work IQ already knows what keeps you busy. In Copilot Chat, with <b>Work IQ</b> on, ask one of these. Pick one topic you’re happy to show on screen in your group, and note the name of its key document.',
            variants: [
              ['Your three big topics', 'Looking at my emails, meetings, Teams chats and files from the last 30 days, what are the three projects or topics taking most of my time? For each: one line on what it is, what is coming up next, and the most important document for it.'],
              ['Or: what’s coming up next week', 'Go through my last week: my meetings, emails and Teams chats. Then look at my calendar for next week. Tell me which meetings need preparation, most important first, and for the top one, which emails, chats and files matter for it.'],
            ],
            fields: ['call'],
            media: [{ image: 'assets/img/cos/ws-0-topics.png', caption: 'Real answer: each topic with what’s next and its key document.' }],
            alt: { fold: true, label: 'Empty mailbox or confidential work? Use one of our cases', text: 'All files are invented. Download one pack and unzip it. In task B, select the upload arrow next to the tabs and pick all the files.',
              cases: { field: 'call', list: [
                { title: 'AI pilot: steering committee', what: 'Approve, defer or reject EUR 420,000 for an AI claims-triage pilot. Operations and Finance disagree on the value, and some actions are overdue.', zip: 'downloads/ai-pilot-pack.zip', contents: 'Four Word files, a PDF, a PowerPoint deck and an Excel register.', value: 'the steering committee on the AI claims-triage pilot next Tuesday' },
                { title: 'Q3 results: board review', what: 'Premiums are ahead of plan, but Property & Casualty holds the result back. Be ready for the board’s questions.', zip: 'downloads/q3-review-pack.zip', contents: 'A Word memo, a PowerPoint deck and the Excel figures.', value: 'the Q3 results review with the board next Tuesday' },
              ] } } },
          { title: 'Put it in a Workspace',
            use: { label: 'Three clicks', steps: [
              'In the left pane select <b>Workspaces</b> (still called <b>Notebooks</b> in many tenants), then <b>New</b>. Type your topic as the name (1) and select <b>Next</b> (2).',
              'Search for the key document Copilot named (1) and select it so it gets a tick (2). Add one or two more if you like, then select <b>Create</b> (3).',
              'Done: your files appear under <b>References</b> on the right.',
            ] },
            media: [
              { image: 'assets/img/cos/ws-a-name.png', caption: '<b>1</b> name it after your topic, <b>2</b> Next.' },
              { image: 'assets/img/cos/ws-b-add.png', caption: '<b>1</b> search the key document, <b>2</b> tick it, <b>3</b> Create.' },
            ],
            note: 'Have the newer Workspaces? The suggestion <b>Find and add recent work data</b> finds the content for you; untick anything that doesn’t belong. Keep at least one Word, PowerPoint or PDF file for the bonus flashcards.' },
          { title: 'Generate your podcast',
            how: 'This is the one to take home. In the <b>Content</b> pane select <b>Audio overview</b>. Choose <b>Dialog</b> for two voices (1) and <b>Shorter</b> (2), pick your language, German works too (3), paste the text below into <b>Additional instructions</b> (4) and select <b>Generate</b> (5).',
            prompt: 'Brief me for {call}: what matters, the decisions coming up, the risks, and the questions I should be ready for.',
            media: [
              { image: 'assets/img/cos/ws-c-audio-button.png', caption: 'Audio overview in the Content pane.' },
              { image: 'assets/img/cos/ws-d-audio-dialog.png', caption: '<b>1</b> Dialog, <b>2</b> Shorter, <b>3</b> language, <b>4</b> your focus, <b>5</b> Generate.' },
              { image: 'assets/img/cos/ws-e-podcast.png', caption: 'About two minutes later: open it under Creations (1) and play (2). Ours ran 9½ minutes from one Word file at Medium length.' },
            ],
            note: 'Put on headphones and listen to the first minute. The podcast stays under <b>Creations</b> in this Workspace, ready for your commute. While it generates, carry on with D.' },
          { title: 'Ask your chief of staff',
            how: 'Your Workspace answers only from the files you added. Ask while the podcast is being made:',
            prompt: 'What do I need to know before {call}? List the decision in one sentence, the three numbers that matter, and the questions I’m likely to get.',
            more: { label: 'Then dig in', prompt: 'Where do the files in this workspace disagree, and which source should count? What is still open, and who owns it?' },
            alt: { fold: true, label: 'Make it answer as your chief of staff, every time', text: 'Select <b>…</b> in the top right → <b>Instructions</b>, paste this and select <b>Save</b>. It applies only inside this Workspace; your Personalization from step 2 still applies everywhere.', prompt: 'You are my chief of staff. Prepare me for {call}. Be direct and brief, and lead with what I must decide or know. Flag where the sources disagree and say which one should count. Separate facts from estimates and proposals. Name the source file for every number.' } },
          { title: 'Bonus: more from the same files',
            how: 'Same Workspace, one click each in the <b>Content</b> pane. Pick one:',
            variants: [
              ['Flashcards or a quiz', 'Create flashcards to prepare me for {call}: the figures, names and decisions I must know.', { how: 'Select <b>Study guide</b> → <b>Flashcards</b> or <b>Quiz</b>. Needs a Word, PowerPoint or PDF file in the Workspace.' }],
              ['A one-page infographic', 'Create an infographic with the key figures and decisions for {call}, so I can share it with my team.', { how: 'Select <b>Infographic</b>. Copilot writes the prompt for you, or ask in chat:' }],
            ],
            media: [
              { image: 'assets/img/cos/workspace-6-study-guide.png', caption: '<b>1</b> Study guide, <b>2</b> Flashcards, <b>3</b> Quiz.' },
              { image: 'assets/img/cos/workspace-8-infographic.jpg', caption: 'A real infographic, one click, from the AI pilot pack.' },
            ] },
        ],
        wow: 'Copilot found your topic, built the Workspace from your own files and turned it into a podcast that briefs you on the way home. It can quiz you and draw the one-pager too.',
        check: ['A Workspace named after your topic, with its key document', 'A podcast under Creations that you started playing', 'One answer from your Workspace, or flashcards or an infographic'],
      },
    ],
    sideQuests: [
      { id: 'cos-planner', title: 'Planner agent (if you have it)', time: 5, what: 'Turns your to-do list into real tasks with due dates. Look for <b>Planner</b> under <b>Agents</b> in the left pane, or type <b>@Planner</b>. Not there? It isn’t switched on for you yet.', prompt: '@Planner Create tasks in my plan for these to-dos, each with a due date this week: [paste your to-do list]' },
      { id: 'cos-cowork', title: 'Cowork (if you have it)', time: 8, what: 'Copilot Chat recommends; Cowork does the work and asks you before it acts. Add your morning-sweep chat as context, the same way you add a file or a meeting. It can now also create tasks in Planner and notes in OneNote.', prompt: 'Using my morning sweep, draft the replies I owe, block 45 minutes of focus time tomorrow morning for the decision I need to make, and add the rest of my to-dos to Planner. Show me everything before you send or book anything.' },
      { id: 'cos-board', title: 'Build a mini app from your to-dos (newer Copilot)', time: 8, what: 'Copilot can build small interactive apps, not only text. Select <b>+</b> → <b>More</b> (1) → <b>Draft page or code</b> (2) so the <b>Page</b> chip appears (3), then send the prompt. It runs as a background task for a minute or two. ' + 'Don’t see <b>Draft page or code</b>? It isn’t in your version yet: skip this one. Moves on the board aren’t saved when you close the page, so it’s a planning view; for tasks that should stick, use the Planner side quest. Like it? <b>…</b> → <b>Add to Notebook</b> puts it in your Workspace.', prompt: 'Using my emails, meetings and Teams chats from the last two days, make my to-do list. Then turn it into an interactive board in a Copilot Page with the columns To do, Waiting on others and Done: one card per to-do, with who it is for and the due date. Let me move cards between columns and add new ones.', media: [{ image: 'assets/img/cos/chat-11-draft-page.png', caption: '<b>1</b> More, <b>2</b> Draft page or code, <b>3</b> the Page chip.' }, { image: 'assets/img/cos/chat-12-board.png', caption: 'A board built in a Copilot Page. <b>…</b> → Add to Notebook keeps it in your Workspace.' }] },
      { id: 'cos-agent', title: 'Build an agent (if you have Agent Builder)', time: 12, what: 'Do you see <b>Agents</b> → <b>New agent</b> in the left pane? Describe the agent like you would to a new assistant, then add your Workspace under <b>Knowledge</b>. Tip: agents built in Agent Builder can read but not write. Ask the agent which emails need a reply, then remove it from the chat and let Copilot draft them.', prompt: 'Create an agent called “My Chief of Staff”. It helps me organise my day and week, decide which emails need a reply, and suggest replies in my voice. My role: {role}. My most important rule: {rule}. Use my workspace as knowledge.' },
      { id: 'cos-facilitator', title: 'Facilitator in your next Teams meeting', time: 5, what: 'Switch on <b>Facilitator</b> in a Teams meeting and it keeps live notes, decisions and actions for everyone. Organisers can now get the recap without keeping a transcript. During or after the meeting, ask Copilot:', prompt: 'What have we decided so far, who owns each action, and what is still open?' },
      { id: 'cos-voice', title: 'Talk to it on the way in', time: 3, what: 'In the Microsoft 365 Copilot app on your phone, tap the microphone to start a voice chat. Voice chats use your saved memory, so your rules from step 2 come with you.', prompt: 'What’s on my plate today, and what’s the one thing I shouldn’t drop?' },
      { id: 'cos-researcher', title: 'Researcher (optional, slow)', time: 8, prompt: 'Research what changed in customer service expectations in German insurance this year and give me three implications for my team.', what: 'A deeper, slower answer with sources. Start it, then do something else.' },
      { id: 'cos-to-xls', type: 'link', title: 'Finished early?', time: 0, what: 'Try the Excel trail and make the formulas do the thinking.', href: 'trail.html?t=xls', cta: 'Excel trail →' },
    ],
  },
};

// Fill-in fields: a {key} in any prompt is replaced live with what the attendee types (or the default).
ADV.fields = {
  lang: { label: 'Your language', default: 'German', options: ['German', 'Italian', 'Spanish', 'French', 'Polish', 'Greek', 'Dutch'] },
  role: { label: 'Your role', default: 'Head of Customer Service' },
  focus: { label: 'What you’re focused on right now', default: 'reducing the claims backlog before year-end' },
  rule: { label: 'Your most important rule', default: 'everything from my team is priority 1', options: ['everything from my team is priority 1', 'requests from the board office are answered the same day', 'for meetings without an agenda, suggest I ask for one', 'protect my Friday mornings for focus time'] },
  pref: { label: 'Something Copilot should remember', default: 'I prefer short bullet points over long paragraphs', options: ['I prefer short bullet points over long paragraphs', 'I like detailed answers that explain the reasoning', 'I want the answer first, then the details', 'I always want clear next steps at the end', 'I want deadlines and owners called out first'] },
  call: { label: 'Your topic and its next meeting', default: 'the steering committee on the AI claims-triage pilot next Tuesday' },
  who: { label: 'A colleague: someone in your group, or type your own name', default: '[colleague’s name]' },
};

// Bonus track for anyone who finishes early, on every trail.
ADV.bonus = {
  title: 'Bonus: Copilot Workspaces',
  text: 'Pick a project or a customer of your choice. Create a Workspace, add the files, emails and pages that matter, then try the audio overview.',
  advanced: 'The Advanced focus: one place for everything about one project, and Copilot answers only from what you put in.',
  steps: [
    'In Microsoft 365 Copilot, select <b>Workspaces</b> in the left pane (it used to be called Notebooks) → <b>New</b>. Name it after a real project or customer.',
    'Add what matters: today’s results (your workbook, your deck, your meeting summary), plus files, emails and pages from that project.',
    'Ask the Workspace a question across all of it, then try the <b>audio overview</b> and listen on your way home.',
  ],
  prompts: [
    'What are the open decisions across everything in this workspace, and who owns each one?',
    'Write a one-page brief on this project for someone joining the team next week.',
  ],
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
  'Re-test all three trails end to end in the final FLS environment before 17 Nov. The Chief-of-Staff trail was rebuilt so it no longer needs agents (Rebecca’s earlier test stopped at page 2 because agents weren’t enabled).',
  'Test with a user without usage-based billing and not on Frontier: the experience differs.',
  'Interactive Slides: Microsoft’s rollout to PowerPoint for the web finished end of October 2026 and there are no admin controls. Confirm the button shows in ERGO’s tenant.',
  'Do web data and work data (emails) work in Excel in ERGO’s tenant? (Trail 1, step 3)',
  'Which built-in Excel skills are live in ERGO’s tenant? @theme-design, @chart-design, @clean-data and @interactive-canvas are still rolling out. (Trail 1, steps 4 and 5; @interactive-canvas is now the main HTML route, Copilot Chat is Plan B)',
  'Excel step 5C: apply the “Make it yours” ideas one after another (cumulatively) and check the dashboard still renders after each one.',
  'Does ERGO Motion run and play in ERGO’s PowerPoint for the web? It worked in a Microsoft demo tenant on 15 Nov (slide built in about 3 minutes, plays in Slide Show), not yet tested in ERGO’s tenant. (Trail 2, step 3)',
  'Chief-of-Staff trail: Agent Builder is now only a side quest. Check in ERGO’s tenant: email actions from chat (flag, pin), Settings → Personalization (custom instructions, Memory), Schedule this prompt, and Workspaces with emails as content and audio overview. Planner agent and Cowork are optional side quests.',
  'Workspace Study guide: flashcards, quiz, topics, fill in the blanks and matching need Word, PowerPoint or PDF files under 100k characters that aren’t protected. If ERGO’s sensitivity labels encrypt documents, attendees should use the case packs (AI pilot, Q3 review; unlabelled) or the Copilot Page prompt.',
  'Languages (Rebecca): “Auf Deutsch, bitte” works. Was the flow tested in other participants’ languages, and may people work in their preferred language? Not decided yet.',
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
  'ergo-brand': ['🧭', 'Compass'], 'ergo-deck': ['🚩', 'Summit flag'], 'ergo-motion-slides': ['🎞️', 'Film camera'], 'ergo-board-sparring': ['🪢', 'Rope team'], 'interactive-slides-workaround': ['🗺️', 'Map'],
  'chief-of-staff': ['📟', 'Radio'], 'my-voice': ['🚩', 'Your own flag'],
};
ADV.altitude = { base: 1200, perStep: 450, flag: 50 };
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
