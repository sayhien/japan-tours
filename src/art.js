/* Landmark illustrations. Each is a 120 x 120 scene clipped to a circle, stored as an SVG <symbol>. */
const ART = (function(){
  let s = 7;
  const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const seed = n => { s = n; };
  const rep = (n, f) => Array.from({length:n}, (_, i) => f(i)).join('');
  const blossoms = (pts, c1, c2) => pts.map(([x,y],i) => `<circle cx="${x}" cy="${y}" r="${i%3?2.2:2.8}" fill="${i%2?c1:c2}"/>`).join('');

  const A = {};

  A.dazaifu = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M0 66 Q22 50 44 60 T86 54 T120 62 V120 H0Z" fill="#bcd6a6"/>
  <path d="M0 76 Q30 66 62 74 T120 72 V120 H0Z" fill="#8fbb7d"/>
  <rect x="48" y="78" width="64" height="5" fill="#d8cdb8"/>
  <rect x="54" y="63" width="52" height="15" fill="#fbf6ea"/>
  ${rep(6, i => `<rect x="${55+i*9.6}" y="63" width="3" height="15" fill="#c8402a"/>`)}
  ${rep(5, i => `<rect x="${60+i*9.6}" y="66" width="5" height="8" fill="#e9dcc0"/>`)}
  <rect x="52" y="61" width="56" height="3" fill="#c8402a"/>
  <path d="M40 63 Q58 59 62 45 L98 45 Q102 59 120 63 Q80 67 40 63Z" fill="#6c5c53"/>
  <path d="M46 62 Q62 59 66 48 L94 48" fill="none" stroke="#8a796e" stroke-width="1.2"/>
  <rect x="60" y="42" width="40" height="4" rx="1.5" fill="#4d413b"/>
  <circle cx="61" cy="44" r="2" fill="#e2b84b"/><circle cx="99" cy="44" r="2" fill="#e2b84b"/>
  <path d="M0 96 Q40 86 80 94 T120 98 V120 H0Z" fill="#6fb0cf"/>
  <path d="M10 104 h18 M44 108 h26 M84 104 h20" stroke="#d6eef7" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M6 100 Q32 70 58 100" fill="none" stroke="#c8402a" stroke-width="5"/>
  <path d="M8 92 Q32 64 56 92" fill="none" stroke="#c8402a" stroke-width="1.8"/>
  ${rep(7, i => { const x = 12 + i*6.4; const t = (x-8)/48; const y = 92 - 28*4*t*(1-t) ; return `<line x1="${x}" y1="${y}" x2="${x}" y2="${y+6}" stroke="#c8402a" stroke-width="1.4"/>`; })}
  <path d="M14 34 Q22 46 20 70 M20 50 Q30 42 38 32 M18 58 Q8 50 4 42 M26 46 Q34 50 40 48" fill="none" stroke="#5a3b2e" stroke-width="2.6" stroke-linecap="round"/>
  ${blossoms([[38,32],[35,30],[40,36],[33,36],[4,42],[7,45],[2,46],[40,48],[37,46],[43,50],[14,34],[17,31],[11,36],[28,40],[24,44],[30,36],[9,49],[22,38]], '#f4a3bd', '#fff1f5')}
  <rect x="86" y="104" width="26" height="4" fill="#b9b2a3"/>
  <ellipse cx="98" cy="99" rx="12" ry="6" fill="#4b4a45"/>
  <circle cx="109" cy="96" r="4.2" fill="#4b4a45"/>
  <path d="M107 92 q-2 -3 -4 -2 M111 92 q2 -3 4 -2" stroke="#4b4a45" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  <path d="M90 96 q6 -3 14 -1" stroke="#c9b26a" stroke-width="1.2" fill="none"/>`;

  A.ftower = `
  <rect width="120" height="120" fill="url(#gDusk)"/>
  <circle cx="92" cy="66" r="11" fill="#ffd9a0"/>
  <rect y="76" width="120" height="22" fill="url(#gSea)"/>
  ${rep(5, i => `<line x1="${80+i*2}" y1="${80+i*3.5}" x2="${104-i*2}" y2="${80+i*3.5}" stroke="#ffe3b8" stroke-width="1" opacity=".8"/>`)}
  <path d="M0 96 Q60 86 120 92 V120 H0Z" fill="#f1d9a8"/>
  <path d="M0 104 Q60 96 120 102" fill="none" stroke="#e5c78e" stroke-width="1"/>
  <path d="M55 22 L64 22 L71 92 L48 92Z" fill="url(#gMirror)"/>
  <path d="M64 22 L68 24 L77 90 L71 92Z" fill="#7d8fb0"/>
  ${rep(17, i => { const y = 26 + i*4; const t = (y-22)/70; const l = 55 - 7*t, rr = 64 + 7*t; return `<line x1="${l}" y1="${y}" x2="${rr}" y2="${y}" stroke="#ffffff" stroke-opacity=".35" stroke-width=".6"/>`; })}
  <path d="M59 22 L59 92" stroke="#ffffff" stroke-opacity=".25" stroke-width="1"/>
  <line x1="60" y1="4" x2="60" y2="22" stroke="#d7dbe4" stroke-width="1.6"/>
  <circle cx="60" cy="5" r="1.4" fill="#ff5a4a"/>
  <rect x="42" y="88" width="38" height="8" rx="1" fill="#efe7da"/>
  <rect x="45" y="90" width="32" height="2" fill="#b9c7da"/>
  <path d="M16 100 Q18 86 22 76" stroke="#7a5a3a" stroke-width="2" fill="none"/>
  <path d="M22 76 q-9 -1 -13 5 M22 76 q-6 -6 -12 -5 M22 76 q8 -5 13 0 M22 76 q8 0 10 6 M22 76 q1 -8 -2 -10" stroke="#3f7a4a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  <path d="M100 102 Q101 90 104 82" stroke="#7a5a3a" stroke-width="1.8" fill="none"/>
  <path d="M104 82 q-8 0 -11 5 M104 82 q-5 -6 -10 -4 M104 82 q7 -4 11 0 M104 82 q7 1 8 6" stroke="#3f7a4a" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;

  seed(21);
  A.yatai = `
  <rect width="120" height="120" fill="url(#gNight)"/>
  ${rep(14, () => `<circle cx="${(r()*120).toFixed(1)}" cy="${(r()*30).toFixed(1)}" r="${(r()*.7+.3).toFixed(2)}" fill="#fff" opacity=".8"/>`)}
  ${[[0,40,16],[16,30,14],[30,46,18],[48,24,14],[62,38,16],[78,28,14],[92,42,14],[106,34,16]].map(([x,y,w]) => `<rect x="${x}" y="${y}" width="${w}" height="${80-y}" fill="#273766"/>` + rep(Math.floor((80-y)/7), j => rep(Math.floor(w/5), k => r() > .45 ? `<rect x="${x+2+k*5}" y="${y+3+j*7}" width="2.4" height="3" fill="#ffd479" opacity="${(.5+r()*.5).toFixed(2)}"/>` : ''))).join('')}
  <rect y="80" width="120" height="40" fill="#162447"/>
  ${rep(18, () => { const x = r()*120, y = 84 + r()*32; return `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x+4+r()*6).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${r()>.5?'#ffcf6a':'#ff7a5a'}" stroke-width="1.2" opacity=".6"/>`; })}
  <path d="M16 58 L104 58 L97 49 L23 49Z" fill="#a8352a"/>
  <path d="M16 58 ${rep(11, i => `q4 4 8 0`)}" fill="#a8352a"/>
  <rect x="24" y="61" width="72" height="12" fill="#d8462f"/>
  ${rep(5, i => `<line x1="${24+(i+1)*12}" y1="64" x2="${24+(i+1)*12}" y2="73" stroke="#9e2f22" stroke-width="1"/>`)}
  <text x="60" y="70.5" text-anchor="middle" font-size="7.5" font-weight="700" fill="#fff6e8" font-family="Zen Maru Gothic, sans-serif">博多 屋台</text>
  <rect x="24" y="73" width="72" height="4" fill="#ffcf7a" opacity=".9"/>
  <rect x="20" y="77" width="80" height="6" fill="#8b5a3c"/>
  <rect x="23" y="83" width="74" height="13" fill="#6b4430"/>
  ${rep(6, i => `<line x1="${23+(i+1)*10.6}" y1="83" x2="${23+(i+1)*10.6}" y2="96" stroke="#55352a" stroke-width="1"/>`)}
  <circle cx="34" cy="98" r="5" fill="#222"/><circle cx="34" cy="98" r="2" fill="#777"/>
  <circle cx="86" cy="98" r="5" fill="#222"/><circle cx="86" cy="98" r="2" fill="#777"/>
  <path d="M52 77 q8 6 16 0Z" fill="#f3efe6"/>
  <path d="M56 70 q-3 -6 1 -11 q3 -5 0 -10 M62 70 q-3 -6 1 -11 q3 -5 0 -10" stroke="#fff" stroke-opacity=".55" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="16" cy="66" r="10" fill="#ffb347" opacity=".22"/><circle cx="104" cy="66" r="10" fill="#ffb347" opacity=".22"/>
  <ellipse cx="16" cy="66" rx="5" ry="7" fill="#ef5638"/><ellipse cx="104" cy="66" rx="5" ry="7" fill="#ef5638"/>
  <path d="M11.5 64 h9 M11.5 68 h9 M99.5 64 h9 M99.5 68 h9" stroke="#b8321f" stroke-width=".8"/>
  <rect x="14" y="58" width="4" height="2" fill="#222"/><rect x="102" y="58" width="4" height="2" fill="#222"/>`;

  A.arita = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M0 62 Q30 52 60 58 T120 56 V120 H0Z" fill="#a8c99a"/>
  <rect x="4" y="62" width="112" height="24" fill="#efe1c3"/>
  <rect x="2" y="58" width="116" height="5" fill="#6aa996"/>
  ${rep(8, i => i===3||i===4 ? '' : `<path d="M${9+i*13} 84 V72 a4.5 4.5 0 0 1 9 0 V84Z" fill="#8b7b62"/><rect x="${8+i*13}" y="66" width="11" height="2" fill="#d9c9a6"/>`)}
  <rect x="42" y="44" width="36" height="42" fill="#f5e9cf"/>
  <path d="M42 44 Q60 22 78 44Z" fill="#6aa996"/>
  <path d="M48 44 Q60 30 72 44" fill="none" stroke="#4f8a78" stroke-width="1"/>
  <circle cx="60" cy="27" r="3" fill="#dcb44b"/><line x1="60" y1="20" x2="60" y2="25" stroke="#dcb44b" stroke-width="1.5"/>
  <path d="M52 86 V64 a8 8 0 0 1 16 0 V86Z" fill="#7a6a52"/>
  <rect x="44" y="50" width="32" height="2" fill="#d9c9a6"/>
  ${rep(6, i => `<rect x="${7+i*20}" y="54" width="2.2" height="5" fill="#d9c9a6"/>`)}
  <path d="M0 86 H120 V120 H0Z" fill="#93c07f"/>
  <path d="M30 120 L50 86 H70 L90 120Z" fill="#e6dcc6"/>
  <path d="M94 74 q-6 6 -5 14 q-6 8 -4 18 q2 10 12 12 h8 q10 -2 12 -12 q2 -10 -4 -18 q1 -8 -5 -14Z" fill="#f8f9fc" stroke="#2c4fa0" stroke-width="1.2"/>
  <rect x="96" y="71" width="12" height="4" rx="1" fill="#f8f9fc" stroke="#2c4fa0" stroke-width="1.2"/>
  <path d="M90 88 h24" stroke="#2c4fa0" stroke-width="1.6"/>
  <path d="M95 96 q4 -6 8 0 q4 6 8 0 M93 104 q3 -5 7 -1 q4 5 8 0 q3 -4 5 0" fill="none" stroke="#2c4fa0" stroke-width="1.4"/>
  <circle cx="102" cy="110" r="2.2" fill="#d2452b"/><circle cx="96" cy="111" r="1.4" fill="#2c4fa0"/><circle cx="108" cy="111" r="1.4" fill="#2c4fa0"/>`;

  A.sake = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M0 120 L36 84 H84 L120 120Z" fill="#cfc5b2"/>
  ${rep(5, i => `<path d="M${30-i*8} ${90+i*7} H${90+i*8}" stroke="#b8ad98" stroke-width=".8"/>`)}
  <rect x="4" y="46" width="48" height="44" fill="#f8f6f0"/>
  <rect x="4" y="70" width="48" height="20" fill="url(#pNamako)"/>
  <path d="M-2 48 L28 30 L58 48Z" fill="#2e3036"/>
  <path d="M2 48 L28 33 L54 48" fill="none" stroke="#4a4d55" stroke-width="1"/>
  <rect x="20" y="52" width="10" height="8" fill="#3a3c42"/><rect x="21" y="53" width="8" height="6" fill="none" stroke="#f8f6f0" stroke-width=".7"/>
  <rect x="64" y="52" width="56" height="38" fill="#7a5536"/>
  ${rep(14, i => `<line x1="${66+i*4}" y1="60" x2="${66+i*4}" y2="90" stroke="#5c3e27" stroke-width="1.2"/>`)}
  <path d="M58 54 L74 42 H120 V54Z" fill="#2e3036"/>
  <rect x="88" y="60" width="22" height="16" fill="#284a8a"/>
  <line x1="99" y1="60" x2="99" y2="76" stroke="#1d3768" stroke-width="1"/>
  <circle cx="99" cy="67" r="4" fill="none" stroke="#fff" stroke-width="1.2"/>
  <line x1="66" y1="54" x2="66" y2="58" stroke="#3a2b1c" stroke-width="1"/>
  <circle cx="66" cy="65" r="7.5" fill="#7d6b38"/>
  ${rep(12, i => `<circle cx="${(66+Math.cos(i)*4.5).toFixed(1)}" cy="${(65+Math.sin(i*1.7)*4.5).toFixed(1)}" r=".9" fill="#5b4d26"/>`)}
  ${[[14,96],[30,96],[22,82]].map(([x,y]) => `<rect x="${x}" y="${y}" width="15" height="17" rx="3" fill="#efe5cc"/><path d="M${x} ${y+4} h15 M${x} ${y+13} h15" stroke="#9a7a46" stroke-width="1.4"/><rect x="${x+4}" y="${y+6}" width="7" height="6" fill="#d2452b"/>`).join('')}`;

  seed(5);
  A.yutoku = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M0 64 Q30 18 70 28 Q100 34 120 50 V120 H0Z" fill="#5f9a5a"/>
  ${rep(26, () => `<circle cx="${(r()*120).toFixed(1)}" cy="${(36+r()*40).toFixed(1)}" r="${(4+r()*5).toFixed(1)}" fill="${['#4f8a4c','#6aa762','#3f7a42'][Math.floor(r()*3)]}"/>`)}
  ${rep(7, i => `<line x1="${44+i*9}" y1="60" x2="${42+i*9.6}" y2="112" stroke="#8a4a2e" stroke-width="2.2"/>`)}
  ${rep(5, i => `<line x1="40" y1="${68+i*10}" x2="${102+i*1}" y2="${68+i*10}" stroke="#8a4a2e" stroke-width="1.6"/>`)}
  <rect x="34" y="57" width="74" height="4" fill="#c8402a"/>
  <rect x="34" y="53" width="74" height="1.6" fill="#c8402a"/>
  ${rep(10, i => `<rect x="${35+i*8}" y="53" width="1.2" height="4" fill="#c8402a"/>`)}
  <rect x="46" y="40" width="50" height="14" fill="#e14d2f"/>
  ${rep(5, i => `<rect x="${49+i*9.6}" y="43" width="6" height="8" fill="#fbe9d8"/>`)}
  <path d="M36 42 Q50 38 54 30 L88 30 Q92 38 106 42Z" fill="#40504e"/>
  <rect x="52" y="27" width="38" height="3.2" rx="1.2" fill="#2f3b3a"/>
  <circle cx="54" cy="29" r="1.6" fill="#e2b84b"/><circle cx="88" cy="29" r="1.6" fill="#e2b84b"/>
  <path d="M2 82 Q18 78 34 82 L34 86 L2 86Z" fill="#d8452c"/>
  <rect x="4" y="86" width="28" height="3" fill="#2f2f2f"/>
  <rect x="5" y="92" width="26" height="3" fill="#d8452c"/>
  <rect x="7" y="86" width="4" height="34" fill="#d8452c"/><rect x="25" y="86" width="4" height="34" fill="#d8452c"/>`;

  seed(9);
  A.inasa = `
  <rect width="120" height="120" fill="url(#gNight)"/>
  <path d="M22 18 a9 9 0 1 0 8 13 a7 7 0 1 1 -8 -13Z" fill="#fff3c8"/>
  ${rep(10, () => `<circle cx="${(40+r()*80).toFixed(1)}" cy="${(r()*30).toFixed(1)}" r=".6" fill="#fff" opacity=".8"/>`)}
  <path d="M0 64 Q26 40 52 38 Q76 36 120 62 V120 H0Z" fill="#1d2a52"/>
  <rect x="48" y="31" width="10" height="6" fill="#2f3f73"/><rect x="45" y="29" width="16" height="2.5" fill="#9fb3e8"/>
  <circle cx="53" cy="32" r="9" fill="#9fb3e8" opacity=".15"/>
  <path d="M0 78 Q60 68 120 80 V120 H0Z" fill="#162047"/>
  ${rep(150, () => { const x = r()*120; const yb = 76 + Math.sin(x/120*Math.PI)*-6 + r()*18; return `<circle cx="${x.toFixed(1)}" cy="${yb.toFixed(1)}" r="${(r()*.8+.35).toFixed(2)}" fill="${['#ffd479','#ffe9b0','#ffffff','#ff9a6a','#9fd0ff'][Math.floor(r()*5)]}"/>`; })}
  <path d="M0 98 Q60 92 120 100 V120 H0Z" fill="#0d1636"/>
  ${rep(30, () => { const x = r()*120, y = 100 + r()*18; return `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x+2+r()*4).toFixed(1)}" y2="${y.toFixed(1)}" stroke="#ffd479" stroke-width=".8" opacity="${(.3+r()*.4).toFixed(2)}"/>`; })}
  <line x1="52" y1="34" x2="124" y2="82" stroke="#c7cfe6" stroke-width=".7"/>
  <line x1="52" y1="36" x2="124" y2="84" stroke="#c7cfe6" stroke-width=".5"/>
  <line x1="88" y1="58" x2="88" y2="62" stroke="#c7cfe6" stroke-width=".8"/>
  <rect x="82" y="62" width="12" height="9" rx="2.5" fill="#d84a3a"/>
  <rect x="84" y="64" width="8" height="3.5" rx="1" fill="#ffe9b0"/>`;

  A.megane = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <rect x="74" y="30" width="5" height="40" fill="#c8402a"/><rect x="108" y="30" width="5" height="40" fill="#c8402a"/>
  <path d="M66 32 Q93 24 121 32 L118 26 Q93 18 69 26Z" fill="#2f7a5a"/>
  <path d="M70 26 Q94 14 118 26" fill="none" stroke="#1f5a40" stroke-width="1.4"/>
  <rect x="80" y="34" width="27" height="8" fill="#e2b84b"/>
  <rect x="72" y="46" width="44" height="3" fill="#c8402a"/>
  <path d="M0 22 Q30 32 70 20" fill="none" stroke="#555" stroke-width=".6"/>
  ${[[10,24],[24,27],[38,28],[52,26]].map(([x,y]) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y+2}" stroke="#555" stroke-width=".6"/><ellipse cx="${x}" cy="${y+6}" rx="3.4" ry="4.4" fill="#e8503a"/><rect x="${x-2}" y="${y+1.6}" width="4" height="1.2" fill="#e2b84b"/>`).join('')}
  <path d="M0 50 H120 V84 H0Z" fill="#9fb98d"/>
  <rect y="82" width="120" height="38" fill="#5fa1bd"/>
  <rect x="0" y="66" width="120" height="20" fill="#a99d89"/>
  <rect x="0" y="63" width="120" height="4" fill="#8d8270"/>
  ${rep(12, i => `<line x1="${i*10}" y1="67" x2="${i*10}" y2="86" stroke="#958a77" stroke-width=".6"/>`)}
  <path d="M18 86 a19 16 0 0 1 38 0Z" fill="#41758c"/>
  <path d="M64 86 a19 16 0 0 1 38 0Z" fill="#41758c"/>
  <path d="M18 86 a19 16 0 0 0 38 0" fill="none" stroke="#a99d89" stroke-width="6" opacity=".55"/>
  <path d="M64 86 a19 16 0 0 0 38 0" fill="none" stroke="#a99d89" stroke-width="6" opacity=".55"/>
  <path d="M8 96 h10 M50 108 h20 M100 98 h12" stroke="#d6eef7" stroke-width="1.1" stroke-linecap="round"/>
  <path d="M110 76 c-1.6 -2 -4 -.6 -3 1.4 l3 3 l3 -3 c1 -2 -1.4 -3.4 -3 -1.4Z" fill="#f08aa6"/>`;

  A.peace = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M10 22 q3 -3 6 0 q3 -3 6 0 M92 30 q2.4 -2.4 5 0 q2.4 -2.4 5 0" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
  ${rep(9, i => `<circle cx="${i*15}" cy="${70 + (i%2)*4}" r="${12+(i%3)*2}" fill="${i%2?'#4f8a52':'#5f9a5c'}"/>`)}
  <rect y="78" width="120" height="42" fill="#d9d2c2"/>
  <path d="M0 110 H120" stroke="#c9c0ac" stroke-width="1"/>
  <rect x="34" y="92" width="52" height="6" fill="#cfc8b8"/>
  <rect x="40" y="84" width="40" height="10" fill="#e3ddd0"/>
  <rect x="30" y="98" width="60" height="6" fill="#c3bba9"/>
  <path d="M42 84 Q44 76 54 76 L70 76 Q76 74 82 78 L84 84Z" fill="#5f8f99"/>
  <path d="M68 76 L76 70 L80 76Z" fill="#4c7883"/>
  <path d="M52 52 L68 52 L70 78 L50 78Z" fill="#6a9aa4"/>
  <path d="M60 52 L68 52 L70 78 L60 78Z" fill="#567f89"/>
  <path d="M51 54 L47 20 L52 19 L57 54Z" fill="#6a9aa4"/>
  <path d="M47 20 L46 13 L49 13 L52 19Z" fill="#6a9aa4"/>
  <path d="M66 54 L98 57 L98 62 L66 62Z" fill="#567f89"/>
  <path d="M98 57 L104 58 L104 61 L98 62Z" fill="#6a9aa4"/>
  <circle cx="60" cy="45" r="6.2" fill="#6a9aa4"/>
  <path d="M55 42 q5 -5 10 0" fill="none" stroke="#4c7883" stroke-width="1.2"/>`;

  A.ferry = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M-4 66 Q20 40 40 38 Q50 30 60 36 Q80 44 124 60 V80 H-4Z" fill="#8396ad"/>
  <path d="M40 38 Q50 30 60 36 L56 40 Q48 36 44 40Z" fill="#a69283"/>
  <path d="M-4 72 Q40 64 124 70 V80 H-4Z" fill="#7da57a"/>
  <rect y="78" width="120" height="42" fill="url(#gSea)"/>
  <path d="M6 106 q10 -3 20 0 M70 114 q10 -3 22 0" stroke="#d8eef6" stroke-width="1.2" fill="none"/>
  <path d="M96 98 q10 2 24 0 M94 102 q12 3 26 1" stroke="#ffffff" stroke-width="1.4" fill="none" opacity=".8"/>
  <path d="M20 92 L98 92 L90 105 L28 105Z" fill="#ffffff"/>
  <rect x="24" y="96" width="70" height="3" fill="#2a5aa8"/>
  <rect x="34" y="80" width="48" height="12" fill="#f4f6f9"/>
  ${rep(9, i => `<rect x="${37+i*5}" y="83" width="3" height="3" fill="#2f3f5f"/>`)}
  <rect x="44" y="72" width="26" height="8" fill="#f4f6f9"/>
  ${rep(4, i => `<rect x="${47+i*6}" y="74" width="4" height="3" fill="#2f3f5f"/>`)}
  <rect x="72" y="70" width="6" height="10" fill="#d2452b"/>
  <path d="M30 26 q3 -3 6 0 q3 -3 6 0 M52 18 q2 -2 4 0 q2 -2 4 0 M86 30 q3 -3 6 0 q3 -3 6 0" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>`;

  A.kport = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M-4 70 Q30 56 52 60 Q70 54 124 66 V76 H-4Z" fill="#a3b3c4"/>
  <rect y="74" width="120" height="46" fill="url(#gSea)"/>
  <path d="M0 98 H50 L56 104 H0Z" fill="#b9b2a2"/>
  <rect x="18" y="66" width="10" height="32" fill="#ffffff"/>
  ${rep(3, i => `<rect x="18" y="${70+i*9}" width="10" height="4" fill="#d2452b"/>`)}
  <rect x="16" y="60" width="14" height="6" fill="#2f3f5f"/><rect x="19" y="61" width="8" height="4" fill="#ffe08a"/>
  <path d="M15 60 L23 54 L31 60Z" fill="#d2452b"/>
  <path d="M74 86 L114 86 L110 94 L78 94Z" fill="#ffffff"/>
  <rect x="80" y="78" width="26" height="8" fill="#f4f6f9"/><rect x="100" y="74" width="4" height="6" fill="#2a5aa8"/>
  <path d="M60 90 q8 2 16 0" stroke="#fff" stroke-width="1.2" fill="none"/>
  <rect x="84" y="44" width="34" height="22" fill="#e8e4da"/><rect x="84" y="40" width="34" height="4" fill="#5a6b80"/>
  ${rep(5, i => `<rect x="${87+i*6}" y="50" width="4" height="10" fill="#9fc0dc"/>`)}`;

  A.castle = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <circle cx="18" cy="70" r="12" fill="#f6c6d4"/><circle cx="8" cy="76" r="9" fill="#f9d5df"/>
  <circle cx="104" cy="72" r="11" fill="#9cc48a"/><circle cx="114" cy="66" r="9" fill="#8fbb7d"/>
  <path d="M6 120 Q22 100 24 76 L96 76 Q98 100 114 120Z" fill="#a69d8c"/>
  ${rep(8, i => { const y = 80 + i*5; const k = Math.pow((y-76)/44, 2); return `<path d="M${24 - 18*k} ${y} H${96 + 18*k}" stroke="#8d8576" stroke-width=".9"/>`; })}
  ${rep(40, i => { const row = Math.floor(i/5), col = i%5; const y = 78 + row*5; const k = Math.pow((y-76)/44,2); const x0 = 24 - 18*k, w = (72 + 36*k)/5; return `<line x1="${(x0 + w*col + (row%2)*w/2).toFixed(1)}" y1="${y}" x2="${(x0 + w*col + (row%2)*w/2).toFixed(1)}" y2="${y+5}" stroke="#8d8576" stroke-width=".7"/>`; })}
  <rect x="28" y="58" width="64" height="18" fill="#24272e"/>
  ${rep(6, i => `<rect x="${32+i*10}" y="63" width="6" height="5" fill="#f3f1ea"/>`)}
  <rect x="28" y="56" width="64" height="2" fill="#f3f1ea"/>
  <path d="M18 60 Q28 56 32 48 L88 48 Q92 56 102 60Z" fill="#3d424b"/>
  <path d="M20 59.4 Q30 56 33 49.5 L87 49.5 Q90 56 100 59.4" fill="none" stroke="#f3f1ea" stroke-width=".9"/>
  <path d="M52 48 L60 41 L68 48Z" fill="#3d424b" stroke="#f3f1ea" stroke-width=".8"/>
  <rect x="36" y="36" width="48" height="12" fill="#24272e"/>
  ${rep(4, i => `<rect x="${41+i*10.5}" y="39" width="5.5" height="5" fill="#f3f1ea"/>`)}
  <path d="M28 38 Q36 35 40 29 L80 29 Q84 35 92 38Z" fill="#3d424b"/>
  <path d="M30 37.4 Q37 35 41 30.4 L79 30.4 Q83 35 90 37.4" fill="none" stroke="#f3f1ea" stroke-width=".8"/>
  <rect x="44" y="20" width="32" height="10" fill="#24272e"/>
  ${rep(3, i => `<rect x="${48+i*9}" y="22.5" width="5" height="4.5" fill="#f3f1ea"/>`)}
  <path d="M36 22 Q44 19 48 13 L72 13 Q76 19 84 22Z" fill="#3d424b"/>
  <rect x="47" y="10.6" width="26" height="2.6" fill="#2b2f36"/>
  <path d="M47 11 q-2 -4 1 -6 M73 11 q2 -4 -1 -6" stroke="#e2b84b" stroke-width="2" fill="none" stroke-linecap="round"/>`;

  seed(13);
  A.suizenji = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  ${rep(8, i => `<circle cx="${i*17}" cy="${54+(i%2)*3}" r="${11+(i%3)*2}" fill="${i%2?'#5f9a5c':'#4f8a52'}"/>`)}
  <rect y="58" width="120" height="62" fill="#94c27e"/>
  <path d="M0 96 Q20 82 50 88 Q80 94 120 84 V120 H0Z" fill="#6db3c8"/>
  <path d="M10 104 h16 M60 110 h22 M96 98 h14" stroke="#d6eef7" stroke-width="1.1" stroke-linecap="round"/>
  <path d="M30 84 Q52 50 60 46 Q68 50 92 84Z" fill="#7fb35e"/>
  ${rep(6, i => `<path d="M${36+i*2} ${82-i*5} Q60 ${76-i*6} ${84-i*2} ${82-i*5}" fill="none" stroke="#9bcb75" stroke-width="1.1"/>`)}
  <path d="M100 86 q-4 -14 2 -26 q4 -8 0 -14" stroke="#5a3b2e" stroke-width="3" fill="none" stroke-linecap="round"/>
  <ellipse cx="96" cy="46" rx="12" ry="5" fill="#2f6a3e"/><ellipse cx="108" cy="58" rx="10" ry="4.4" fill="#2f6a3e"/><ellipse cx="98" cy="66" rx="9" ry="4" fill="#2f6a3e"/>
  <ellipse cx="96" cy="44.6" rx="10" ry="2.6" fill="#3f7f4e"/>
  <rect x="12" y="74" width="8" height="2" fill="#9c968a"/><rect x="13" y="70" width="6" height="4" fill="#b4ae9f"/><path d="M10 70 L16 65 L22 70Z" fill="#9c968a"/><rect x="15" y="76" width="2" height="8" fill="#9c968a"/><rect x="12" y="84" width="8" height="2" fill="#9c968a"/>
  ${[[30,100],[42,106],[56,102]].map(([x,y]) => `<ellipse cx="${x}" cy="${y}" rx="5" ry="2.4" fill="#b8b2a4"/>`).join('')}
  <ellipse cx="78" cy="106" rx="4" ry="1.6" fill="#f08a3a"/><ellipse cx="88" cy="112" rx="4" ry="1.6" fill="#fff"/><circle cx="87" cy="112" r="1" fill="#f08a3a"/>`;

  seed(17);
  A.kusasenri = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <ellipse cx="88" cy="22" rx="12" ry="8" fill="#ffffff" opacity=".9"/><ellipse cx="96" cy="14" rx="10" ry="7" fill="#f2f2f2" opacity=".85"/><ellipse cx="82" cy="30" rx="8" ry="6" fill="#ffffff"/>
  <path d="M60 64 Q72 40 80 36 L88 36 Q96 44 120 60 V70 H60Z" fill="#8e8578"/>
  <path d="M80 36 L88 36 L86 40 L82 40Z" fill="#6c6458"/>
  <path d="M-4 66 Q14 38 30 36 Q44 38 66 66Z" fill="#6aa04e"/>
  <path d="M30 36 Q36 46 40 66" fill="none" stroke="#5a8e40" stroke-width="1"/>
  <path d="M0 64 Q60 56 120 66 V120 H0Z" fill="#a9c96a"/>
  ${rep(7, i => `<path d="M0 ${72+i*7} Q60 ${66+i*7} 120 ${74+i*7}" stroke="#bad77e" stroke-width="1" fill="none"/>`)}
  <ellipse cx="42" cy="84" rx="22" ry="5" fill="#8fb6c4"/><ellipse cx="42" cy="83" rx="16" ry="2.4" fill="#b8d6e0"/>
  <ellipse cx="88" cy="78" rx="12" ry="3" fill="#8fb6c4"/>
  ${[[70,98,1],[88,102,-1]].map(([x,y,d]) => `<g transform="translate(${x} ${y}) scale(${d} 1)"><ellipse cx="0" cy="0" rx="7" ry="3.6" fill="#7a4a2a"/><path d="M5 -1 L10 -7 L12 -6 L8 1Z" fill="#7a4a2a"/><path d="M9 -7 l1 -2 l1 2" fill="#5a341c"/><path d="M-6 0 q-3 2 -3 6" stroke="#4a2c18" stroke-width="1.3" fill="none"/>${[-5,-2,3,5].map(lx => `<line x1="${lx}" y1="2" x2="${lx}" y2="9" stroke="#5a341c" stroke-width="1.3"/>`).join('')}</g>`).join('')}`;

  seed(23);
  A.kokonoe = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M0 40 Q30 34 60 40 T120 38 V120 H0Z" fill="#7aa86a"/>
  <path d="M0 50 L30 56 L44 120 H0Z" fill="#6b8f4e"/>
  <path d="M120 50 L88 58 L78 120 H120Z" fill="#6b8f4e"/>
  <path d="M40 120 L54 76 L66 76 L82 120Z" fill="#4e6e3c"/>
  <path d="M50 120 Q58 98 60 82 Q62 98 72 120Z" fill="#5fa1bd"/>
  ${rep(70, () => { const side = r() > .5; const x = side ? r()*42 : 80 + r()*40; const y = 52 + r()*66; return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(3+r()*3.6).toFixed(1)}" fill="${['#e8833a','#c94a2e','#e9b949','#d9662f','#7aa04a','#b8402a'][Math.floor(r()*6)]}"/>`; })}
  ${rep(5, i => `<line x1="${92+i*2.4}" y1="62" x2="${90+i*2.6}" y2="${100+i*2}" stroke="#ffffff" stroke-width="${1.6-i*.2}" opacity=".9"/>`)}
  <path d="M-2 44 Q60 66 122 44" stroke="#efece4" stroke-width="1.2" fill="none"/>
  <path d="M-2 52 Q60 60 122 52" stroke="#f7f5ef" stroke-width="3.2" fill="none"/>
  ${rep(23, i => { const x = 2 + i*5; const t = x/120; const yc = 44 + 22*4*t*(1-t) * .9; const yd = 52 + 8*4*t*(1-t); return `<line x1="${x}" y1="${yc.toFixed(1)}" x2="${x}" y2="${yd.toFixed(1)}" stroke="#efece4" stroke-width=".6"/>`; })}
  <circle cx="44" cy="56" r="1.2" fill="#d2452b"/><circle cx="48" cy="56.4" r="1.2" fill="#2a5aa8"/><circle cx="76" cy="56.6" r="1.2" fill="#333"/>`;

  A.yufuin = `
  <rect width="120" height="120" fill="url(#gDawn)"/>
  <path d="M4 70 L36 30 L46 38 L56 26 L96 70Z" fill="#6c7ba6"/>
  <path d="M36 30 L42 44 L46 38 L52 46 L56 26 L60 46 L96 70 L46 70Z" fill="#5a6894"/>
  <path d="M0 64 Q30 58 60 62 T120 60 V80 H0Z" fill="#6f9a6a"/>
  <rect x="-4" y="54" width="128" height="7" rx="3.5" fill="#ffffff" opacity=".55"/>
  <rect y="78" width="120" height="42" fill="#8ec0d0"/>
  <path d="M4 78 L36 108 L46 102 L56 112 L96 78Z" fill="#a9cfdb" opacity=".8"/>
  <rect x="-4" y="76" width="128" height="6" rx="3" fill="#ffffff" opacity=".7"/>
  <rect x="-4" y="88" width="90" height="5" rx="2.5" fill="#ffffff" opacity=".45"/>
  <path d="M10 92 Q22 90 34 92 L34 94 L10 94Z" fill="#d8452c"/><rect x="13" y="94" width="2.4" height="12" fill="#d8452c"/><rect x="28.6" y="94" width="2.4" height="12" fill="#d8452c"/><rect x="12" y="97" width="20" height="1.6" fill="#d8452c"/>
  <rect x="80" y="62" width="34" height="22" fill="#eadcbf"/>
  ${rep(4, i => `<line x1="${84+i*8}" y1="62" x2="${84+i*8}" y2="84" stroke="#6b4a36" stroke-width="1.4"/>`)}
  <line x1="80" y1="72" x2="114" y2="72" stroke="#6b4a36" stroke-width="1.4"/>
  <path d="M76 63 L97 46 L118 63Z" fill="#7b5a48"/><rect x="104" y="46" width="5" height="10" fill="#8a6a56"/>
  <rect x="88" y="74" width="6" height="10" fill="#4a5a7a"/>
  ${[[82,86,'#e86a9a'],[86,87,'#b07ad8'],[98,86,'#f4b84a'],[104,87,'#e86a9a'],[110,86,'#b07ad8']].map(([x,y,c]) => `<circle cx="${x}" cy="${y}" r="1.8" fill="${c}"/>`).join('')}`;

  A.beppu = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M0 48 Q30 34 60 42 T120 40 V120 H0Z" fill="#7da86c"/>
  <path d="M0 62 H120 V120 H0Z" fill="#b9b09a"/>
  <ellipse cx="50" cy="88" rx="42" ry="16" fill="#5c5a54"/>
  <ellipse cx="50" cy="87" rx="38" ry="13.5" fill="url(#gBlue)"/>
  <ellipse cx="98" cy="106" rx="20" ry="8" fill="#5c5a54"/>
  <ellipse cx="98" cy="105.4" rx="17" ry="6.4" fill="#c4442f"/>
  <ellipse cx="94" cy="104" rx="7" ry="1.6" fill="#e0654c"/>
  ${[[22,74,10],[36,64,12],[50,54,14],[64,62,12],[78,72,10],[44,42,10],[58,36,9],[92,96,7],[100,88,8],[106,80,6]].map(([x,y,rr]) => `<circle cx="${x}" cy="${y}" r="${rr}" fill="#ffffff" opacity=".72"/>`).join('')}
  <path d="M8 108 h18 l-3 7 h-12Z" fill="#a8783e"/>
  ${[11,15,19,23].map(x => `<ellipse cx="${x}" cy="107" rx="2" ry="2.4" fill="#f7f1e3"/>`).join('')}`;

  A.tosu = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M0 64 Q30 56 60 60 T120 58 V120 H0Z" fill="#a8c99a"/>
  <rect x="2" y="54" width="34" height="32" fill="#efe6d4"/><rect x="40" y="46" width="40" height="40" fill="#f6efe2"/><rect x="84" y="54" width="34" height="32" fill="#e9dfcb"/>
  <path d="M0 56 L19 46 L38 56Z" fill="#7b5a48"/><path d="M82 56 L101 46 L120 56Z" fill="#7b5a48"/>
  <rect x="54" y="28" width="12" height="20" fill="#f6efe2"/><path d="M52 30 L60 20 L68 30Z" fill="#2c4fa0"/><circle cx="60" cy="36" r="4" fill="#fff" stroke="#2c4fa0" stroke-width="1"/><path d="M60 34 v2 l1.6 1" stroke="#2c4fa0" stroke-width=".8" fill="none"/>
  ${[[2,66,34,'#d2452b'],[40,62,40,'#2c4fa0'],[84,66,34,'#2f8a64']].map(([x,y,w,c]) => `<path d="M${x} ${y} h${w} l-2 6 h-${w-4}Z" fill="${c}"/>` + rep(Math.floor(w/6), i => `<rect x="${x+1+i*6}" y="${y}" width="3" height="6" fill="#fff" opacity=".85"/>`)).join('')}
  ${[[8,74],[46,72],[64,72],[90,74]].map(([x,y]) => `<rect x="${x}" y="${y}" width="${x===46||x===64?12:22}" height="12" fill="#9fc0dc"/>`).join('')}
  <rect y="86" width="120" height="34" fill="#dcd4c2"/>
  ${[[26,92,'#d2452b'],[44,96,'#e2b84b'],[62,90,'#2c4fa0'],[78,98,'#1d2433']].map(([x,y,c]) => `<path d="M${x} ${y+6} q0 -8 6 -8 q6 0 6 8" stroke="${c}" stroke-width="1.6" fill="none"/><rect x="${x-3}" y="${y+5}" width="18" height="18" rx="1.4" fill="${c}"/><rect x="${x}" y="${y+10}" width="12" height="2" fill="#fff" opacity=".7"/>`).join('')}`;

  seed(31);
  A.tanga = `
  <rect width="120" height="120" fill="#e9dcc2"/>
  <path d="M0 0 H120 V22 Q60 10 0 22Z" fill="#7d8f8e"/>
  ${rep(6, i => `<path d="M0 ${22+i*2} Q60 ${10+i*4} 120 ${22+i*2}" stroke="#93a3a2" stroke-width=".8" fill="none"/>`)}
  <rect x="34" y="20" width="52" height="12" fill="#d2452b"/>
  <text x="60" y="29.4" text-anchor="middle" font-size="8.2" font-weight="700" fill="#fff8ec" font-family="Zen Maru Gothic, sans-serif">旦過市場</text>
  <path d="M0 22 L44 50 L44 92 L0 120Z" fill="#c9a77a"/>
  <path d="M120 22 L76 50 L76 92 L120 120Z" fill="#b8956a"/>
  <path d="M44 50 H76 V92 H44Z" fill="#f4ead6"/>
  <path d="M0 120 L44 92 H76 L120 120Z" fill="#9a9284"/>
  ${[[0,34,'#2c4fa0'],[16,44,'#2f8a64'],[30,52,'#d2452b']].map(([x,y,c],i) => `<path d="M${x} ${y} L${x+16} ${y+8} L${x+16} ${y+16} L${x} ${y+8}Z" fill="${c}"/>`).join('')}
  ${[[104,42,'#e2b84b'],[88,52,'#2c4fa0']].map(([x,y,c]) => `<path d="M${x+16} ${y-8} L${x} ${y} L${x} ${y+8} L${x+16} ${y}Z" fill="${c}"/>`).join('')}
  <path d="M4 92 L40 80 L40 88 L4 104Z" fill="#dfe8ee"/>
  ${rep(9, i => { const x = 8 + i*3.6, y = 96 - i*1.4; return `<path d="M${x} ${y} q3 -2.4 6 0 l2 -1.6 v3.2 l-2 -1.6 q-3 2.4 -6 0Z" fill="${i%3?'#8e9aa8':'#c25a3a'}"/>`; })}
  <path d="M116 92 L80 80 L80 88 L116 104Z" fill="#f2e2c4"/>
  ${rep(7, i => `<circle cx="${84+i*4.4}" cy="${88+i*1.6}" r="1.8" fill="${['#e8833a','#9bc46a','#e9b949'][i%3]}"/>`)}
  <ellipse cx="60" cy="40" rx="4" ry="5" fill="#e8503a"/><line x1="60" y1="32" x2="60" y2="35" stroke="#555" stroke-width=".6"/>
  <rect x="54" y="58" width="12" height="20" fill="#d9ccb2"/><circle cx="60" cy="66" r="3" fill="#1d2433"/><rect x="57" y="69" width="6" height="9" fill="#1d2433"/>`;

  A.mojiko = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <rect x="10" y="38" width="100" height="34" fill="#efe2c8"/>
  <path d="M6 40 L22 26 H98 L114 40Z" fill="#5d706b"/>
  <path d="M44 28 L60 12 L76 28Z" fill="#5d706b"/>
  <rect x="42" y="28" width="36" height="12" fill="#efe2c8"/>
  <circle cx="60" cy="34" r="4.2" fill="#fff" stroke="#6b5a40" stroke-width="1"/><path d="M60 31.6 v2.4 l1.6 1.4" stroke="#6b5a40" stroke-width=".8" fill="none"/>
  ${rep(8, i => `<line x1="${14+i*13}" y1="40" x2="${14+i*13}" y2="72" stroke="#8a6f4e" stroke-width="1.6"/>`)}
  <line x1="10" y1="55" x2="110" y2="55" stroke="#8a6f4e" stroke-width="1.4"/>
  ${rep(7, i => `<rect x="${17+i*13}" y="43" width="7" height="9" fill="#a6c3d4"/><rect x="${17+i*13}" y="58" width="7" height="10" fill="#a6c3d4"/>`)}
  <rect y="72" width="120" height="8" fill="#c9bfa8"/>
  <rect y="80" width="120" height="40" fill="url(#gSea)"/>
  <path d="M0 86 H24 V94 H0Z M96 86 H120 V94 H96Z" fill="#b6ac98"/>
  <path d="M22 88 L52 56 L56 60 L28 92Z" fill="#2f6fb5"/>
  <path d="M98 88 L68 56 L64 60 L92 92Z" fill="#2f6fb5"/>
  <path d="M23 84 L51 54 M97 84 L69 54" stroke="#ffffff" stroke-width="1"/>
  ${rep(5, i => `<line x1="${26+i*5.4}" y1="${84-i*5.8}" x2="${27+i*5.4}" y2="${80-i*5.8}" stroke="#fff" stroke-width=".7"/><line x1="${94-i*5.4}" y1="${84-i*5.8}" x2="${93-i*5.4}" y2="${80-i*5.8}" stroke="#fff" stroke-width=".7"/>`)}
  <path d="M10 104 q8 -3 16 0 M84 110 q10 -3 20 0" stroke="#d8eef6" stroke-width="1.1" fill="none"/>`;

  A.airport = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <ellipse cx="30" cy="28" rx="14" ry="5" fill="#fff" opacity=".9"/><ellipse cx="96" cy="44" rx="11" ry="4" fill="#fff" opacity=".85"/>
  <path d="M0 80 Q60 72 120 78 V120 H0Z" fill="#9cc48a"/>
  <path d="M30 120 L52 80 H68 L90 120Z" fill="#5c6270"/>
  ${rep(5, i => `<rect x="${59.2 - i*.6}" y="${84+i*7}" width="${1.6+i*.4}" height="${3+i}" fill="#ffffff"/>`)}
  <rect x="94" y="56" width="5" height="26" fill="#e8e4da"/><path d="M90 50 h13 l-2 7 h-9Z" fill="#5a6b80"/><rect x="91" y="51.4" width="11" height="3" fill="#a6c3d4"/>
  <g transform="translate(56 50) rotate(-16)">
    <path d="M-30 0 Q-30 -4.6 -24 -4.6 L22 -4.6 Q32 -4 34 0 Q32 4 22 4.6 L-24 4.6 Q-30 4.6 -30 0Z" fill="#ffffff"/>
    <path d="M-26 -4.4 L-34 -16 L-28 -16 L-18 -4.4Z" fill="#1f3b8f"/>
    <path d="M-4 3 L-14 20 L-8 20 L8 3Z" fill="#e6e9f0"/>
    <path d="M-4 -3 L-10 -12 L-6 -12 L6 -3Z" fill="#d6dae4"/>
    <path d="M-24 -1 L22 -1" stroke="#d2452b" stroke-width="1.2"/>
    ${rep(8, i => `<circle cx="${-16+i*4.4}" cy="-2.6" r=".9" fill="#5a6b80"/>`)}
    <path d="M28 -2.6 Q31 -2 32.4 0 L28 0Z" fill="#5a6b80"/>
  </g>`;

  seed(41);
  A.inn = `
  <rect width="120" height="120" fill="url(#gNight)"/>
  ${rep(18, () => `<circle cx="${(r()*120).toFixed(1)}" cy="${(r()*44).toFixed(1)}" r="${(r()*.7+.3).toFixed(2)}" fill="#fff" opacity=".8"/>`)}
  <path d="M94 14 a10 10 0 1 0 9 15 a8 8 0 1 1 -9 -15Z" fill="#fff3c8"/>
  <path d="M0 66 Q30 44 56 54 Q84 40 120 58 V120 H0Z" fill="#1d2a52"/>
  <rect y="96" width="120" height="24" fill="#2a2f3f"/>
  <rect x="18" y="64" width="84" height="32" fill="#4a3426"/>
  ${rep(6, i => `<rect x="${22+i*13.4}" y="70" width="10" height="9" fill="#ffd27a"/><line x1="${27+i*13.4}" y1="70" x2="${27+i*13.4}" y2="79" stroke="#c99a4a" stroke-width=".6"/>`)}
  ${rep(6, i => `<rect x="${22+i*13.4}" y="84" width="10" height="9" fill="${i===2||i===3?'#3a2a1e':'#ffcf6a'}"/>`)}
  <rect x="48" y="84" width="24" height="12" fill="#2a1d14"/><rect x="50" y="84" width="20" height="6" fill="#284a8a"/><line x1="60" y1="84" x2="60" y2="90" stroke="#1d3768" stroke-width=".8"/>
  <path d="M10 66 Q24 62 30 52 L90 52 Q96 62 110 66Z" fill="#2c3038"/>
  <path d="M14 82 h92 l-4 -4 h-84Z" fill="#2c3038"/>
  <ellipse cx="40" cy="98" rx="4" ry="5.4" fill="#ef5638"/><ellipse cx="80" cy="98" rx="4" ry="5.4" fill="#ef5638"/>
  <circle cx="40" cy="98" r="9" fill="#ffb347" opacity=".18"/><circle cx="80" cy="98" r="9" fill="#ffb347" opacity=".18"/>
  <path d="M106 50 q-4 -6 0 -12 q4 -6 0 -12 M112 54 q-4 -6 0 -12 q4 -6 0 -12" stroke="#fff" stroke-opacity=".45" stroke-width="2" fill="none" stroke-linecap="round"/>`;

  const DEFS = `
  <linearGradient id="gDay" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd3ee"/><stop offset=".75" stop-color="#e6f3f6"/><stop offset="1" stop-color="#fbf4e2"/></linearGradient>
  <linearGradient id="gDusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4f63a8"/><stop offset=".5" stop-color="#c98aa0"/><stop offset="1" stop-color="#f8bf86"/></linearGradient>
  <linearGradient id="gDawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9c9e8"/><stop offset=".6" stop-color="#f6d9d6"/><stop offset="1" stop-color="#fbeedd"/></linearGradient>
  <linearGradient id="gNight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f1838"/><stop offset="1" stop-color="#34407a"/></linearGradient>
  <linearGradient id="gSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5aa8cc"/><stop offset="1" stop-color="#2f78a6"/></linearGradient>
  <linearGradient id="gMirror" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dfe8f6"/><stop offset=".5" stop-color="#9fb4d6"/><stop offset="1" stop-color="#c7d4ea"/></linearGradient>
  <radialGradient id="gBlue" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#9ff0ff"/><stop offset=".6" stop-color="#2fb6dc"/><stop offset="1" stop-color="#1c86b6"/></radialGradient>
  <pattern id="pNamako" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#3b3e46"/><rect x=".8" y=".8" width="4.4" height="4.4" fill="none" stroke="#f3f1ea" stroke-width=".9" rx="1"/></pattern>
  <clipPath id="cc" clipPathUnits="userSpaceOnUse"><circle cx="60" cy="60" r="59"/></clipPath>`;

  const symbols = Object.entries(A).map(([k, v]) => `<symbol id="a-${k}" viewBox="0 0 120 120"><g clip-path="url(#cc)">${v}</g></symbol>`).join('');
  return { keys:Object.keys(A), svg:`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${DEFS}</defs>${symbols}</svg>` };
})();
