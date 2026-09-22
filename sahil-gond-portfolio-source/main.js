(() => {
'use strict';

/* ════════════════════════════════════════════════════════
   CONTENT — edit this block to update the site
   ════════════════════════════════════════════════════════ */
const SITE = {
  name: 'Sahil Gond',
  email: 'gondsahil1@gmail.com',
  github: 'https://github.com/',      // ← replace with your GitHub profile URL
  handle: 'Sahil_.0607'
};

const ART = {
  bridge: `<svg viewBox="0 0 600 320" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path class="line" d="M10 232 H590"/><path class="line d" d="M10 246 H590"/>
    <path class="line" d="M170 232 V70 M430 232 V70"/>
    <path class="line" d="M10 200 Q90 92 170 70 Q300 190 430 70 Q510 92 590 200"/>
    <path class="line d" d="M90 142 V232 M130 98 V232 M230 150 V232 M270 168 V232 M300 172 V232 M330 168 V232 M370 150 V232 M470 98 V232 M510 142 V232"/>
    <circle class="line" cx="170" cy="232" r="9"/><circle class="line" cx="300" cy="232" r="9"/><circle class="line" cx="430" cy="232" r="9"/>
    <path class="line" d="M276 206 Q300 186 324 206 M262 192 Q300 160 338 192 M248 178 Q300 134 352 178"/>
    <path class="line d" d="M14 284 q20 -10 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0"/>
    <text class="al" x="170" y="270" text-anchor="middle">IR</text><text class="al" x="300" y="270" text-anchor="middle">LOAD</text><text class="al" x="430" y="270" text-anchor="middle">IMU</text>
    <text class="al" x="300" y="128" text-anchor="middle">ESP32 → GSM</text>
  </svg>`,
  maze: `<svg viewBox="0 0 600 320" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <rect class="line" x="40" y="20" width="520" height="280"/>
    <path class="line" d="M40 90 H150 V160 H90 M150 20 V60 M150 230 V300 M230 20 V120 H330 M230 180 V300 M330 180 H410 V230 M410 20 V120 M480 90 H560 M480 90 V250 H410 M330 240 V300"/>
    <path class="line d" d="M65 55 H120 V125 H200 V205 H285 V150 H370 V70 H445 V150 H520 V270"/>
    <circle class="line" cx="65" cy="55" r="11"/><path class="line" d="M77 55 L 112 41 M77 55 L 112 69"/>
    <path class="line" d="M520 270 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0"/>
    <text class="al" x="65" y="90" text-anchor="middle">START</text><text class="al" x="520" y="292" text-anchor="middle">EXIT</text>
    <text class="al" x="300" y="14" text-anchor="middle">ULTRASONIC + IR → ESP32 → TB6612FNG</text>
  </svg>`,
  rfid: `<svg viewBox="0 0 600 320" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <rect class="line" x="30" y="90" width="190" height="120" rx="14"/>
    <rect class="line" x="52" y="118" width="40" height="32" rx="4"/><path class="line d" d="M52 134 h40 M72 118 v32"/>
    <path class="line d" d="M52 184 h110 M52 198 h70"/>
    <path class="line" d="M240 120 Q262 150 240 180 M262 104 Q298 150 262 196 M284 88 Q334 150 284 212"/>
    <rect class="line" x="350" y="70" width="120" height="180" rx="10"/><circle class="line" cx="410" cy="130" r="26"/><circle class="line" cx="410" cy="130" r="8"/>
    <path class="line d" d="M370 206 h80 M370 224 h50"/>
    <path class="line" d="M470 160 H520"/>
    <rect class="line" x="520" y="120" width="70" height="90" rx="4"/><path class="line d" d="M520 150 h70 M520 180 h70 M552 120 v90"/>
    <text class="al" x="125" y="240" text-anchor="middle">TAG</text><text class="al" x="410" y="278" text-anchor="middle">ESP32 + RTC</text><text class="al" x="555" y="232" text-anchor="middle">LOG</text>
  </svg>`,
  electric: `<svg viewBox="0 0 600 320" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path class="line d" d="M10 160 H590"/>
    <path class="line" d="M10 160 C 60 40, 120 40, 170 160 S 280 280, 330 160 S 440 40, 490 160 S 560 260, 590 190"/>
    <path class="line d" d="M10 190 C 60 90, 120 90, 170 190 S 280 290, 330 190 S 440 90, 490 190"/>
    <path class="line" d="M60 296 H540 M60 290 v12 M120 292 v8 M180 290 v12 M240 292 v8 M300 290 v12 M360 292 v8 M420 290 v12 M480 292 v8 M540 290 v12"/>
    <path class="line" d="M190 60 q0 -14 14 -14 q14 0 14 14 q0 14 -14 14 M190 74 q0 -14 14 -14 q14 0 14 14 q0 14 -14 14 M190 88 q0 -14 14 -14 q14 0 14 14 q0 14 -14 14"/>
    <path class="line" d="M232 44 V104 M240 44 V104"/>
    <path class="line" d="M254 60 q0 -14 14 -14 q14 0 14 14 q0 14 -14 14 M254 74 q0 -14 14 -14 q14 0 14 14 q0 14 -14 14 M254 88 q0 -14 14 -14 q14 0 14 14 q0 14 -14 14"/>
    <text class="al" x="236" y="128" text-anchor="middle">TRANSFORMER</text><text class="al" x="300" y="318" text-anchor="middle">MEASUREMENTS / NUMERICAL METHODS / PLC</text>
  </svg>`
};

const PROJECTS = [
  { no:'01', a:'Bridge', b:'Shield', pal:'blue', art:ART.bridge,
    tag:'IoT · Structural safety · Real-time',
    short:'A real-time IoT monitor that watches a bridge the way an engineer would — presence, load and vibration — and reports before a problem becomes a failure.',
    long:'A real-time IoT bridge safety monitor. IR sensors track what is on the span, load sensing measures the weight it carries, and an MPU9250 motion sensor watches vibration and tilt. An ESP32 fuses the readings, raises alerts over GSM and streams everything to a live dashboard.',
    chain:[['Sense','IR sensors · load / weight sensing · MPU9250'],['Decide','ESP32 fuses the readings and checks them against safe limits'],['Act','GSM alerts and a live IoT dashboard']],
    stack:['ESP32','IR sensors','Load sensing','MPU9250','GSM','IoT dashboard'],
    shape:'right:-18vw;top:6vh;width:min(62vw,940px)', artPos:'right:5vw;top:16vh;width:min(44vw,680px)' },
  { no:'02', a:'Maze', b:'Robot', pal:'sun', art:ART.maze,
    tag:'Robotics · Autonomous navigation',
    short:'An autonomous robot that finds its own way through a maze and follows lines — perception, decision and motor control on a single ESP32.',
    long:'An autonomous maze-solving, line-following robot. Ultrasonic and IR sensors read the walls and the floor, wheel encoders track how far it has moved, and an ESP32 decides where to turn. A TB6612FNG driver turns those decisions into motion.',
    chain:[['Sense','Ultrasonic + IR sensors · wheel encoders'],['Decide','ESP32 navigation logic'],['Act','TB6612FNG dual motor driver']],
    stack:['ESP32','TB6612FNG','Ultrasonic','IR sensors','Encoders'],
    shape:'left:-20vw;top:4vh;width:min(64vw,960px)', artPos:'left:6vw;top:14vh;width:min(46vw,700px)' },
  { no:'03', a:'RFID', b:'Attendance', pal:'pink', art:ART.rfid,
    tag:'Embedded · IoT · Automation',
    short:'Tap a card, get marked present. An ESP32 reads the tag, stamps it with an RTC time and logs it to the cloud — no paperwork.',
    long:'An RFID attendance system. Tap a card and the ESP32 reads the tag, stamps it with the time from an RTC module, and logs the entry to the cloud / a spreadsheet — so attendance records itself.',
    chain:[['Sense','RFID card read'],['Decide','ESP32 validates and timestamps via RTC'],['Act','Cloud / spreadsheet logging']],
    stack:['ESP32','RFID','RTC','Cloud logging','Spreadsheet'],
    shape:'right:-16vw;top:8vh;width:min(58vw,880px)', artPos:'right:6vw;top:16vh;width:min(44vw,680px)' },
  { no:'04', a:'Electrical', b:'Engineering', pal:'mint', art:ART.electric,
    tag:'Electrical · Measurement · Control',
    short:'The fundamentals under everything else: transformer studies, electrical measurements, numerical methods and PLC work.',
    long:'The fundamentals under every other build: transformer studies, electrical measurements, numerical methods and PLC work — the theory that turns a circuit into something you can predict, measure and control.',
    chain:[['Measure','Electrical measurements · transformer studies'],['Model','Numerical methods and analysis'],['Control','PLC work and automation']],
    stack:['Transformers','Measurements','Numerical methods','PLC'],
    shape:'left:-16vw;top:4vh;width:min(60vw,900px)', artPos:'left:5vw;top:16vh;width:min(46vw,700px)' }
];

const WORDS = [
  ['Electronics','Sensors · signal conditioning · power stages','d'],
  ['Robotics','Motion · navigation · motor drivers','o'],
  ['Embedded','ESP32 · firmware · real-time I/O','l'],
  ['Automation','PLC · logging · control','d'],
  ['Electrical','Transformers · measurements','o'],
  ['Control','Sense → decide → act','l'],
  ['Programming','Numerical methods · firmware · dashboards','d']
];

const SKILLS = [
  { t:'Embedded & IoT', items:['ESP32','GSM modules','RTC','Cloud & spreadsheet logging','IoT dashboards'] },
  { t:'Sensing',        items:['IR sensors','Ultrasonic sensors','Load / weight sensing','MPU9250 IMU','Encoders','RFID'] },
  { t:'Robotics',       items:['TB6612FNG motor driver','Autonomous navigation','Line following','Maze solving'] },
  { t:'Electrical',     items:['Transformer studies','Electrical measurements','Numerical methods','PLC'] }
];

const EXPERIENCE = [
  { no:'01', when:'Origin', t:'The RC car', p:'Took a remote-control car apart just to see how it worked. The habit of opening things up to understand them never left.', tags:'Curiosity · Teardown · First principles' },
  { no:'02', when:'Ongoing', t:'Electrical Engineering', p:'Studying transformers, electrical measurements, numerical methods and PLC — the fundamentals under every build.', tags:'Transformers · Measurements · Numerical methods · PLC' },
  { no:'03', when:'Builds', t:'Embedded, IoT & Robotics', p:'Hands-on systems that take a sensor reading all the way to a decision, and a decision all the way to motion.', tags:'Bridge Shield · Maze Robot · RFID Attendance' }
];

const PORTRAIT = '__PORTRAIT__';
const D = 32.34;                       // reference video length (s)
const SCENES = [[0,'BLACK'],[2.2,'BLUE'],[6.4,'TITLE'],[9,'INTRO'],[13,'SETTLE'],[17,'HOLD'],[19,'WIPE'],[20.5,'ORB'],[24.4,'PAN'],[26.6,'DASHBOARD']];

/* ════════════════════════════════════════════════════════
   UTILITIES
   ════════════════════════════════════════════════════════ */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const smooth = (a, b, x) => { x = clamp((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x); };
const gauss = () => (Math.random() + Math.random() + Math.random()) / 3 - .5;
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const fmt = t => { const m = Math.floor(t / 60), s = t - m * 60; return String(m).padStart(2, '0') + ':' + s.toFixed(1).padStart(4, '0'); };

function ramp(stops, t) {
  if (t <= stops[0][0]) return stops[0][1];
  for (let i = 1; i < stops.length; i++) {
    if (t <= stops[i][0]) {
      const [p0, c0] = stops[i - 1], [p1, c1] = stops[i], k = (t - p0) / (p1 - p0);
      return [lerp(c0[0], c1[0], k), lerp(c0[1], c1[1], k), lerp(c0[2], c1[2], k)];
    }
  }
  return stops[stops.length - 1][1];
}

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
let G, lenis = null, ctx = null, hudTrigger = null, rendered = false;

/* ════════════════════════════════════════════════════════
   TEXTURES — baked once into canvases (zero per-frame cost)
   ════════════════════════════════════════════════════════ */
function noiseURL(size, fn) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const x = c.getContext('2d'), id = x.createImageData(size, size), d = id.data;
  for (let i = 0; i < size * size; i++) fn(d, i * 4);
  x.putImageData(id, 0, 0);
  return c.toDataURL('image/png');
}

const PAL = {
  sun:  { stops: [[0,[255,246,190]],[.2,[254,238,170]],[.38,[254,220,140]],[.56,[253,180,105]],[.75,[245,120,62]],[1,[232,70,40]]], side:[132,208,176], sf:.36, se:.8, ss:.95 },
  blue: { stops: [[0,[96,170,236]],[.45,[18,108,190]],[1,[4,58,128]]] },
  pink: { stops: [[0,[251,196,216]],[.5,[248,150,170]],[1,[248,110,100]]] },
  mint: { stops: [[0,[226,242,182]],[.5,[142,208,178]],[1,[30,118,118]]] }
};

function bakeBlue(cv, w, h) {
  cv.width = w; cv.height = h;
  const ctx2 = cv.getContext('2d'), img = ctx2.createImageData(w, h), d = img.data;
  const cell = 2, gw = Math.ceil(w / cell) + 2, gh = Math.ceil(h / cell) + 2, grid = new Float32Array(gw * gh);
  for (let i = 0; i < grid.length; i++) grid[i] = Math.random();
  const stops = [[0,[8,74,148]],[.34,[12,102,182]],[.62,[28,130,204]],[.86,[74,154,218]],[1,[102,172,224]]];
  let o = 0;
  for (let y = 0; y < h; y++) {
    const ny = y / (h - 1), base = ramp(stops, ny), gy = y / cell, gy0 = gy | 0, fy = gy - gy0;
    const tBase = smooth(.5, 1, ny) * .5;
    for (let x = 0; x < w; x++, o += 4) {
      const nx = x / (w - 1), tw = tBase * (1 - nx);
      const r = lerp(base[0], 84, tw), g = lerp(base[1], 142, tw), b = lerp(base[2], 158, tw);
      const gx = x / cell, gx0 = gx | 0, fx = gx - gx0, i0 = gy0 * gw + gx0;
      const m = lerp(lerp(grid[i0], grid[i0 + 1], fx), lerp(grid[i0 + gw], grid[i0 + gw + 1], fx), fy) - .5;
      const n = gauss() * .26 + m * .16;
      d[o] = r * (1 + n * .85); d[o + 1] = g * (1 + n + m * .18); d[o + 2] = b * (1 + n * .75); d[o + 3] = 255;
    }
  }
  ctx2.putImageData(img, 0, 0);
}

function bakeOrb(cv, size, pal, amp = .3) {
  cv.width = cv.height = size;
  const ctx2 = cv.getContext('2d'), img = ctx2.createImageData(size, size), d = img.data;
  let o = 0;
  for (let y = 0; y < size; y++) {
    const ny = y / (size - 1), base = ramp(pal.stops, ny);
    for (let x = 0; x < size; x++, o += 4) {
      let r = base[0], g = base[1], b = base[2];
      if (pal.side) { const m = smooth(pal.sf, pal.se || 1, x / (size - 1)) * pal.ss; r = lerp(r, pal.side[0], m); g = lerp(g, pal.side[1], m); b = lerp(b, pal.side[2], m); }
      let k = 1 + gauss() * 2 * amp;
      if (Math.random() < .05) k *= .66;
      d[o] = r * k; d[o + 1] = g * k; d[o + 2] = b * k; d[o + 3] = 255;
    }
  }
  ctx2.putImageData(img, 0, 0);
}

/* lobed shape: a column of five R=277 circles, pitch 470 (measured from the reference) */
function bakePink(cv, w, h) {
  cv.width = w; cv.height = h;
  const ctx2 = cv.getContext('2d'), img = ctx2.createImageData(w, h), d = img.data, k = w / 554;
  const stops = [[0,[250,196,216]],[862/2434,[249,190,211]],[1222/2434,[247,149,168]],[1582/2434,[248,118,109]],[1,[244,100,92]]];
  let o = 0;
  for (let y = 0; y < h; y++) {
    const yr = y / k, base = ramp(stops, y / (h - 1)), m = clamp(Math.round((yr - 277) / 470), 0, 4);
    for (let x = 0; x < w; x++, o += 4) {
      const xr = x / k;
      let dist = 1e9;
      for (let j = Math.max(0, m - 1); j <= Math.min(4, m + 1); j++) {
        const dd = Math.hypot(xr - 277, yr - (277 + 470 * j)); if (dd < dist) dist = dd;
      }
      const a = clamp(.5 - (dist - 277) * k, 0, 1);
      if (a <= 0) continue;
      let f = 1 + gauss() * 2 * .22; if (Math.random() < .05) f *= .68;
      d[o] = base[0] * f; d[o + 1] = base[1] * f; d[o + 2] = base[2] * f; d[o + 3] = a * 255;
    }
  }
  ctx2.putImageData(img, 0, 0);
}

const CACHE = new Map();
function bake(cv, key, w, h, fn) {
  let c = CACHE.get(key);
  if (!c) { c = document.createElement('canvas'); fn(c); CACHE.set(key, c); }
  cv.width = c.width; cv.height = c.height; cv.getContext('2d').drawImage(c, 0, 0);
}

/* ════════════════════════════════════════════════════════
   TEXT SPLITTING (masked line reveals)
   ════════════════════════════════════════════════════════ */
function splitLines(el) {
  if (el.hasAttribute('data-manual')) {
    if (!el.querySelector('.ln')) el.innerHTML = `<span class="ln"><span class="li">${el.innerHTML}</span></span>`;
    return $$('.li', el);
  }
  const text = (el.dataset.text || el.dataset.t || el.textContent).replace(/\s+/g, ' ').trim();
  el.dataset.text = text;
  el.innerHTML = text.split(' ').map(x => `<span style="display:inline-block">${x}</span>`).join(' ');
  const lines = []; let cur = [], top = null;
  Array.from(el.children).forEach(w => {
    const t = w.offsetTop;
    if (top === null || Math.abs(t - top) > 3) { if (cur.length) lines.push(cur); cur = []; top = t; }
    cur.push(w.textContent);
  });
  if (cur.length) lines.push(cur);
  el.innerHTML = lines.map(l => `<span class="ln"><span class="li">${l.join(' ')}</span></span>`).join('');
  return $$('.li', el);
}

function splitChars(el) {
  const text = el.dataset.text;
  el.setAttribute('aria-label', text.toLowerCase());
  el.innerHTML = '<span class="t-in">' + text.split('').map(c => `<span class="ch" aria-hidden="true"><i>${c === ' ' ? '&nbsp;' : c}</i></span>`).join('') + '</span>';
}

/* ════════════════════════════════════════════════════════
   GEOMETRY
   ════════════════════════════════════════════════════════ */
function geom() {
  const w = innerWidth, h = innerHeight;
  return { w, h, portrait: w / h <= 5 / 6, u: Math.min(w / 1280, h / 720), dpr: DPR };
}

/* ════════════════════════════════════════════════════════
   STAGE
   ════════════════════════════════════════════════════════ */
function mountStage(host) {
  host.appendChild($('#stage-tpl').content.cloneNode(true));
  const S = { host, q: s => $(s, host), qa: s => $$(s, host) };
  S.title = S.q('.title');
  S.q('.person').src = PORTRAIT;
  $$('[data-email-txt]', host).forEach(e => e.textContent = SITE.email);
  splitChars(S.title);
  return S;
}

function paintStage(S) {
  const bw = Math.round(clamp(G.w * G.dpr * .6, 480, 1100)), bh = Math.round(bw * G.h / G.w);
  bake(S.q('.bg'), `blue:${bw}x${bh}`, bw, bh, cv => bakeBlue(cv, bw, bh));
  const os = Math.round(clamp((G.portrait ? 1.22 * G.w : 1270 * G.u) * G.dpr, 640, 1800));
  bake(S.q('.orb-c'), `orb:${os}`, os, os, cv => bakeOrb(cv, os, PAL.sun));
  const pu = G.portrait ? .00128 * G.w : G.u, pw = Math.round(clamp(554 * pu * G.dpr * .9, 320, 900)), ph = Math.round(pw * 2434 / 554);
  bake(S.q('.pink canvas'), `pink:${pw}`, pw, ph, cv => bakePink(cv, pw, ph));
}

function titleStates(S) {
  const el = S.title, fs = parseFloat(getComputedStyle(el).fontSize), tw = el.firstElementChild.getBoundingClientRect().width,
        boxTop = el.offsetTop, boxLeft = el.offsetLeft, capOff = .0645 * fs,
        fw = G.portrait ? G.w : 1280 * G.u;
  const st = (width, capTop) => { const s = width / tw; return { s, x: (fw / 2 - width / 2) - boxLeft, y: capTop - (boxTop + s * capOff) }; };
  return G.portrait
    ? { small: st(.44 * G.w, .555 * G.h), big: st(.92 * G.w, .47 * G.h) }
    : { small: st(270 * G.u, 200 * G.u), big: st(587 * G.u, 100 * G.u) };
}

function buildTimeline(S) {
  const { w, h, u, portrait } = G, q = S.q, qa = S.qa;
  const seen = new WeakSet();
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
  const add = (t, targets, from, to, dur, ease = 'none') => {
    const els = gsap.utils.toArray(targets);
    const first = els.some(e => !seen.has(e)); els.forEach(e => seen.add(e));
    tl.fromTo(els, from, { ...to, duration: dur, ease, immediateRender: first }, t);
  };

  const scrim = q('.l-scrim'), person = q('.person'), title = q('.title'), chars = qa('.title .ch i'),
        bg = q('.bg'), vig = q('.vig'), lBack = q('.l-back'), lFront = q('.l-front'),
        pan = q('.pan'), orb = q('.orb'), orbFill = q('.orb .fill'), orbDim = q('.orb .dim'),
        lOrb = q('.l-orb'), cap = q('.cap'), tcard = q('.tcard'), pink = q('.pink'), cue = q('.cue'),
        meta = q('.tc-meta'), pL = q('.p-left'), pR = q('.p-right');
  const tlD = portrait ? [q('.tl-p1'), q('.tl-p2'), q('.tl-p3')] : [q('.tl-d1'), q('.tl-d2')];
  const linesL = qa('.p-left p').flatMap(splitLines), linesR = qa('.p-right p').flatMap(splitLines);
  const ts = titleStates(S);
  const pShift = portrait ? .14 * w : 354 * u;

  gsap.set(title, { transformOrigin: '0 0' });
  gsap.set(person, { transformOrigin: '50% 100%' });
  gsap.set(lOrb, { opacity: 0 });
  gsap.set(tcard, { x: w });

  /* 0 → 3.2   exposure: black → deep blue, portrait rises out of the dark */
  add(0, scrim, { opacity: .8 }, { opacity: 0 }, 3.2, 'power1.inOut');
  add(0, cue, { opacity: 1 }, { opacity: 0 }, 1.4, 'power1.out');
  add(0, person, { opacity: .3, y: .045 * h, scale: .94 }, { opacity: 1, y: 0, scale: .87 }, 2.8, 'power2.out');
  add(2.8, person, { scale: .87 }, { scale: .885 }, 3.6);
  add(6.4, person, { scale: .885 }, { scale: 1 }, 2.6, 'power3.inOut');
  add(9, person, { scale: 1 }, { scale: 1.02 }, 10);

  /* title: masked letter reveal, small → huge → settles top-left */
  gsap.set(title, { x: ts.small.x, y: ts.small.y, scale: ts.small.s });
  add(1, chars, { yPercent: 118 }, { yPercent: 0, stagger: .08 }, 1.6, 'power3.out');
  add(0, title, { x: ts.small.x, y: ts.small.y, scale: ts.small.s }, { x: ts.small.x, y: ts.small.y - .006 * h, scale: ts.small.s * 1.06 }, 6.4);
  add(6.4, title, { x: ts.small.x, y: ts.small.y - .006 * h, scale: ts.small.s * 1.06 }, { x: ts.big.x, y: ts.big.y, scale: ts.big.s }, 2.6, 'power4.inOut');
  const drift = .006 * w;
  add(9, title, { x: ts.big.x }, { x: ts.big.x + drift }, 4);
  add(13, title, { x: ts.big.x + drift, y: ts.big.y, scale: ts.big.s }, { x: 0, y: 0, scale: 1 }, 3.6, 'power3.inOut');
  add(16.6, title, { x: 0, y: 0 }, { x: .004 * w, y: .003 * h }, 2.4);

  /* background: slow push-in + vignette breathing */
  add(0, bg, { scale: 1, xPercent: 0 }, { scale: 1.08, xPercent: -1.2 }, 19);
  add(6.4, vig, { opacity: 1 }, { opacity: .35 }, 2.6, 'power2.inOut');
  add(13, vig, { opacity: .35 }, { opacity: 1 }, 3.6, 'power2.inOut');

  /* paragraphs: masked line reveals */
  const tL = portrait ? 13.4 : 8.2, tR = portrait ? 14.1 : 8.8;
  add(tL, linesL, { yPercent: 118 }, { yPercent: 0, stagger: .12 }, 1.5, 'power3.out');
  add(tR, linesR, { yPercent: 118 }, { yPercent: 0, stagger: .11 }, 1.5, 'power3.out');
  if (!portrait) add(13, pL, { y: 0 }, { y: -40 * u }, 3.6, 'power3.inOut');
  add(9, lFront, { y: 0 }, { y: -.006 * h }, 10);

  /* 19 → 20.5   the blue plane wipes away; portrait slides onto the orb */
  add(19, lBack, { x: 0 }, { x: -w * 1.02 }, .9, 'power3.in');
  add(19, lFront, { x: 0 }, { x: -w * 1.15 }, .85, 'power3.in');
  add(19.1, person, { x: 0 }, { x: pShift }, 1.5, 'power3.inOut');
  add(19.3, lOrb, { opacity: 0 }, { opacity: 1 }, .5, 'power1.out');
  add(19.3, orbDim, { opacity: 1 }, { opacity: 0 }, 1.4, 'power1.out');
  add(19.3, orb, { scale: .92 }, { scale: 1 }, 1.4, 'power2.out');

  /* 20.5 → 24.4   hold, with breathing motion */
  add(20.7, orb, { scale: 1 }, { scale: 1.05 }, 3.7);
  add(20.7, orbFill, { rotation: 0 }, { rotation: 12 }, 3.7);
  add(20.7, person, { scale: 1.02 }, { scale: 1.045 }, 3.7);
  add(21.2, cap, { opacity: 0, y: .03 * h }, { opacity: 1, y: 0 }, 1.2, 'power2.out');

  /* 24.2 → 26.7   horizontal pan.
     The orb scene leaves first and travels far enough that the orb's round right edge is never
     covered by the incoming title card (the card has no background of its own). */
  const orbRight = portrait ? .76 * w + .61 * w * 1.05 : (w - 1280 * u) / 2 + (970 + 635 * 1.05) * u;
  const panDist = orbRight + .04 * w;
  add(24.2, pan, { x: 0 }, { x: -panDist }, 1.9, 'power3.inOut');
  add(24.2, orbFill, { rotation: 12 }, { rotation: 150 }, 1.9, 'power3.inOut');
  add(24.7, tcard, { x: w }, { x: 0 }, 2.0, 'power3.inOut');
  add(25.0, pink, { x: .08 * w, scale: .86 }, { x: 0, scale: 1 }, 2.4, 'power3.out');
  const lineEnd = [];
  tlD.forEach((el, i) => {
    const t0 = 25.5 + i * .25;
    add(t0, el, { x: (.08 + i * .05) * w, opacity: 0 }, { x: 0, opacity: 1 }, 1.8, 'power3.out');
    lineEnd.push(t0 + 1.8);
  });
  add(28, meta, { opacity: 0 }, { opacity: 1 }, 1.2);

  /* 27 → end   the dashboard settles and drifts */
  tlD.forEach((el, i) => add(lineEnd[i], el, { x: 0 }, { x: -(.02 + .014 * i) * w }, D - lineEnd[i]));
  add(27.4, pink, { scale: 1 }, { scale: 1.07 }, D - 27.4);
  tl.set({}, {}, D);
  return tl;
}

function updateHud(p) {
  const T = p * D, hud = $('.hud');
  if (!hud) return;
  $('.t', hud).textContent = fmt(T) + ' / ' + fmt(D);
  let name = SCENES[0][1]; for (const s of SCENES) if (T >= s[0]) name = s[1];
  $('.scene', hud).textContent = '— ' + name;
  $('.hud-line').style.transform = `scaleX(${p})`;
}

function buildStages() {
  const host = $('#index');
  host.innerHTML = '';
  if (reduce) {
    host.style.height = 'auto';
    [17.6, D].forEach(T => {
      const s = document.createElement('div'); s.className = 'cine'; host.appendChild(s);
      const S = mountStage(s); paintStage(S);
      const tl = buildTimeline(S); tl.time(T);
      S.q('.curtain').remove(); S.q('.cue').remove();
    });
    return null;
  }
  host.style.height = '';
  const S = mountStage(host); paintStage(S);
  const tl = buildTimeline(S);
  const dist = () => Math.round(innerHeight * 6.6);
  hudTrigger = ScrollTrigger.create({
    trigger: host, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: .6, animation: tl,
    anticipatePin: 1, invalidateOnRefresh: true,
    onUpdate: self => updateHud(self.progress),
    onLeave: () => { $('.hud').classList.add('off'); $('.hud-line').classList.add('off'); },
    onEnterBack: () => { $('.hud').classList.remove('off'); $('.hud-line').classList.remove('off'); }
  });
  updateHud(0);
  if (!rendered) gsap.to(S.q('.curtain'), { opacity: 0, duration: 1.7, ease: 'power2.inOut', delay: .25, onComplete: () => S.q('.curtain').style.display = 'none' });
  else S.q('.curtain').style.display = 'none';
  if (/[?&]debug/.test(location.search)) window.__cine = { tl, S, D, st: hudTrigger };
  return S;
}

/* ════════════════════════════════════════════════════════
   CONTENT RENDER (once)
   ════════════════════════════════════════════════════════ */
function renderContent() {
  $('.proj-list').innerHTML = PROJECTS.map((p, i) => `
    <article class="proj" data-i="${i}" data-cursor="view" tabindex="0" role="button" aria-label="Open project: ${p.a} ${p.b}">
      <div class="shape" data-shape="${p.pal}" style="${p.shape};aspect-ratio:1"><canvas></canvas></div>
      <div class="art" style="${p.artPos}">${p.art}</div>
      <div class="num">${p.no}</div>
      <div class="meta mono">${p.tag}</div>
      <h3 class="title-big"><span>${p.a}</span><span>${p.b}</span></h3>
      <div class="body">
        <p class="desc">${p.short}</p>
        <ul class="stack">${p.stack.map(s => `<li>${s}</li>`).join('')}</ul>
        <span class="cta mono">View project</span>
      </div>
    </article>`).join('');

  $('.eng-words').innerHTML = WORDS.map(([w, n, s]) => `
    <div class="ew"><span class="w ${s}">${w}</span><span class="n mono"><b>${String(WORDS.findIndex(x => x[0] === w) + 1).padStart(2, '0')} / ${w}</b>${n}</span></div>`).join('');

  $('.sk-list').innerHTML = SKILLS.map((s, i) => `
    <div class="sk-row"><span class="i mono">0${i + 1}</span><h3 class="rl" data-text="${s.t}">${s.t}</h3><ul>${s.items.map(x => `<li>${x}</li>`).join('')}</ul></div>`).join('');

  $('.xp-list').innerHTML = EXPERIENCE.map(x => `
    <div class="xp-row"><div class="when mono">${x.no} — ${x.when}</div><h3 class="rl" data-text="${x.t}">${x.t}</h3><div><p>${x.p}</p><p class="tags mono">${x.tags}</p></div></div>`).join('');

  $('.c-links').innerHTML = `
    <a href="mailto:${SITE.email}"><span>Email</span><span class="mono">${SITE.email}</span></a>
    <a href="${SITE.github}" target="_blank" rel="noopener"><span>GitHub</span><span class="mono">Projects & code ↗</span></a>
    <a href="#projects" data-to="projects"><span>Projects</span><span class="mono">04 files →</span></a>`;

  const eof = $('.endfade a'); eof.href = 'mailto:' + SITE.email; eof.textContent = SITE.email;

  $$('[data-shape]').forEach(el => {
    const cv = $('canvas', el), pal = PAL[el.dataset.shape], size = 900;
    bake(cv, 'shape:' + el.dataset.shape, size, size, c => bakeOrb(c, size, pal, .28));
  });
}

/* ════════════════════════════════════════════════════════
   SECTION MOTION
   ════════════════════════════════════════════════════════ */
function reveal(el, vars = {}) {
  const lines = splitLines(el);
  if (reduce) return;
  gsap.fromTo(lines, { yPercent: 118 }, {
    yPercent: 0, duration: 1.25, ease: 'expo.out', stagger: .09,
    scrollTrigger: { trigger: el, start: 'top 90%', once: true }, ...vars
  });
  return lines;
}

function buildSections() {
  const vw = G.w / 100;
  $$('.rl').forEach(el => { const lines = reveal(el); el._lines = lines; });
  if (reduce) return;

  $$('.sec-head .ruler').forEach(r => gsap.fromTo(r, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.4, ease: 'power3.inOut', scrollTrigger: { trigger: r, start: 'top 92%', once: true } }));

  /* about */
  const st = $('.statement');
  if (st._lines) gsap.fromTo(st._lines.map(l => l.parentElement), { x: i => (i % 2 ? 3 : -3) * vw }, { x: i => (i % 2 ? -3 : 3) * vw, ease: 'none', scrollTrigger: { trigger: st, start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.fromTo('.about-grid .col .mono', { opacity: 0 }, { opacity: 1, duration: 1, stagger: .12, scrollTrigger: { trigger: '.about-grid', start: 'top 85%', once: true } });
  const sdm = $$('.sdm .line'), sdmT = $$('.sdm .sdm-t text');
  gsap.set(sdm, { strokeDasharray: 1, strokeDashoffset: 1 });
  gsap.set(sdmT, { opacity: 0 });
  const sdmTl = gsap.timeline({ scrollTrigger: { trigger: '.sdm', start: 'top 80%', end: 'bottom 55%', scrub: 1 } });
  sdmTl.to(sdm, { strokeDashoffset: 0, stagger: .05, ease: 'none', duration: 1 }).to(sdmT, { opacity: 1, stagger: .06, duration: .4 }, .5);

  /* shapes drift */
  $$('.about .shape, .contact .shape').forEach(s => gsap.fromTo(s, { yPercent: 10, scale: .94 }, { yPercent: -14, scale: 1.06, ease: 'none', scrollTrigger: { trigger: s.closest('.sec'), start: 'top bottom', end: 'bottom top', scrub: true } }));

  /* projects */
  $$('.proj').forEach((p, i) => {
    const spans = $$('.title-big span', p), dir = i % 2 ? -1 : 1;
    spans.forEach((sp, j) => gsap.fromTo(sp, { x: (j ? 1 : -1) * dir * 16 * vw }, { x: (j ? -1 : 1) * dir * 3 * vw, ease: 'none', scrollTrigger: { trigger: p, start: 'top 92%', end: 'bottom 25%', scrub: true } }));
    gsap.fromTo($('.shape', p), { yPercent: 12, scale: .9 }, { yPercent: -12, scale: 1.06, ease: 'none', scrollTrigger: { trigger: p, start: 'top bottom', end: 'bottom top', scrub: true } });
    const lines = $$('.art .line', p);
    gsap.set(lines, { strokeDasharray: 1, strokeDashoffset: 1 });
    gsap.to(lines, { strokeDashoffset: 0, stagger: .05, ease: 'none', scrollTrigger: { trigger: p, start: 'top 78%', end: 'top 18%', scrub: 1 } });
    gsap.fromTo($$('.art text', p), { opacity: 0 }, { opacity: 1, stagger: .1, scrollTrigger: { trigger: p, start: 'top 45%', end: 'top 15%', scrub: 1 } });
    gsap.fromTo($('.num', p), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: p, start: 'top 80%', once: true } });
    reveal($('.desc', p));
    gsap.fromTo($$('.stack li', p), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .8, stagger: .06, ease: 'power3.out', scrollTrigger: { trigger: $('.stack', p), start: 'top 92%', once: true } });
  });

  /* engineering: words slide in opposing directions while scrolling through */
  $$('.ew').forEach((ew, i) => {
    const dir = i % 2 ? -1 : 1;
    gsap.fromTo(ew, { x: dir * 26 * vw }, { x: -dir * 14 * vw, ease: 'none', scrollTrigger: { trigger: ew, start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.fromTo($('.n', ew), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: ew, start: 'top 70%', once: true } });
  });

  /* skills + experience */
  $$('.sk-row li').forEach((li, i) => gsap.fromTo(li, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .8, ease: 'power3.out', delay: (i % 6) * .05, scrollTrigger: { trigger: li.closest('.sk-row'), start: 'top 88%', once: true } }));
  $$('.xp-row > div:last-child').forEach(el => gsap.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));

  /* contact */
  gsap.fromTo($$('.c-links a'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .9, stagger: .1, ease: 'power3.out', scrollTrigger: { trigger: '.c-links', start: 'top 90%', once: true } });
  const fade = $('.endfade');
  gsap.fromTo(fade, { opacity: 0 }, { opacity: 1, ease: 'none', scrollTrigger: { trigger: '.end', start: 'top 62%', end: 'bottom bottom', scrub: true, onUpdate: s => fade.classList.toggle('live', s.progress > .7) } });
}

function buildNav() {
  const nav = $$('.nav a'), set = id => nav.forEach(a => a.classList.toggle('on', a.dataset.to === id));
  const map = { index: 'index', about: 'about', projects: 'projects', engineering: 'engineering', skills: 'engineering', experience: 'engineering', contact: 'contact' };
  $$('[data-section]').forEach(sec => {
    if (sec.id === 'index') return;
    ScrollTrigger.create({ trigger: sec, start: 'top 55%', end: 'bottom 55%', onToggle: s => s.isActive && set(map[sec.id]) });
  });
  ScrollTrigger.create({ trigger: '#about', start: 'top 55%', onLeaveBack: () => set('index') });
}

/* ════════════════════════════════════════════════════════
   CURSOR
   ════════════════════════════════════════════════════════ */
function initCursor() {
  if (reduce || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  const cur = $('.cursor'), ring = $('.ring', cur), dot = $('.dot', cur);
  cur.classList.add('on');
  gsap.set(ring, { xPercent: -50, yPercent: -50 });
  const dx = gsap.quickTo(dot, 'x', { duration: .1, ease: 'power3' }), dy = gsap.quickTo(dot, 'y', { duration: .1, ease: 'power3' });
  const rx = gsap.quickTo(ring, 'x', { duration: .45, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: .45, ease: 'power3' });
  addEventListener('mousemove', e => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); }, { passive: true });
  let state = 'idle';
  const set = (s) => {
    if (s === state) return; state = s;
    cur.classList.toggle('view', s === 'view');
    if (s === 'view') { ring.textContent = 'View project →'; gsap.to(ring, { width: 116, height: 116, duration: .5, ease: 'power3.out' }); gsap.to(dot, { scale: 0, duration: .3 }); }
    else if (s === 'link') { ring.textContent = ''; gsap.to(ring, { width: 46, height: 46, duration: .4, ease: 'power3.out' }); gsap.to(dot, { scale: .5, duration: .3 }); }
    else { ring.textContent = ''; gsap.to(ring, { width: 0, height: 0, duration: .35, ease: 'power3.out' }); gsap.to(dot, { scale: 1, duration: .3 }); }
  };
  document.addEventListener('mouseover', e => {
    const t = e.target.closest('[data-cursor],a,button');
    set(!t ? 'idle' : t.dataset.cursor === 'view' ? 'view' : 'link');
  });
  document.addEventListener('mouseleave', () => set('idle'));
}

/* ════════════════════════════════════════════════════════
   CASE FILE OVERLAY
   ════════════════════════════════════════════════════════ */
function initCase() {
  const el = $('.case'), inner = $('.case-in'); let last = null, origin = [innerWidth / 2, innerHeight / 2];
  const open = (i, x, y, trigger) => {
    const p = PROJECTS[i]; last = trigger; origin = [x, y];
    inner.innerHTML = `
      <div class="c-bg" data-shape="${p.pal}"><canvas></canvas></div>
      <div class="c-num">${p.no}</div>
      <h2 class="c-title">${p.a}<br>${p.b}</h2>
      <p class="c-tag mono">${p.tag}</p>
      <p class="c-desc">${p.long}</p>
      <div class="chain">${p.chain.map((c, k) => `<div><span class="mono">0${k + 1}</span><h4>${c[0]}</h4><p>${c[1]}</p></div>`).join('')}</div>
      <ul class="c-stack">${p.stack.map(s => `<li>${s}</li>`).join('')}</ul>
      <div class="c-links"><a href="${SITE.github}" target="_blank" rel="noopener">Code on GitHub ↗</a></div>`;
    bake($('.c-bg canvas', inner), 'shape:' + p.pal, 900, 900, c => bakeOrb(c, 900, PAL[p.pal], .28));
    el.scrollTop = 0; inner.scrollTop = 0;
    el.classList.add('open'); el.setAttribute('aria-hidden', 'false');
    if (lenis) lenis.stop(); else document.body.style.overflow = 'hidden';
    if (reduce) el.style.clipPath = 'none';
    else {
      const r = Math.hypot(innerWidth, innerHeight);
      gsap.fromTo(el, { clipPath: `circle(0px at ${x}px ${y}px)` }, { clipPath: `circle(${r}px at ${x}px ${y}px)`, duration: 1.05, ease: 'power3.inOut' });
      gsap.from($$('.c-title, .c-tag, .c-desc, .chain > div, .c-stack li, .c-links a', inner), { y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: .06, delay: .45 });
    }
    setTimeout(() => $('[data-close]').focus({ preventScroll: true }), 60);
  };
  const close = () => {
    if (!el.classList.contains('open')) return;
    const done = () => { el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); if (lenis) lenis.start(); else document.body.style.overflow = ''; if (last) last.focus({ preventScroll: true }); };
    if (reduce) return done();
    gsap.to(el, { clipPath: `circle(0px at ${origin[0]}px ${origin[1]}px)`, duration: .8, ease: 'power3.inOut', onComplete: done });
  };
  document.addEventListener('click', e => {
    const p = e.target.closest('.proj');
    if (p && !e.target.closest('a')) open(+p.dataset.i, e.clientX || innerWidth / 2, e.clientY || innerHeight / 2, p);
    if (e.target.closest('[data-close]')) close();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('proj')) {
      e.preventDefault(); const r = e.target.getBoundingClientRect(); open(+e.target.dataset.i, r.left + r.width / 2, r.top + r.height / 2, e.target);
    }
  });
}

/* ════════════════════════════════════════════════════════
   BOOT
   ════════════════════════════════════════════════════════ */
function build() {
  G = geom();
  ctx = gsap.context(() => {
    buildStages();
    buildSections();
    buildNav();
  });
  ScrollTrigger.refresh();
  rendered = true;
}

async function boot() {
  const tex = noiseURL(160, (d, o) => { const v = Math.random() * 255 | 0; d[o] = d[o + 1] = d[o + 2] = v; d[o + 3] = 60 + Math.random() * 150 | 0; });
  $('.grain').style.backgroundImage = `url(${tex})`;

  await Promise.race([
    Promise.all(['400 20px Anton', '300 20px Jost', '300 20px Dosis', '400 12px "IBM Plex Mono"'].map(f => document.fonts.load(f).catch(() => {}))),
    new Promise(r => setTimeout(r, 2500))
  ]);

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  document.documentElement.classList.toggle('rm', reduce);

  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: .09, wheelMultiplier: .95, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  renderContent();
  build();
  initCursor();
  initCase();

  document.addEventListener('click', e => {
    const a = e.target.closest('[data-to]'); if (!a) return;
    e.preventDefault();
    const id = a.dataset.to, target = id === 'index' ? 0 : document.getElementById(id);
    if (lenis) lenis.scrollTo(target, { duration: 1.9, easing: t => 1 - Math.pow(1 - t, 4) });
    else if (id === 'index') scrollTo(0, 0); else target.scrollIntoView();
  });

  if (window.__cine) window.__lenis = lenis;
  let lw = innerWidth, lp = G.portrait;
  addEventListener('resize', debounce(() => {
    const g = geom();
    if (Math.abs(g.w - lw) < 8 && g.portrait === lp) return;
    lw = g.w; lp = g.portrait;
    ctx.revert(); build();
  }, 300));
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
