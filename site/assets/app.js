// Shared behaviour for every page: state, top bar, skill drawer, copy buttons, Easter eggs, presenter mode.
(function () {
  const ADV = window.ADV;
  const KEY = 'ergo-adventure-v1';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  ADV.reduce = reduce;

  // ---------- state ----------
  const blank = () => ({ trail: null, quiz: [], clippy: false, done: {}, quests: {}, skills: {}, badges: {}, seen: {}, radio: {}, name: '', souvenir: '' });
  ADV.load = () => { try { return Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { return blank(); } };
  ADV.save = (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode: state lives for this page only */ } };
  ADV.state = ADV.load();
  ADV.update = (fn) => { fn(ADV.state); ADV.save(ADV.state); ADV.renderDrawer(); };
  ADV.reset = () => { ADV.state = blank(); ADV.save(ADV.state); location.href = 'index.html'; };

  const $ = (sel, root = document) => root.querySelector(sel);
  ADV.$ = $;
  ADV.esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  ADV.param = (k) => new URLSearchParams(location.search).get(k);

  // ---------- toast ----------
  let toastTimer;
  ADV.toast = (msg) => {
    let t = $('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); t.setAttribute('aria-live', 'polite'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  };

  // ---------- copy ----------
  ADV.copy = async (text, btn) => {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch { /* ignore */ } ta.remove();
    }
    if (btn) { const old = btn.textContent; btn.textContent = 'Copied ✓'; btn.classList.add('copied'); setTimeout(() => { btn.textContent = old; btn.classList.remove('copied'); }, 1600); }
    ADV.toast('Copied. Paste it into Copilot.');
    document.dispatchEvent(new CustomEvent('adv:copied', { detail: text }));
  };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-copy]');
    if (b) ADV.copy(b.getAttribute('data-copy'), b);
  });
  ADV.promptBox = (text) => `<div class="prompt"><q>${ADV.esc(text)}</q><button type="button" data-copy="${ADV.esc(text)}" aria-label="Copy prompt: ${ADV.esc(text)}">Copy</button></div>`;

  // ---------- confetti ----------
  ADV.confetti = () => {
    if (reduce) return;
    const box = document.createElement('div'); box.className = 'confetti'; box.setAttribute('aria-hidden', 'true');
    const colours = ['#e0283c', '#bf1629', '#242424', '#1b88d8', '#0cafe1', '#3ecfa6', '#8b5cf6', '#f59e0b'];
    for (let i = 0; i < 90; i++) {
      const c = document.createElement('i');
      c.style.left = Math.random() * 100 + 'vw'; c.style.background = colours[i % colours.length];
      c.style.animationDuration = 1.8 + Math.random() * 1.8 + 's'; c.style.animationDelay = Math.random() * .4 + 's';
      c.style.transform = `rotate(${Math.random() * 360}deg)`; box.appendChild(c);
    }
    document.body.appendChild(box); setTimeout(() => box.remove(), 4200);
  };

  ADV.clippyImg = '<img src="assets/img/brands/clippy.png" alt="Clippy, the Office assistant" width="150" height="150">';

  // ---------- skills and progress ----------
  ADV.collectSkills = (names) => {
    const fresh = names.filter((n) => !ADV.state.skills[n]);
    if (!fresh.length) return;
    ADV.update((s) => fresh.forEach((n) => { s.skills[n] = true; }));
    const btn = $('.drawer-btn'); if (btn) { btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump'); }
    if (ADV.fx && ADV.fx.flyGear) ADV.fx.flyGear(fresh, document.activeElement);
    ADV.toast(`Gear added: ${fresh.map((n) => (ADV.gear && ADV.gear[n] ? ADV.gear[n].join(' ') + ' · ' : '') + ADV.skills[n].title).join(', ')}`);
    ADV.lastNew = fresh;
  };
  ADV.award = (badge) => {
    if (ADV.state.badges[badge]) return;
    ADV.update((s) => { s.badges[badge] = true; });
    ADV.toast(`Badge unlocked: ${ADV.badges[badge].icon} ${ADV.badges[badge].title}`);
  };
  ADV.checkQuests = (trailKey) => {
    const t = ADV.trails[trailKey];
    if (t && t.sideQuests && t.sideQuests.every((q) => ADV.state.quests[q.id])) ADV.award('all-quests');
  };

  // ---------- top bar, drawer, footer ----------
  ADV.shell = ({ active } = {}) => {
    const trail = ADV.state.trail && ADV.trails[ADV.state.trail] && !ADV.trails[ADV.state.trail].comingSoon ? ADV.state.trail : null;
    const nav = [
      ['index.html', 'Start', 'home'],
      ['anatomy.html', 'Anatomy of a skill', 'anatomy'],
      [trail ? `trail.html?t=${trail}` : 'index.html#choose', 'My trail', 'trail'],
      ['library.html', 'Prompt library', 'library'],
      ['finale.html', 'Finale', 'finale'],
    ];
    const header = document.createElement('header'); header.className = 'topbar';
    header.innerHTML = `<a class="skip" href="#main">Skip to content</a>
      <div class="brandmark"><button class="logo-btn" type="button" aria-label="ERGO"><img class="logo" src="assets/img/ergo-logo.png" alt="ERGO" width="74" height="22"></button><span class="x" aria-hidden="true">×</span><img class="ms" src="assets/img/microsoft-logo.png" alt="Microsoft" width="89" height="22"></div>
      <nav aria-label="Workshop">${nav.map(([h, l, k]) => `<a href="${h}" ${k === active ? 'aria-current="page"' : ''}>${l}</a>`).join('')}</nav>
      <button class="drawer-btn" type="button" aria-haspopup="dialog" aria-controls="drawer"><span aria-hidden="true">🎒</span> Skills <span class="count">0</span></button>`;
    document.body.prepend(header);

    const scrim = document.createElement('div'); scrim.className = 'scrim'; scrim.hidden = true;
    const drawer = document.createElement('aside'); drawer.className = 'drawer'; drawer.id = 'drawer';
    drawer.setAttribute('role', 'dialog'); drawer.setAttribute('aria-modal', 'true'); drawer.setAttribute('aria-label', 'Your skill collection');
    document.body.append(scrim, drawer);
    const open = () => { drawer.classList.add('open'); scrim.hidden = false; ADV.renderDrawer(); setTimeout(() => $('.drawer .close', drawer)?.focus(), 50); };
    const close = () => { drawer.classList.remove('open'); scrim.hidden = true; $('.drawer-btn').focus(); };
    $('.drawer-btn').addEventListener('click', open);
    scrim.addEventListener('click', close);
    drawer.addEventListener('click', (e) => { if (e.target.closest('.close')) close(); if (e.target.closest('[data-reset]') && confirm('Start again? This clears your progress on this device.')) ADV.reset(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && drawer.classList.contains('open')) close(); });

    // Easter egg: three clicks on the logo
    let clicks = 0, timer;
    $('.logo-btn').addEventListener('click', () => {
      clicks++; clearTimeout(timer); timer = setTimeout(() => { clicks = 0; }, 900);
      if (clicks >= 3) { clicks = 0; ADV.award('haiku-summary'); ADV.confetti(); open(); }
    });

    const foot = document.createElement('footer'); foot.className = 'site';
    foot.innerHTML = `<div class="wrap"><span>ERGO Female Leadership Summit · Make Copilot yours</span><span>${ADV.label}.</span></div>`;
    document.body.appendChild(foot);
    ADV.renderDrawer();
    ADV.presenter();
    if (ADV.fx && ADV.fx.buddy && active !== 'home') ADV.fx.buddy.init();
  };

  ADV.renderDrawer = () => {
    const drawer = $('#drawer'); const count = $('.drawer-btn .count');
    const s = ADV.state; const owned = Object.keys(ADV.skills).filter((k) => s.skills[k]);
    if (count) count.textContent = owned.length + Object.keys(s.badges).length;
    if (!drawer) return;
    const order = s.trail === 'xls' ? ['ergo-data-controls', 'ergo-ifrs9-ecl', 'ergo-ecl-explainability', 'ergo-brand', 'ergo-board-pack', 'ergo-board-sparring', 'my-voice']
      : ['ergo-brand', 'ergo-board-pack', 'ergo-board-sparring', 'ergo-data-controls', 'ergo-ifrs9-ecl', 'ergo-ecl-explainability', 'my-voice'];
    const skillText = window.SKILL_TEXT || {};
    const cards = order.map((k) => {
      const sk = ADV.skills[k]; const lit = !!s.skills[k]; const isNew = (ADV.lastNew || []).includes(k);
      return `<article class="skill-card ${lit ? 'lit' : 'locked'} ${isNew ? 'new' : ''}">
        <span class="pill">${sk.app}</span>${ADV.gear && ADV.gear[k] ? `<span class="pill" style="margin-left:6px">${ADV.gear[k][0]} ${ADV.gear[k][1]}</span>` : ''}<h4>${sk.title}</h4><p>${sk.what}</p>
        ${lit && skillText[k] ? `<details><summary>Read the SKILL.md</summary><pre class="code" style="margin-top:8px;font-size:11.5px">${ADV.esc(skillText[k])}</pre></details>` : `<p class="small" style="margin-top:8px">Trigger: ${sk.trigger}</p>`}
      </article>`;
    }).join('');
    const badges = Object.entries(ADV.badges).filter(([k]) => s.badges[k]).map(([k, b]) => `<article class="skill-card lit badge-card"><span class="ic" aria-hidden="true">${b.icon}</span><div><h4>${b.title}</h4><p>${b.what}</p>${b.download ? `<p style="margin-top:8px"><a class="btn small ghost" href="${b.download}" download>Download the skill</a></p>` : ''}</div></article>`).join('');
    ADV.lastNew = [];
    drawer.innerHTML = `<button class="btn small ghost close" type="button" style="float:right">Close</button>
      <p class="eyebrow">Your backpack</p><h2>${owned.length} of ${Object.keys(ADV.skills).length} skills</h2>
      <p class="muted small">Each skill is a piece of gear. It lights up when you finish a step that uses it.</p>
      ${badges ? `<h3 style="margin-top:24px">Badges</h3>${badges}` : ''}
      <h3 style="margin-top:24px">Skills</h3>${cards}
      <p style="margin-top:24px"><button class="linkish" type="button" data-reset>Start again on this device</button></p>`;
  };

  // ---------- presenter mode ----------
  ADV.presenter = () => {
    if (ADV.param('presenter') !== null) sessionStorage.setItem('ergo-presenter', '1');
    if (ADV.param('presenter') === 'off') sessionStorage.removeItem('ergo-presenter');
    if (!sessionStorage.getItem('ergo-presenter')) return;
    const cfg = ADV.config;
    const btn = document.createElement('button'); btn.className = 'drawer-btn'; btn.type = 'button'; btn.textContent = 'Presenter';
    $('.topbar').appendChild(btn);
    const el = document.createElement('div'); el.className = 'presenter'; el.hidden = true; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Presenter mode');
    el.innerHTML = `<div class="row" style="justify-content:space-between"><div class="chapters"></div><div class="row"><button class="btn small ghost" data-act="start">Start</button><button class="btn small ghost" data-act="reset">Reset</button><button class="btn small ghost" data-act="close">Close</button></div></div>
      <div style="align-self:center"><p class="eyebrow">Now</p><div class="chapter"></div><p class="lede note" style="max-width:60ch"></p><div class="clock" aria-live="off">45:00</div></div>
      <div class="row" style="justify-content:space-between"><button class="btn red" data-act="cue">Move everyone to the finale</button>
      <span class="muted">${cfg.wallUrl ? `Live wall: <a href="${cfg.wallUrl}" target="_blank" rel="noopener">${cfg.wallUrl}</a>` : 'Live wall: set <code>wallUrl</code> in assets/content.js'}</span></div>
      <div class="cue" hidden><div><p class="eyebrow" style="color:#fff">Time’s up, explorers</p><h2>Back together for the finale.</h2><p class="lede" style="color:#fff;margin:0 auto">Save your work. Bring your best slide or chart.</p><p style="margin-top:30px"><button class="btn" data-act="uncue">Hide</button></p></div></div>`;
    document.body.appendChild(el);
    const st = JSON.parse(sessionStorage.getItem('ergo-presenter-clock') || '{"start":null,"paused":0}');
    const saveSt = () => sessionStorage.setItem('ergo-presenter-clock', JSON.stringify(st));
    const elapsed = () => (st.start ? (Date.now() - st.start) / 1000 : st.paused);
    let manual = null;
    const chs = $('.chapters', el);
    cfg.chapters.forEach((c, i) => { const b = document.createElement('button'); b.textContent = `${c.from}′ ${c.title}`; b.addEventListener('click', () => { manual = i; tick(); }); chs.appendChild(b); });
    const tick = () => {
      const e = elapsed(); const left = Math.max(0, cfg.totalMinutes * 60 - e);
      $('.clock', el).textContent = `${String(Math.floor(left / 60)).padStart(2, '0')}:${String(Math.floor(left % 60)).padStart(2, '0')}`;
      const auto = cfg.chapters.findIndex((c) => e / 60 >= c.from && e / 60 < c.to);
      const i = manual ?? (auto < 0 ? cfg.chapters.length - 1 : auto);
      $('.chapter', el).textContent = cfg.chapters[i].title; $('.note', el).textContent = cfg.chapters[i].note;
      [...chs.children].forEach((b, k) => b.classList.toggle('on', k === i));
      $('[data-act="start"]', el).textContent = st.start ? 'Pause' : 'Start';
    };
    el.addEventListener('click', (e) => {
      const a = e.target.closest('[data-act]')?.dataset.act; if (!a) return;
      if (a === 'start') { if (st.start) { st.paused = elapsed(); st.start = null; } else { st.start = Date.now() - st.paused * 1000; } manual = null; saveSt(); }
      if (a === 'reset') { st.start = null; st.paused = 0; manual = null; saveSt(); }
      if (a === 'close') { el.hidden = true; btn.focus(); }
      if (a === 'cue') $('.cue', el).hidden = false;
      if (a === 'uncue') $('.cue', el).hidden = true;
      tick();
    });
    btn.addEventListener('click', () => { el.hidden = false; tick(); $('[data-act="start"]', el).focus(); });
    setInterval(tick, 500); tick();
    if (ADV.param('presenter') !== null) { el.hidden = false; }
  };
})();
