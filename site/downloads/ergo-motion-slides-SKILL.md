---
name: ergo-motion-slides
description: Builds animated, clickable slides in ERGO style (investor-deck layout, ERGO red, Arial, ERGO logo) as live HTML blocks inside a normal .pptx, e.g. an animated appendix; use for "ERGO motion slides", "animated ERGO slides", "ERGO live slides", "ERGO HTML slides", not for static ERGO decks (ergo-deck) or other brands.
---

# ERGO Motion slides

Live Slides engine (scripts/block_shell.py, build_live_deck.py, edit_live_deck.py, lv_components.js) plus the
ERGO look (scripts/ergo_motion.py) and the ERGO logo and icons (assets/). Each slide is a full-slide PowerPoint
content block with self-contained HTML and a picture fallback. Brand rules: references/brand-rules.md (binding).
Same look as the `ergo-deck` skill, so a static deck can get an animated appendix.

## When to use
- Animated or clickable ERGO slides: workshops, briefings, pilot results, roadmaps, an appendix in motion.

## When NOT to use
- Static ERGO PowerPoint: `ergo-deck`. Other brands. Files that must look identical everywhere (PDF handouts).

## Workflow
1. Plan: one idea per slide, few words, real numbers with a source (or "Illustrative").
2. Write each slide with `ergo_motion` (all helpers return HTML):
   - Full-slide: `cover(title, "Event | Format", date, [(name, role)])` (also the "Thank you." closer),
     `divider("Appendix", sub, label="Section 2", number=2)`.
   - Content slide = `header(title, sub, kicker="Appendix") + body(parts..., align=...) + [side_panel(...)] + footer(page, "Event – Title", source)`.
     `body` fills the free height: align="top" (charts, tiles + pillars), "center" (donut, rings),
     "spread" (content at top, `takeaway()` band at the bottom - use this whenever a band is on the slide).
   - Components: `agenda(items, active, detail=[...])`, `kpi_tiles([(label, n, suffix, dec, note)])`,
     `pillars([(icon|None, head, text|[bullets])])`, `timeline([(when, what)], now)`, `bar_chart(..., cagr, threshold)`,
     `hbars`, `donut`, `rings`, `side_panel(head, sub, bullets)`, `takeaway(sentence)`.
   - Icons: `ergo_motion.ICON_NAMES`. Use one only if it matches the meaning; otherwise None = numbered disc.
3. Render: `page(title, body_html, css=M.CSS, js=M.JS, theme=M.THEME, lang="en"|"de", components=True)`.
   Pattern: `examples/ergo_deck_content.py` + `examples/ergo_deck_build.py`.
4. Build: write spec.json, `python scripts/build_live_deck.py spec.json "<Deck Title>.pptx"` (checks, pictures,
   pack). Look at every picture: no empty halves, nothing under the footer, labels clear of bars. Rebuild, max 3 rounds.
5. Mixing with a static ERGO deck: build the static slides with `ergo-deck`, the live ones here, then put the live
   slides after the static ones (e.g. as the appendix) with the pptx skill; keep footer text and page numbers continuous.
6. Publish with host-CopyArtifact to output, add speaker notes with the pptx skill if wanted, check the blocks
   with host-ListPackageEntries / host-GetArtifactModel.
7. Deliver: name the deck, say what moves on each slide, and that playback is confirmed when the user runs it in PowerPoint.

## Edit an existing live deck
1. Get the deck into the workspace. 2. `python scripts/edit_live_deck.py extract <deck.pptx> working/<folder>`.
3. Change only what was asked in slideN.html. 4. `python scripts/edit_live_deck.py update <deck.pptx> working/<folder> "working/<folder>/<Title> v2.pptx"`.
5. Check the new pictures, publish under a new name.

## Guardrails
- Brand rules in references/brand-rules.md are binding. One brand per deck.
- Live Slides rules: self-contained HTML, nothing on `<html>`/`<body>` attributes, no backdrop-filter or large
  blurs, ambient loops get `lv-amb`, pictures show the final state, each block under ~150 KB (photos as JPEG <100 KB).
- Keep every absolute shape inside the slide (anything outside makes the page auto-scale).
- Keep the skill tiny and text-only: no PNG, PPTX, SVG files or base64 in the skill folder.
- Never publish a sample or test deck to output unless the user asks.

## Lessons from real use
- Nov 2026 (earlier version): agenda tiles with a fixed height left the top 40% empty; pillars floated with a gap
  under KPI tiles; timeline + band crowded the top third; bar charts reserved bracket room without a CAGR; sources
  wrapped into axis labels; icons did not match the meaning; pictures used a non-Arial font. All fixed here:
  body fills the height, footer is in flow, band sits at the bottom with align="spread", bracket room only with cagr,
  numbered discs instead of random icons, Liberation Sans in the font stack.

## Sharing
Zip the `ergo-motion-slides` folder itself (ZIP contains `ergo-motion-slides/SKILL.md`), stored, text files only.
