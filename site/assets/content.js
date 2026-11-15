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
  'ergo-board-sparring': { app: 'PowerPoint', title: 'Board Rehearsal', what: 'Our version of the skill you build in step 4: the Chair, the CFO, a supervisor and the works council each ask their hardest question, answered from your deck.', trigger: '"rehearse", "what will they ask"', zip: 'downloads/ergo-board-sparring.zip', md: 'downloads/ergo-board-sparring-SKILL.md' },
  'ergo-motion-slides': { app: 'PowerPoint', title: 'ERGO Motion', what: 'Animated, clickable ERGO slides: tiles that count up, charts that grow. Live HTML inside the slide, the same mechanism as Interactive Slides, with a still picture for PDF.', trigger: '"animated ERGO slides", "ERGO motion slides"', zip: 'downloads/ergo-motion-slides.zip', md: 'downloads/ergo-motion-slides-SKILL.md' },
  'interactive-slides-workaround': { app: 'PowerPoint', title: 'Interactive Slides (workaround)', what: 'Only if the Interactive Slide button is missing: turns one slide into a clickable overview that links to detail slides.', trigger: '"make this slide interactive"', zip: 'downloads/interactive-slides-workaround.zip', md: 'downloads/interactive-slides-workaround-SKILL.md' },
  'chief-of-staff': { app: 'Copilot Chat', title: 'Your Chief of Staff', kind: 'agent', what: 'Your custom instructions plus a scheduled morning sweep: knows your priorities, writes your to-do list before you arrive, and drafts replies in your voice. No agent needed.', trigger: 'every weekday at 07:45, or open your Workspace' },
  'my-voice': { app: 'Any', title: 'My Voice', what: 'Your writing style as short rules. Saved in your custom instructions, or used as a skill on its own.', trigger: '"in my voice"', md: 'downloads/my-voice-SKILL.md' },
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
        title: 'Understand and clean', goal: 'Let Copilot explain a table you’ve never seen, then fix the mess.', time: 10,
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
        title: 'Formulas that think', goal: 'XLOOKUP, LET and a formula you didn’t have to write. On every row, for 1 or 10,000 rows.', time: 12,
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
        title: 'Bring in outside data', goal: 'Add information that isn’t in the workbook yet.', time: 8, test: true,
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
        title: 'Make it readable', goal: 'Colour and a built-in skill: see what matters without reading every number.', time: 8,
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
        title: 'Dashboards', goal: 'From PivotTables to slicers to an interactive HTML dashboard, rendered right in Excel.', time: 15,
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
    kit: { file: 'downloads/powerpoint-kit.zip', size: 'about 300 KB', contents: ['board-memo.docx', 'q3-figures.xlsx', 'board-pack-ready.pptx', 'messy-draft.pptx', 'skills-upload-as-zip/ (4 skill ZIPs)', 'START-HERE.txt'] },
    setup: [
      'Download the kit, <code>powerpoint-kit.zip</code>, with the red button above. It lands in your Downloads folder.',
      'Unzip it on your laptop first: right-click the ZIP → <b>Extract all</b>. OneDrive can’t open a ZIP, so don’t upload the ZIP itself.',
      'Open OneDrive in the browser (<a href="https://onedrive.cloud.microsoft" target="_blank" rel="noopener">onedrive.cloud.microsoft</a>), select <b>+ Create or upload</b> → <b>Files upload</b> and upload these four files from the unzipped folder: <code>board-memo.docx</code>, <code>q3-figures.xlsx</code>, <code>board-pack-ready.pptx</code> and <code>messy-draft.pptx</code>.',
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
        title: 'Shape the deck', goal: 'Add, translate and make it interactive.', time: 14,
        files: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx'], ['downloads/q3-figures.xlsx', 'q3-figures.xlsx']],
        intro: 'Keep working in <code>board-pack-ready.pptx</code>, or in the deck you built in step 1.',
        tasks: [
          { title: 'One slide, two ways',
            variants: [
              ['Without image generation (fast)', 'Add a slide after slide 2 that shows our three priorities for 2027 as three columns, each with an icon. No pictures.'],
              ['With image generation', 'Add the same slide again, this time with a generated image of a modern claims service team.'],
            ],
            note: 'Watch the clock: how long does each one take, and which would you show the board?' },
          { title: 'Auf Deutsch, bitte',
            prompt: 'Make a German version of this deck for the supervisory board.' },
          { title: 'Interactive Slides',
            how: 'Select <b>Interactive Slide</b> on the <b>Home</b> or <b>Insert</b> tab. Pick a category (<b>Summary</b>, <b>Timeline</b>, <b>Dashboard</b>, <b>Comparison</b>) or <b>Custom</b>. It’s also in the Copilot pane as <b>Create interactive slide</b>. To use the figures, type <b>/</b> and pick <code>q3-figures.xlsx</code>.',
            variants: [
              ['Dashboard from your Excel file', 'Create an interactive dashboard slide from /q3-figures.xlsx: tabs for gross written premium, combined ratio and operating result, each comparing the business units with plan and prior year.'],
              ['Timeline from the deck', 'Create an interactive timeline slide of the next steps in this deck, so I can click through each step and see what happens and who decides.'],
            ],
            more: { label: 'Then refine it by prompting', prompt: 'Make the charts bar charts, add a filter by business unit, and match the colours to this deck.' },
            alt: { label: 'If the Interactive Slide button is missing', text: 'Check you’re in PowerPoint for the web. If it’s still not there, upload our workaround skill (clicks as in step 3, task A). It builds a clickable overview with links to detail slides:', prompt: 'Make slide 3 interactive: one tile per KPI that links to a detail slide, and a “Back to overview” link on every detail slide.' },
            skillFiles: ['interactive-slides-workaround'],
            note: 'Change an interactive slide by prompting, not by editing the slide. In a Teams meeting every attendee clicks around on their own, so it’s great to explore and less suited to presenting. Optional: try it in pairs in a Teams meeting on the room monitor. Viewers don’t need a Copilot licence.' },
        ],
        wow: 'A new slide two ways, the whole deck in German, and a slide your audience can click through, filled with numbers from your own workbook.',
        check: ['Two versions of the priorities slide, and you know which you’d keep', 'Every slide in German, figures unchanged', 'An interactive slide you can click through in Slide Show'],
      },
      {
        title: 'Make it ERGO', goal: 'Two custom skills, two jobs: restyle with ERGO Brand, animate with ERGO Motion.', time: 14,
        files: [['downloads/messy-draft.pptx', 'messy-draft.pptx'], ['downloads/q3-figures.xlsx', 'q3-figures.xlsx']],
        intro: 'Add both skills first. Then try them one by one: each task says which skill should load.',
        tasks: [
          { title: 'Add the skills', upload: { skills: ['ergo-brand', 'ergo-motion-slides'], app: 'ppt', explore: true } },
          { title: 'ERGO Brand: restyle what’s there',
            open: 'messy-draft.pptx',
            prompt: 'Make these slides board-ready.',
            note: 'ERGO Brand is rules only: it restyles your existing slides and never changes a figure.',
            media: { type: 'compare', before: 'assets/media/messy-draft-s2.jpg', after: 'assets/media/ppt-step1-s2.jpg', caption: 'Drag to compare. Before: the messy draft. After: with the ERGO Brand skill.' } },
          { title: 'ERGO Motion: slides that move', level: 'advanced',
            open: 'the deck from task B, or any deck',
            how: 'Attach <code>q3-figures.xlsx</code> with <b>+</b>, or type <b>/</b> and pick it. Then send:',
            prompt: 'Add an animated ERGO appendix slide with the Q3 KPIs from /q3-figures.xlsx: tiles that count up and a bar chart of the combined ratio that grows.',
            prompt2: 'Start the Slide Show and watch it move. Then compare it with the slides ERGO Brand restyled: which would you show the board, and why?',
            note: 'Motion slides are live HTML inside PowerPoint: the same mechanism as Interactive Slides in step 2. ERGO Motion writes and runs a small program, so building takes a few minutes: use the wait to look at the ERGO Brand result. Change motion slides by prompting, not by editing the slide. Exported to PDF they become a still picture. If ERGO Brand loads instead, start the prompt with <b>@ergo-motion-slides</b> or with “Use the ergo-motion-slides skill to…”. If the new slide stays blank in the editor, open <b>Slide Show › From Current Slide</b>: it plays there.' },
        ],
        wow: 'Same brand, two jobs: ERGO Brand tidies the deck you have in seconds, and ERGO Motion adds a slide that moves. You never named a skill: Copilot read their descriptions and picked one.',
        explain: {
          q: 'What exactly does ERGO Motion do, and which one should I use?',
          lead: 'ERGO Motion builds the slide as a small web page (HTML) and places it inside your PowerPoint slide. That is why it can do things normal slides can’t: numbers that count up, bars that grow, elements you can click. Many people like HTML slides for storytelling, because the animation walks the audience through the message. It is the same mechanism PowerPoint itself now uses for Interactive Slides, which you tried in step 2.',
          cols: [
            ['Standard slides (ERGO Brand)', ['Text boxes, shapes and charts you know', 'Click into any text and edit it yourself', 'Works everywhere: PDF, print, older PowerPoint', 'Restyles in about a minute']],
            ['HTML slides (ERGO Motion)', ['Animations and interaction: count-ups, growing charts, clicks', 'Strong for a story you present live', 'To change it, you ask Copilot again: you can’t type into the slide', 'Takes a few minutes to build; in a PDF it becomes a still picture']],
          ],
          tip: 'Rule of thumb: standard slides for anything people will edit, print or forward. One HTML slide where you want a moment in the room, for example the key number at the end of the board story.',
        },
        yours: { text: 'Open <b>Custom skills</b>, select <b>ergo-brand</b> and change “Maximum 3 bullets” to “Maximum 2 bullets”. Ask again and watch the slides follow your rule. This shows how you can change a custom skill’s rules to fit your own needs.', prompt: 'Make these slides board-ready.' },
        check: ['Copilot’s reply names the ERGO rules it applied (headlines, bullets, notes) and every number is unchanged', 'Message headlines and one red accent per slide', 'Advanced: an ERGO Motion slide that moves in Slide Show'],
        skills: ['ergo-brand', 'ergo-motion-slides'],
      },
      {
        title: 'Turn it into skills', goal: 'You’ll do this before every board meeting. Turn it into a skill.', time: 12,
        files: [['downloads/board-pack-ready.pptx', 'board-pack-ready.pptx'], ['downloads/messy-draft.pptx', 'messy-draft.pptx']],
        tasks: [
          { title: 'Write a skill by prompting',
            prompt: 'Turn what we did in step 1 into a custom skill: summarise the deck, list the questions the board could ask, and add each question with a short answer to the speaker notes of the right slide. Write it as a SKILL.md with a name, a description of when to use it, and numbered steps.',
            how: 'Copy the SKILL.md Copilot writes. Then select <b>…</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b> → <b>Create manually</b> and paste it in.',
            more: { label: 'Test it', prompt: 'Rehearse the board meeting with me. What will they ask?' },
            alt: { label: 'If your own skill doesn’t work yet', text: 'Upload our version, Board Rehearsal (ZIP below, same clicks as step 3), and test it with the same prompt.' },
            skillFiles: ['ergo-board-sparring'] },
          { title: 'Record a skill (Advanced)', level: 'advanced',
            how: '<ol><li>Select <b>+</b> → <b>Choose skills</b> → <b>Manage plugins &amp; skills</b> → <b>Custom skills</b> → <b>Add</b> → <b>Record a skill</b>.</li><li>Make simple changes by hand, for example make the heading bigger, and set all slide text to Arial.</li><li>Select <b>Stop</b>, review the draft Copilot writes, and upload it.</li><li>Open the other deck and reuse it. Say the scope out loud:</li></ol>',
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
        check: ['Your skill shows up under Custom skills', '“Loaded … skill” when you test it', 'Advanced: the other deck changed in the scope you asked for'],
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
    mission: 'Make Copilot your own Chief of Staff, with no agent to build. One prompt sweeps your meetings, emails and chats. Copilot remembers how you work, runs the sweep every morning, and a Chief-of-Staff Workspace prepares you for your next big meeting.',
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
      basic: 'Aim for the morning sweep in step 1, your rules and a memory test in step 2 and one scheduled prompt in step 3. In step 4, pick a case, create the Workspace with its instructions and try the Study guide if there’s time.',
      advanced: 'Run steps 1 to 3 quickly, then spend your time in the Workspace in step 4: instructions, the Study guide, a visual and the audio overview. Then pick side quests: Planner, Cowork or Agent Builder, if you have them.',
    },
    trouble: [
      ['Copilot doesn’t find any emails or meetings', 'Your mailbox may be new or empty. Open the <b>Plan B</b> box under the prompt and use the sample emails and the demo transcript instead.'],
      ['Copilot didn’t flag or pin anything', 'Email actions from chat may not have reached you yet. Ask Copilot to list the emails instead, and flag them yourself in Outlook.'],
      ['I can’t find Personalization or Memory', 'Open <b>Settings</b> (your profile picture or <b>…</b>) → <b>Personalization</b>. Not there yet? Keep your rules in your Workspace or a Word file and paste them at the start of a chat.'],
      ['There’s no Schedule option on my prompt', 'Hover over the prompt you sent, not Copilot’s answer, and look for the clock icon or <b>…</b> → <b>Schedule</b>. If it isn’t there, it isn’t switched on for you yet: save the prompt instead and run it each morning.'],
      ['I can’t find Workspaces', 'Look in the left pane of Microsoft 365 Copilot. Workspaces used to be called <b>Notebooks</b>, so you may still see that name.'],
      ['The Study guide shows no flashcards or quiz', 'Flashcards, the quiz, topics, fill in the blanks and matching are built only from Word, PowerPoint and PDF files, each under about 100,000 characters and not protected. Emails, meetings and Excel only give you the summary. Add a Word, PowerPoint or PDF file, or use the Plan B prompt for flashcards in a Copilot Page.'],
      ['Copilot says it can’t make flashcards', 'Ask for them <b>in a Copilot Page</b>: “Create interactive flashcards in a Copilot Page…”. Plain chat has no flashcard mode.'],
    ],
    steps: [
      {
        title: 'The morning sweep', goal: 'One prompt that goes through your meetings, emails and chats and hands you today’s to-do list.', time: 9,
        open: 'Microsoft 365 Copilot Chat',
        tasks: [
          { title: 'Sweep everything at once',
            how: 'One prompt, several jobs. Copilot works through your calendar, your inbox and your Teams chats, one after the other.',
            prompt: 'Go through my meetings from yesterday and today, my unread and flagged emails, and my Teams chats from the last two days. Tell me 1) what I promised and to whom, 2) who is waiting for me, and 3) which decisions I need to make. Then give me a prioritised to-do list for today, most urgent first, and tell me which emails need a reply.',
            alt: { fold: true, label: 'My mailbox is empty', files: [['downloads/sample-emails.md', 'sample-emails.md'], ['downloads/demo-meeting-transcript.txt', 'demo-meeting-transcript.txt']], text: 'Imagine these are yours. Upload both files with <b>+</b>, or open them, copy the text and paste it after this prompt:', prompt: 'Here are last week’s emails and a meeting transcript. Tell me what I promised, who is waiting for me and which decisions I need to make. Then give me a prioritised to-do list for today and tell me which emails need a reply:' } },
          { title: 'Let Copilot tidy your inbox', test: true,
            how: 'Copilot can now act on your inbox, not only talk about it: flag, pin, archive, mark as read. Check Outlook in the other tab afterwards.',
            prompt: 'Flag the emails that need a reply from me today, and pin the most urgent one.',
            more: { label: 'Then draft', prompt: 'Draft replies to the three most urgent emails, short and with a clear next step, so I can review them in Outlook.' },
            note: 'Nothing is sent. Open each draft in Outlook and edit it before sending, or don’t send it at all.' },
        ],
        wow: 'One prompt read your calendar, inbox and chats, told you who is waiting for you, and flagged the emails in Outlook. You’ll want this every morning. Step 3 makes that happen on its own.',
        check: ['A list of what you promised and who is waiting for you', 'A prioritised to-do list for today', 'Flagged emails in Outlook, or at least one draft reply you edited'],
      },
      {
        title: 'Make it remember you', goal: 'Your role, your rules and your voice in every chat. No brief to paste, no agent to build.', time: 12, test: true,
        open: 'Microsoft 365 Copilot Chat',
        tasks: [
          { title: 'Write your rules',
            how: 'These instructions apply to <b>every</b> chat, so keep them general: who you are, what matters to you now, how you like your answers. The chief-of-staff role comes in step 4, in its own Workspace. Fill in the fields; the prompt writes itself.',
            fields: ['role', 'focus', 'rule'],
            prompt: 'Help me write custom instructions for Copilot that apply to every chat: who I am, what matters to me right now and how I like my answers. My role: {role}. What I’m focused on right now: {focus}. My most important rule: {rule}. Ask me up to three questions first, then give me the instructions as one short block of text.' },
          { title: 'Add My Voice',
            how: 'Copy three short emails or messages you wrote (your <b>Sent items</b> are a good place to look) and paste them after this prompt:',
            prompt: 'Here are three messages I wrote. Describe my tone of voice as five short rules and add them to my instructions. Then show me the full instructions again:',
            alt: { fold: true, label: 'I don’t want to use my own emails', files: [['downloads/sample-voice-texts.md', 'sample-voice-texts.md']], text: 'Use these three sample messages instead: open the text, select <b>Copy all</b> and paste it after the prompt above.' } },
          { title: 'Save it so Copilot remembers',
            use: { label: 'Save your instructions', steps: [
              'Copy the full instructions from Copilot’s answer.',
              'Open <b>Settings</b> → <b>Personalization</b> → <b>Custom instructions</b>, paste them in and save.',
              'On the same page, check that <b>Memory</b> is on. From now on every chat knows how you work, in Copilot Chat, in Outlook and on your phone.',
            ] },
            note: 'Test it in a <b>new chat</b>: “Draft a reply in my voice to the most urgent email from my team.” No brief, no agent, and it still sounds like you.' },
          { title: 'See memory at work',
            how: 'Memory also learns from what you tell it. Pick one preference, or write your own, and tell Copilot to remember it.',
            fields: ['pref'],
            prompt: 'Remember that {pref}.',
            variants: [
              ['Then, in a new chat', 'Summarise the most important emails I received this week.'],
              ['Check what it knows', 'What do you remember about me?'],
            ],
            note: 'Notice the difference in the answer. You can see and delete everything Copilot remembers under <b>Settings</b> → <b>Personalization</b> → <b>Memory</b>.' },
        ],
        wow: 'Copilot now knows your role, your priorities, how you write and how you like your answers, in every chat. That’s what most people build an agent for.',
        check: ['Your rules saved under Custom instructions', 'Your tone of voice written down as rules', 'One preference remembered, and an answer that follows it'],
        skills: ['my-voice'],
      },
      {
        title: 'Schedule it', goal: 'Your morning sweep runs before you reach your desk, every working day.', time: 6, test: true,
        open: 'Microsoft 365 Copilot Chat',
        tasks: [
          { title: 'Schedule the morning sweep',
            prompt: 'Go through my meetings today, my unread and flagged emails, and my Teams chats since yesterday. Tell me 1) what I promised, 2) who is waiting for me, and 3) which decisions I need to make. Then give me a prioritised to-do list for today and the replies that can’t wait.',
            use: { label: 'Then schedule it', steps: [
              'Send the prompt once and check the answer.',
              'Hover over your prompt and select <b>Schedule this prompt</b> (the clock icon, or <b>…</b> → <b>Schedule</b>).',
              'Choose <b>daily</b> on weekdays at <b>07:45</b>. Copilot runs it for you and the answer is waiting in this chat when you arrive.',
            ] } },
          { title: 'Add the week in review',
            how: 'Send this in a new chat, then schedule it <b>weekly</b>, on Friday at 15:00.',
            prompt: 'My week in review: what got done, what slipped, which replies I still owe, and the three things I must not drop next week.' },
          { title: 'Keep it one click away',
            how: 'Hover over a prompt you want again and select <b>Save prompt</b>. You find it later in the <b>Prompt Gallery</b>, next to the prompts your company publishes.',
            note: 'You can change or stop a schedule later from the same menu.' },
        ],
        wow: 'Tomorrow at 07:45, before your first coffee, Copilot has read your calendar, inbox and chats and written your to-do list. On Friday afternoon, your week reviews itself.',
        check: ['A daily morning sweep, scheduled', 'A weekly review for Friday, scheduled', 'Your favourite prompt saved in the Prompt Gallery'],
        skills: ['chief-of-staff'],
      },
      {
        title: 'Your Chief-of-Staff Workspace', goal: 'A Workspace that acts as your chief of staff. Today it prepares you for one meeting: pick a case, set its instructions, then study, visualise and listen.', time: 18, test: true,
        open: 'Microsoft 365 Copilot → Workspaces',
        tasks: [
          { title: 'Pick a meeting to prepare',
            how: 'Imagine it’s on your calendar next Tuesday. Pick one of our cases (all files are invented), or use a real meeting of your own.',
            cases: { field: 'call', list: [
              { title: 'AI pilot: steering committee', what: 'Approve, defer or reject EUR 420,000 for an AI claims-triage pilot. Operations and Finance disagree on the value, and some actions are overdue.', zip: 'downloads/ai-pilot-pack.zip', contents: 'Four Word files, a PDF, a PowerPoint deck and an Excel register.', value: 'the steering committee on the AI claims-triage pilot next Tuesday' },
              { title: 'Q3 results: board review', what: 'Premiums are ahead of plan, but Property & Casualty holds the result back. Be ready for the board’s questions.', zip: 'downloads/q3-review-pack.zip', contents: 'A Word memo, a PowerPoint deck and the Excel figures.', value: 'the Q3 results review with the board next Tuesday' },
              { title: 'Your own meeting', what: 'A real meeting next week. Bring its Word, PowerPoint or PDF files, plus emails. Not sure which one? Task D finds it for you. Files encrypted by a sensitivity label may not work in the Study guide yet.' },
            ] },
            fields: ['call'] },
          { title: 'Create it and make it your chief of staff',
            use: { label: 'Set it up', steps: [
              'Unzip the pack. Select <b>Workspaces</b> in the left pane (it used to be called Notebooks), then <b>New</b>. Name it <b>My Chief of Staff</b>.',
              'Under <b>Content</b>, select the paperclip and add all the files. Your own meeting? Add its files and email threads, including <b>at least one Word, PowerPoint or PDF file</b>: the Study guide builds flashcards and the quiz only from those.',
              'Select <b>…</b> in the top right → <b>Instructions</b>, paste the text below and select <b>Save</b>. These rules apply only inside this Workspace.',
            ] },
            prompt: 'You are my chief of staff. Prepare me for {call}. Be direct and brief, and lead with what I must decide or know. Flag where the sources disagree and say which one should count. Separate facts from estimates and proposals. Name the source file for every number.',
            note: 'Your Personalization from step 2 still applies everywhere. The Workspace instructions add a role for this one job.' },
          { title: 'Ask your chief of staff',
            how: 'Below the prompt box you choose the scope: <b>only this Workspace</b>, so Copilot answers from these files and nothing else, or <b>Work and web</b>, which adds your mailbox, your other files and the web. Ask this both ways and compare.',
            prompt: 'What do I need to know before {call}? List the decision in one sentence, the three numbers that matter, and the questions I’m likely to get.',
            more: { label: 'Then dig in', prompt: 'Where do the files in this workspace disagree, and which source should count? What is still open, and who owns it?' } },
          { title: 'What should I prepare next week?',
            how: 'Now use your chief of staff on your real week. Switch the scope to <b>Work and web</b> and send this multi-step prompt. It looks back first, then ahead, then starts the work.',
            prompt: 'Go through my last week: my meetings, emails and Teams chats. Then look at my calendar for next week. Tell me 1) which meetings next week need preparation, most important first, 2) for the top one, what I should have ready (a short brief, talking points, a deck, the figures or flashcards), and 3) which emails, chats and files matter for it. Then create the first of those assets for me.',
            note: 'Add the files it names to the Workspace with the paperclip and type that meeting into the field in task A: every prompt on this page then prepares you for it.' },
          { title: 'Study for the call',
            use: { label: 'Open the Study guide', steps: [
              'In the Workspace, select <b>New</b> and scroll down to <b>Study guide</b>.',
              'Copilot builds a summary and topic pages from your files, plus <b>flashcards</b>, a <b>quiz</b>, <b>fill in the blanks</b> and a <b>matching</b> game.',
              'Flip through the flashcards, then take the quiz. If you get a question wrong, the explanation points back to the source file.',
            ] },
            alt: { fold: true, label: 'No Study guide, or no flashcards?', text: 'Check that the Workspace has a Word, PowerPoint or PDF file that isn’t protected (step B). Or ask in chat: Copilot builds flip cards and a quiz in a <b>Copilot Page</b>. Plain chat has no flashcard mode, so ask for the Page.', prompt: 'Create interactive flashcards in a Copilot Page to prepare me for {call}: a question on the front, the answer on the back, with the figures, names and decisions I must know. Then add a short quiz with five multiple-choice questions. Use only the files in this workspace.' } },
          { title: 'Make it visual',
            variants: [
              ['Infographic', 'Create an infographic with the key figures and decisions for {call}, so I can share it with my team.', { how: 'Select <b>New</b> → <b>Infographic</b>, next to the Study guide. Or ask in chat:' }],
              ['Mind map', 'Show everything in this workspace as a mind map.'],
              ['A Page with your to-dos', 'Create a Page for {call}: what I want to achieve, my key messages, the questions I expect, and a to-do list I can tick off.'],
              ['A briefing deck', 'Create a five-slide PowerPoint briefing for {call} from this workspace.'],
            ],
            note: 'Pick one or two. A Page stays in the Workspace and you can keep editing it with Copilot. The deck opens in PowerPoint, ready to refine.' },
          { title: 'Listen on the way',
            how: 'Create an <b>audio overview</b>: a few minutes, like a short podcast, for the drive or the train.',
            prompt: 'Create an audio overview of this workspace to prepare me for {call}: what matters, the open decisions and who will ask what.',
            note: 'Audio overviews take a few minutes. Start it, then go back to another task or a side quest.' },
        ],
        wow: 'A chief of staff for one meeting: it knows the files, follows your rules, tells you where the sources disagree, quizzes you, and briefs you on the way.',
        check: ['A Workspace with the pack (or your own Word, PowerPoint or PDF files) in it', 'Workspace instructions saved', 'The same question answered from the Workspace only and from Work and web', 'A Study guide: flashcards flipped and the quiz taken', 'An infographic, a mind map, a Page or a deck', 'An audio overview, or one on its way'],
      },
    ],
    sideQuests: [
      { id: 'cos-planner', title: 'Planner agent (if you have it)', time: 5, what: 'Turns your to-do list into real tasks with due dates. Look for <b>Planner</b> under <b>Agents</b> in the left pane, or type <b>@Planner</b>. Not there? It isn’t switched on for you yet.', prompt: '@Planner Create tasks in my plan for these to-dos, each with a due date this week: [paste your to-do list]' },
      { id: 'cos-cowork', title: 'Cowork (if you have it)', time: 8, what: 'Copilot Chat recommends; Cowork does the work and asks you before it acts. Add your morning-sweep chat as context, the same way you add a file or a meeting. It can now also create tasks in Planner and notes in OneNote.', prompt: 'Using my morning sweep, draft the replies I owe, block 45 minutes of focus time tomorrow morning for the decision I need to make, and add the rest of my to-dos to Planner. Show me everything before you send or book anything.' },
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
  role: { label: 'Your role', default: 'Head of Customer Service' },
  focus: { label: 'What you’re focused on right now', default: 'reducing the claims backlog before year-end' },
  rule: { label: 'Your most important rule', default: 'everything from my team is priority 1', options: ['everything from my team is priority 1', 'requests from the board office are answered the same day', 'for meetings without an agenda, suggest I ask for one', 'protect my Friday mornings for focus time'] },
  pref: { label: 'Something Copilot should remember', default: 'I prefer short bullet points over long paragraphs', options: ['I prefer short bullet points over long paragraphs', 'I like detailed answers that explain the reasoning', 'I want the answer first, then the details', 'I always want clear next steps at the end', 'I like my answers in German'] },
  call: { label: 'The meeting you’re preparing for', default: 'the steering committee on the AI claims-triage pilot next Tuesday' },
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
  'ergo-brand': ['🧭', 'Compass'], 'ergo-motion-slides': ['🎞️', 'Film camera'], 'ergo-board-sparring': ['🪢', 'Rope team'], 'interactive-slides-workaround': ['🗺️', 'Map'],
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
