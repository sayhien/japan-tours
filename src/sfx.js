/* Playful sound effects, all made in the browser with Web Audio. No audio files. */
const SFX = (function(){
  let ctx = null, master = null, noiseBuf = null, loop = null;
  const on = () => !!ctx;
  function init(){
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return true; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0.7; master.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return true;
  }
  const now = () => ctx.currentTime;
  function env(g, t, a, peak, hold, rel){
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.setValueAtTime(peak, t + a + hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + hold + rel);
  }
  function noise(t, dur, type, freq, q, peak, out){
    const s = ctx.createBufferSource(); s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q || 1;
    const g = ctx.createGain(); env(g, t, 0.005, peak, dur * 0.3, dur * 0.7);
    s.connect(f); f.connect(g); g.connect(out || master); s.start(t); s.stop(t + dur + 0.05);
  }
  function tone(t, type, f0, f1, dur, peak, out){
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t);
    if (f1 && f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain(); env(g, t, 0.01, peak, dur * 0.5, dur * 0.5);
    o.connect(g); g.connect(out || master); o.start(t); o.stop(t + dur + 0.05);
    return o;
  }

  /* Starter cranks, then the engine catches with a cartoon vroom */
  function engineStart(){
    if (!ctx) return 0;
    const t = now();
    for (let i = 0; i < 4; i++) noise(t + i * 0.13, 0.1, 'bandpass', 180 + i * 20, 2, 0.35);
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 700;
    const g = ctx.createGain();
    const lfo = ctx.createOscillator(); lfo.frequency.value = 18; const lg = ctx.createGain(); lg.gain.value = 0.12;
    lfo.connect(lg); lg.connect(g.gain);
    o.frequency.setValueAtTime(45, t + 0.5); o.frequency.exponentialRampToValueAtTime(130, t + 0.85); o.frequency.exponentialRampToValueAtTime(70, t + 1.3);
    env(g, t + 0.5, 0.04, 0.22, 0.5, 0.35);
    o.connect(lp); lp.connect(g); g.connect(master); o.start(t + 0.5); o.stop(t + 1.5); lfo.start(t + 0.5); lfo.stop(t + 1.5);
    return 1400;
  }
  /* Happy little horn */
  function horn(){
    if (!ctx) return 0;
    const t = now();
    [[0, 0.11], [0.16, 0.16]].forEach(([d, len]) => { tone(t + d, 'square', 440, 440, len, 0.06); tone(t + d, 'square', 554, 554, len, 0.05); });
    return 400;
  }
  function ferryHorn(){
    if (!ctx) return 0;
    const t = now(); const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.connect(master);
    tone(t, 'sawtooth', 110, 108, 1.3, 0.12, lp); tone(t, 'sawtooth', 165, 162, 1.3, 0.08, lp);
    return 1400;
  }
  /* Putt putt engine while driving, or a softer chug on the ferry */
  function driveStart(ferry){
    if (!ctx) return;
    driveStop(true);
    const t = now();
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(ferry ? 0.05 : 0.07, t + 0.4);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = ferry ? 380 : 520;
    const o1 = ctx.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = ferry ? 46 : 64;
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = ferry ? 23 : 32;
    const am = ctx.createGain(); am.gain.value = 0.6;
    const lfo = ctx.createOscillator(); lfo.frequency.value = ferry ? 5 : 9; const lg = ctx.createGain(); lg.gain.value = 0.4;
    lfo.connect(lg); lg.connect(am.gain);
    o1.connect(am); o2.connect(am); am.connect(lp); lp.connect(g); g.connect(master);
    const ns = ctx.createBufferSource(); ns.buffer = noiseBuf; ns.loop = true;
    const nf = ctx.createBiquadFilter(); nf.type = ferry ? 'lowpass' : 'bandpass'; nf.frequency.value = ferry ? 500 : 300; const ng = ctx.createGain(); ng.gain.value = ferry ? 0.05 : 0.02;
    ns.connect(nf); nf.connect(ng); ng.connect(g);
    [o1, o2, lfo, ns].forEach(n => n.start(t));
    loop = {g, nodes:[o1, o2, lfo, ns], o1};
  }
  function driveSpeed(u){ if (loop && ctx) loop.o1.frequency.setTargetAtTime(58 + u * 14, now(), 0.2); }
  function driveStop(quick){
    if (!loop || !ctx) return;
    const t = now(), L = loop; loop = null;
    L.g.gain.cancelScheduledValues(t); L.g.gain.setValueAtTime(L.g.gain.value || 0.05, t);
    L.g.gain.exponentialRampToValueAtTime(0.0001, t + (quick ? 0.08 : 0.5));
    L.nodes.forEach(n => { try { n.stop(t + (quick ? 0.1 : 0.6)); } catch(_){} });
  }
  /* Squeaky brakes and the engine winding down */
  function brake(){
    if (!ctx) return 0;
    const t = now(); driveStop(false);
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(2300, t); o.frequency.linearRampToValueAtTime(1700, t + 0.45);
    const v = ctx.createOscillator(); v.frequency.value = 28; const vg = ctx.createGain(); vg.gain.value = 60; v.connect(vg); vg.connect(o.frequency);
    const g = ctx.createGain(); env(g, t, 0.02, 0.05, 0.25, 0.2);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.55); v.start(t); v.stop(t + 0.55);
    noise(t + 0.05, 0.4, 'lowpass', 600, 0.7, 0.08);
    return 700;
  }
  function door(){
    if (!ctx) return 0;
    const t = now();
    noise(t, 0.08, 'highpass', 2500, 0.7, 0.12);
    tone(t + 0.02, 'sine', 120, 60, 0.18, 0.35);
    noise(t + 0.02, 0.12, 'lowpass', 400, 0.7, 0.25);
    return 350;
  }
  function footsteps(n){
    if (!ctx) return 0;
    const t = now(); n = n || 6;
    for (let i = 0; i < n; i++){ noise(t + i * 0.17, 0.07, 'bandpass', i % 2 ? 900 : 1200, 1.4, 0.22); tone(t + i * 0.17, 'sine', 90, 60, 0.06, 0.12); }
    return n * 170 + 100;
  }
  /* A small crowd going "woooo... ahhhh" */
  function vowel(t, f0, glide, F, dur, peak, vib){
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(glide, t + dur * 0.8);
    const v = ctx.createOscillator(); v.frequency.value = vib; const vg = ctx.createGain(); vg.gain.value = f0 * 0.03; v.connect(vg); vg.connect(o.frequency);
    const g = ctx.createGain(); env(g, t, 0.12, peak, dur * 0.45, dur * 0.4);
    const sum = ctx.createGain(); sum.gain.value = 1;
    F.forEach(([fq, gain, q]) => { const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = fq; bp.Q.value = q; const fg = ctx.createGain(); fg.gain.value = gain; o.connect(bp); bp.connect(fg); fg.connect(sum); });
    sum.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.1); v.start(t); v.stop(t + dur + 0.1);
  }
  function wow(){
    if (!ctx) return 0;
    const t = now();
    const U = [[330, 1.0, 8], [850, 0.35, 10]], Aa = [[760, 1.0, 7], [1150, 0.6, 9], [2500, 0.15, 10]];
    [[170, 0], [215, 0.05], [262, 0.11], [330, 0.03], [392, 0.15]].forEach(([p, d], i) => {
      vowel(t + d, p, p * 1.7, U, 1.05, 0.11, 5 + i * 0.4);
      vowel(t + 1.05 + d * 0.6, p * 1.6, p * 1.05, Aa, 1.25, 0.1, 4.5 + i * 0.3);
    });
    noise(t + 1.05, 1.2, 'bandpass', 1400, 0.6, 0.03);
    return 2500;
  }
  return { init, on, engineStart, horn, ferryHorn, driveStart, driveSpeed, driveStop, brake, door, footsteps, wow };
})();
