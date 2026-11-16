// Summit expedition animations, built with GSAP (assets/vendor/gsap.min.js).
// Everything here is decoration around the real work in PowerPoint and Excel: skippable, short,
// and replaced by the end state when the visitor prefers reduced motion.
(function () {
  const ADV = window.ADV, gsap = window.gsap;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => ADV.esc(s);
  const F = window.FACTS || {};
  const fx = (ADV.fx = {});
  const reduce = () => ADV.reduce || document.documentElement.classList.contains('reduce');
  const run = (tl) => { if (reduce()) tl.progress(1).pause(); return tl; };
  const onView = (el, fn, threshold = 0.35) => {
    if (!('IntersectionObserver' in window)) return fn();
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { io.disconnect(); fn(); } }), { threshold });
    io.observe(el);
  };
  const eur = (v, style = 'a') => (style === 'a' ? `EUR ${v.toLocaleString('en-GB', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}m` : `€${Math.round(v).toLocaleString('en-GB')}m`);
  const copilotImg = (cls = '') => `<img class="${cls}" src="assets/img/brands/microsoft-copilot.png" alt="" aria-hidden="true">`;

  // ======================================================================
  // Altitude and the height profile
  // ======================================================================
  fx.altitude = (key) => {
    const t = ADV.trails[key]; if (!t || !t.steps) return { alt: ADV.altitude.base, core: 0, total: 0, flag: false };
    const A = ADV.altitude, s = ADV.state.done;
    const coreIdx = t.steps.map((st, i) => (st.optional ? null : i + 1)).filter(Boolean);
    const core = coreIdx.filter((n) => s[`${key}-${n}`]).length;
    const flag = t.steps.some((st, i) => st.optional && s[`${key}-${i + 1}`]);
    return { alt: A.base + core * A.perStep + (flag ? A.flag : 0), core, total: coreIdx.length, flag, summit: A.base + coreIdx.length * A.perStep };
  };

  fx.profile = (el, key) => {
    const info = fx.altitude(key); const n = info.total;
    const W = 1000, H = 130, x0 = 40, x1 = 930;
    const y = (alt) => 118 - ((alt - 1100) / (3100 - 1100)) * 104;
    const camps = Array.from({ length: n + 1 }, (_, i) => ({ x: x0 + ((x1 - x0) * i) / n, y: y(ADV.altitude.base + i * ADV.altitude.perStep), alt: ADV.altitude.base + i * ADV.altitude.perStep }));
    let d = `M0 ${H} L0 ${camps[0].y + 8} L${camps[0].x} ${camps[0].y}`;
    camps.slice(1).forEach((c, i) => {
      const p = camps[i]; const mx = (p.x + c.x) / 2;
      d += ` L${mx - 30} ${(p.y + c.y) / 2 + 10} L${mx} ${(p.y + c.y) / 2 + 2} L${mx + 25} ${(p.y + c.y) / 2 + 9} L${c.x} ${c.y}`;
    });
    d += ` L${W} ${camps[n].y + 30} L${W} ${H} Z`;
    const names = ['Base camp'].concat(Array.from({ length: n - 1 }, (_, i) => `Camp ${i + 1}`), ['Summit']);
    el.classList.add('profile');
    el.innerHTML = `<div class="alt-read" aria-live="polite"><span class="alt-ic" aria-hidden="true">⛰️</span><span class="alt-num">${info.alt.toLocaleString('en-GB')}</span><span class="alt-unit">m</span>
        <span class="alt-sub">${info.core >= n ? 'Summit reached' : `${(info.summit - info.alt).toLocaleString('en-GB')} m to the summit`}</span></div>
      <div class="pf-box"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="Height profile of your trail">
        <defs><linearGradient id="pf-g" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#e9e4dc"/><stop offset="1" stop-color="#f7f6f3" stop-opacity="0"/></linearGradient></defs>
        <path d="${d}" fill="url(#pf-g)" stroke="#c9c2b6" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
        <polyline class="pf-route" points="${camps.map((c) => `${c.x},${c.y}`).join(' ')}" fill="none" stroke="#bf1629" stroke-width="2" stroke-dasharray="6 6" vector-effect="non-scaling-stroke"/>
        ${camps.map((c, i) => `<circle cx="${c.x}" cy="${c.y}" r="5" class="pf-camp ${i <= info.core ? 'on' : ''}" vector-effect="non-scaling-stroke"/>`).join('')}
        <g class="pf-flag" transform="translate(${camps[n].x} ${camps[n].y})"><line x1="0" y1="0" x2="0" y2="-26" stroke="#242424" stroke-width="2" vector-effect="non-scaling-stroke"/><path class="pf-cloth" d="M0 -26 L20 -21 L0 -15 Z" fill="#bf1629"/></g>
      </svg>
      <div class="pf-labels">${camps.map((c, i) => `<span style="left:${(c.x / W) * 100}%">${names[i]}<b>${c.alt.toLocaleString('en-GB')} m</b></span>`).join('')}</div>
      <div class="pf-marker" aria-hidden="true">${copilotImg()}</div></div>`;
    const marker = $('.pf-marker', el), num = $('.alt-num', el), cloth = $('.pf-cloth', el);
    const place = (alt) => {
      const f = Math.max(0, Math.min(n, (Math.min(alt, info.summit) - ADV.altitude.base) / ADV.altitude.perStep));
      const i = Math.min(n - 1, Math.floor(f)), t = f - i, a = camps[i], b = camps[Math.min(n, i + 1)];
      marker.style.left = ((a.x + (b.x - a.x) * t) / W) * 100 + '%';
      marker.style.top = ((a.y + (b.y - a.y) * t) / H) * 100 + '%';
    };
    place(info.alt);
    gsap.set(cloth, { scaleX: info.flag || info.core >= n ? 1 : 0, transformOrigin: '0% 50%' });
    let current = info.alt;
    return {
      update() {
        const next = fx.altitude(key); const from = { v: current };
        $$('.pf-camp', el).forEach((c, i) => c.classList.toggle('on', i <= next.core));
        $('.alt-sub', el).textContent = next.core >= n ? 'Summit reached' : `${(next.summit - next.alt).toLocaleString('en-GB')} m to the summit`;
        const tl = gsap.timeline();
        tl.to(from, { v: next.alt, duration: 1.4, ease: 'power2.out', onUpdate: () => { num.textContent = Math.round(from.v).toLocaleString('en-GB'); place(from.v); } });
        tl.fromTo($('.alt-read', el), { scale: 1 }, { scale: 1.08, duration: .25, yoyo: true, repeat: 1, ease: 'power1.inOut' }, 0);
        if (next.core >= n) tl.to(cloth, { scaleX: 1, duration: .6, ease: 'back.out(3)' }, '-=.2');
        run(tl); if (reduce()) { num.textContent = next.alt.toLocaleString('en-GB'); place(next.alt); }
        const gained = next.alt - current; current = next.alt; return { gained, next };
      },
    };
  };

  // ======================================================================
  // The companion: Copilot climbs with you
  // ======================================================================
  const buddy = (fx.buddy = {});
  buddy.init = () => {
    if ($('.buddy') || !ADV.config.buddy) return;
    const b = document.createElement('div'); b.className = 'buddy'; b.setAttribute('role', 'complementary'); b.setAttribute('aria-label', 'Copilot, your expedition partner');
    b.innerHTML = `<button class="buddy-face" type="button" aria-label="Copilot: show or hide tips">${copilotImg()}<span class="buddy-ring" aria-hidden="true"></span></button>
      <div class="buddy-bubble" role="status" aria-live="polite" hidden><button class="buddy-x" type="button" aria-label="Hide tip">×</button><div class="buddy-text"></div><div class="buddy-actions"></div></div>`;
    document.body.appendChild(b);
    buddy.el = b;
    if (ADV.state.buddyOff) b.classList.add('muted');
    if (!reduce()) {
      gsap.fromTo(b, { y: 120, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'back.out(1.6)', delay: .4 });
      buddy.idle = gsap.to($('.buddy-face', b), { y: -6, duration: 1.6, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      $('.buddy-face', b).addEventListener('mouseenter', () => buddy.idle.pause());
      $('.buddy-face', b).addEventListener('mouseleave', () => buddy.idle.resume());
    }
    $('.buddy-face', b).addEventListener('click', () => {
      const off = !b.classList.contains('muted'); b.classList.toggle('muted', off);
      ADV.update((s) => { s.buddyOff = off; }); if (off) buddy.hide(); else buddy.say('I’m back. Tips are on.');
    });
    $('.buddy-x', b).addEventListener('click', () => buddy.hide());
    document.addEventListener('adv:copied', () => { if (ADV.trails[ADV.state.trail]) buddy.think(ADV.buddyLines.copied.replace('{app}', ADV.trails[ADV.state.trail].app || 'Copilot')); });
  };
  let hideTimer;
  buddy.say = (html, { actions = [], radio = null, ttl = 7000, force = false, soft = false } = {}) => {
    const b = buddy.el; if (!b) return;
    if (b.classList.contains('muted') && !force) return;
    if (soft && buddy.last) return;
    buddy.last = Date.now();
    const bub = $('.buddy-bubble', b);
    $('.buddy-text', b).innerHTML = (radio ? `<p class="radio-head"><span aria-hidden="true">📻</span> Radio from Copilot · ${esc(radio)}</p>` : '') + `<p>${html}</p>`;
    $('.buddy-actions', b).innerHTML = actions.map((a, i) => `<button type="button" class="btn small ${a.primary ? 'red' : 'ghost'}" data-i="${i}">${esc(a.label)}</button>`).join('');
    $$('.buddy-actions button', b).forEach((btn) => btn.addEventListener('click', () => { actions[btn.dataset.i].onClick?.(btn); if (actions[btn.dataset.i].close !== false) buddy.hide(); }));
    bub.hidden = false; bub.classList.toggle('radio', !!radio);
    run(gsap.fromTo(bub, { opacity: 0, y: 10, scale: .96 }, { opacity: 1, y: 0, scale: 1, duration: .35, ease: 'back.out(2)' }));
    clearTimeout(hideTimer); if (ttl && !actions.length) hideTimer = setTimeout(buddy.hide, ttl);
  };
  buddy.hide = () => {
    const bub = buddy.el && $('.buddy-bubble', buddy.el); if (!bub || bub.hidden) return;
    if (reduce()) { bub.hidden = true; return; }
    gsap.to(bub, { opacity: 0, y: 8, duration: .2, onComplete: () => { bub.hidden = true; } });
  };
  buddy.think = (line) => {
    const b = buddy.el; if (!b) return;
    b.classList.add('thinking'); setTimeout(() => b.classList.remove('thinking'), 2200);
    if (line) buddy.say(line, { ttl: 6000 });
  };
  buddy.cheer = (line) => {
    const b = buddy.el; if (!b) return;
    if (!reduce()) gsap.timeline().to($('.buddy-face', b), { y: -26, rotation: -8, duration: .22, ease: 'power2.out' }).to($('.buddy-face', b), { y: 0, rotation: 0, duration: .5, ease: 'bounce.out' });
    if (line) buddy.say(line, { ttl: 5000 });
  };

  // ======================================================================
  // Gear flies into the backpack
  // ======================================================================
  fx.flyGear = (skills, fromEl) => {
    const target = $('.drawer-btn'); if (!target || reduce()) return;
    const tr = target.getBoundingClientRect();
    const fr = (fromEl || document.body).getBoundingClientRect();
    skills.forEach((k, i) => {
      const g = document.createElement('span'); g.className = 'gear-fly'; g.textContent = (ADV.gear[k] || ['🎒'])[0]; g.setAttribute('aria-hidden', 'true');
      document.body.appendChild(g);
      const sx = fr.left + fr.width / 2, sy = fr.top + fr.height / 2, ex = tr.left + tr.width / 2, ey = tr.top + tr.height / 2;
      gsap.timeline({ delay: i * .18, onComplete: () => g.remove() })
        .set(g, { x: sx, y: sy, scale: .4, opacity: 0 })
        .to(g, { opacity: 1, scale: 1.6, duration: .25, ease: 'back.out(3)' })
        .to(g, { x: ex, duration: .8, ease: 'power1.inOut' }, '+=.1')
        .to(g, { y: sy - 140, duration: .4, ease: 'power2.out' }, '<')
        .to(g, { y: ey, duration: .4, ease: 'power2.in' }, '>')
        .to(g, { scale: .3, opacity: 0, duration: .2 }, '-=.1');
    });
  };

  // ======================================================================
  // Watch Copilot think (an illustration of the Copilot pane)
  // ======================================================================
  fx.thinkPane = (el, { prompt, skills, plan, app }) => {
    const chip = skills.length ? `Using skill${skills.length > 1 ? 's' : ''}: ${skills.map((k) => ADV.skills[k].title).join(' + ')}` : 'Plain Copilot: no custom skill needed';
    el.classList.add('cp-pane');
    el.innerHTML = `<div class="cp-head">${copilotImg('cp-logo')}<b>Copilot</b><span class="cp-app">in ${esc(app)}</span><span class="cp-tag">Illustration</span></div>
      <div class="cp-body">
        <div class="cp-user"><span class="cp-typed"></span><span class="cp-caret" aria-hidden="true"></span></div>
        <div class="cp-bot">
          <div class="cp-dots" aria-hidden="true"><i></i><i></i><i></i></div>
          <div class="cp-chip"><span aria-hidden="true">⚡</span> ${esc(chip)}</div>
          <ol class="cp-plan">${plan.map((p) => `<li><span class="cp-tick" aria-hidden="true">✓</span>${esc(p)}</li>`).join('')}</ol>
          <div class="cp-done">Done. Have a look at your file.</div>
        </div>
      </div>
      <div class="cp-foot"><span class="small muted">What you’ll see in the Copilot pane, roughly.</span><button class="linkish cp-replay" type="button">Replay</button></div>`;
    const typed = $('.cp-typed', el), o = { n: 0 };
    const tl = gsap.timeline({ paused: true })
      .set($$('.cp-bot > *', el), { opacity: 0, y: 8 }).set($$('.cp-plan li', el), { opacity: 0, x: -10 }).set($$('.cp-tick', el), { scale: 0 })
      .set(o, { n: 0 })
      .to(o, { n: prompt.length, duration: Math.min(1.6, prompt.length * .03), ease: 'none', onUpdate: () => { typed.textContent = prompt.slice(0, Math.round(o.n)); } })
      .to($('.cp-dots', el), { opacity: 1, y: 0, duration: .2 }, '+=.25')
      .to($('.cp-dots', el), { opacity: 0, duration: .2 }, '+=1.1')
      .to($('.cp-chip', el), { opacity: 1, y: 0, duration: .45, ease: 'back.out(3)' })
      .to($('.cp-plan', el), { opacity: 1, y: 0, duration: .1 })
      .to($$('.cp-plan li', el), { opacity: 1, x: 0, duration: .3, stagger: .55 }, '<')
      .to($$('.cp-tick', el), { scale: 1, duration: .25, ease: 'back.out(4)', stagger: .55 }, '<+.35')
      .to($('.cp-done', el), { opacity: 1, y: 0, duration: .35 }, '+=.2');
    const play = () => { if (reduce()) { tl.progress(1); typed.textContent = prompt; } else tl.restart(); };
    $('.cp-replay', el).addEventListener('click', play);
    tl.progress(1).progress(0); typed.textContent = '';
    onView(el, play, 0.5);
    return tl;
  };

  // ======================================================================
  // Race: Copilot out of the box vs Copilot with your skill
  // ======================================================================
  const units = () => Object.entries(F.units || {});
  fx.race = (el) => {
    const G = F.group; if (!G) return;
    const u = units(), max = Math.max(...u.map(([, v]) => v.actual.operating_result));
    const bars = (cls) => `<div class="rs-chart ${cls}">${u.map(([n, v], i) => `<div class="rs-col"><span class="rs-val">${Math.round(v.actual.operating_result)}</span><i style="--h:${(v.actual.operating_result / max) * 100}%" class="${cls === 'skill' && i === 1 ? 'focus' : ''}"></i><span class="rs-lab">${({ 'Life & Health': 'L&H', 'Property & Casualty': 'P&C', 'International': 'Intl', 'Digital Ventures': 'Digital' })[n] || n}</span></div>`).join('')}</div>`;
    el.classList.add('race');
    el.innerHTML = `<div class="rs-prompt"><span class="rs-you">You</span><span class="rs-typed"></span></div>
      <div class="rs-lanes">
        <figure class="rs-lane"><figcaption><b>Copilot, out of the box</b><span>Clear and correct</span></figcaption>
          <div class="rs-slide plain"><h4 class="rs-title">Q3 Results</h4>
            <ul class="rs-bul">${[`GWP ${eur(G.actual.gwp)} (plan ${eur(G.plan.gwp)})`, `Operating result ${eur(G.actual.operating_result)} (plan ${eur(G.plan.operating_result)})`, `Combined ratio ${G.actual.combined_ratio}% (plan ${G.plan.combined_ratio}%)`, `Expense ratio ${G.actual.expense_ratio}%`, 'Life & Health ahead, P&C behind'].map((t) => `<li>${t}</li>`).join('')}</ul>
            ${bars('plain')}<span class="rs-legend">■ Operating result by unit, EUR m</span></div></figure>
        <figure class="rs-lane"><figcaption><b>Copilot + ERGO Brand</b><span>Your house rules</span></figcaption>
          <div class="rs-slide skill"><img class="rs-logo" src="assets/img/ergo-logo.png" alt=""><h4 class="rs-title">Premiums ahead of plan, result held back by Property &amp; Casualty</h4>
            <ul class="rs-bul">${[`Operating result ${eur(G.actual.operating_result, 'b')} vs plan ${eur(G.plan.operating_result, 'b')}`, `Combined ratio ${G.actual.combined_ratio}%, plan ${G.plan.combined_ratio}%`, 'Costs on plan'].map((t) => `<li>${t}</li>`).join('')}</ul>
            ${bars('skill')}<span class="rs-foot">Source: q3-figures.xlsx · Illustrative figures</span>
            <span class="rs-rule r1">So-what headline</span><span class="rs-rule r2">Max 3 bullets</span><span class="rs-rule r3">One red accent</span><span class="rs-rule r4">Source line</span></div></figure>
      </div>
      <div class="row" style="justify-content:center;margin-top:16px"><button class="btn small red rs-go" type="button">▶ Run the race</button></div>`;
    const prompt = 'Make a slide on Q3 for the board.', o = { n: 0 }, typed = $('.rs-typed', el);
    const lanes = $$('.rs-slide', el);
    const tl = gsap.timeline({ paused: true })
      .set(o, { n: 0 }).set(lanes.map((l) => $$('.rs-title, .rs-bul li, .rs-legend, .rs-foot, .rs-logo', l)).flat(), { opacity: 0, y: 8 })
      .set($$('.rs-col i', el), { scaleY: 0 }).set($$('.rs-val', el), { opacity: 0 }).set($$('.rs-rule', el), { opacity: 0, scale: .6 })
      .to(o, { n: prompt.length, duration: 1, ease: 'none', onUpdate: () => { typed.textContent = prompt.slice(0, Math.round(o.n)); } });
    lanes.forEach((l) => {
      tl.to($$('.rs-logo, .rs-title', l), { opacity: 1, y: 0, duration: .4 }, 'build')
        .to($$('.rs-bul li', l), { opacity: 1, y: 0, duration: .3, stagger: .18 }, 'build+=.4')
        .to($$('.rs-col i', l), { scaleY: 1, duration: .6, ease: 'power3.out', stagger: .08 }, 'build+=1.1')
        .to($$('.rs-val, .rs-legend, .rs-foot', l), { opacity: 1, y: 0, duration: .3 }, 'build+=1.7');
    });
    tl.to($$('.rs-rule', el), { opacity: 1, scale: 1, duration: .35, ease: 'back.out(3)', stagger: .35 }, 'build+=1.9');
    const go = () => { if (reduce()) { tl.progress(1); typed.textContent = prompt; } else tl.restart(); };
    $('.rs-go', el).addEventListener('click', go);
    tl.progress(1).progress(0); typed.textContent = '';
    onView(el, go, 0.45);
  };

  // ======================================================================
  // Skill playground: change a rule, watch the slide follow it
  // ======================================================================
  fx.playground = (el) => {
    const G = F.group; if (!G) return;
    const accents = { red: ['ERGO red', '#bf1629'], blue: ['Blue', '#1f6feb'], green: ['Green', '#15803d'] };
    const s = { head: 'message', max: 3, accent: 'red', num: 'a' };
    const bulletsFor = (fmt) => [
      `Premiums ${eur(G.actual.gwp, fmt)}, against plan ${eur(G.plan.gwp, fmt)}`,
      `Operating result ${eur(G.actual.operating_result, fmt)}, against plan ${eur(G.plan.operating_result, fmt)}`,
      `Combined ratio ${G.actual.combined_ratio}%, plan ${G.plan.combined_ratio}%`,
      `Costs on plan: expense ratio ${G.actual.expense_ratio}%`,
      'Life & Health ahead; Property & Casualty behind',
    ];
    const titles = { topic: 'Q3 Results', message: 'Premiums ahead of plan, result held back by Property & Casualty' };
    const rules = () => [
      ['head', s.head === 'message' ? '- Every slide gets a full-sentence “so what” headline.' : '- Use a short topic label as the title.'],
      ['max', `- Maximum ${s.max} bullets per slide.`],
      ['accent', `- ${accents[s.accent][0]} ${accents[s.accent][1]} is the only accent colour.`],
      ['num', s.num === 'a' ? '- Write amounts as “EUR 4,125.0m”.' : '- Write amounts as “€4,125m”.'],
    ];
    const seg = (key, opts) => `<div class="pg-seg" role="radiogroup" aria-label="${key}">${opts.map(([v, l]) => `<button type="button" role="radio" data-k="${key}" data-v="${v}" aria-checked="${String(s[key]) === String(v)}">${l}</button>`).join('')}</div>`;
    const u = units(), max = Math.max(...u.map(([, v]) => v.actual.operating_result));
    el.classList.add('pg');
    el.innerHTML = `<div class="pg-side">
        <p class="eyebrow">ergo-brand / SKILL.md</p>
        <pre class="pg-code">---
name: ergo-brand
description: "Use when I ask to make slides board-ready…"
---
${rules().map(([k, t]) => `<span class="pg-line" data-line="${k}">${esc(t)}</span>`).join('\n')}</pre>
        <div class="pg-controls">
          <label>Headline</label>${seg('head', [['topic', 'Topic label'], ['message', '“So what” sentence']])}
          <label>Bullets</label>${seg('max', [[2, '2'], [3, '3'], [5, '5']])}
          <label>Accent</label>${seg('accent', Object.entries(accents).map(([k, [l]]) => [k, l]))}
          <label>Numbers</label>${seg('num', [['a', 'EUR 4,125.0m'], ['b', '€4,125m']])}
        </div></div>
      <div class="pg-stage"><div class="device"><div class="bar"><i></i><i></i><i></i></div>
        <div class="pg-slide" style="--acc:${accents[s.accent][1]}"><span class="pg-rule"></span><img class="pg-logo" src="assets/img/ergo-logo.png" alt="">
          <h4 class="pg-title">${titles[s.head]}</h4>
          <div class="pg-cols"><ul class="pg-bul">${bulletsFor(s.num).map((t, i) => `<li data-i="${i}">${esc(t)}</li>`).join('')}</ul>
            <div class="pg-key"><b class="pg-big">${eur(G.actual.operating_result, s.num)}</b><span>operating result</span>
              <div class="pg-bars">${u.map(([n, v], i) => `<i class="${i === 1 ? 'f' : ''}" style="--h:${(v.actual.operating_result / max) * 100}%" title="${esc(n)}"></i>`).join('')}</div></div></div>
          <span class="pg-foot">Source: q3-figures.xlsx · ${esc(F.label || '')}</span></div></div>
        <p class="small muted" style="margin-top:10px">Change a rule on the left. The slide follows it, the figures never change.</p></div>`;
    const lis = $$('.pg-bul li', el);
    lis.forEach((li, i) => { if (i >= s.max) gsap.set(li, { height: 0, opacity: 0, marginBottom: 0, overflow: 'hidden' }); });
    let first = true;
    const apply = (key) => {
      const slide = $('.pg-slide', el);
      $$(`.pg-seg button[data-k="${key}"]`, el).forEach((b) => b.setAttribute('aria-checked', String(String(s[key]) === b.dataset.v)));
      const line = $(`.pg-line[data-line="${key}"]`, el); line.textContent = rules().find(([k]) => k === key)[1];
      run(gsap.fromTo(line, { backgroundColor: 'rgba(191,22,41,.35)' }, { backgroundColor: 'rgba(191,22,41,0)', duration: 1.4 }));
      const tl = gsap.timeline();
      if (key === 'head') {
        const t = $('.pg-title', el);
        tl.to(t, { opacity: 0, y: -10, duration: .18 }).call(() => { t.textContent = titles[s.head]; }).fromTo(t, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .35, ease: 'power2.out' });
      }
      if (key === 'max') {
        lis.forEach((li, i) => {
          const show = i < s.max, shown = li.dataset.shown !== '0';
          if (show && !shown) tl.fromTo(li, { height: 0, opacity: 0, marginBottom: 0 }, { height: 'auto', opacity: 1, marginBottom: 8, duration: .35, ease: 'power2.out' }, '<.06');
          if (!show && shown) tl.to(li, { height: 0, opacity: 0, marginBottom: 0, duration: .3, ease: 'power2.in' }, '<.04');
          li.dataset.shown = show ? '1' : '0';
        });
      }
      if (key === 'accent') tl.to(slide, { '--acc': accents[s.accent][1], duration: .6, ease: 'power1.inOut' });
      if (key === 'num') {
        const big = $('.pg-big', el);
        tl.to([big, ...lis.slice(0, 2)], { rotationX: 90, opacity: 0, duration: .18, stagger: .05 })
          .call(() => { big.textContent = eur(G.actual.operating_result, s.num); bulletsFor(s.num).slice(0, 2).forEach((t, i) => { lis[i].textContent = t; }); })
          .to([big, ...lis.slice(0, 2)], { rotationX: 0, opacity: 1, duration: .25, stagger: .05 });
      }
      run(tl);
      if (first && fx.buddy.el) { first = false; fx.buddy.say(ADV.buddyLines.playground); }
      ADV.update((st) => { st.seen.playground = true; });
    };
    lis.forEach((li, i) => { li.dataset.shown = i < s.max ? '1' : '0'; });
    el.addEventListener('click', (e) => {
      const b = e.target.closest('.pg-seg button'); if (!b) return;
      const k = b.dataset.k, v = k === 'max' ? Number(b.dataset.v) : b.dataset.v;
      if (s[k] === v) return; s[k] = v; apply(k);
    });
  };

  // ======================================================================
  // Notes -> board pack, scrubbable
  // ======================================================================
  fx.scrub = (el, m) => {
    const chapters = [['read', 'Read the notes'], ['msg', 'Find the message'], ['build', 'Build five slides'], ['notes', 'Add speaker notes']];
    const caps = ['Message', 'KPI strip', 'What changed', 'Risks', 'Decision'];
    el.classList.add('scrub');
    el.innerHTML = `<div class="device"><div class="bar"><i></i><i></i><i></i></div><div class="sm-stage" role="img" aria-label="Three pages of notes turn into five board slides">
        ${m.notes.map((src, i) => `<div class="sm-page" style="--i:${i}"><img src="${src}" alt=""><span class="sm-hl" style="top:22%"></span><span class="sm-hl" style="top:41%;width:60%"></span><span class="sm-hl" style="top:63%;width:70%"></span></div>`).join('')}
        <div class="sm-msg">“Growth ahead of plan; one storm and rising motor costs hold back the result.”</div>
        ${m.slides.map((src, i) => `<div class="sm-slide" style="--i:${i}"><img src="${src}" alt=""><span class="sm-cap">${i + 1} · ${caps[i]}</span><span class="sm-note" aria-hidden="true">🗒️ notes</span></div>`).join('')}
      </div></div>
      <div class="sm-ctrl"><button class="btn small ghost sm-play" type="button" aria-label="Play">▶</button>
        <input type="range" min="0" max="1000" value="0" aria-label="Scrub through the transformation" class="sm-range">
      </div>
      <ol class="sm-chap">${chapters.map(([k, l]) => `<li data-k="${k}">${l}</li>`).join('')}</ol>
      <p class="small muted">${m.caption} Drag the slider to scrub through it.</p>`;
    const stage = $('.sm-stage', el), pages = $$('.sm-page', el), slides = $$('.sm-slide', el), range = $('.sm-range', el), play = $('.sm-play', el);
    const tl = gsap.timeline({ paused: true, onUpdate: () => { range.value = Math.round(tl.progress() * 1000); mark(); }, onComplete: () => { play.textContent = '↺'; } });
    tl.addLabel('read', 0)
      .fromTo(pages, { x: (i) => i * 26 - 26, y: (i) => i * 8, rotation: (i) => (i - 1) * 5, opacity: 1, scale: 1 }, { x: (i) => (i - 1) * 150, rotation: (i) => (i - 1) * 3, duration: .8, ease: 'power2.out' })
      .fromTo($$('.sm-hl', el), { scaleX: 0 }, { scaleX: 1, duration: .35, stagger: .12, ease: 'none' }, '<.4')
      .addLabel('msg')
      .fromTo($('.sm-msg', el), { opacity: 0, y: 20, scale: .9 }, { opacity: 1, y: 0, scale: 1, duration: .6, ease: 'back.out(2)' })
      .to(pages, { x: 0, y: 30, scale: .35, rotation: 0, opacity: 0, duration: .7, ease: 'power2.in', stagger: .06 }, '+=.5')
      .addLabel('build')
      .fromTo(slides, { xPercent: (i) => (2 - i) * 100, y: 40, scale: .3, opacity: 0, rotation: (i) => (i - 2) * 6 }, { xPercent: 0, y: 0, scale: 1, opacity: 1, rotation: 0, duration: .8, ease: 'back.out(1.3)', stagger: .14 })
      .to($('.sm-msg', el), { y: -6, scale: .92, duration: .4 }, '<')
      .fromTo($$('.sm-cap', el), { opacity: 0 }, { opacity: 1, duration: .3, stagger: .08 })
      .addLabel('notes')
      .fromTo($$('.sm-note', el), { opacity: 0, y: -6, scale: .6 }, { opacity: 1, y: 0, scale: 1, duration: .35, ease: 'back.out(3)', stagger: .1 });
    const labels = chapters.map(([k]) => tl.labels[k] / tl.duration());
    const mark = () => { const p = tl.progress(); $$('.sm-chap li', el).forEach((li, i) => li.classList.toggle('on', p >= labels[i] - .001 && (i === labels.length - 1 || p < labels[i + 1]) && p > 0)); };
    range.addEventListener('input', () => { tl.pause(); tl.progress(range.value / 1000); play.textContent = '▶'; });
    play.addEventListener('click', () => { if (tl.isActive()) { tl.pause(); play.textContent = '▶'; } else { if (tl.progress() >= 1) tl.progress(1).progress(0); tl.play(); play.textContent = '❚❚'; } });
    $$('.sm-chap li', el).forEach((li, i) => { li.tabIndex = 0; li.addEventListener('click', () => { tl.pause(); tl.progress(labels[i] + .001); }); });
    tl.progress(1).progress(0);
    onView(el, () => { if (reduce()) tl.progress(1); else { tl.play(); play.textContent = '❚❚'; } }, .5);
    fx._scrub = tl;
    return tl;
  };

  // ======================================================================
  // The panel takes its seats
  // ======================================================================
  const PANEL = [
    { who: 'The Chair', av: '👩‍💼', cares: 'The message, the decision, whether management is in control', q: 'Is Property & Casualty a one-off this quarter, or will we see this again?', a: 'The storm is one-off; motor inflation is structural, and pricing acts from January (slide 3).' },
    { who: 'The CFO', av: '👨‍💼', cares: 'Plan vs actual, one-off vs structural, the return', q: 'What does the EUR 18m return, and when will we know?', a: 'Faster handling and storm capacity now; the loss-ratio benefit comes with the Q1 2027 business case. Tranches limit exposure (slide 5).' },
    { who: 'A supervisor’s view', av: '🧑‍⚖️', cares: 'Governance, customer outcomes, human oversight', q: 'Who decides on a claim once automation is in place?', a: 'A person decides every claim payment; data-protection and AI-governance review before go-live (slide 5).' },
    { who: 'The works council', av: '🧑‍🔧', cares: 'People, workload, training, how change happens', q: 'What does this mean for claims handlers?', a: 'Capacity for peaks and faster service, not headcount cuts; training is part of tranche 1 (notes, slide 5).' },
  ];
  fx.panel = (el) => {
    el.classList.add('boardroom');
    el.innerHTML = `<div class="br-stage">
        <div class="br-wall"><span class="br-screen">Q3 2026 · Board meeting</span></div>
        <div class="br-seats">${PANEL.map((p, i) => `<button type="button" class="br-person" data-i="${i}" aria-label="${esc(p.who)}: show the question"><span class="br-q" aria-hidden="true">?</span><span class="br-av" aria-hidden="true">${p.av}</span><span class="br-name">${esc(p.who)}</span></button>`).join('')}</div>
        <div class="br-table" aria-hidden="true"></div>
      </div>
      <div class="br-detail" aria-live="polite"><p class="muted">The panel takes its seats…</p></div>
      <div class="row" style="justify-content:space-between"><span class="small muted">Example questions from the prepared result. Select a person.</span><button class="linkish br-replay" type="button">Replay</button></div>`;
    const people = $$('.br-person', el), detail = $('.br-detail', el);
    const show = (i) => {
      const p = PANEL[i]; people.forEach((b, k) => b.classList.toggle('on', k === i));
      detail.innerHTML = `<p class="br-who"><span aria-hidden="true">${p.av}</span> ${esc(p.who)} <span class="muted small">cares about ${esc(p.cares.toLowerCase())}</span></p><p class="br-question">“${esc(p.q)}”</p><p class="br-answer"><b>Suggested answer:</b> ${esc(p.a)}</p>`;
      run(gsap.fromTo(detail.children, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .3, stagger: .08 }));
      if (!reduce()) gsap.fromTo(people[i], { y: 0 }, { y: -10, duration: .18, yoyo: true, repeat: 1, ease: 'power1.out' });
    };
    const tl = gsap.timeline({ paused: true, onComplete: () => { detail.innerHTML = '<p class="muted">Everyone is seated. Who speaks first? Select a person.</p>'; } })
      .fromTo($('.br-table', el), { scaleX: .6, opacity: 0 }, { scaleX: 1, opacity: 1, duration: .5, ease: 'power2.out' });
    people.forEach((b, i) => {
      const side = i < 2 ? -1 : 1;
      tl.fromTo(b, { x: side * 420, opacity: 0 }, { x: 0, opacity: 1, duration: .9, ease: 'power2.out' }, .3 + i * .35)
        .to(b, { keyframes: { y: [0, -8, 0, -8, 0, -5, 0] }, duration: .9, ease: 'none' }, '<');
    });
    tl.fromTo($$('.br-q', el), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: .35, ease: 'back.out(4)', stagger: .2 }, '+=.2');
    people.forEach((b, i) => b.addEventListener('click', () => show(i)));
    $('.br-replay', el).addEventListener('click', () => { people.forEach((b) => b.classList.remove('on')); detail.innerHTML = '<p class="muted">The panel takes its seats…</p>'; if (reduce()) tl.progress(1); else tl.restart(); });
    tl.progress(1).progress(0);
    onView(el, () => (reduce() ? tl.progress(1) : tl.play()), .4);
  };

  // ======================================================================
  // What's behind "Add"? The four ways to add a custom skill
  // ======================================================================
  const ICON = {
    manual: '<path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="M13.5 6.5l4 4"/><path d="M12 20h8"/>',
    upload: '<path d="M5 4h14"/><path d="M12 20V8"/><path d="M7 13l5-5 5 5"/>',
    record: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.6" fill="currentColor" stroke="none"/>',
    onedrive: '<path d="M7 18h11a4 4 0 0 0 .6-7.95A6 6 0 0 0 7.1 8.5 4.75 4.75 0 0 0 7 18z"/>',
  };
  const ADD_OPTIONS = [
    { id: 'manual', label: 'Create manually',
      what: 'Type or paste a skill into a short form: a name, a description that tells Copilot when to use it, and the instructions. Select <b>Add</b> and Copilot saves it to the Skills folder in your OneDrive.',
      good: 'A rule you can write in a few lines, or a skill a colleague sent you as text.',
      today: 'Good for the skill you write with Copilot in step 7: paste it straight in.' },
    { id: 'upload', label: 'Upload',
      what: 'Pick a skill file from your computer, or drag it in. A skill is a folder with a <code>SKILL.md</code> inside, zipped. Copilot stores it in your OneDrive Skills folder and it’s ready straight away.',
      good: 'Skills someone prepared for you, like ERGO Deck on this site.',
      today: 'This is the one you use today: one ZIP per skill.' },
    { id: 'record', label: 'Record a skill',
      what: 'Do the task once while Copilot watches: edit slides yourself, use the ribbon or give Copilot instructions, then select <b>Stop</b>. Copilot drafts the name, description and instructions from your changes. You review the draft and upload it.',
      good: 'Formatting you repeat: chart styling, table clean-up, logo placement. One outcome per recording, under 10 minutes.',
      today: 'Advanced groups try this in step 8.' },
    { id: 'onedrive', label: 'Add in OneDrive',
      what: 'Opens the Skills folder in your OneDrive. Each skill is a folder with the skill’s name and a <code>SKILL.md</code> inside. Add, rename or delete folders there, then select <b>Refresh</b> so Copilot sees the change.',
      good: 'Editing skills in place, and skills your organisation shares as folders.',
      today: 'Every route ends here. Whichever option you pick, the skill is saved in this folder.' },
  ];
  const svgIcon = (id) => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[id]}</svg>`;
  const addDemo = {
    manual: () => ({
      html: `<div class="am-form"><label>Name<span class="am-field" data-type="ergo-brand"></span></label>
          <label>Description<span class="am-field" data-type="Use when I ask to make slides board-ready…"></span></label>
          <label>Instructions<span class="am-field tall" data-type="Headlines say the “so what”. Maximum 3 bullets. ERGO red once per slide…"></span></label>
          <span class="am-btn">Add</span></div><span class="am-saved">✓ Saved to OneDrive › Skills</span>`,
      tl: (st) => {
        const tl = gsap.timeline();
        $$('.am-field', st).forEach((f) => { const t = f.dataset.type; const o = { n: 0 }; tl.to(o, { n: t.length, duration: Math.min(1.4, t.length / 40), ease: 'none', onUpdate: () => { f.textContent = t.slice(0, Math.round(o.n)); } }); });
        return tl.fromTo($('.am-btn', st), { scale: 1 }, { scale: .92, duration: .12, yoyo: true, repeat: 1 })
          .fromTo($('.am-saved', st), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .35, ease: 'back.out(2)' });
      },
      end: (st) => $$('.am-field', st).forEach((f) => { f.textContent = f.dataset.type; }),
    }),
    upload: () => ({
      html: `<div class="am-drop"><span class="am-zip">🗜️ ergo-deck.zip</span><span class="am-drop-hint">Drop a skill here</span></div>
        <div class="am-list"><div class="am-row"><span>🚩 ERGO Deck</span><span class="am-toggle on" aria-hidden="true"></span></div></div>`,
      tl: (st) => gsap.timeline()
        .fromTo($('.am-zip', st), { y: -70, opacity: 0, rotation: -8 }, { y: 0, opacity: 1, rotation: 0, duration: .7, ease: 'bounce.out' })
        .to($('.am-drop', st), { borderColor: '#bf1629', backgroundColor: 'rgba(191,22,41,.05)', duration: .25 }, '-=.2')
        .to($('.am-zip', st), { scale: .6, opacity: 0, duration: .35, ease: 'power2.in' }, '+=.3')
        .fromTo($('.am-row', st), { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: .4, ease: 'power2.out' })
        .fromTo($('.am-toggle', st), { backgroundColor: '#c9c9c9' }, { backgroundColor: '#15803d', duration: .3 }),
    }),
    record: () => ({
      html: `<div class="am-rec"><span class="am-dot" aria-hidden="true"></span> Recording <span class="am-time">00:00</span><span class="am-stop">Stop</span></div>
        <div class="am-slide"><span class="am-title">Q3 results</span><span class="am-logo">ERGO</span><span class="am-bar"></span></div>
        <div class="am-draft"><span class="am-shimmer">Copilot is drafting your skill…</span><span class="am-draft-text"><b>title-slide-style</b> · Use when I make a title slide. Logo top right, message headline, one red rule.</span></div>`,
      tl: (st) => {
        const time = $('.am-time', st), o = { s: 0 };
        return gsap.timeline()
          .to(o, { s: 14, duration: 2.6, ease: 'none', onUpdate: () => { time.textContent = `00:${String(Math.round(o.s)).padStart(2, '0')}`; } })
          .fromTo($('.am-dot', st), { opacity: 1 }, { opacity: .25, duration: .4, yoyo: true, repeat: 5 }, 0)
          .to($('.am-logo', st), { left: '78%', top: '10%', duration: .7, ease: 'power2.inOut' }, .3)
          .to($('.am-title', st), { color: '#242424', fontWeight: 700, duration: .3 }, 1.1)
          .fromTo($('.am-bar', st), { scaleX: 0 }, { scaleX: 1, duration: .5, ease: 'power2.out' }, 1.5)
          .fromTo($('.am-stop', st), { scale: 1 }, { scale: .9, duration: .12, yoyo: true, repeat: 1 })
          .fromTo($('.am-draft', st), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .3 })
          .fromTo($('.am-shimmer', st), { opacity: 1 }, { opacity: 0, duration: .3, delay: .8 })
          .fromTo($('.am-draft-text', st), { opacity: 0 }, { opacity: 1, duration: .4 });
      },
      end: (st) => { $('.am-time', st).textContent = '00:14'; },
    }),
    onedrive: () => ({
      html: `<div class="am-path">☁️ OneDrive › <b>Skills</b><span class="am-refresh" aria-hidden="true">⟳</span></div>
        <ul class="am-tree">${['ergo-brand', 'ergo-board-pack', 'ergo-board-sparring'].map((k) => `<li><span>📁 ${k}</span><span class="am-file">📄 SKILL.md</span></li>`).join('')}</ul>`,
      tl: (st) => gsap.timeline()
        .fromTo($$('.am-tree li', st), { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: .35, stagger: .25, ease: 'power2.out' })
        .fromTo($$('.am-file', st), { opacity: 0 }, { opacity: 1, duration: .3, stagger: .15 }, '-=.3')
        .fromTo($('.am-refresh', st), { rotation: 0 }, { rotation: 360, duration: .8, ease: 'power2.inOut' }),
    }),
  };
  fx.addmenu = (el, opts = {}) => {
    const pick = opts.pick || 'upload';
    const seen = new Set();
    el.classList.add('addmenu');
    el.innerHTML = `<div class="am-grid">
        <div class="am-pane"><div class="am-pane-head">${copilotImg('am-cp')}<b>Manage plugins &amp; skills</b></div>
          <div class="am-skills-row"><span><b>Custom skills</b><span class="small muted"> · your own skills</span></span>
            <button type="button" class="am-add" aria-expanded="false" aria-controls="am-menu">Add <span aria-hidden="true">⌄</span></button></div>
          <div class="am-menu" id="am-menu" role="menu" hidden>${ADD_OPTIONS.map((o) => `<button type="button" role="menuitem" class="am-item" data-id="${o.id}">${svgIcon(o.id)}<span>${o.label}</span>${o.id === pick ? '<span class="am-today">Today</span>' : ''}<span class="am-tick" aria-hidden="true">✓</span></button>`).join('')}</div>
          <p class="am-hint small muted"><span aria-hidden="true">👆</span> Select <b>Add</b> to see the four ways in.</p>
        </div>
        <div class="am-detail" aria-live="polite"><p class="muted">Four ways to add a skill. Open the menu and select one to see what it does.</p></div>
      </div>
      <div class="row" style="justify-content:space-between"><span class="small muted am-count">Explored 0 of 4</span><button class="linkish am-replay" type="button" hidden>Replay</button></div>`;
    const add = $('.am-add', el), menu = $('.am-menu', el), detail = $('.am-detail', el), items = $$('.am-item', el), hint = $('.am-hint', el), replay = $('.am-replay', el);
    let current = null, tl = null;
    const pulse = reduce() ? null : gsap.to(add, { boxShadow: '0 0 0 6px rgba(191,22,41,.25)', duration: .8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    const openMenu = (open) => {
      menu.hidden = !open; add.setAttribute('aria-expanded', open);
      if (open) { if (pulse) { pulse.kill(); gsap.set(add, { boxShadow: 'none' }); } hint.innerHTML = 'Now select an option.'; run(gsap.fromTo(items, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: .25, stagger: .06, ease: 'power2.out' })); }
    };
    add.addEventListener('click', () => openMenu(menu.hidden));
    const play = () => {
      const d = addDemo[current](); const stage = $('.am-stage', detail); stage.innerHTML = d.html;
      if (tl) tl.kill(); tl = d.tl(stage);
      if (reduce()) { tl.progress(1).pause(); if (d.end) d.end(stage); }
    };
    const show = (id) => {
      current = id; const o = ADD_OPTIONS.find((x) => x.id === id);
      seen.add(id); items.forEach((b) => { b.classList.toggle('on', b.dataset.id === id); b.classList.toggle('seen', seen.has(b.dataset.id)); });
      detail.innerHTML = `<p class="am-title-row">${svgIcon(id)}<b>${o.label}</b>${id === pick ? '<span class="am-today">Use this today</span>' : ''}</p>
        <div class="am-stage" aria-hidden="true"></div>
        <p>${o.what}</p><p class="small"><b>Good for:</b> ${esc(o.good)}</p><p class="small muted">${esc(o.today)}</p>`;
      run(gsap.fromTo(detail.children, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .3, stagger: .06 }));
      play(); replay.hidden = false;
      $('.am-count', el).textContent = seen.size === 4 ? '✓ All four explored. Every route ends in the same place: a folder with a SKILL.md in your OneDrive Skills folder.' : `Explored ${seen.size} of 4`;
      if (seen.size === 4 && !el.dataset.done) { el.dataset.done = '1'; ADV.toast('All four ways explored.'); }
    };
    items.forEach((b) => b.addEventListener('click', () => show(b.dataset.id)));
    replay.addEventListener('click', () => current && play());
  };

  // ======================================================================
  // Copilot + the trail's app: hero animation ("doing the job together") and a high five when a step is done
  // ======================================================================
  const CP_LOGO = 'assets/img/brands/microsoft-copilot.png';
  fx.duoHero = (el, key) => {
    const t = ADV.trails[key]; if (!el || !t || !t.logo) return;
    const cp = `<img class="dh-cp" src="${CP_LOGO}" alt="">`, app = `<img class="dh-app" src="${t.logo}" alt="">`;
    let inner;
    if (key === 'xls') inner = `<div class="dh dh-xl">${app}<div class="dh-grid">${Array.from({ length: 16 }, (_, n) => `<i style="--n:${n}"></i>`).join('')}</div>${cp}</div>`;
    else if (key === 'ppt') inner = `<div class="dh dh-pp">${app}${[0, 1, 2].map((n) => `<span class="dh-slide" style="--n:${n}"></span>`).join('')}${cp}</div>`;
    else inner = `<div class="dh dh-ol">${app}${[0, 1, 2].map((n) => `<span class="dh-env" style="--n:${n}">✉️</span><span class="dh-tick" style="--n:${n}">✓</span>`).join('')}${cp}</div>`;
    el.classList.add('duo-hero'); el.setAttribute('role', 'img');
    el.setAttribute('aria-label', `Copilot and ${t.tool.split(' / ')[0]} working together`);
    el.innerHTML = inner;
  };
  fx.highFive = (key, msg, sub) => {
    const t = ADV.trails[key]; if (!t || !t.logo) return;
    document.querySelectorAll('.hi5-pop').forEach((x) => x.remove());
    const pop = document.createElement('div'); pop.className = 'hi5-pop'; pop.setAttribute('role', 'status'); pop.setAttribute('aria-live', 'polite');
    pop.style.setProperty('--c', ({ xls: '#1f9d55', ppt: '#d83b01', cos: '#0f6cbd' })[key] || '#bf1629');
    pop.innerHTML = `<div class="hi5"><img class="h-cp" src="${CP_LOGO}" alt=""><span class="h-burst">${[0, 45, 90, 135, 180, 225, 270, 315].map((r) => `<i style="--r:${r}deg"></i>`).join('')}</span><img class="h-app" src="${t.logo}" alt=""></div><div class="h-text"><b>${esc(msg || 'High five!')}</b>${sub ? `<span>${esc(sub)}</span>` : ''}</div>`;
    const t0 = document.querySelector('.toast.show'); if (t0) t0.classList.remove('show');
    document.body.appendChild(pop);
    requestAnimationFrame(() => pop.classList.add('in'));
    setTimeout(() => { pop.classList.remove('in'); setTimeout(() => pop.remove(), 400); }, reduce() ? 1800 : 2800);
  };

  // ======================================================================
  // Radio from Copilot
  // ======================================================================
  fx.radioAfter = (key, n) => {
    const msg = (ADV.radio[key] || []).find((r) => r.after === n && !(ADV.state.radio || {})[r.id]);
    if (!msg || !fx.buddy.el) return false;
    ADV.update((s) => { s.radio = s.radio || {}; s.radio[msg.id] = true; });
    setTimeout(() => {
      fx.buddy.think();
      fx.buddy.say(esc(msg.text), { radio: msg.title, force: true, actions: [
        { label: 'Copy the prompt', primary: true, onClick: (b) => ADV.copy(msg.prompt, b) },
        { label: 'Later', onClick: () => {} },
      ] });
    }, reduce() ? 0 : 2600);
    return true;
  };

  // ======================================================================
  // Summit certificate (SVG, animated, exportable to PNG)
  // ======================================================================
  // Wraps the souvenir sentence into lines of about 40 characters (max 5) for the left half of the certificate.
  const wrapLine = (v) => {
    if (!v) return '';
    const lines = [''];
    `“${v}”`.split(/\s+/).forEach((w) => { const next = `${lines[lines.length - 1]} ${w}`.trim(); if (next.length > 40 && lines[lines.length - 1]) lines.push(w); else lines[lines.length - 1] = next; });
    return lines.slice(0, 5).map((l, i) => `<tspan x="70" dy="${i ? 28 : 0}">${esc(l)}</tspan>`).join('')
      + '<tspan x="70" dy="30" font-size="15" font-style="normal" fill="#8a8a94">Souvenir from Copilot</tspan>';
  };
  fx.certificate = (el) => {
    const st = ADV.state; const key = st.trail && ADV.trails[st.trail] && ADV.trails[st.trail].steps ? st.trail : null;
    const t = key ? ADV.trails[key] : null; const info = key ? fx.altitude(key) : { alt: ADV.altitude.base, core: 0, total: 4, summit: 3000 };
    const persona = key ? ADV.personas[key].name : 'Explorer';
    const gear = Object.keys(ADV.gear).filter((k) => st.skills[k]);
    const badges = Object.keys(ADV.badges).filter((k) => st.badges[k]);
    const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    el.classList.add('cert');
    el.innerHTML = `<div class="cert-form">
        <label for="cert-name">Your name <span class="muted small">(stays on this device)</span></label>
        <input id="cert-name" class="field" maxlength="40" placeholder="e.g. Maria Schneider" value="${esc(st.name || '')}">
        <label for="cert-line" style="margin-top:14px;display:block">Your souvenir from Copilot <span class="muted small">(optional)</span></label>
        <p class="small muted" style="margin:4px 0 6px">Ask Copilot in PowerPoint or Excel, then paste its answer here:</p>
        ${ADV.promptBox('Summarise what we built today in one sentence of at most 20 words.')}
        <input id="cert-line" class="field" maxlength="160" placeholder="Paste Copilot’s sentence" value="${esc(st.souvenir || '')}">
        <div class="row" style="margin-top:16px"><button class="btn red" type="button" id="cert-dl">Download certificate ↓</button><button class="btn ghost" type="button" id="cert-replay">Replay</button></div>
      </div>
      <div class="cert-view device"><div class="cert-svg"></div></div>`;
    const W = 1200, H = 800;
    const peak = [[560, 640], [700, 520], [760, 545], [880, 360], [930, 400], [1020, 250], [1080, 300], [1140, 420], [1170, 520]];
    const route = [[600, 615], [735, 535], [880, 368], [975, 330], [1020, 254]];
    const reached = Math.max(0, Math.min(route.length - 1, info.core));
    const pts = (a) => a.map((p) => p.join(',')).join(' ');
    const gearSvg = gear.map((k, i) => `<g class="c-gear" transform="translate(${100 + i * 92} 690)"><circle r="34" fill="#fff" stroke="#e4ddd2" stroke-width="2"/><text y="12" text-anchor="middle" font-size="32">${ADV.gear[k][0]}</text><text y="56" text-anchor="middle" font-size="13" fill="#5c5c66" font-family="Segoe UI, sans-serif">${esc(ADV.gear[k][1])}</text></g>`).join('');
    const badgeSvg = badges.map((k, i) => `<g class="c-badge" transform="translate(${1100 - i * 80} 690)"><circle r="30" fill="#bf1629"/><text y="11" text-anchor="middle" font-size="28">${ADV.badges[k].icon}</text></g>`).join('');
    $('.cert-svg', el).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Your summit certificate">
      <defs><linearGradient id="c-sky" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fdeee6"/><stop offset=".6" stop-color="#fbf7f1"/><stop offset="1" stop-color="#ffffff"/></linearGradient>
        <linearGradient id="c-mt" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#e3ddd3"/><stop offset="1" stop-color="#f4f1ec"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#c-sky)"/>
      <circle class="c-sun" cx="1080" cy="170" r="60" fill="#ffd9b8" opacity=".75"/>
      <rect x="18" y="18" width="${W - 36}" height="${H - 36}" rx="18" fill="none" stroke="#bf1629" stroke-width="2" opacity=".5"/>
      <polygon class="c-mount" points="${pts(peak)} 1170,640 560,640" fill="url(#c-mt)"/>
      <polyline class="c-ridge" points="${pts(peak)}" fill="none" stroke="#b9b0a2" stroke-width="3" stroke-linejoin="round"/>
      <polyline class="c-route" points="${pts(route.slice(0, reached + 1))}" fill="none" stroke="#bf1629" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 12"/>
      ${route.map((p, i) => `<circle class="c-camp" cx="${p[0]}" cy="${p[1]}" r="8" fill="${i <= reached ? '#bf1629' : '#fff'}" stroke="#bf1629" stroke-width="3"/>`).join('')}
      <g class="c-flag" transform="translate(${route[reached][0]} ${route[reached][1]})"><line y2="-70" stroke="#242424" stroke-width="4"/><path d="M0 -70 L54 -56 L0 -40 Z" fill="#bf1629"/></g>
      <image href="${(window.BRAND_DATA || {}).ergo || 'assets/img/ergo-logo.png'}" x="70" y="62" width="150" height="45"/>
      <text x="240" y="96" font-family="Segoe UI, sans-serif" font-size="22" fill="#8a8a94">×</text>
      <image href="${(window.BRAND_DATA || {}).copilot || 'assets/img/brands/microsoft-copilot.png'}" x="268" y="62" width="46" height="46"/>
      <text x="324" y="96" font-family="Segoe UI, sans-serif" font-size="22" fill="#1d1d1f" font-weight="600">Microsoft Copilot</text>
      <text class="c-t" x="70" y="170" font-family="Segoe UI, sans-serif" font-size="18" letter-spacing="4" fill="#bf1629" font-weight="700">SUMMIT CERTIFICATE · MAKE COPILOT YOURS</text>
      <text class="c-t c-name" x="70" y="240" font-family="Segoe UI Semibold, Segoe UI, sans-serif" font-size="60" fill="#1d1d1f" font-weight="700">${esc(st.name || 'Your name')}</text>
      <text class="c-t" x="70" y="286" font-family="Segoe UI, sans-serif" font-size="24" fill="#5c5c66">${esc(persona)}${t ? ` · ${esc(t.app)} trail: ${esc(t.name)}` : ''}</text>
      <text class="c-t c-alt" x="70" y="350" font-family="Segoe UI Semibold, Segoe UI, sans-serif" font-size="46" fill="#bf1629" font-weight="700">${info.alt.toLocaleString('en-GB')} m</text>
      <text class="c-t" x="70" y="380" font-family="Segoe UI, sans-serif" font-size="18" fill="#5c5c66">${info.core >= info.total ? 'Summit reached' : `${info.core} of ${info.total} camps reached`}${info.flag ? ' · flag planted' : ''}</text>
      <text class="c-t c-line" x="70" y="470" font-family="Segoe UI, sans-serif" font-size="22" font-style="italic" fill="#1d1d1f">${wrapLine(st.souvenir)}</text>
      ${gearSvg}${badgeSvg}
      <text x="${W - 70}" y="${H - 34}" text-anchor="end" font-family="Segoe UI, sans-serif" font-size="14" fill="#8a8a94">ERGO Female Leadership Summit · ${esc(date)} · ${esc(F.label || '')}</text>
    </svg>`;
    const svg = $('svg', el);
    const tl = gsap.timeline({ paused: true });
    const ridge = $('.c-ridge', svg), routeEl = $('.c-route', svg);
    const len = (p) => { try { return p.getTotalLength(); } catch { return 2000; } };
    tl.fromTo($('.c-sun', svg), { y: 60, opacity: 0 }, { y: 0, opacity: .75, duration: 1, ease: 'power2.out' })
      .fromTo(ridge, { strokeDasharray: len(ridge), strokeDashoffset: len(ridge) }, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' }, 0)
      .fromTo($('.c-mount', svg), { opacity: 0 }, { opacity: 1, duration: .8 }, .5)
      .fromTo($$('.c-t', svg), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .45, stagger: .12 }, .4)
      .fromTo($$('.c-camp', svg), { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: .3, stagger: .12, ease: 'back.out(3)' }, 1)
      .fromTo(routeEl, { opacity: 0 }, { opacity: 1, duration: .6 }, 1.4)
      .fromTo($('.c-flag', svg), { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: .5, ease: 'back.out(2.5)' }, 1.9)
      .fromTo($$('.c-gear, .c-badge', svg), { y: '-=60', opacity: 0 }, { y: '+=60', opacity: 1, duration: .5, ease: 'bounce.out', stagger: .12 }, 2.1);
    const replay = () => (reduce() ? tl.progress(1) : tl.restart());
    onView(el, replay, .3);
    $('#cert-replay').addEventListener('click', replay);
    $('#cert-name').addEventListener('input', (e) => { const v = e.target.value.trim(); $('.c-name', svg).textContent = v || 'Your name'; ADV.update((s) => { s.name = v; }); });
    $('#cert-line').addEventListener('input', (e) => {
      const v = e.target.value.trim().replace(/^["“]|["”]$/g, '');
      $('.c-line', svg).innerHTML = wrapLine(v);
      ADV.update((s) => { s.souvenir = v; if (v) s.badges.souvenir = true; });
    });
    $('#cert-dl').addEventListener('click', () => fx.downloadSvg(svg, 'summit-certificate.png'));
  };

  fx.downloadSvg = (svg, filename) => {
    tlFinish(svg);
    const xml = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas'); c.width = 2400; c.height = 1600;
      const ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0, c.width, c.height);
      const done = (url) => { const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); };
      try { c.toBlob((b) => { if (b) { const u = URL.createObjectURL(b); done(u); setTimeout(() => URL.revokeObjectURL(u), 4000); } else done(c.toDataURL('image/png')); }, 'image/png'); }
      catch { done('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml)); }
      ADV.toast('Certificate downloaded.');
    };
    img.onerror = () => ADV.toast('Could not create the image. Try a screenshot instead.');
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml);
  };
  // ======================================================================
  // Step animations (data-viz): short "what does this step do" scenes. Each plays once when it
  // scrolls into view (about ten seconds), ends on one takeaway, and offers only Replay.
  // Reduced motion shows the end state straight away.
  // ======================================================================
  const vizFoot = '<div class="vz-foot"><p class="vz-cap" aria-live="polite"></p><button type="button" class="vz-btn vz-replay">↻ Replay</button></div>';
  const vzSay = (el, html, take) => { const c = $('.vz-cap', el); c.classList.toggle('vz-take', !!take); c.innerHTML = html; };
  const vzRunner = (el, play) => { $('.vz-replay', el).addEventListener('click', play); onView(el, play, 0.45); };
  // Highlight scenes: elements with data-k light up per stage, captions explain the stage.
  const stepper = (el, stages, take, ms = 2000) => {
    let timers = [];
    const show = (i) => {
      const s = stages[i], seen = new Set(stages.slice(0, i).flatMap((t) => t.on));
      $$('[data-k]', el).forEach((x) => { const on = s.on.includes(x.dataset.k); x.classList.toggle('on', on); x.classList.toggle('seen', !on && seen.has(x.dataset.k)); });
      vzSay(el, s.text);
    };
    const play = () => {
      timers.forEach(clearTimeout); timers = [];
      if (reduce()) { show(stages.length - 1); vzSay(el, take, true); return; }
      stages.forEach((_, i) => timers.push(setTimeout(() => show(i), i * ms)));
      timers.push(setTimeout(() => vzSay(el, take, true), stages.length * ms));
    };
    show(0); vzRunner(el, play);
  };
  // Timeline scenes: build() renders the start state and returns [time in ms, fn(instant)] steps.
  const scene = (el, title, html, build, take) => {
    el.classList.add('vz');
    el.innerHTML = `<p class="vz-title">${title}</p>${html}${vizFoot}`;
    let timers = [];
    const play = () => {
      timers.forEach(clearTimeout); timers = [];
      const { steps, end } = build();
      const last = end || (steps.length ? steps[steps.length - 1][0] + 1500 : 0);
      if (reduce()) { steps.forEach(([, f]) => f(true)); vzSay(el, take, true); return; }
      steps.forEach(([t, f]) => timers.push(setTimeout(() => f(false), t)));
      timers.push(setTimeout(() => vzSay(el, take, true), last));
    };
    vzRunner(el, play);
  };
  const vzFly = (el, from, to, html, done, ms = 850) => {
    if (reduce() || !from || !to) return done();
    const r = el.getBoundingClientRect(), a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
    const f = document.createElement('span'); f.className = 'vz-fly'; f.innerHTML = html;
    f.style.left = `${a.left - r.left}px`; f.style.top = `${a.top - r.top}px`; el.appendChild(f);
    f.animate([{ transform: 'translate(0,0) scale(.7)', opacity: .2 }, { opacity: 1, offset: .25 }, { transform: `translate(${b.left - a.left}px, ${b.top - a.top}px)`, opacity: 1 }], { duration: ms, easing: 'cubic-bezier(.2,.8,.2,1)' }).onfinish = () => { f.remove(); done(); };
  };
  const n1 = (v) => v.toLocaleString('en-GB', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const viz = (fx.viz = {});

  // PowerPoint step 3: from prompt to skill to slides.
  viz.skillflow = (el) => {
    el.classList.add('vz');
    el.innerHTML = `<p class="vz-title">What happens when you send the prompt</p>
      <div class="vz-flow">
        <div class="vz-node" data-k="ask"><span class="vz-ic" aria-hidden="true">💬</span><b>You ask</b><q>Rebuild the drafts as board-ready <mark>ERGO slides</mark>.</q></div>
        <div class="vz-node" data-k="read"><span class="vz-ic" aria-hidden="true">🔎</span><b>Copilot reads the descriptions</b>
          <ul class="vz-skills">
            <li data-k="b1">Explain this presentation <i>built in</i></li>
            <li data-k="b2">Create interactive slide <i>built in</i></li>
            <li data-k="deck">ERGO Deck <i>“ERGO deck, ERGO slides, ERGO style”</i></li>
            <li data-k="motion">ERGO Motion <i>“animated ERGO slides”</i></li>
          </ul></div>
        <div class="vz-node" data-k="load"><span class="vz-ic" aria-hidden="true">⚡</span><b>The skill loads</b><span class="vz-chip">Using skills from ergo-deck</span><span class="small muted">Its rules and a small script</span></div>
        <div class="vz-node" data-k="out"><span class="vz-ic" aria-hidden="true">🖼️</span><b>New slides</b>
          <div class="vz-mini"><span class="vz-m-title" data-k="t1">Q3: premiums beat plan</span><span class="vz-m-logo" data-k="t2">ERGO</span><span class="vz-m-tiles" data-k="t3"><i></i><i></i><i></i></span><span class="vz-m-band" data-k="t4"></span></div></div>
      </div>
      <div class="vz-side" data-k="at"><b aria-hidden="true">@</b><span>Wrong skill, or none? Type <b>@</b>, pick <b>ergo-deck</b> from the list and send the prompt again. Picking it yourself always works.</span></div>
      ${vizFoot}`;
    stepper(el, [
      { on: ['ask'], text: 'You ask the way you’d ask a colleague. The words you use decide which skill fits.' },
      { on: ['read', 'b1', 'b2', 'deck', 'motion'], text: 'Copilot compares your request with the <b>description</b> of every skill that’s switched on: the built-in ones and yours.' },
      { on: ['read', 'deck'], text: '“ERGO slides” matches ERGO Deck’s description best. ERGO Motion is for animated slides, so it stays out.' },
      { on: ['load'], text: 'The skill loads, and the chat says so: look for <b>Using skills from …</b> or <b>Loaded … skill</b>.' },
      { on: ['out', 't1', 't2', 't3', 't4'], text: 'The rules shape the result: red message title, logo, KPI tiles, takeaway band. Every figure is copied, never changed.' },
      { on: ['at'], text: 'If Copilot picks the wrong skill, or none, type <b>@</b> and choose it yourself.' },
    ], 'The words you use decide which skill loads. If it picks the wrong one, choose it yourself with @.');
  };

  // PowerPoint step 3 explainer: a standard slide you edit vs an HTML slide you prompt.
  viz.slidekinds = (el) => {
    el.classList.add('vz', 'vz-kinds');
    const tiles = [['GWP', 4125.0, 'm'], ['Operating result', 294.9, 'm'], ['Combined ratio', 96.4, '%']];
    const fmt = (v, u) => v.toLocaleString('en-GB', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + u;
    el.innerHTML = `<div class="vz-tabs" role="tablist" aria-label="Two kinds of slide">
        <button type="button" role="tab" class="vz-tab on" aria-selected="true" data-tab="std">Standard slide · ERGO Deck</button>
        <button type="button" role="tab" class="vz-tab" aria-selected="false" data-tab="html">HTML slide · ERGO Motion</button></div>
      <div class="vz-panel" data-panel="std" role="tabpanel">
        <div class="vz-slide"><span class="vz-s-logo">ERGO</span>
          <p class="vz-s-h" contenteditable="true" spellcheck="false" aria-label="Slide title, editable">Q3: premiums beat plan</p>
          <div class="vz-tiles">${tiles.map(([l, v, u]) => `<div><small>${l}</small><b>${fmt(v, u)}</b></div>`).join('')}</div></div>
        <p class="vz-hint">✏️ Click the red title and type. It’s an ordinary text box: you change it yourself, and it prints and exports like any slide.</p></div>
      <div class="vz-panel" data-panel="html" role="tabpanel" hidden>
        <div class="vz-slide live"><span class="vz-s-logo">ERGO</span>
          <p class="vz-s-h vz-locked" tabindex="0" role="button" aria-label="Slide title: try to edit it">Q3: premiums beat plan</p>
          <div class="vz-tiles">${tiles.map(([l, v, u]) => `<div><small>${l}</small><b data-to="${v}" data-u="${u}">${fmt(v, u)}</b></div>`).join('')}</div>
          <div class="vz-bars" aria-hidden="true"><i style="--h:94%"></i><i style="--h:97%"></i><i style="--h:100%" class="hi"></i></div>
          <div class="vz-bubble" hidden>This slide is a small web page, so you can’t type into it. Ask Copilot instead: <q>Make the title shorter.</q></div>
          <span class="vz-stamp">PDF: a still picture</span></div>
        <div class="vz-row"><button type="button" class="vz-btn vz-replay">↻ Replay</button><label class="vz-pdf"><input type="checkbox"> Show it as a PDF</label></div>
        <p class="vz-hint">🎬 Numbers count up and bars grow when the slide appears. Click the title to try to edit it.</p></div>`;
    const panel = (k) => $(`[data-panel="${k}"]`, el), live = $('.live', el);
    const animate = () => {
      const still = $('.vz-pdf input', el).checked || reduce();
      $$('[data-to]', live).forEach((b) => {
        const to = +b.dataset.to, u = b.dataset.u;
        if (still) { b.textContent = fmt(to, u); return; }
        const o = { v: 0 }; gsap.to(o, { v: to, duration: 1.4, ease: 'power2.out', onUpdate: () => { b.textContent = fmt(o.v, u); } });
      });
      const bars = $('.vz-bars', live); bars.classList.remove('grow'); void bars.offsetWidth; if (!still) bars.classList.add('grow');
    };
    $('.vz-tabs', el).addEventListener('click', (e) => {
      const t = e.target.closest('[data-tab]'); if (!t) return;
      $$('[data-tab]', el).forEach((x) => { const on = x === t; x.classList.toggle('on', on); x.setAttribute('aria-selected', on); });
      ['std', 'html'].forEach((k) => { panel(k).hidden = k !== t.dataset.tab; });
      if (t.dataset.tab === 'html') animate();
    });
    const title = $('[contenteditable]', el);
    title.addEventListener('input', () => { $('.vz-hint', panel('std')).textContent = '✓ You just changed the slide yourself. No prompt needed.'; });
    const bubble = () => { $('.vz-bubble', live).hidden = false; };
    $('.vz-locked', el).addEventListener('click', bubble);
    $('.vz-locked', el).addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); bubble(); } });
    $('.vz-replay', el).addEventListener('click', () => { $('.vz-bubble', live).hidden = true; animate(); });
    $('.vz-pdf input', el).addEventListener('change', (e) => { live.classList.toggle('pdf', e.target.checked); animate(); });
  };

  // Chief of Staff step 2: where Copilot's knowledge about you lives.
  viz.memory = (el) => {
    el.classList.add('vz');
    el.innerHTML = `<p class="vz-title">Where your chief of staff keeps what it knows</p>
      <div class="vz-mem">
        <div class="vz-node" data-k="ask"><span class="vz-ic" aria-hidden="true">💬</span><b>You ask</b><q>Draft a reply to the board office <mark>in my voice</mark>: we need two more weeks.</q></div>
        <div class="vz-layers">
          <div class="vz-layer" data-k="ci"><b>① Custom instructions</b><span>Always on, in every chat: who you are, what matters now, how you like answers. <i>Tasks A and B</i></span></div>
          <div class="vz-layer" data-k="mem"><b>② Saved memories</b><span>What you asked it to remember, for example “short bullet points”. You can see and delete each one. <i>Task D</i></span></div>
          <div class="vz-layer" data-k="skill"><b>③ Skills</b><span>Used only when the request matches: “in my voice” brings in my-voice. <i>Task C</i></span></div>
          <div class="vz-layer work" data-k="work"><b>④ Your work right now</b><span>The emails, meetings and chats this request is about, read fresh for this answer. <i>Step 1</i></span></div>
        </div>
        <div class="vz-node" data-k="out"><span class="vz-ic" aria-hidden="true">✉️</span><b>The answer</b><span class="small muted">Your tone, your sign-off, the facts from the thread, the deadline first.</span></div>
      </div>
      <p class="small muted vz-manage">Manage ① and ② under Copilot <b>Settings</b> → <b>Personalization</b>. Skills: <b>…</b> → <b>Manage plugins</b>.</p>
      ${vizFoot}`;
    stepper(el, [
      { on: ['ask'], text: 'One request. Four places shape the answer.' },
      { on: ['ci'], text: 'Your custom instructions come along in every chat, whatever you ask.' },
      { on: ['mem'], text: 'Saved memories add what you asked Copilot to remember. They build up over time, and you stay in control of them.' },
      { on: ['skill'], text: '“in my voice” matches the description of your my-voice skill, so its rules come in. Without those words, they stay out.' },
      { on: ['work'], text: 'Then the work itself: the thread you’re replying to and your calendar, read for this one answer.' },
      { on: ['out', 'ci', 'mem', 'skill', 'work'], text: 'The answer uses all four at once.' },
    ], 'If an answer is off, fix it in the right place: your rules, a memory or the skill.');
  };

  // ---------------- Excel 1: what the clean-up does ----------------
  viz.xlclean = (el) => {
    const H = ['Entry_ID', 'Country', 'KPI', 'Actual', 'Currency', 'Reported_On', 'Status'];
    const rows = [
      ['KPI-0012', 'Germany', 'Gross written premium', '38,393.9', 'EUR', '2026-02-05', 'On track'],
      ['KPI-0013', ['DE', 'Germany'], 'Claims paid', ['8.299,60', '8,299.6'], ['€', 'EUR'], ['17 Feb 2026', '2026-02-17'], ['on track', 'On track']],
      [['KPI-0013', '', 'dup'], ['Deutschland', 'Germany'], 'Claims paid', '8,299.6', 'EUR', '2026-02-17', 'On track'],
      ['KPI-0044', ['Polska', 'Poland'], 'Operating costs', ['', '⚠ missing', 'flag'], ['zł', 'PLN'], ['30.02.2026', '⚠ check', 'flag'], ['At Risk ', 'At risk']],
      ['KPI-0071', 'Austria', 'Complaints', '245', 'EUR', '2026-03-11', ['off-track', 'Off track']],
      ['KPI-0102', ['España', 'Spain'], 'Gross written premium', '11,104.8', ['Euro', 'EUR'], ['03/17/2026', '2026-03-17'], ['Ontrack', 'On track']],
    ];
    const cell = (v) => (v === '' ? '<i class="vz-faint">(empty)</i>' : esc(v).replace(/ $/, '<span class="vz-trail"> </span>'));
    scene(el, 'What the clean-up does',
      `<p class="vz-count"><b>0</b> problems in six real rows</p><div class="vz-scroll vz-sheet"><table class="vz-reg"></table></div>
      <div class="vz-cl-row"><div class="vz-stats"><span>In all 182 rows:</span><span><b>15</b> country spellings</span><span><b>26</b> dates typed as text</span><span><b>2</b> dates that don’t exist</span><span><b>16</b> currency spellings</span><span><b>2</b> duplicate IDs</span><span><b>3</b> missing actuals</span></div>
        <div class="vz-confirm"><div class="vz-cp">${copilotImg('')}Suggested changes</div>
          <div class="vz-opt" data-o><i></i>One spelling per country</div><div class="vz-opt" data-o><i></i>Status, currency, dates and numbers</div>
          <div class="vz-opt" data-o><i></i>Remove the duplicate KPI-0013</div><div class="vz-opt"><i></i>Fill the missing Actual <small>a guess, so unticked</small></div>
          <span class="vz-cbtn">Continue</span></div></div>`,
      () => {
        const t = $('.vz-reg', el);
        t.innerHTML = `<tr>${H.map((h) => `<th>${h}</th>`).join('')}</tr>` + rows.map((r) => `<tr>${r.map((c) => (Array.isArray(c) ? `<td data-m data-clean="${esc(c[1])}" data-kind="${c[2] || 'fix'}">${cell(c[0])}</td>` : `<td>${cell(c)}</td>`)).join('')}</tr>`).join('');
        const bad = $$('td[data-m]', t), trs = $$('tr', t).slice(1), n = $('.vz-count b', el);
        n.textContent = 0; $('.vz-confirm', el).classList.remove('on'); $('.vz-stats', el).classList.remove('on'); $$('.vz-opt', el).forEach((o) => o.classList.remove('on'));
        vzSay(el, 'Six rows as the country teams sent them in.');
        const steps = bad.map((td, i) => [600 + i * 110, () => { td.classList.add('bad'); n.textContent = i + 1; }]);
        steps.push([2700, () => vzSay(el, 'Country codes, local names, text dates, symbols, typos, a duplicate and an empty cell.')]);
        trs.forEach((tr, i) => steps.push([3600 + i * 420, () => {
          trs.forEach((x) => x.classList.remove('scan')); tr.classList.add('scan');
          if (i === 0) vzSay(el, 'Copilot reads the whole sheet, then works row by row.');
          $$('td[data-m]', tr).forEach((td) => {
            if (td.dataset.kind === 'dup') { tr.classList.add('dup'); return; }
            td.classList.remove('bad'); td.classList.add(td.dataset.kind === 'flag' ? 'flag' : 'fixed');
            td.innerHTML = (td.textContent.trim() && td.textContent !== '(empty)' ? `<s>${td.innerHTML}</s> ` : '') + esc(td.dataset.clean);
          });
        }]));
        const t1 = 3600 + trs.length * 420;
        steps.push([t1, () => { trs.forEach((x) => x.classList.remove('scan')); $('.vz-confirm', el).classList.add('on'); vzSay(el, '<b>Green</b>: fixed. <b>Yellow</b>: flagged, because it can’t know the missing Actual or the real date. Then it asks before it applies anything.'); }]);
        $$('.vz-opt[data-o]', el).forEach((o, i) => steps.push([t1 + 500 + i * 300, () => o.classList.add('on')]));
        steps.push([t1 + 1900, (now) => { const b = $('.vz-cbtn', el); if (!now) { b.classList.add('press'); setTimeout(() => b.classList.remove('press'), 200); } }]);
        steps.push([t1 + 2300, () => $('.vz-stats', el).classList.add('on')]);
        return { steps, end: t1 + 2600 };
      },
      'It fixes formats, flags what it can’t know, and you approve every change before it’s applied.');
  };

  // ---------------- Excel 2: what the formula does ----------------
  viz.xlformula = (el) => {
    scene(el, 'What the formula does',
      `<div class="vz-scroll vz-sheet"><table class="vz-reg"><tr><th>Country</th><th>KPI</th><th>Target</th><th>Actual</th><th>Region</th><th>Country_Manager</th><th>Performance</th></tr>
        <tr><td data-c="country">Germany</td><td data-c="kpi">Claims paid</td><td>24,110</td><td data-c="actual">25,527.9</td><td data-c="region"></td><td data-c="mgr"></td><td data-c="perf"></td></tr></table></div>
      <div class="vz-two">
        <div class="vz-mini-t"><p>Lookups · tblCountries</p><div class="vz-scroll"><table><tr><td>Austria</td><td>DACH</td><td>Florian Gruber</td></tr><tr data-r="ge"><td>Germany</td><td data-v="region">DACH</td><td data-v="mgr">Sabine Hartmann</td></tr><tr><td>Poland</td><td>CEE</td><td>Marta Kowalczyk</td></tr></table></div></div>
        <div class="vz-mini-t"><p>Lookups · tblKPIs</p><div class="vz-scroll"><table><tr><td>Gross written premium</td><td>Higher</td><td>3%</td><td>8%</td></tr><tr data-r="cp"><td>Claims paid</td><td>Lower is better</td><td>Amber 3%</td><td>Red 8%</td></tr><tr><td>Operating costs</td><td>Lower</td><td>3%</td><td>8%</td></tr></table></div></div>
      </div>
      <div class="vz-code"><div data-l="1">gap   = Actual / Target − 1 → <b class="g">+5.9%</b></div><div data-l="2">worse = lower is better, so gap → <b class="w">5.9% worse</b></div><div data-l="3">IFS(worse ≥ 8%, "Off track", worse ≥ 3%, "At risk", "On track")</div></div>`,
      () => {
        const c = (k) => $(`[data-c="${k}"]`, el), ge = $('[data-r="ge"]', el), cp = $('[data-r="cp"]', el);
        const judge = (a, pop) => {
          const g = a / 24110 - 1, v = g >= 0.08 ? ['Off track', 'red'] : g >= 0.03 ? ['At risk', 'amber'] : ['On track', 'green'];
          c('actual').textContent = n1(a); $('.vz-code .g', el).textContent = `${g >= 0 ? '+' : '−'}${n1(Math.abs(g) * 100)}%`;
          $('.vz-code .w', el).textContent = g >= 0 ? `${n1(g * 100)}% worse` : `${n1(-g * 100)}% better`;
          const p = c('perf'), was = p.textContent; p.innerHTML = `<span class="vz-verdict ${v[1]}">${v[0]}</span>`;
          if (pop && was !== v[0] && !reduce()) $('.vz-verdict', p).animate([{ transform: 'scale(.4)' }, { transform: 'scale(1.15)', offset: .7 }, { transform: 'none' }], { duration: 450 });
        };
        const count = (from, to, ms, then) => { const t0 = performance.now(); const f = (now) => { const k = Math.min(1, (now - t0) / ms); judge(from + (to - from) * k, k === 1); if (k < 1) requestAnimationFrame(f); else if (then) then(); }; requestAnimationFrame(f); };
        ['region', 'mgr', 'perf'].forEach((k) => { c(k).textContent = '…'; c(k).classList.add('vz-faint'); });
        c('actual').textContent = '25,527.9'; $$('.glow', el).forEach((x) => x.classList.remove('glow')); $$('tr.hit', el).forEach((x) => x.classList.remove('hit')); $$('[data-l]', el).forEach((x) => x.classList.remove('on'));
        vzSay(el, 'One row: Germany, Claims paid. Three empty columns for Copilot to fill.');
        const put = (k) => { c(k).classList.remove('vz-faint'); c(k).textContent = $(`[data-v="${k}"]`, ge).textContent; };
        return { end: 12400, steps: [
          [900, () => { c('country').classList.add('glow'); ge.classList.add('hit'); vzSay(el, '<b>XLOOKUP</b> finds “Germany” in the country table…'); }],
          [1700, () => { vzFly(el, $('[data-v="region"]', ge), c('region'), 'DACH', () => put('region')); vzFly(el, $('[data-v="mgr"]', ge), c('mgr'), 'Sabine Hartmann', () => put('mgr'), 950); }],
          [2900, () => { c('country').classList.remove('glow'); ge.classList.remove('hit'); vzSay(el, '…and brings back the region and the manager.'); }],
          [3700, () => { c('kpi').classList.add('glow'); cp.classList.add('hit'); vzSay(el, 'Then it looks up the KPI: for claims lower is better, amber at 3%, red at 8%.'); }],
          [5000, () => { $('[data-l="1"]', el).classList.add('on'); c('actual').classList.add('glow'); vzSay(el, '<b>LET</b> names the parts: Actual is 5.9% above Target…'); }],
          [6000, () => { $('[data-l="2"]', el).classList.add('on'); vzSay(el, '…which for claims means 5.9% worse…'); }],
          [7000, () => { $('[data-l="3"]', el).classList.add('on'); judge(25527.9, true); c('kpi').classList.remove('glow'); cp.classList.remove('hit'); vzSay(el, '…past amber, not red: <b>At risk</b>.'); }],
          [8600, (now) => { c('actual').classList.remove('glow'); vzSay(el, 'Now the actual changes. Nobody touches the formula.'); if (!now) count(25527.9, 26300, 1100, () => setTimeout(() => count(26300, 24500, 1300), 700)); }],
        ] };
      },
      'Copilot writes the formula, not the answer, so it works on every row and keeps working when the numbers change.');
  };

  // ---------------- Excel 3: outside data ----------------
  viz.xlfetch = (el) => {
    const pl = [['Gross written premium', 32375.7], ['Claims paid', 19930.4], ['Operating costs', 6005.6]];
    scene(el, 'What bringing in outside data does',
      `<div class="vz-fetch">
        <div class="vz-srcs"><div class="vz-src" data-s="web"><span>🌐</span><b>The web</b><small>today’s exchange rate</small></div><div class="vz-src" data-s="txt"><span>📄</span><b>project-updates.txt</b><small>Katrin’s email and the call notes</small></div></div>
        <div class="vz-sheets">
          <div class="vz-mini-t"><p>FX_Rates</p><table><tr><td>PLN</td><td data-c="rate">0.230</td><td data-c="src" class="vz-faint">illustrative, 30 Jun</td></tr></table></div>
          <div class="vz-mini-t"><p>Register_Ready · Poland</p><table>${pl.map(([k, a]) => `<tr><td>${k}</td><td>${n1(a)} PLN</td><td data-eur="${a}">€ ${n1(a * 0.23)}</td></tr>`).join('')}</table></div>
          <div class="vz-mini-t"><p>Initiatives</p><table><tr><td>Claims app relaunch</td><td data-st="1" class="vz-faint">…</td></tr><tr><td>Fraud detection pilot</td><td data-st="2" class="vz-faint">…</td></tr></table></div>
        </div></div>`,
      () => {
        const rate = $('[data-c="rate"]', el), src = $('[data-c="src"]', el), web = $('[data-s="web"]', el), txt = $('[data-s="txt"]', el);
        rate.textContent = '0.230'; src.textContent = 'illustrative, 30 Jun'; src.className = 'vz-faint';
        $$('[data-eur]', el).forEach((d) => { d.textContent = `€ ${n1(+d.dataset.eur * 0.23)}`; d.classList.remove('glow'); });
        $$('[data-st]', el).forEach((d) => { d.textContent = '…'; d.className = 'vz-faint'; }); $$('.vz-src', el).forEach((s) => s.classList.remove('on'));
        vzSay(el, 'Two kinds of outside data: a fact from the web, and notes from your own mail.');
        const status = (i, text) => { const d = $(`[data-st="${i}"]`, el); d.className = ''; d.textContent = text; };
        return { steps: [
          [900, () => { web.classList.add('on'); vzSay(el, 'Copilot looks up today’s rate…'); }],
          [1500, () => vzFly(el, web, rate, '0.235 · source, date', () => { rate.textContent = '0.235'; src.textContent = 'web source · today'; src.className = 'vz-tag'; }, 900)],
          [2900, () => { vzSay(el, '…writes it in with where it came from, and every euro figure follows through the lookups from step 2.'); $$('[data-eur]', el).forEach((d, i) => setTimeout(() => { d.textContent = `€ ${n1(+d.dataset.eur * 0.235)}`; d.classList.add('glow'); }, reduce() ? 0 : i * 250)); }],
          [5200, () => { web.classList.remove('on'); txt.classList.add('on'); vzSay(el, 'Or it reads your notes and fills in each initiative’s status.'); }],
          [5800, () => vzFly(el, txt, $('[data-st="1"]', el), 'On track · launch 20 July', () => status(1, 'On track · app store launch 20 July'), 900)],
          [6400, () => vzFly(el, txt, $('[data-st="2"]', el), 'Delayed · data 3 weeks late', () => status(2, 'Delayed · data extract 3 weeks late'), 900)],
        ], end: 8300 };
      },
      'Outside facts come in with their source, and the formulas you built carry them through.');
  };

  // ---------------- Excel 4: colour and built-in skills ----------------
  viz.xlcolour = (el) => {
    const rows = [['Austria', 'At risk', 'On track'], ['Poland', 'On track', 'Off track'], ['Spain', 'At risk', 'At risk']];
    const cls = (v) => ({ 'On track': 'green', 'At risk': 'amber', 'Off track': 'red' })[v];
    const grid = (k) => `<div class="vz-mini-t vz-col" data-g="${k}"><p>${k === 'paint' ? 'Painted by hand' : 'Colour rule (conditional formatting)'}</p><table>${rows.map(([c, v], i) => `<tr><td>${c}</td><td data-i="${i}" class="vz-cell ${cls(v)}">${v}</td></tr>`).join('')}</table></div>`;
    scene(el, 'What colour rules and a built-in skill do',
      `<div class="vz-two">${grid('paint')}${grid('rule')}</div>
      <div class="vz-tabs2"><span class="vz-faint">@theme-design styles every sheet:</span>${['Register_Ready', 'Lookups', 'Summary', 'Dashboard'].map((s) => `<span class="vz-sheet-tab">${s}</span>`).join('')}</div>`,
      () => {
        const set = (g, i, v, recolour) => { const d = $(`[data-g="${g}"] [data-i="${i}"]`, el); d.textContent = v; if (recolour) d.className = `vz-cell ${cls(v)}`; d.classList.toggle('wrong', !recolour && !d.classList.contains(cls(v))); };
        rows.forEach(([, v], i) => { set('paint', i, v, true); set('rule', i, v, true); });
        $$('.vz-sheet-tab', el).forEach((t) => t.classList.remove('on'));
        vzSay(el, 'Two copies of the same column. Left: colours painted by hand. Right: a colour rule.');
        return { steps: [
          [2200, () => { vzSay(el, 'Next month the numbers come in…'); rows.forEach(([, , v2], i) => { set('paint', i, v2, false); set('rule', i, v2, true); }); }],
          [4300, () => vzSay(el, 'The rule follows the data. The painted cells still show last month’s colour.')],
          [6600, () => { vzSay(el, 'And the look of the whole workbook? That’s a built-in skill: <b>@theme-design</b>.'); $$('.vz-sheet-tab', el).forEach((t, i) => setTimeout(() => t.classList.add('on'), reduce() ? 0 : i * 280)); }],
        ], end: 8800 };
      },
      'Colour rules follow the data, paint doesn’t. Built-in skills like @theme-design do the styling across every sheet.');
  };

  // ---------------- Excel 5: three dashboards ----------------
  viz.xldash = (el) => {
    const d = [['Germany', 205.4, 201.2], ['Spain', 69.6, 72.8], ['Austria', 53.6, 57.9], ['Belgium', 44.9, 44.4], ['Poland', 35.3, 36.5], ['Greece', 16.9, 17.1]];
    const max = 210;
    scene(el, 'Same numbers, three dashboards',
      `<div class="vz-dash">
        <div class="vz-lvl" data-lv="1"><p>Level 1 · PivotTable</p><table class="vz-pivot"><tr><th>Country</th><th>Actual</th><th>Target</th></tr>${d.map(([c, a, t]) => `<tr data-c="${c}"><td>${c}</td><td>${n1(a)}</td><td>${n1(t)}</td></tr>`).join('')}</table><small class="vz-faint">GWP, EUR m</small></div>
        <div class="vz-lvl" data-lv="2"><p>Level 2 · slicer</p><div class="vz-slicer">${d.slice(0, 4).map(([c]) => `<span data-sl="${c}">${c}</span>`).join('')}</div>
          <div class="vz-hbars">${d.map(([c, a]) => `<div data-c="${c}"><span>${c}</span><i style="--w:${(a / max) * 100}%"></i></div>`).join('')}</div></div>
        <div class="vz-lvl" data-lv="3"><p>Level 3 · HTML dashboard <small>interactive-canvas</small></p>
          <div class="vz-tiles3"><div><small>GWP</small><b>425.7m</b></div><div><small>vs target</small><b>−1.0%</b></div><div><small>On track</small><b>110</b></div></div>
          <div class="vz-vbars">${d.map(([c, a, t]) => `<div><i class="t" style="--h:${(t / max) * 100}%"></i><i class="a" style="--h:${(a / max) * 100}%"></i><span>${c.slice(0, 2)}</span></div>`).join('')}</div></div>
      </div>`,
      () => {
        $$('.vz-lvl', el).forEach((l) => l.classList.remove('on')); $$('.dim', el).forEach((x) => x.classList.remove('dim')); $$('[data-sl]', el).forEach((s) => s.classList.remove('on'));
        vzSay(el, 'Your cleaned register, three ways.');
        const pick = (c) => { $$('[data-sl]', el).forEach((s) => s.classList.toggle('on', s.dataset.sl === c)); $$('[data-lv="1"] [data-c], [data-lv="2"] [data-c]', el).forEach((r) => r.classList.toggle('dim', !!c && r.dataset.c !== c)); };
        return { steps: [
          [600, () => { $('[data-lv="1"]', el).classList.add('on'); vzSay(el, '<b>PivotTable</b>: premiums against target by country, built from the table.'); }],
          [3000, () => { $('[data-lv="2"]', el).classList.add('on'); vzSay(el, 'A <b>slicer</b>: click a country and the PivotTable and chart follow.'); }],
          [4300, () => pick('Austria')], [5300, () => pick('Spain')], [6300, () => pick(null)],
          [7000, () => { $('[data-lv="3"]', el).classList.add('on'); vzSay(el, 'An <b>HTML dashboard</b> in ERGO colours, rendered next to your workbook and connected to the data.'); }],
        ], end: 9400 };
      },
      'Same numbers, three ways to look at them. Pick the one your board will actually read.');
  };

  // ---------------- PowerPoint 2: shape the deck ----------------
  viz.pptshape = (el) => {
    const T = { German: 'Wachstum über Plan', Italian: 'Crescita sopra il piano', Spanish: 'Crecimiento por encima del plan', French: 'Croissance au-dessus du plan', Polish: 'Wzrost powyżej planu', Greek: 'Ανάπτυξη πάνω από το πλάνο', Dutch: 'Groei boven plan' };
    scene(el, 'What this step does to your deck',
      `<div class="vz-shape">
        <div class="vz-part" data-p="two"><p>One slide, two ways</p><div class="vz-race2"><div><span>No pictures</span><i data-bar="fast"></i></div><div><span>With a generated image</span><i data-bar="slow"></i></div></div></div>
        <div class="vz-part" data-p="lang"><p>Your language</p><div class="vz-decks"><div class="vz-deck"><b>Growth ahead of plan</b><small>Original · stays as it is</small></div><div class="vz-deck copy"><b data-tr></b><small data-lang></small></div></div></div>
        <div class="vz-part" data-p="inter"><p>Interactive slide</p><div class="vz-islide"><div class="vz-itabs"><span data-t="0">GWP</span><span data-t="1">Combined ratio</span><span data-t="2">Operating result</span></div><div class="vz-ibars"><i></i><i></i><i></i></div></div></div>
      </div>`,
      () => {
        const lang = (ADV.fieldVal && ADV.fieldVal('lang')) || 'German';
        $('[data-tr]', el).textContent = T[lang] || `Growth ahead of plan (${lang})`; $('[data-lang]', el).textContent = `New copy · ${lang}`;
        $$('.vz-part', el).forEach((p) => p.classList.remove('on')); $$('[data-bar]', el).forEach((b) => b.classList.remove('go')); $('.vz-deck.copy', el).classList.remove('out');
        const tab = (i) => { $$('[data-t]', el).forEach((t) => t.classList.toggle('on', +t.dataset.t === i)); $('.vz-ibars', el).dataset.v = i; };
        tab(0); vzSay(el, 'Three things happen to the deck in this step.');
        return { steps: [
          [500, () => { $('[data-p="two"]', el).classList.add('on'); $$('[data-bar]', el).forEach((b) => b.classList.add('go')); vzSay(el, 'The same slide twice: without pictures it’s quick, with a generated image it takes longer.'); }],
          [3300, () => { $('[data-p="lang"]', el).classList.add('on'); $('.vz-deck.copy', el).classList.add('out'); vzSay(el, `Translation makes a <b>new copy</b> in ${esc(lang)}. Your deck stays as it is.`); }],
          [6000, () => { $('[data-p="inter"]', el).classList.add('on'); vzSay(el, 'An interactive slide: the board clicks through the tabs themselves.'); }],
          [6900, () => tab(1)], [7900, () => tab(2)], [8900, () => tab(0)],
        ], end: 9600 };
      },
      'Translation gives you a second deck, not a changed one. An interactive slide lets the board explore on their own.');
  };

  // ---------------- PowerPoint 4: record a skill ----------------
  viz.pptrecord = (el) => {
    scene(el, 'What recording a skill does',
      `<div class="vz-rec">
        <div class="vz-recslide"><span class="vz-recdot">● Recording</span><b class="vz-rh">Q3 results</b><p class="vz-rp">Premiums ahead of plan, result held back by the August storm.</p></div>
        <div class="vz-skillmd"><p>SKILL.md · draft</p><code><span class="vz-faint">name: my-slide-style</span><span data-rule="1">- Make the slide heading bigger (36 pt)</span><span data-rule="2">- Set all slide text to Arial</span></code></div>
        <div class="vz-applied">${[1, 2, 3].map(() => '<div class="vz-small"><b>Title</b><i></i><i></i></div>').join('')}</div>
      </div>`,
      () => {
        const s = $('.vz-recslide', el); s.classList.remove('big', 'sans', 'stopped'); $$('[data-rule]', el).forEach((r) => r.classList.remove('on')); $$('.vz-small', el).forEach((x) => x.classList.remove('done')); $('.vz-skillmd', el).classList.remove('saved');
        vzSay(el, 'You select Record a skill and make two changes by hand.');
        return { steps: [
          [1300, () => { s.classList.add('big'); vzSay(el, 'Change 1: a bigger heading…'); }],
          [2200, () => $('[data-rule="1"]', el).classList.add('on')],
          [3300, () => { s.classList.add('sans'); vzSay(el, 'Change 2: all text in Arial. Copilot writes each change down as a rule.'); }],
          [4200, () => $('[data-rule="2"]', el).classList.add('on')],
          [5400, () => { s.classList.add('stopped'); $('.vz-skillmd', el).classList.add('saved'); vzSay(el, 'Stop, review the draft, upload it: it’s a skill now.'); }],
          [6800, () => { vzSay(el, '“Apply my recorded skill to all slides in this deck.”'); $$('.vz-small', el).forEach((x, i) => setTimeout(() => x.classList.add('done'), reduce() ? 0 : i * 350)); }],
        ], end: 8800 };
      },
      'Show Copilot once and it writes the rules for you, ready to reuse on any slide or deck.');
  };

  // ---------------- Chief of Staff 1: the morning sweep ----------------
  viz.cossweep = (el) => {
    const sources = [
      { icon: '✉️', label: 'Mail', a: 0, items: [['wait', 'Board Office', 'Service figures for the board briefing, due Wednesday'], ['wait', 'Leonie Schäfer', 'URGENT: phone system down for team B']] },
      { icon: '📅', label: 'Calendar', a: 72, items: [['decide', 'Invitation', 'Alignment customer journey: accept or decline?']] },
      { icon: '💬', label: 'Teams chats', a: 144, items: [['wait', 'Felix Neumann', 'Can we move our 1:1 to Thursday?']] },
      { icon: '🎙️', label: 'Meeting recaps', a: 216, items: [['promised', 'Your weekly, 3 Nov', 'You: send Daniel the complaints plan by Friday']] },
      { icon: '📄', label: 'Files shared with you', a: 288, items: [['decide', 'Daniel Ott', 'Backlog figures: approve weekend overtime?']] },
    ];
    const B = [['promised', '🤝 You promised'], ['wait', '⏳ Waiting for you'], ['decide', '⚖️ Decide']];
    scene(el, 'What the morning sweep does',
      `<div class="vz-sweep"><div><div class="vz-radar"><i class="vz-ring fence"></i><i class="vz-ring"></i><i class="vz-beam"></i><span class="vz-core">${copilotImg('')}</span></div>
        <p class="vz-legend"><span></span>Only what you can open yourself</p><div class="vz-lockrow">${['Colleagues’ inboxes', 'Files you can’t open', 'WhatsApp, private mail'].map((l) => `<div><span>🔒</span>${l}</div>`).join('')}</div></div>
        <div><div class="vz-board">${B.map(([k, h]) => `<div class="vz-bucket" data-b="${k}"><h4>${h} <span>0</span></h4><ul></ul></div>`).join('')}</div>
        <div class="vz-todo"><h4>Your to-do list for today, most urgent first</h4><ol><li>Phone system down for team B <small>· urgent, since 07:52</small></li><li>Service figures for the board briefing <small>· due Wednesday</small></li><li>Complaints plan to Daniel <small>· you promised it by Friday</small></li><li>Accept or decline the customer-journey alignment</li><li>Answer Felix about the 1:1</li></ol></div></div></div>`,
      () => {
        const radar = $('.vz-radar', el), beam = $('.vz-beam', el);
        if (!$('.vz-src2', radar)) sources.forEach((s) => { const x = 50 + 41.7 * Math.sin(s.a * Math.PI / 180), y = 50 - 41.7 * Math.cos(s.a * Math.PI / 180); s.el = document.createElement('div'); s.el.className = 'vz-src2'; s.el.innerHTML = `<span>${s.icon}</span>${s.label}`; s.el.style.left = `${x}%`; s.el.style.top = `${y}%`; radar.appendChild(s.el); });
        $$('.vz-bucket ul', el).forEach((u) => { u.innerHTML = ''; }); $$('.vz-bucket h4 span', el).forEach((n) => { n.textContent = 0; });
        $('.vz-todo', el).classList.remove('on'); $('.vz-lockrow', el).classList.remove('on'); beam.classList.remove('on');
        const land = (b, from, text) => { const ul = $(`[data-b="${b}"] ul`, el); const li = document.createElement('li'); li.innerHTML = `<small>${esc(from)}</small>${esc(text)}`; ul.appendChild(li); $(`[data-b="${b}"] h4 span`, el).textContent = ul.children.length; };
        vzSay(el, 'One prompt: “Go through my meetings, emails and chats…”');
        const T = 6500;
        return { end: T + 3400, steps: [
          [300, (now) => {
            if (now) { sources.forEach((s) => s.items.forEach(([b, f, x]) => land(b, f, x))); return; }
            vzSay(el, 'Copilot sweeps your mail, calendar, Teams chats, meeting recaps and files shared with you…'); beam.classList.add('on');
            const t0 = performance.now(), hit = new Set();
            const tick = (t) => {
              const a = ((t - t0) / T) * 360; beam.style.transform = `rotate(${a}deg)`;
              sources.forEach((s, i) => { if (!hit.has(i) && a >= s.a + 2) { hit.add(i); s.el.classList.add('ping'); setTimeout(() => s.el.classList.remove('ping'), 500); s.items.forEach(([b, f, x], j) => setTimeout(() => vzFly(el, $('span', s.el), $(`[data-b="${b}"] ul`, el), `<small>${esc(f)}</small>${esc(x)}`, () => land(b, f, x), 900), j * 300)); } });
              if (a < 360 && el.isConnected) requestAnimationFrame(tick); else beam.classList.remove('on');
            };
            requestAnimationFrame(tick);
          }],
          [2600, () => vzSay(el, '…and sorts every find: what you <b>promised</b>, who is <b>waiting for you</b>, what you need to <b>decide</b>.')],
          [T + 1400, () => { $('.vz-todo', el).classList.add('on'); vzSay(el, 'Then it ranks them into today’s to-do list.'); $('.vz-lockrow', el).classList.add('on'); }],
        ] };
      },
      'One prompt reads everything you can open, and nothing you can’t: no colleague’s inbox, no restricted file, no private apps.');
  };

  // ---------------- Chief of Staff 3: scheduled prompts ----------------
  viz.cosschedule = (el) => {
    scene(el, 'What scheduling the prompt does',
      `<div class="vz-sched"><div class="vz-sky"><b class="vz-clock">06:30</b><small class="vz-day">Tuesday</small><span class="vz-you">😴 You’re still asleep</span></div>
        <div class="vz-chat"><div class="vz-sp"><span>⏰ Weekdays 07:45</span><b>Morning sweep</b><small class="vz-st">Scheduled</small></div><div class="vz-sp fri"><span>⏰ Fridays 15:00</span><b>My week in review</b><small class="vz-st">Scheduled</small></div>
          <div class="vz-brief"><b>Morning sweep · 07:46</b><span class="vz-new">New</span><ol><li>Phone system down for team B</li><li>Board figures due Wednesday</li><li>Complaints plan to Daniel by Friday</li></ol></div></div></div>`,
      () => {
        const clock = $('.vz-clock', el), sky = $('.vz-sky', el), you = $('.vz-you', el), day = $('.vz-day', el);
        const sps = $$('.vz-sp', el), brief = $('.vz-brief', el);
        sky.className = 'vz-sky night'; clock.textContent = '06:30'; day.textContent = 'Tuesday'; you.textContent = '😴 You’re still asleep';
        sps.forEach((s) => { s.classList.remove('run'); $('.vz-st', s).textContent = 'Scheduled'; }); brief.classList.remove('on');
        vzSay(el, 'You scheduled the morning sweep yesterday. It’s 06:30.');
        const tickTo = (from, to, ms, now) => { if (now) { clock.textContent = to; return; } const [h0, m0] = from.split(':').map(Number), [h1, m1] = to.split(':').map(Number); const a = h0 * 60 + m0, b = h1 * 60 + m1, t0 = performance.now(); const f = (t) => { const k = Math.min(1, (t - t0) / ms), v = Math.round(a + (b - a) * k); clock.textContent = `${String(Math.floor(v / 60)).padStart(2, '0')}:${String(v % 60).padStart(2, '0')}`; if (k < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); };
        return { end: 10200, steps: [
          [700, (now) => { tickTo('06:30', '07:45', 1800, now); sky.className = 'vz-sky dawn'; }],
          [2600, () => { sps[0].classList.add('run'); $('.vz-st', sps[0]).textContent = 'Running…'; vzSay(el, '07:45: the prompt sends itself and reads your mail, calendar and chats.'); }],
          [4200, () => { $('.vz-st', sps[0]).textContent = 'Done'; sps[0].classList.remove('run'); brief.classList.add('on'); vzSay(el, 'The briefing is waiting in Copilot, marked new.'); }],
          [5600, (now) => { tickTo('07:45', '08:30', 900, now); sky.className = 'vz-sky day'; you.textContent = '☕ 08:30 You open Copilot: it’s already there'; }],
          [7600, () => { day.textContent = 'Friday'; clock.textContent = '15:00'; sps[1].classList.add('run'); $('.vz-st', sps[1]).textContent = 'Running…'; you.textContent = '📋 Friday: your week reviews itself'; vzSay(el, 'And on Friday afternoon, the week in review runs the same way.'); }],
          [9000, () => { sps[1].classList.remove('run'); $('.vz-st', sps[1]).textContent = 'Done'; }],
        ] };
      },
      'A scheduled prompt works before you do: the briefing is waiting when you arrive.');
  };

  // ---------------- Chief of Staff 4: the briefing podcast ----------------
  viz.cospodcast = (el) => {
    const files = [['📄', 'Committee brief.docx'], ['📊', 'Finance assumptions.xlsx'], ['✉️', 'Thread: pilot results']];
    const lines = [['A', 'Tuesday, the committee decides whether the pilot goes into phase two.'], ['B', 'And the first question will be: who checks what the AI decides?'], ['A', 'The answer is in the brief: a person decides every claim payment.']];
    scene(el, 'What the Workspace and Audio overview do',
      `<div class="vz-pod"><div class="vz-files">${files.map(([i, n]) => `<div class="vz-file"><span>${i}</span>${n}</div>`).join('')}</div>
        <div class="vz-ws"><p>Workspace</p><div class="vz-ws-in"></div><div class="vz-aud"><span>Audio overview</span><span>Dialog</span><span>Shorter</span><span>Deutsch</span></div></div>
        <div class="vz-voices"><div class="vz-v" data-v="A"><b>🎙️</b><i></i><i></i><i></i><i></i><i></i></div><div class="vz-v" data-v="B"><b>🎙️</b><i></i><i></i><i></i><i></i><i></i></div><p class="vz-line"></p></div></div>`,
      () => {
        const inbox = $('.vz-ws-in', el); inbox.innerHTML = ''; $$('.vz-file', el).forEach((f) => f.classList.remove('gone')); $$('.vz-aud span', el).forEach((s) => s.classList.remove('on')); $$('.vz-v', el).forEach((v) => v.classList.remove('talk')); $('.vz-line', el).textContent = '';
        vzSay(el, 'Three of your files about the topic Copilot found.');
        const steps = $$('.vz-file', el).map((f, i) => [700 + i * 450, () => vzFly(el, f, inbox, f.innerHTML, () => { f.classList.add('gone'); const c = document.createElement('span'); c.innerHTML = f.innerHTML; inbox.appendChild(c); }, 750)]);
        steps.push([2600, () => vzSay(el, 'They go into one Workspace, so the answers come only from them.')]);
        $$('.vz-aud span', el).forEach((s, i) => steps.push([3600 + i * 300, () => s.classList.add('on')]));
        steps.push([3600, () => vzSay(el, 'Audio overview: two voices, short, in your language.')]);
        lines.forEach(([v, text], i) => steps.push([5200 + i * 1700, () => { $$('.vz-v', el).forEach((x) => x.classList.toggle('talk', x.dataset.v === v)); $('.vz-line', el).textContent = `${v === 'A' ? 'Voice 1' : 'Voice 2'}: ${text}`; vzSay(el, 'A podcast about your topic, made from your files.'); }]));
        return { steps, end: 10600 };
      },
      'Your own files, turned into a briefing you can listen to on the way home.');
  };


  // Make sure the exported image shows the final frame, not a half-played animation.
  const tlFinish = (svg) => gsap.getTweensOf(svg.querySelectorAll('*')).forEach((tw) => tw.progress(1));
})();
