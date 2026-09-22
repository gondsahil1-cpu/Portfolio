# Sahil Gond Portfolio — Project Notes (read this first)

> **Update protocol:** after every response that changes anything, append one line to the *Change log* (bottom) and fix any section that became wrong. Keep this file short; it exists so work can resume without re-reading the whole conversation.

## 1. What it is
- Scroll-driven cinematic portfolio for **Sahil Gond** (EE student: embedded, robotics, automation). Recreates a 32.34 s motion-graphics reference video (`Protfolio.mp4`, 1920×1080) as a **pinned, scrubbed** intro, then normal editorial sections.
- **Static site** (no backend/DB/API). Everything runs in the browser. Single self-contained HTML.
- Stack: vanilla HTML/CSS/JS + **GSAP 3.12.5 + ScrollTrigger** (cdnjs) + **Lenis 1.1.13** (jsdelivr) + Google Fonts. (Spec asked React/Vite; not used because hosted page must be one file.)
- Published artifact: `https://claude.ai/artifact/2pt9Tiws8Y8XdJwJyMdRU9` (update it by passing this as `url` when re-publishing).

## 2. Files
| File | Role |
|---|---|
| `style.css` | tokens, units, stage layers, sections, cursor, overlay, portrait media query |
| `body.html` | markup fragment + `<template id="stage-tpl">` (intro stage, cloned by JS) |
| `main.js` | content data (top), texture baking, stage timeline, section motion, cursor, overlay, boot |
| `portrait.webp` | cutout (948×1299, alpha); inlined as base64 at build (`__PORTRAIT__` placeholder in main.js) |
| `build.py` | concatenates all into `index.html` (relative paths; run `python3 build.py`) |
| Outputs | `/mnt/user-data/outputs/sahil-gond-portfolio.html` (final), `sahil-gond-portfolio-source.zip` (sources + this file) |

Sandbox working copy (may be lost): `/home/claude/site/` (sources), `/home/claude/build/index.html`, `/home/claude/test/` (Playwright scripts). **Durable copy = the zip in outputs.**

## 3. Editable content (top of `main.js`)
`SITE {name,email,github,handle}`, `ART` (4 inline SVG line drawings), `PROJECTS[]` (no,a,b,pal,art,tag,short,long,chain,stack,shape,artPos), `WORDS[]` (Engineering words + annotation + style d/o/l), `SKILLS[]`, `EXPERIENCE[]`.
- Email used: `gondsahil1@gmail.com` (video shows `.com.com` typo). GitHub is placeholder `https://github.com/`.
- Project/experience copy was **drafted from the brief's tech lists** (no invented employers/dates/results) — user should edit.
- Header text from video: `Sahil_.0607`, date `05.10.2024`.

## 4. Runtime architecture
`boot()` → grain tile → wait fonts (2.5 s cap) → Lenis (skipped if reduced-motion) → `renderContent()` (fills lists, bakes shape canvases) → `build()` inside `gsap.context` → cursor → case overlay → nav click handler → debounced resize (rebuild if width Δ≥8px or portrait flip).
`build()` = `buildStages()` + `buildSections()` + `buildNav()`.
- **`buildStages()`**: clones template into `#index`, `paintStage()` bakes canvases, `buildTimeline()` builds ONE paused timeline in *video seconds* (0–32.34, dummy tween at D), `ScrollTrigger.create({pin:true, scrub:.6, end:+=6.6×innerHeight})`, HUD updates from progress. Reduced-motion: two static `.cine` frames via `tl.time(17.6)` and `tl.time(D)`, no pin.
- **Stage layers** (inside `.pan`, z-order): `l-orb` < `l-back`(blue canvas+vignette+title) < `l-person` < `l-scrim` < `l-front`(header+paragraphs) < `l-cap`; then `.tcard` (pink + title lines, **transparent bg**), `.cue`, `.curtain`. Each layer has its own `.frame` (1280×720-unit box, bottom-anchored; full-size in portrait).
- **Textures are baked, not images**: `bakeBlue`, `bakeOrb(pal)`, `bakePink` paint per-pixel gradients+grain into canvases (cached in `CACHE`, copied with drawImage). Palettes in `PAL` (sun/blue/pink/mint). Global flicker grain = tiled noise PNG on `.grain`, animated with CSS `steps()`.
- **Units**: `--px = min(100vw/1280, 100svh/720)`; all stage geometry = `calc(N * var(--px))`. Portrait = `@media (max-aspect-ratio:5/6)` (recomposed, uses vw/svh; `--pu:.128vw` for pink). JS mirrors with `G={w,h,u,portrait}`.
- **Text**: `splitLines` (measures word offsetTop → masked `.ln>.li` lines), `splitChars` (title, wrapped in `.t-in` with scaleX 1.12). Title states from `titleStates()` (cap-offset .0645em for Anton).
- **Sections** (`buildSections`): reveal lines on enter; statement drift; SVG stroke-draw (`pathLength=1`); project title spans slide ±; shape parallax; Engineering words slide opposite directions (scrub); end fade (`.endfade` fixed, opacity scrubbed over `.end`, inside `#contact`).
- **Cursor**: desktop only (`hover:hover`+`pointer:fine`), dot+ring, `mix-blend-mode:difference`, `data-cursor="view"` on projects → "View project →".
- **Case overlay**: click/Enter on `.proj` → circle clip-path reveal from click point, content from `PROJECTS`, Esc/Close, Lenis stop/start.
- Debug: open with `?debug` → `window.__cine={tl,S,D,st}`, `window.__lenis`.

## 5. Timeline map (video seconds)
0–3.2 scrim .8→0, person rises (opacity .3→1, scale .94→.87) · 1–2.6 title letters mask-rise (small) · 6.4–9 title small→big (587u wide, centered), person .885→1, vignette lifts · 8.2/8.8 paragraphs reveal (portrait: 13.4/14.1) · 13–16.6 title→top-left (final), left para y −40u · 9–19 bg push-in 1→1.08, person scale 1→1.02 · **19–19.9 blue wipes left** · 19.1–20.6 person +354u (portrait +.14w), orb fades in (dim→0, scale .92→1) · 20.7–24.4 orb breathing, caption at 21.2 · **24.2–26.1 pan**: `.pan` x→−(orbRight+.04w), orb fill rotates 12→150° · 24.7–26.7 tcard x w→0 · 25.0 pink enters · 25.5/25.75 title lines enter · 27.2→end drift.
HUD scenes: BLACK, BLUE 2.2, TITLE 6.4, INTRO 9, SETTLE 13, HOLD 17, WIPE 19, ORB 20.5, PAN 24.4, DASHBOARD 26.6.

## 6. Measured reference geometry (1280×720 units, "u")
- Title: Anton, 90.8u, cap-top 100u, left 25u, width 440u (letter-spacing .006em + scaleX 1.12); big = 587u wide, small = 270u wide (both centered x=640; small cap-top 200u).
- Person: height 575u (head top y=145), left 422u, bottom-anchored; orb-scene shift +354u.
- Paragraphs: Dosis **350**, 22u/line-height .91, top 297u; left w 362u @ left 25u; right w 372u right-aligned @ right 25u; para gap = 20u extra.
- Header: Anton 13.5u, top 30u, side margins 25u. 
- Orb: 1270u square, left 335u, top −235u (center 970,400; R 635). Bleeds past viewport at rest (matches video).
- Pink: five R=277 circles, pitch 470, canvas 554×2434u, `right:-140u; bottom:-852u`.
- Title card: Jost 300, 181u, scaleX .86; line1 "THE ENGINEERING" left 85u top 96.3u; line2 "DASHBOARD" left 431u top 341.3u (portrait: 3 stacked lines `.tl-p1..3`, 19vw).
- Fonts: Anton (display), Jost (light headings), Dosis (body), IBM Plex Mono (meta).
- Colors: orb cream #fef3b3 → orange #f2703a, mint #8ed0b0; pink #f8a5c3 → coral #f8766d; blue ~#0b65b0 with dark vignette.

## 7. Portrait + assets
Frame at t=16.5 s → crop (560,180)-(1340,1080) → `rembg` (isnet-general-use) → alpha curve + 1px erode + blue-spill clamp + bottom-row fix → bbox crop → ×1.5 Lanczos → WebP q90. Soft on big screens (from 1080p video) — a real photo would be sharper.

## 8. Test workflow (sandbox)
- Playwright + Chromium at `/opt/pw-browsers`. Harness `/home/claude/test/harness.py` routes CDN URLs to local npm copies (`/home/claude/libs/node_modules`: gsap, lenis, @fontsource/*) since network is limited.
- **Gotcha:** never `return` the timeline from `page.evaluate` (`tl.time(x)` returns it → hang). Use `tl.time(x);0`.
- Scripts: `shots.py WxH tag T...` (stage frames), `scroll.py WxH tag section:offset...` (sections), `interact.py`, `load.py`, `rm.py` (reduced motion).
- Verified: 1280×720, 1440×900, 1920×1080, 1024×768, 2560×1080, 390×844 portrait, reduced motion, wheel scroll, nav, hover, overlay. **Not verified:** real Google Fonts/CDN load, real touch devices, low-power perf.

## 9. Known caveats / TODO
- Replace GitHub URL; review drafted Experience/project text; confirm email.
- Circle bleeds off-screen at rest (per video). Offer: shrink to a fully visible circle.
- Short black gap during pan before title card (by design after the round-edge fix).
- Jost outline text avoided (overlapping-contour artefacts) → Anton used for outlines, ghost-color for Jost.
- Possible: better portrait source, project links, per-project images, perf pass on low-end mobile.

## 10. Change log
- v1: full site built from video + spec; published.
- v2: pan fix — orb no longer cut by a straight edge (tcard transparent, orb leaves first, pan distance from orb geometry, timings above). Republished same URL.
- v2 docs: added this notes file (also inside source zip).
