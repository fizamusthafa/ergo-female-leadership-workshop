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
      good: 'Skills someone prepared for you, like ERGO Brand on this site.',
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
      html: `<div class="am-drop"><span class="am-zip">🗜️ ergo-brand.zip</span><span class="am-drop-hint">Drop a skill here</span></div>
        <div class="am-list"><div class="am-row"><span>🧭 ERGO Brand</span><span class="am-toggle on" aria-hidden="true"></span></div></div>`,
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
  fx.highFive = (key, msg) => {
    const t = ADV.trails[key]; if (!t || !t.logo) return;
    document.querySelectorAll('.hi5-pop').forEach((x) => x.remove());
    const pop = document.createElement('div'); pop.className = 'hi5-pop'; pop.setAttribute('role', 'status'); pop.setAttribute('aria-live', 'polite');
    pop.style.setProperty('--c', ({ xls: '#1f9d55', ppt: '#d83b01', cos: '#0f6cbd' })[key] || '#bf1629');
    pop.innerHTML = `<div class="hi5"><img class="h-cp" src="${CP_LOGO}" alt=""><span class="h-burst">${[0, 45, 90, 135, 180, 225, 270, 315].map((r) => `<i style="--r:${r}deg"></i>`).join('')}</span><img class="h-app" src="${t.logo}" alt=""></div><b>${esc(msg || 'High five!')}</b>`;
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
  // Make sure the exported image shows the final frame, not a half-played animation.
  const tlFinish = (svg) => gsap.getTweensOf(svg.querySelectorAll('*')).forEach((tw) => tw.progress(1));
})();
