(function(){
"use strict";
const $ = s => document.querySelector(s);
const NS = 'http://www.w3.org/2000/svg';
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = t => String(t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
document.body.insertAdjacentHTML('afterbegin', ART.svg + ART2.svg);

/* ---------- Projection: 1 unit is about 1.1 km ---------- */
const COS = Math.cos(33 * Math.PI / 180);
const W = (lat, lon) => [(lon - 130.6) * COS * 100, -(lat - 33.1) * 100];
const gImg = q => 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(q);
const gMap = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

/* ---------- Routes ---------- */
function catmull(P, n){
  const out = [];
  for (let i = 0; i < P.length - 1; i++){
    const p0 = P[i-1] || P[i], p1 = P[i], p2 = P[i+1], p3 = P[i+2] || P[i+1];
    for (let k = 0; k < n; k++){
      const t = k / n, t2 = t*t, t3 = t2*t;
      out.push([0,1].map(j => 0.5 * ((2*p1[j]) + (-p0[j]+p2[j])*t + (2*p0[j]-5*p1[j]+4*p2[j]-p3[j])*t2 + (-p0[j]+3*p1[j]-3*p2[j]+p3[j])*t3)));
    }
  }
  out.push(P[P.length-1]);
  return out;
}
function legPts(a, b, mode, via, flip){
  const A = W(a.lat, a.lon), B = W(b.lat, b.lon);
  if (mode === 'ferry'){ const o = []; for (let i = 0; i <= 24; i++){ const t = i/24; o.push([A[0]+(B[0]-A[0])*t, A[1]+(B[1]-A[1])*t]); } return o; }
  let ctrl = [A, ...(via || []).map(([la,lo]) => W(la,lo)), B];
  if (!via){
    const dx = B[0]-A[0], dy = B[1]-A[1], L = Math.hypot(dx, dy) || 1, bow = Math.min(6, L * 0.12) * (flip ? -1 : 1);
    ctrl = [A, [(A[0]+B[0])/2 - dy/L*bow, (A[1]+B[1])/2 + dx/L*bow], B];
  }
  return catmull(ctrl, 14);
}
function cumul(pts){ const c = [0]; for (let i = 1; i < pts.length; i++) c.push(c[i-1] + Math.hypot(pts[i][0]-pts[i-1][0], pts[i][1]-pts[i-1][1])); return c; }
function along(leg, t){
  const L = leg.cum[leg.cum.length-1] * t; let i = 1;
  while (i < leg.cum.length - 1 && leg.cum[i] < L) i++;
  const a = leg.pts[i-1], b = leg.pts[i], seg = (leg.cum[i] - leg.cum[i-1]) || 1, u = Math.max(0, Math.min(1, (L - leg.cum[i-1]) / seg));
  return {p:[a[0]+(b[0]-a[0])*u, a[1]+(b[1]-a[1])*u], dir:[b[0]-a[0], b[1]-a[1]]};
}

function prepDays(list){
  list.forEach((d, i) => {
    if (d.legs) return;
    d.i = i; d.n = i + 1; d.c = `var(--d${i+1})`;
    if (!d.start){ const p = list[i-1].nodes[list[i-1].nodes.length-1]; d.start = {id:p.id, lat:p.lat, lon:p.lon}; }
    d.notes = d.notes || [];
    d.legs = d.nodes.map((n, k) => {
      const a = k ? d.nodes[k-1] : d.start, mode = n.mode || 'car';
      const pts = legPts(a, n, mode, n.via, (i + k) % 2);
      return {pts, cum:cumul(pts), mode, d:i, k};
    });
    const xs = [], ys = [];
    [d.start, ...d.nodes].forEach(n => { const p = W(n.lat, n.lon); xs.push(p[0]); ys.push(p[1]); });
    d.legs.forEach(l => l.pts.forEach(p => { xs.push(p[0]); ys.push(p[1]); }));
    d.box = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
  });
}
function unionBox(list){ const b = [1e9,1e9,-1e9,-1e9]; list.forEach(d => { b[0] = Math.min(b[0], d.box[0]); b[1] = Math.min(b[1], d.box[1]); b[2] = Math.max(b[2], d.box[2]); b[3] = Math.max(b[3], d.box[3]); }); return b; }
let TOUR = TOURS[0], DAYS = [], ALLBOX = [0,0,1,1];
function inRing(lat, lon, ring){
  let ins = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++){
    const [yi, xi] = ring[i], [yj, xj] = ring[j];
    if (((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi)) ins = !ins;
  }
  return ins;
}
function prefOf(lat, lon){ for (const f of GEO) for (const poly of f.p) if (inRing(lat, lon, poly[0])) return f.name; return null; }

/* ---------- State ---------- */
const S = { day:-1, stop:null, voice:'speechSynthesis' in window, sound:true, playing:false };
const stage = $('#stage'), mapSvg = $('#map'), ov = $('#ov'), card = $('#card');
let sw = 800, sh = 600;
const V = {x:0, y:0, s:3};
const narrow = () => matchMedia('(max-width: 899px)').matches;

/* ---------- Base map ---------- */
const mk = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; };
const LANDP = [];
(function buildBase(){
  const gs = mk('g', {class:'shore'}, mapSvg), gl = mk('g', {class:'land'}, mapSvg);
  GEO.forEach(f => f.p.forEach(poly => {
    const rings = poly.map(r => r.map(([la,lo]) => W(la,lo)));
    LANDP.push({el:mk('path', {}, gs), rings});
    LANDP.push({el:mk('path', {'data-pref':f.name}, gl), rings, pref:f.name});
  }));
})();
function markVisited(){
  const set = new Set();
  DAYS.forEach(d => [d.start, ...d.nodes].forEach(n => { const p = prefOf(n.lat, n.lon); if (p) set.add(p); }));
  LANDP.forEach(o => { if (o.pref) o.el.classList.toggle('v', set.has(o.pref)); });
}
let landKey = '';
function drawLand(){
  const key = V.x.toFixed(3) + ',' + V.y.toFixed(3) + ',' + V.s.toFixed(4) + ',' + sw + ',' + sh;
  if (key === landKey) return; landKey = key;
  const cache = new Map();
  LANDP.forEach(o => {
    let d = cache.get(o.rings);
    if (!d){ d = o.rings.map(r => { let t = ''; for (let i = 0; i < r.length; i++){ const x = (r[i][0] - V.x) * V.s + sw/2, y = (r[i][1] - V.y) * V.s + sh/2; t += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); } return t + 'Z'; }).join(''); cache.set(o.rings, d); }
    o.el.setAttribute('d', d);
  });
}

/* ---------- Overlay elements ---------- */
const gStatic = mk('g', {class:'static'}, ov);
const gRoutes = mk('g', {class:'routes'}, ov);
const gArrows = mk('g', {class:'arrows'}, ov);
const gStems = mk('g', {class:'stems'}, ov);
const link = mk('path', {class:'link'}, ov);
const car = mk('g', {class:'car', 'aria-hidden':'true'}, ov);
const gMarks = mk('g', {class:'marks'}, ov);
car.innerHTML = `<circle r="17" class="car-bg"/><g class="car-in">
  <g class="veh-car"><path d="M-11 3 v-4 q0 -2 2 -2.4 l3 -.6 l3 -4 q1 -1.4 3 -1.4 h5 q2 0 3 1.4 l3 4 l2 .4 q2 .6 2 2.6 v4 Z" fill="var(--carc)"/><path d="M-5 -2.8 l2.4 -3.6 q.6 -.8 1.6 -.8 h2.6 v4.4Z M3 -2.8 v-4.4 h2 q1 0 1.6 .8 l2.4 3.6Z" fill="#cfe6f5"/><circle cx="-6" cy="3.4" r="2.8" fill="#1d2433"/><circle cx="6.4" cy="3.4" r="2.8" fill="#1d2433"/><circle cx="-6" cy="3.4" r="1.1" fill="#d9dde5"/><circle cx="6.4" cy="3.4" r="1.1" fill="#d9dde5"/></g>
  <g class="veh-boat"><path d="M-12 1 h24 l-4 6 h-16Z" fill="var(--carc)"/><rect x="-7" y="-5" width="12" height="6" fill="#ffffff" stroke="var(--carc)" stroke-width="1"/><rect x="1" y="-9" width="3" height="4" fill="#d2452b"/><path d="M-12 9 q3 -1.4 6 0 t6 0 t6 0 t6 0" stroke="#5aa8cc" stroke-width="1.2" fill="none"/></g>
</g>`;
car.style.display = 'none';

const STATIC = [
  ...Object.entries({Fukuoka:[33.66,130.72], Saga:[33.27,130.18], Nagasaki:[33.05,129.78], Kumamoto:[32.52,130.86], Oita:[33.06,131.66], Miyazaki:[32.3,131.3], Kagoshima:[31.75,130.45], Yamaguchi:[34.2,131.55], Hiroshima:[34.55,132.7], Ehime:[33.62,132.85], Kochi:[33.62,133.4], Kagawa:[34.24,133.95], Tokushima:[33.92,134.25], Okayama:[34.85,133.8], Shimane:[34.95,132.35], Tottori:[35.35,133.85], Hyogo:[35.05,134.8], Osaka:[34.55,135.55]}).map(([t,[la,lo]]) => ({t, la, lo, c:'pref'})),
  {t:'Genkai Sea', la:33.9, lo:130.08, c:'sea'}, {t:'Ariake Sea', la:32.98, lo:130.40, c:'sea'}, {t:'Seto Inland Sea', la:34.05, lo:133.0, c:'sea'}, {t:'East China Sea', la:32.5, lo:129.55, c:'sea'},
  {t:'Sea of Japan', la:35.0, lo:131.3, c:'sea'}, {t:'Pacific Ocean', la:32.6, lo:133.6, c:'sea'}, {t:'Hyuga Sea', la:32.1, lo:131.9, c:'sea'}, {t:'Osaka Bay', la:34.45, lo:135.05, c:'sea'},
  {t:'Mt Aso', la:32.884, lo:131.104, c:'mt'}, {t:'Unzen', la:32.761, lo:130.299, c:'mt'}, {t:'Kuju', la:33.086, lo:131.239, c:'mt'}, {t:'Mt Yufu', la:33.282, lo:131.39, c:'mt'},
  {t:'Sakurajima', la:31.585, lo:130.657, c:'mt'}, {t:'Kirishima', la:31.934, lo:130.862, c:'mt'}, {t:'Mt Daisen', la:35.371, lo:133.546, c:'mt'}, {t:'Mt Ishizuchi', la:33.768, lo:133.115, c:'mt'}
];
STATIC.forEach(o => { o.p = W(o.la, o.lo); o.el = mk('g', {class:'st ' + o.c}, gStatic); if (o.c === 'mt') mk('path', {d:'M-6 3 L0 -6 L6 3Z', class:'mtri'}, o.el); const tx = mk('text', {y: o.c === 'mt' ? 14 : 0, 'text-anchor':'middle'}, o.el); tx.textContent = o.t; });

/* Markers */
const meas = document.createElement('canvas').getContext('2d');
function textW(t, size, weight){ meas.font = `${weight||500} ${size}px "Zen Kaku Gothic New", "Hiragino Sans", system-ui, sans-serif`; return meas.measureText(t).width; }
let MARKS = [];
function addMark(d, k, node, isStart){
  const st = STOPS[node.id];
  const m = {d, k, node, st, isStart, a:W(node.lat, node.lon), hotel:st.kind === 'hotel', cx:null, cy:null};
  m.el = mk('g', {class:'mk' + (m.hotel ? ' hotel' : ''), style:`--c:${DAYS[d].c}`, tabindex:'0', role:'button', 'aria-label':`Day ${d+1}: ${st.name}`}, gMarks);
  m.el.innerHTML = `<circle class="halo" r="10"/><circle class="ring" r="10"/><use href="#a-${st.art}"/><g class="num"><circle r="9"/><text text-anchor="middle" y="3.6">${isStart ? '' : k + 1}</text></g><g class="lab"><rect rx="9" height="20"/><text text-anchor="middle" y="14"></text></g>`;
  m.el.querySelector('.lab text').textContent = st.name;
  m.labW = textW(st.name, 12.5, 700) + 18;
  m.stem = mk('line', {class:'stem', style:`--c:${DAYS[d].c}`}, gStems);
  m.dot = mk('circle', {class:'adot', r:4, style:`--c:${DAYS[d].c}`}, gStems);
  if (isStart) m.el.querySelector('.num').style.display = 'none';
  const go = () => { if (moved) return; pause(); if (S.day !== d) selectDay(d, true); openStop(d, isStart ? -1 : k, true); };
  m.el.addEventListener('click', go);
  m.el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); go(); } });
  MARKS.push(m);
}
function buildTour(){
  prepDays(TOUR.list);
  DAYS = TOUR.list; ALLBOX = unionBox(DAYS);
  [gRoutes, gArrows, gStems, gMarks].forEach(g => { g.innerHTML = ''; });
  MARKS = [];
  DAYS.forEach(d => {
    d.g = mk('g', {class:'rt', style:`--c:${d.c}`}, gRoutes);
    d.legs.forEach(l => {
      l.case = mk('path', {class:'case'}, d.g);
      l.line = mk('path', {class:'line' + (l.mode === 'ferry' ? ' ferry' : '')}, d.g);
      l.flow = mk('path', {class:'flow'}, d.g);
      l.arw = mk('path', {class:'arw', d:'M-5 -5 L3 0 L-5 5', style:`--c:${d.c}`}, gArrows);
    });
  });
  DAYS.forEach(d => { if (d.i === 0) addMark(0, -1, d.start, true); d.nodes.forEach((n, k) => addMark(d.i, k, n, false)); });
  markVisited();
  buildChips();
}

/* ---------- View ---------- */
const toS = p => [(p[0] - V.x) * V.s + sw/2, (p[1] - V.y) * V.s + sh/2];
const SMIN = 0.6, SMAX = 40;
function fitView(box, pad){
  let [x0,y0,x1,y1] = box;
  const minW = 34, minH = 26;
  if (x1 - x0 < minW){ const c = (x0+x1)/2; x0 = c - minW/2; x1 = c + minW/2; }
  if (y1 - y0 < minH){ const c = (y0+y1)/2; y0 = c - minH/2; y1 = c + minH/2; }
  const s = Math.max(SMIN, Math.min(SMAX, Math.min((sw - pad.l - pad.r) / (x1 - x0), (sh - pad.t - pad.b) / (y1 - y0))));
  return {s, x:(x0+x1)/2 - ((pad.l + sw - pad.r)/2 - sw/2) / s, y:(y0+y1)/2 - ((pad.t + sh - pad.b)/2 - sh/2) / s};
}
function pads(){
  const n = narrow();
  return S.day < 0 ? (n ? {t:44,r:36,b:40,l:36} : {t:70,r:70,b:60,l:70}) : (n ? {t:76,r:44,b:40,l:44} : {t:110,r:90,b:70,l:90});
}
function targetView(){
  if (S.day < 0) return fitView(ALLBOX, pads());
  const p = pads();
  if (S.stop !== null && !card.hidden && !narrow()){
    const d = DAYS[S.day], n = stopRef(S.day, S.stop), x = W(n.lat, n.lon)[0];
    const cw = Math.min(380, sw - 24) + 40;
    if (sw - cw > 380){ if (x > (d.box[0] + d.box[2]) / 2){ p.l += cw; S.cardSide = -1; } else { p.r += cw; S.cardSide = 1; } } else S.cardSide = 0;
  }
  return fitView(DAYS[S.day].box, p);
}
let anim = null;
function animateTo(t, ms){
  if (REDUCE || !ms){ Object.assign(V, t); anim = null; layoutReset = true; draw(); return Promise.resolve(); }
  const f = {...V}, t0 = performance.now();
  return new Promise(res => {
    anim = {f, t, t0, ms, res};
    tick();
  });
}
function stepAnim(now){
  if (!anim) return false;
  const u = Math.min(1, (now - anim.t0) / anim.ms), e = u < .5 ? 4*u*u*u : 1 - Math.pow(-2*u + 2, 3)/2;
  V.x = anim.f.x + (anim.t.x - anim.f.x) * e; V.y = anim.f.y + (anim.t.y - anim.f.y) * e;
  V.s = Math.exp(Math.log(anim.f.s) + (Math.log(anim.t.s) - Math.log(anim.f.s)) * e);
  if (u >= 1){ const r = anim.res; anim = null; r(); }
  return true;
}

/* ---------- Drawing ---------- */
let carState = null, layoutReset = true, rafOn = false;
function tick(){ if (!rafOn){ rafOn = true; requestAnimationFrame(frame); } }
function frame(now){
  rafOn = false;
  const a = stepAnim(now);
  const c = stepCar(now);
  draw();
  if (a || c) tick();
}
function pathD(pts){ let s = ''; for (let i = 0; i < pts.length; i++){ const q = toS(pts[i]); s += (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1); } return s; }

function draw(){
  drawLand();
  const ovw = S.day < 0;
  /* static labels */
  STATIC.forEach(o => {
    const q = toS(o.p);
    const show = o.c === 'pref' ? true : o.c === 'sea' ? true : V.s > 2.2;
    o.el.style.display = show ? '' : 'none';
    if (show) o.el.setAttribute('transform', `translate(${q[0].toFixed(1)} ${q[1].toFixed(1)})`);
  });
  /* routes */
  DAYS.forEach(d => {
    const on = ovw || d.i === S.day;
    d.g.style.display = (ovw || on) ? '' : 'none';
    d.g.classList.toggle('active', !ovw && on);
    d.g.classList.toggle('dim', false);
    d.legs.forEach(l => {
      if (!on){ l.arw.style.display = 'none'; return; }
      const dd = pathD(l.pts);
      l.case.setAttribute('d', dd); l.line.setAttribute('d', dd); l.flow.setAttribute('d', ovw ? '' : dd);
      const m = along(l, .5), q = toS(m.p), ang = Math.atan2(m.dir[1], m.dir[0]) * 180 / Math.PI;
      const segPx = l.cum[l.cum.length-1] * V.s;
      l.arw.style.display = (!ovw && segPx > 60) ? '' : 'none';
      l.arw.setAttribute('transform', `translate(${q[0].toFixed(1)} ${q[1].toFixed(1)}) rotate(${ang.toFixed(1)})`);
    });
  });
  layoutMarks();
  drawCar();
  placeCard();
}

/* Marker layout: icons float above their point, pushed apart so none overlap */
function layoutMarks(){
  const n = narrow(), ovw = S.day < 0;
  const items = [];
  MARKS.forEach(m => {
    let vis;
    if (ovw) vis = !m.hotel && !m.isStart && m.st.kind !== 'airport' && !MARKS.some(o => o !== m && o.node.id === m.node.id && (o.d < m.d || (o.d === m.d && o.k < m.k)));
    else vis = m.d === S.day || (S.day === 0 && m.isStart);
    m.el.style.display = vis ? '' : 'none'; m.stem.style.display = vis ? '' : 'none'; m.dot.style.display = vis ? '' : 'none';
    if (!vis){ m.cx = null; return; }
    const active = !ovw && S.stop !== null && ((m.isStart && S.stop === -1) || (!m.isStart && m.d === S.day && m.k === S.stop));
    const base = ovw ? (n ? 30 : 38) : (n ? 46 : 60);
    m.D = (m.hotel ? base * .78 : base) * (active ? 1.22 : 1);
    m.showLab = !ovw && (!n || active);
    m.active = active;
    const q = toS(m.a); m.ax = q[0]; m.ay = q[1];
    m.bw = Math.max(m.D, m.showLab ? m.labW : 0);
    m.bh = m.D + (m.showLab ? 24 : 0);
    m.hx = m.ax; m.hy = m.ay - m.D/2 - (ovw ? 10 : 16);
    if (layoutReset || m.cx === null || m._mode !== S.day){ m.cx = m.hx; m.cy = m.hy; m._mode = S.day; }
    else { m.cx += m.ax - m.lax; m.cy += m.ay - m.lay; }
    m.lax = m.ax; m.lay = m.ay;
    items.push(m);
  });
  layoutReset = false;
  const gap = 5, iters = 60;
  for (let it = 0; it < iters; it++){
    for (let i = 0; i < items.length; i++){
      const a = items[i];
      for (let j = i + 1; j < items.length; j++){
        const b = items[j];
        const ox = (a.bw + b.bw)/2 + gap - Math.abs(a.cx - b.cx);
        const ayc = a.cy + (a.bh - a.D)/2, byc = b.cy + (b.bh - b.D)/2;
        const oy = (a.bh + b.bh)/2 + gap - Math.abs(ayc - byc);
        if (ox > 0 && oy > 0){
          if (ox < oy){ const s = (a.cx < b.cx ? -1 : 1) * ox/2; a.cx += s; b.cx -= s; }
          else { const s = (ayc < byc ? -1 : 1) * oy/2; a.cy += s; b.cy -= s; }
        }
      }
      /* keep icons off other points */
      for (const b of items){ if (b === a) continue;
        const dx = a.cx - b.ax, dy = a.cy - b.ay, r = a.D/2 + 6;
        if (Math.abs(dx) < r && Math.abs(dy) < r){ if (Math.abs(dx) > Math.abs(dy)) a.cx += (dx < 0 ? -1 : 1) * (r - Math.abs(dx)) * .5; else a.cy += (dy < 0 ? -1 : 1) * (r - Math.abs(dy)) * .5; }
      }
    }
    items.forEach(a => {
      a.cx += (a.hx - a.cx) * .06; a.cy += (a.hy - a.cy) * .06;
      a.cx = Math.max(a.bw/2 + 6, Math.min(sw - a.bw/2 - 6, a.cx));
      a.cy = Math.max(a.D/2 + 6, Math.min(sh - a.bh + a.D/2 - 6, a.cy));
    });
  }
  items.forEach(m => {
    m.el.setAttribute('transform', `translate(${m.cx.toFixed(1)} ${m.cy.toFixed(1)})`);
    m.el.classList.toggle('on', m.active);
    m.el.classList.toggle('done', !ovw && S.stop !== null && !m.isStart && m.k < S.stop);
    const R = m.D/2;
    const ring = m.el.querySelector('.ring'), halo = m.el.querySelector('.halo'), use = m.el.querySelector('use');
    ring.setAttribute('r', R); halo.setAttribute('r', R + 5);
    use.setAttribute('x', -R + 2.5); use.setAttribute('y', -R + 2.5); use.setAttribute('width', 2*R - 5); use.setAttribute('height', 2*R - 5);
    const num = m.el.querySelector('.num');
    num.setAttribute('transform', `translate(${(R*.72).toFixed(1)} ${(-R*.72).toFixed(1)})`);
    num.style.display = (m.isStart || ovw) ? 'none' : '';
    const lab = m.el.querySelector('.lab');
    lab.style.display = m.showLab ? '' : 'none';
    if (m.showLab){ lab.setAttribute('transform', `translate(0 ${R + 4})`); const rc = lab.querySelector('rect'); rc.setAttribute('x', -m.labW/2); rc.setAttribute('width', m.labW); }
    const ex = m.cx, ey = m.cy + R;
    const vx = m.ax - m.cx, vy = m.ay - m.cy, vl = Math.hypot(vx, vy) || 1;
    const sx = m.cx + vx/vl*R, sy = m.cy + vy/vl*R;
    m.stem.setAttribute('x1', sx.toFixed(1)); m.stem.setAttribute('y1', sy.toFixed(1)); m.stem.setAttribute('x2', m.ax.toFixed(1)); m.stem.setAttribute('y2', m.ay.toFixed(1));
    m.stem.style.display = vl > R + 2 ? '' : 'none';
    m.dot.setAttribute('cx', m.ax.toFixed(1)); m.dot.setAttribute('cy', m.ay.toFixed(1));
  });
}

/* ---------- Car ---------- */
function stepCar(now){
  if (!carState || !carState.running) return false;
  const c = carState;
  c.t = Math.min(1, c.t0 + (now - c.start) / c.ms);
  if (S.playing && S.sound && !c.ferry) SFX.driveSpeed(Math.sin(Math.PI * c.t));
  if (c.t >= 1){ c.running = false; const r = c.res; c.res = null; r && r(); return false; }
  return true;
}
function drawCar(){
  if (!carState || S.day < 0 || carState.d !== S.day || (!S.playing && !resume && !carState.running)){ car.style.display = 'none'; return; }
  const leg = DAYS[carState.d].legs[carState.k];
  let p, dir;
  if (carState.k < 0 || !leg){ const st = DAYS[carState.d].start; p = W(st.lat, st.lon); dir = [1,0]; }
  else { const a = along(leg, carState.t); p = a.p; dir = a.dir; }
  const q = toS(p);
  car.style.display = '';
  car.style.setProperty('--c', DAYS[carState.d].c);
  car.setAttribute('transform', `translate(${q[0].toFixed(1)} ${q[1].toFixed(1)})`);
  const boat = leg && leg.mode === 'ferry' && carState.t > 0 && carState.t < 1;
  car.classList.toggle('boat', !!boat);
  if (Math.abs(dir[0]) > .01) carState.face = dir[0] < 0 ? -1 : 1;
  car.querySelector('.car-in').setAttribute('transform', `scale(${carState.face || 1} 1)`);
}
function parkCar(d){ carState = {d, k:-1, t:0, running:false, face:1}; }
function drive(d, k, tk, from){
  const leg = DAYS[d].legs[k];
  const L = leg.cum[leg.cum.length-1];
  const ms = REDUCE ? 1 : Math.max(1600, Math.min(6500, 900 + L * 30));
  return new Promise((res, rej) => {
    carState = {d, k, t:from || 0, t0:from || 0, start:performance.now(), ms:ms * (1 - (from || 0)), running:true, face:carState && carState.face, res, ferry:leg.mode === 'ferry'};
    if (carState.ms < 1) carState.ms = 1;
    tk.onCancel = () => { if (carState){ carState.running = false; carState.res = null; } rej('cancel'); };
    tick();
  });
}

/* ---------- Card ---------- */
const cardSlot = $('#cardSlot');
function mountCard(){
  if (narrow()){ if (card.parentNode !== cardSlot) cardSlot.appendChild(card); }
  else if (card.parentNode !== stage) stage.appendChild(card);
}
function stopRef(d, k){ return k === -1 ? DAYS[d].start : DAYS[d].nodes[k]; }
function openStop(d, k, user){
  S.stop = k; layoutReset = false;
  const day = DAYS[d], node = stopRef(d, k), st = STOPS[node.id];
  const count = day.nodes.length;
  const eyebrow = k === -1 ? `Day ${d+1} · Arrival` : `Day ${d+1} · Stop ${k+1} of ${count}`;
  const sayHead = st.kind === 'hotel' ? 'Evening ideas' : 'What visitors say';
  const photosQ = st.photos || st.q;
  card.style.setProperty('--c', day.c);
  card.innerHTML = `
    <div class="cart">
      <svg viewBox="0 0 120 120" role="img" aria-label="Drawing of ${esc(st.name)}"><use href="#a-${st.art}"/></svg>
      <button class="x" type="button" aria-label="Close">×</button>
    </div>
    <div class="cbody">
      <div class="eyebrow">${eyebrow}</div>
      <h2>${esc(st.name)}</h2>
      <div class="jp" lang="ja">${esc(st.jp)}</div>
      <div class="cact">
        ${S.voiceOK ? `<button class="btn sm listen" type="button"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 6h3l4-3v10L5 10H2z" fill="currentColor"/><path d="M11 5.5q1.6 2.5 0 5M12.8 3.6q3 4.4 0 8.8" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg><span>Listen</span></button>` : ''}
        <a class="btn sm" href="${gImg(photosQ)}" target="_blank" rel="noopener">See photos ↗</a>
        <a class="btn sm" href="${gMap(st.q)}" target="_blank" rel="noopener">Google reviews ↗</a>
      </div>
      <p class="desc">${esc(st.desc)}</p>
      ${st.note ? `<div class="note"><b>Heads up</b>${esc(st.note)}</div>` : ''}
      ${st.facts ? `<dl class="facts">${st.facts.map(([a,b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>` : ''}
      <h3>${sayHead}</h3>
      <ul class="say">${st.say.map(([t, x]) => `<li class="${t}"><i aria-hidden="true">${t === 'good' ? '★' : '!'}</i><span>${esc(x)}</span></li>`).join('')}</ul>
      ${st.kind !== 'hotel' ? `<p class="fine">Summary of common points in public reviews. ${st.src ? 'Facts checked on ' + st.src.map(([n,u]) => `<a href="${u}" target="_blank" rel="noopener">${esc(n)}</a>`).join(', ') + '.' : ''}</p>` : ''}
      <div class="cnav">
        <button class="btn sm prev" type="button">← Previous</button>
        <button class="btn sm next" type="button">Next →</button>
      </div>
    </div>`;
  card.hidden = false;
  card.scrollTop = 0;
  card.querySelector('.x').onclick = () => { pause(); closeCard(); };
  const li = card.querySelector('.listen');
  if (li) li.onclick = () => { if (speaking) { stopSpeech(); return; } pause(); speakOnce(st.voice); };
  const prev = stepFrom(d, k, -1), next = stepFrom(d, k, 1);
  const pb = card.querySelector('.prev'), nb = card.querySelector('.next');
  pb.disabled = !prev; nb.disabled = !next;
  pb.onclick = () => { if (prev){ pause(); go(prev); } };
  nb.onclick = () => { if (next){ pause(); go(next); } };
  renderSide();
  if (user && narrow()) setTimeout(() => card.scrollIntoView({block:'nearest', behavior: REDUCE ? 'auto' : 'smooth'}), 50);
  if (!narrow()) animateTo(targetView(), REDUCE ? 0 : 650); else draw();
}
function stepFrom(d, k, dir){
  const list = [];
  DAYS.forEach(day => { if (day.i === 0) list.push([0, -1]); day.nodes.forEach((n, j) => list.push([day.i, j])); });
  const i = list.findIndex(([a,b]) => a === d && b === k);
  return list[i + dir] || null;
}
function go([d, k]){ if (S.day !== d) selectDay(d, true); openStop(d, k, true); }
function closeCard(){ S.stop = null; card.hidden = true; link.setAttribute('d', ''); renderSide(); if (!narrow()) animateTo(targetView(), REDUCE ? 0 : 500); else draw(); }
function ensureVisible(d, k){
  const node = stopRef(d, k), q = toS(W(node.lat, node.lon));
  if (q[0] < 60 || q[0] > sw - 60 || q[1] < 90 || q[1] > sh - 40){ const t = targetView(); animateTo(t, 700); }
}
function placeCard(){
  if (card.hidden || narrow()){ link.setAttribute('d', ''); return; }
  const m = MARKS.find(x => x.active);
  if (!m || m.cx === null){ link.setAttribute('d', ''); card.style.left = (sw - card.offsetWidth - 16) + 'px'; card.style.top = '16px'; return; }
  const cw = card.offsetWidth, ch = card.offsetHeight, R = m.D/2, gapX = 26;
  const right = sw - (m.cx + R), left = m.cx - R;
  let x, side;
  if (S.cardSide){ side = S.cardSide; x = side > 0 ? sw - cw - 16 : 16; }
  else if (right >= cw + gapX + 12 && (right >= left || left < cw + gapX + 12)){ x = m.cx + R + gapX; side = 1; }
  else if (left >= cw + gapX + 12){ x = m.cx - R - gapX - cw; side = -1; }
  else { side = right > left ? 1 : -1; x = side > 0 ? sw - cw - 12 : 12; }
  x = Math.max(12, Math.min(sw - cw - 12, x));
  const y = Math.max(12, Math.min(sh - ch - 12, m.cy - 110));
  card.style.left = x + 'px'; card.style.top = y + 'px';
  const ex = side > 0 ? x : x + cw, ey = Math.max(y + 24, Math.min(y + ch - 24, m.cy));
  const sx = m.cx + side * R;
  link.setAttribute('d', `M${sx.toFixed(1)} ${m.cy.toFixed(1)} C${(sx + side*14).toFixed(1)} ${m.cy.toFixed(1)} ${(ex - side*14).toFixed(1)} ${ey.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`);
  link.style.setProperty('--c', DAYS[m.d].c);
}

/* ---------- Voice ---------- */
const synth = window.speechSynthesis;
S.voiceOK = !!synth && typeof SpeechSynthesisUtterance !== 'undefined';
let voice = null, speaking = false;
function pickVoice(){
  if (!S.voiceOK) return;
  const vs = synth.getVoices();
  const en = vs.filter(v => /^en[-_]/i.test(v.lang));
  voice = en.find(v => /Google UK English Female|Natural|Serena|Kate|Libby|Sonia/i.test(v.name)) || en.find(v => /en[-_]GB/i.test(v.lang)) || en.find(v => /Samantha|Google US English/i.test(v.name)) || en[0] || null;
}
if (S.voiceOK){ pickVoice(); synth.onvoiceschanged = pickVoice; }
function setSpeaking(on){ speaking = on; const b = card.querySelector('.listen'); if (b){ b.classList.toggle('on', on); b.querySelector('span').textContent = on ? 'Stop' : 'Listen'; } }
function stopSpeech(){ if (S.voiceOK) synth.cancel(); setSpeaking(false); }
function speak(text, tk){
  return new Promise(res => {
    const words = text.split(/\s+/).length;
    if (!S.voiceOK || !S.voice){ const t = setTimeout(res, REDUCE ? 4000 : 6500); if (tk) tk.timers.push(t); return; }
    synth.cancel();
    const parts = text.match(/[^.!?]+[.!?]*/g) || [text];
    let i = 0, done = false;
    const finish = () => { if (done) return; done = true; clearTimeout(guard); setSpeaking(false); res(); };
    const guard = setTimeout(finish, words * 520 + 4000);
    if (tk) tk.timers.push(guard);
    setSpeaking(true);
    const next = () => {
      if (done) return;
      if ((tk && tk.dead) || i >= parts.length) return finish();
      const u = new SpeechSynthesisUtterance(parts[i++].trim());
      if (voice){ u.voice = voice; u.lang = voice.lang; } else u.lang = 'en-GB';
      u.rate = .96; u.pitch = 1;
      u.onend = next; u.onerror = () => finish();
      synth.speak(u);
    };
    next();
  });
}
function speakOnce(text){ const tk = {dead:false, timers:[]}; speak(text, tk); }

/* ---------- Tour playback ---------- */
let token = null, resume = null;
const playBtn = $('#play');
function setPlayBtn(){
  playBtn.innerHTML = S.playing
    ? '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="2" width="3.6" height="12" rx="1" fill="currentColor"/><rect x="9.4" y="2" width="3.6" height="12" rx="1" fill="currentColor"/></svg>Pause'
    : '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9.5-5.5z" fill="currentColor"/></svg>' + (resume || S.day >= 0 ? 'Play from here' : 'Play the tour');
  playBtn.setAttribute('aria-pressed', S.playing ? 'true' : 'false');
}
function sleep(ms, tk){ return new Promise((res, rej) => { const t = setTimeout(() => tk.dead ? rej('cancel') : res(), ms); tk.timers.push(t); const prev = tk.onCancel; tk.onCancel = () => { clearTimeout(t); rej('cancel'); }; }); }
function pause(){
  if (!S.playing) { stopSpeech(); return; }
  S.playing = false;
  if (token){ token.dead = true; token.timers.forEach(clearTimeout); token.onCancel && token.onCancel(); }
  if (carState && carState.k >= 0 && carState.t < 1) resume = {d:carState.d, k:carState.k, t:carState.t};
  SFX.driveStop(true);
  stopSpeech();
  setPlayBtn();
}
const snd = () => S.sound && SFX.on();
async function fx(fn, tk, extra){ if (!snd()) return; const ms = fn(); await sleep(ms + (extra || 0), tk); }
async function arrive(d, k, tk, braked){
  const st = STOPS[stopRef(d, k).id];
  if (snd()){
    if (!braked) await fx(SFX.brake, tk, 100);
    await fx(SFX.door, tk, 80);
    await fx(() => SFX.footsteps(st.kind === 'hotel' ? 4 : 6), tk);
  }
  openStop(d, k, false);
  if (snd() && !['hotel', 'airport', 'port'].includes(st.kind)) await fx(SFX.wow, tk, 150);
  await speak(st.voice, tk);
  if (tk.dead) throw 'cancel';
  await sleep(S.voice && S.voiceOK ? 900 : 300, tk);
}
async function setOff(ferry, tk){
  if (!snd()) return;
  await fx(() => SFX.footsteps(5), tk);
  await fx(SFX.door, tk, 60);
  if (ferry){ await fx(SFX.ferryHorn, tk); }
  else { await fx(SFX.engineStart, tk, -250); await fx(SFX.horn, tk); }
  SFX.driveStart(ferry);
}
async function play(){
  const tk = token = {dead:false, timers:[]};
  if (S.sound) SFX.init();
  S.playing = true; setPlayBtn();
  try {
    let d, k, from = 0, resumed = false;
    if (resume){ ({d, k, t:from} = resume); resume = null; resumed = true; if (S.day !== d){ selectDay(d, true); await sleep(900, tk); } }
    else if (S.day < 0){ d = 0; k = -1; }
    else { d = S.day; k = S.stop === null ? -1 : S.stop; if (k >= DAYS[d].nodes.length - 1){ d++; k = -1; } }
    if (d >= DAYS.length){ d = 0; k = -1; }
    while (d < DAYS.length){
      if (S.day !== d){ selectDay(d, true); await sleep(REDUCE ? 200 : 1000, tk); }
      if (k === -1){
        parkCar(d); draw();
        if (d === 0){ await arrive(0, -1, tk, true); }
        k = 0;
      }
      for (; k < DAYS[d].legs.length; k++){
        const leg = DAYS[d].legs[k];
        if (resumed){ if (snd()) SFX.driveStart(leg.mode === 'ferry'); resumed = false; }
        else await setOff(leg.mode === 'ferry', tk);
        await drive(d, k, tk, from); from = 0;
        if (snd() && leg.mode === 'ferry'){ SFX.driveStop(false); await fx(SFX.ferryHorn, tk); await arrive(d, k, tk, true); }
        else await arrive(d, k, tk);
      }
      d++; k = -1;
    }
    S.playing = false; resume = null; setPlayBtn();
  } catch (e){ SFX.driveStop(true); if (e !== 'cancel') { S.playing = false; setPlayBtn(); throw e; } }
}
playBtn.onclick = () => { if (S.playing) pause(); else play(); };

/* ---------- Side panel ---------- */
const side = $('#side');
const money = n => 'S$' + n.toLocaleString('en-SG');
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function mealPills(m){
  if (!m) return '<span class="pill off">Meals not listed in the PDF</span>';
  return [['b','Breakfast'],['l','Lunch'],['d','Dinner']].filter(([k]) => m[k] !== null && m[k] !== undefined).map(([k, t]) => `<span class="pill ${m[k] ? '' : 'off'}">${m[k] ? '✓' : '×'} ${t}</span>`).join('');
}
function mealSummary(t){
  const listed = t.list.filter(d => d.meals);
  if (!listed.length || listed.length < t.list.length - 1) {
    const extra = t.list.filter(d => d.meals && d.meals.l).length ? ' One lunch included.' : '';
    return 'Not listed in the PDF.' + extra;
  }
  let b = 0, l = 0, dn = 0; t.list.forEach(d => { if (d.meals){ b += d.meals.b ? 1 : 0; l += d.meals.l ? 1 : 0; dn += d.meals.d ? 1 : 0; } });
  return `${b} breakfasts, ${l} lunches, ${dn} dinners`;
}
function climateWords(c){
  const wet = c.rain.indexOf(Math.max(...c.rain)), dry = c.rain.indexOf(Math.min(...c.rain));
  return `Wettest ${MONTHS[wet]} (${Math.round(c.rain[wet])} mm). Driest ${MONTHS[dry]} (${Math.round(c.rain[dry])} mm). Hottest Aug, about ${Math.round(Math.max(...c.hi))}°C.`;
}
/* Two small charts: temperature range per month, and rain per month. One hue each, one axis each. */
function weatherHTML(name){
  const c = CLIMATE[name];
  const Wd = 300, H = 92, padL = 26, padB = 16, padT = 14, colW = (Wd - padL) / 12, bw = Math.min(14, colW - 7);
  const tMin = -2, tMax = 36, rMax = 460;
  const ty = v => padT + (H - padT - padB) * (1 - (v - tMin) / (tMax - tMin));
  const ry = v => padT + (H - padT - padB) * (1 - v / rMax);
  const x = i => padL + i * colW + (colW - bw) / 2;
  const hiI = c.hi.indexOf(Math.max(...c.hi)), loI = c.lo.indexOf(Math.min(...c.lo)), wetI = c.rain.indexOf(Math.max(...c.rain));
  const grid = (vals, f, unit) => vals.map(v => `<line x1="${padL}" x2="${Wd}" y1="${f(v).toFixed(1)}" y2="${f(v).toFixed(1)}" class="wgrid"/><text x="${padL - 5}" y="${(f(v) + 3.5).toFixed(1)}" text-anchor="end" class="wax">${v}${unit}</text>`).join('');
  const months = MONTHS.map((m, i) => `<text x="${(x(i) + bw/2).toFixed(1)}" y="${H - 3}" text-anchor="middle" class="wax">${m[0]}</text>`).join('');
  const hit = MONTHS.map((m, i) => `<rect class="whit" x="${(padL + i * colW).toFixed(1)}" y="0" width="${colW.toFixed(1)}" height="${H}" data-i="${i}"/>`).join('');
  const temp = `<svg viewBox="0 0 ${Wd} ${H}" class="wchart" role="img" aria-label="Average high and low temperature by month in ${name}">
    ${grid([0, 15, 30], ty, '°')}
    ${c.hi.map((h, i) => `<rect x="${x(i).toFixed(1)}" y="${ty(h).toFixed(1)}" width="${bw}" height="${(ty(c.lo[i]) - ty(h)).toFixed(1)}" rx="4" class="wtemp"/>`).join('')}
    <text x="${(x(hiI) + bw/2).toFixed(1)}" y="${(ty(c.hi[hiI]) - 4).toFixed(1)}" text-anchor="middle" class="wlab">${Math.round(c.hi[hiI])}°</text>
    <text x="${(x(loI) + bw/2).toFixed(1)}" y="${(ty(c.lo[loI]) + 11).toFixed(1)}" text-anchor="middle" class="wlab">${Math.round(c.lo[loI])}°</text>
    ${months}${hit}</svg>`;
  const rain = `<svg viewBox="0 0 ${Wd} ${H}" class="wchart" role="img" aria-label="Average rain by month in ${name}">
    ${grid([0, 200, 400], ry, '')}
    ${c.rain.map((r, i) => `<path d="M${x(i).toFixed(1)} ${ry(0).toFixed(1)} V${(ry(r) + 4).toFixed(1)} q0 -4 4 -4 h${bw - 8} q4 0 4 4 V${ry(0).toFixed(1)}Z" class="wrain"/>`).join('')}
    <text x="${(x(wetI) + bw/2).toFixed(1)}" y="${(ry(c.rain[wetI]) - 4).toFixed(1)}" text-anchor="middle" class="wlab">${Math.round(c.rain[wetI])}</text>
    ${months}${hit}</svg>`;
  const table = `<table class="wtable"><thead><tr><th>Month</th><th>High</th><th>Low</th><th>Rain</th></tr></thead><tbody>${MONTHS.map((m, i) => `<tr><td>${m}</td><td>${c.hi[i]}°</td><td>${c.lo[i]}°</td><td>${Math.round(c.rain[i])} mm</td></tr>`).join('')}</tbody></table>`;
  return `<div class="weather" data-c="${name}">
    <h3>Weather in ${name}</h3>
    <div class="wkey"><span><i class="kt"></i>Average high to low, °C</span></div>
    ${temp}
    <div class="wkey"><span><i class="kr"></i>Average rain, mm</span></div>
    ${rain}
    <div class="wtip" hidden></div>
    <p class="small">${esc(climateWords(c))} Rainy season is June to mid July. Typhoons are most likely August to September.</p>
    <details><summary>Show as a table</summary>${table}</details>
    <p class="fine">1991 to 2020 averages, Japan Meteorological Agency, via <a href="${c.src}" target="_blank" rel="noopener">Wikipedia</a>.</p>
  </div>`;
}
function wireWeather(root){
  root.querySelectorAll('.weather').forEach(w => {
    const c = CLIMATE[w.dataset.c], tip = w.querySelector('.wtip');
    const show = (e, i) => {
      tip.hidden = false;
      tip.innerHTML = `<b>${MONTHS[i]}</b> ${Math.round(c.hi[i])}° / ${Math.round(c.lo[i])}° · ${Math.round(c.rain[i])} mm`;
      const r = w.getBoundingClientRect(), tr = tip.getBoundingClientRect();
      tip.style.left = Math.max(0, Math.min(r.width - tr.width, e.clientX - r.left - tr.width/2)) + 'px';
      tip.style.top = Math.max(0, e.clientY - r.top - tr.height - 12) + 'px';
      w.querySelectorAll('.whit').forEach(h => h.classList.toggle('on', +h.dataset.i === i));
    };
    w.querySelectorAll('.whit').forEach(h => { const i = +h.dataset.i; h.addEventListener('pointerenter', e => show(e, i)); h.addEventListener('pointermove', e => show(e, i)); });
    w.addEventListener('pointerleave', () => { tip.hidden = true; w.querySelectorAll('.whit').forEach(h => h.classList.remove('on')); });
  });
}
function renderSide(){
  const t = TOUR;
  if (S.day < 0){
    side.innerHTML = `
      <div class="block">
        <div class="eyebrow">${t.code} · ${t.days} days, ${t.nights} nights</div>
        <h2>${esc(t.name)}</h2>
        <p class="lede">${esc(t.lede)}</p>
        <div class="price"><b>${money(t.price)}</b><span>per person, twin sharing</span></div>
        <p class="small">Flies into ${esc(t.from)}, home from ${esc(t.to)}. Peak date surcharges apply.</p>
        ${t.blackout ? `<p class="small"><b>Surcharge dates:</b> ${esc(t.blackout)}.</p>` : ''}
        <button class="btn sm" type="button" data-compare>Compare all 4 tours</button>
      </div>
      <div class="block how">
        <h3>How to use</h3>
        <p>Press <b>Play the tour</b>. The car starts up, drives each day, and everyone hops out at every stop. The card opens and the guide reads it out. Tap any drawing to jump straight to it.</p>
        ${S.voiceOK ? '' : '<p class="small">This browser cannot read aloud, so the tour pauses on each card instead.</p>'}
      </div>
      ${t.watch && t.watch.length ? `<div class="box warn"><h3>Watch out</h3><ul>${t.watch.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
      <ol class="dlist">${DAYS.map(d => `<li><button type="button" data-day="${d.i}" style="--c:${d.c}"><span class="dn">Day ${d.n}</span><span class="dt">${esc(d.title)}</span><span class="minis">${d.nodes.filter(n => !['hotel','airport'].includes(STOPS[n.id].kind)).map(n => `<svg viewBox="0 0 120 120" aria-hidden="true"><use href="#a-${STOPS[n.id].art}"/></svg>`).join('')}</span></button></li>`).join('')}</ol>
      ${weatherHTML(t.climate)}`;
    side.querySelectorAll('[data-day]').forEach(b => b.onclick = () => { pause(); selectDay(+b.dataset.day, true); });
    side.querySelector('[data-compare]').onclick = openCompare;
    wireWeather(side);
    return;
  }
  const d = DAYS[S.day];
  const items = [];
  if (d.i === 0) items.push([-1, d.start]);
  d.nodes.forEach((n, k) => items.push([k, n]));
  const last = DAYS.length - 1;
  side.innerHTML = `
    <div class="block" style="--c:${d.c}">
      <div class="eyebrow"><i class="cdot"></i>${esc(t.name)} · Day ${d.n} of ${DAYS.length}</div>
      <h2>${esc(d.title)}</h2>
      <div class="meta">${mealPills(d.meals)}</div>
      ${d.night ? `<div class="meta"><span class="pill night">Night: ${esc(d.night)}</span></div>` : ''}
      ${d.mealNote ? `<p class="small">${esc(d.mealNote)}</p>` : ''}
    </div>
    <ol class="slist" style="--c:${d.c}">${items.map(([k, n]) => { const st = STOPS[n.id]; const on = S.stop === k; const done = S.stop !== null && k < S.stop; return `<li class="${on ? 'on' : ''} ${done ? 'done' : ''}"><button type="button" data-k="${k}"><span class="thumb"><svg viewBox="0 0 120 120" aria-hidden="true"><use href="#a-${st.art}"/></svg>${k >= 0 ? `<b>${k+1}</b>` : ''}</span><span class="tx"><span class="nm">${esc(st.name)}${n.mode === 'ferry' ? '<span class="tag">by ferry</span>' : ''}${st.note ? '<span class="tag warn">heads up</span>' : ''}</span><span class="ds">${esc(st.desc.split('. ')[0].replace(/\.$/, ''))}.</span></span></button></li>`; }).join('')}</ol>
    ${d.notes.length ? `<div class="box"><h3>Good to know</h3><ul>${d.notes.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
    <div class="dnav">
      <button class="btn sm" type="button" data-go="${d.i - 1}" ${d.i === 0 ? 'disabled' : ''}>← Day ${d.i}</button>
      <button class="btn sm" type="button" data-go="${d.i + 1}" ${d.i === last ? 'disabled' : ''}>Day ${d.i + 2} →</button>
    </div>`;
  side.querySelectorAll('[data-k]').forEach(b => b.onclick = () => { pause(); openStop(S.day, +b.dataset.k, true); });
  side.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { pause(); selectDay(+b.dataset.go, true); });
}

/* ---------- Compare all tours ---------- */
const cmp = $('#cmpSheet');
function openCompare(){
  const rows = [
    ['Price', t => `<b class="big">${money(t.price)}</b><br><span class="small">per person, twin sharing</span>`],
    ['Length', t => `${t.days} days, ${t.nights} nights`],
    ['Fly in and out', t => `Into ${esc(t.from)}<br>Home from ${esc(t.to)}`],
    ['Nights in', t => esc([...new Set(t.list.map(d => d.night).filter(Boolean))].join(', '))],
    ['Meals', t => esc(mealSummary(t))],
    ['Highlights', t => `<ul>${t.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>`],
    ['Stops', t => `${t.list.reduce((a, d) => a + d.nodes.filter(n => !['hotel','airport'].includes(STOPS[n.id].kind)).length, 0)} places`],
    ['Weather', t => `${esc(t.season)}<br><span class="small">${esc(climateWords(CLIMATE[t.climate]))}</span>`],
    ['Watch out', t => `<ul>${(t.watch || []).map(h => `<li>${esc(h)}</li>`).join('')}</ul>`],
    ['', t => `<button class="btn sm ${t === TOUR ? 'primary' : ''}" type="button" data-pick="${t.id}">${t === TOUR ? 'Viewing now' : 'Open this tour'}</button>`]
  ];
  $('#cmpBody').innerHTML = `<table class="cmp"><thead><tr><th scope="col"><span class="sr">Item</span></th>${TOURS.map(t => `<th scope="col">${esc(t.name)}<span class="small">${t.code}</span></th>`).join('')}</tr></thead>
    <tbody>${rows.map(([h, f]) => `<tr><th scope="row">${h}</th>${TOURS.map(t => `<td>${f(t)}</td>`).join('')}</tr>`).join('')}</tbody></table>
    <p class="small">All four tours include hotels, a Mandarin speaking driver guide, admissions listed in the itinerary and the driver tip. Flights and insurance are extra. Prices are from the file names you shared.</p>`;
  $('#cmpBody').querySelectorAll('[data-pick]').forEach(b => b.onclick = () => { cmp.hidden = true; setTour(b.dataset.pick); });
  cmp.hidden = false; $('#closeCmp').focus();
}
$('#closeCmp').onclick = () => { cmp.hidden = true; };
cmp.addEventListener('click', e => { if (e.target === cmp) cmp.hidden = true; });
$('#openCmp').onclick = openCompare;

/* ---------- Day selection ---------- */
const chips = $('#days');
function buildChips(){
  chips.innerHTML = `<button class="chip" type="button" data-sel="-1">All days</button>` + DAYS.map(d => `<button class="chip" type="button" data-sel="${d.i}" style="--c:${d.c}"><i></i>Day ${d.n}</button>`).join('');
  chips.querySelectorAll('[data-sel]').forEach(b => b.onclick = () => { pause(); selectDay(+b.dataset.sel, true); });
}
function selectDay(i, animate){
  if (S.day !== i){ resume = null; }
  S.day = i; S.stop = null; card.hidden = true; link.setAttribute('d', '');
  chips.querySelectorAll('[data-sel]').forEach(b => b.setAttribute('aria-pressed', +b.dataset.sel === i ? 'true' : 'false'));
  const act = chips.querySelector(`[data-sel="${i}"]`); if (act && act.scrollIntoView) act.scrollIntoView({block:'nearest', inline:'nearest'});
  if (i >= 0 && (!carState || carState.d !== i || !S.playing)) parkCar(i);
  if (i < 0) carState = null;
  layoutReset = true;
  renderSide(); setPlayBtn();
  stage.classList.toggle('ovw', i < 0);
  return animateTo(targetView(), animate ? 900 : 0);
}

/* ---------- Pan and zoom ---------- */
let moved = false;
const pts = new Map();
let gest = null;
function zoomAt(f, px, py){
  const ns = Math.max(SMIN, Math.min(SMAX, V.s * f)), k = ns / V.s;
  V.x = V.x + (px - sw/2) / V.s * (1 - 1/k); V.y = V.y + (py - sh/2) / V.s * (1 - 1/k); V.s = ns;
  anim = null; draw();
}
stage.addEventListener('pointerdown', e => {
  if (e.target.closest('.card,.zoom,.legend')) return;
  pts.set(e.pointerId, {x:e.clientX, y:e.clientY});
  moved = false; anim = null;
  if (pts.size === 1) gest = {x:e.clientX, y:e.clientY, vx:V.x, vy:V.y, cap:false, id:e.pointerId};
  if (pts.size === 2){ const [a, b] = [...pts.values()]; gest = {pinch:true, d:Math.hypot(a.x-b.x, a.y-b.y), s:V.s}; }
});
stage.addEventListener('pointermove', e => {
  if (!pts.has(e.pointerId) || !gest) return;
  pts.set(e.pointerId, {x:e.clientX, y:e.clientY});
  const r = stage.getBoundingClientRect();
  if (gest.pinch && pts.size === 2){
    const [a, b] = [...pts.values()];
    const f = Math.hypot(a.x-b.x, a.y-b.y) / gest.d;
    zoomAt(gest.s * f / V.s, (a.x+b.x)/2 - r.left, (a.y+b.y)/2 - r.top); moved = true; return;
  }
  const dx = e.clientX - gest.x, dy = e.clientY - gest.y;
  if (!moved && Math.hypot(dx, dy) < 5) return;
  if (!gest.cap){ try { stage.setPointerCapture(e.pointerId); } catch(_){} gest.cap = true; }
  moved = true;
  V.x = gest.vx - dx / V.s; V.y = gest.vy - dy / V.s; draw();
});
const endPtr = e => { pts.delete(e.pointerId); if (pts.size === 0){ gest = null; setTimeout(() => moved = false, 0); } else if (pts.size === 1){ const [p] = [...pts.values()]; gest = {x:p.x, y:p.y, vx:V.x, vy:V.y}; } };
stage.addEventListener('pointerup', endPtr); stage.addEventListener('pointercancel', endPtr);
stage.addEventListener('wheel', e => {
  if (e.target.closest('.card')) return;
  e.preventDefault();
  const r = stage.getBoundingClientRect();
  zoomAt(Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0018)), e.clientX - r.left, e.clientY - r.top);
}, {passive:false});
$('#zin').onclick = () => zoomAt(1.4, sw/2, sh/2);
$('#zout').onclick = () => zoomAt(1/1.4, sw/2, sh/2);
$('#zfit').onclick = () => animateTo(targetView(), 600);

/* ---------- Voice toggle and sheet ---------- */
/* ---------- Tour picker ---------- */
const sel = $('#tour');
sel.innerHTML = TOURS.map(t => `<option value="${t.id}">${esc(t.name)} · ${money(t.price)}</option>`).join('');
function setTour(id, first){
  const t = TOURS.find(x => x.id === id) || TOURS[0];
  if (!first && t === TOUR) return;
  pause(); resume = null; carState = null; closeCardQuiet();
  TOUR = t; sel.value = t.id;
  try { localStorage.setItem('kyushu-map-tour', t.id); } catch(_){}
  buildTour();
  selectDay(-1, !first);
}
function closeCardQuiet(){ S.stop = null; card.hidden = true; link.setAttribute('d', ''); }
sel.onchange = () => setTour(sel.value);
const sfxT = $('#sfx');
sfxT.checked = S.sound;
sfxT.onchange = () => { S.sound = sfxT.checked; if (S.sound) SFX.init(); else SFX.driveStop(true); };
const vt = $('#voice');
if (!S.voiceOK){ vt.closest('label').hidden = true; S.voice = false; }
vt.checked = S.voice;
vt.onchange = () => { S.voice = vt.checked; if (!S.voice) stopSpeech(); };
const sheet = $('#notSheet');
$('#openNot').onclick = () => { sheet.hidden = false; $('#closeNot').focus(); };
$('#closeNot').onclick = () => { sheet.hidden = true; };
sheet.addEventListener('click', e => { if (e.target === sheet) sheet.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape'){ if (!cmp.hidden) cmp.hidden = true; else if (!sheet.hidden) sheet.hidden = true; else if (!card.hidden){ pause(); closeCard(); } } });

/* ---------- Size ---------- */
function resize(){
  const r = stage.getBoundingClientRect();
  const first = sw === 800 && sh === 600;
  sw = Math.max(1, r.width); sh = Math.max(1, r.height);
  ov.setAttribute('width', sw); ov.setAttribute('height', sh);
  mountCard();
  if (first) Object.assign(V, targetView());
  layoutReset = true;
  draw();
}
new ResizeObserver(() => resize()).observe(stage);
matchMedia('(max-width: 899px)').addEventListener('change', () => { mountCard(); layoutReset = true; animateTo(targetView(), 0); });

let saved = null; try { saved = localStorage.getItem('kyushu-map-tour'); } catch(_){}
const hashId = (location.hash || '').replace('#', '');
setTour(TOURS.some(t => t.id === hashId) ? hashId : (saved || 'nk'), true);
resize();
Object.assign(V, targetView()); draw();
setPlayBtn();
})();
