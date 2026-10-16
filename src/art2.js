/* More landmark drawings for the Charming Kyushu, Shikoku and Yamaguchi tours. Same 120 x 120 circle format; shares gradients defined in art.js. */
const ART2 = (function(){
  let s = 7;
  const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const seed = n => { s = n; };
  const rep = (n, f) => Array.from({length:n}, (_, i) => f(i)).join('');
  const sky = '<rect width="120" height="120" fill="url(#gDay)"/>';
  const sea = (y) => `<rect y="${y}" width="120" height="${120-y}" fill="url(#gSea)"/>`;
  const waves = (ys) => ys.map(([x,y,w]) => `<path d="M${x} ${y} q${w/4} -3 ${w/2} 0 t${w/2} 0" stroke="#d8eef6" stroke-width="1.1" fill="none" stroke-linecap="round"/>`).join('');
  const trees = (n, y0, y1, cols, rmin, rmax) => rep(n, () => `<circle cx="${(r()*120).toFixed(1)}" cy="${(y0+r()*(y1-y0)).toFixed(1)}" r="${(rmin+r()*(rmax-rmin)).toFixed(1)}" fill="${cols[Math.floor(r()*cols.length)]}"/>`);
  const A = {};

  /* ---------- Charming Kyushu ---------- */
  A.mameda = `${sky}
  <path d="M0 58 Q30 44 60 52 T120 48 V120 H0Z" fill="#8fbb7d"/>
  <path d="M0 120 L40 76 H80 L120 120Z" fill="#cbbfa6"/>
  <rect x="0" y="44" width="40" height="48" fill="#5d4332"/>
  ${rep(9, i => `<line x1="${3+i*4.2}" y1="56" x2="${3+i*4.2}" y2="92" stroke="#3f2c20" stroke-width="1.3"/>`)}
  <path d="M-4 48 L22 34 L44 46Z" fill="#2e3036"/><rect x="-2" y="52" width="44" height="3" fill="#2e3036"/>
  <rect x="80" y="40" width="40" height="52" fill="#f6f2e8"/>
  <rect x="80" y="72" width="40" height="20" fill="url(#pNamako)"/>
  <path d="M76 44 L100 30 L124 44Z" fill="#2e3036"/>
  <rect x="92" y="50" width="12" height="9" fill="#3a3c42"/>
  <rect x="12" y="62" width="16" height="14" fill="#2c4fa0"/><circle cx="20" cy="69" r="3.6" fill="none" stroke="#fff" stroke-width="1"/>
  ${[[46,62],[60,58],[74,62]].map(([x,y]) => `<line x1="${x}" y1="${y-6}" x2="${x}" y2="${y-3}" stroke="#555" stroke-width=".6"/><ellipse cx="${x}" cy="${y+2}" rx="3.6" ry="5" fill="#f3e6c8" stroke="#c94a2e" stroke-width=".8"/><line x1="${x-3.6}" y1="${y+2}" x2="${x+3.6}" y2="${y+2}" stroke="#c94a2e" stroke-width=".6"/>`).join('')}
  <path d="M30 120 Q52 96 58 76" stroke="#7fb6cc" stroke-width="5" fill="none"/>
  <g transform="translate(64 96)"><path d="M-7 10 L0 -2 L7 10Z" fill="#c8402a"/><circle cx="0" cy="-5" r="3.4" fill="#fbe7d6"/><path d="M-3.4 -7 Q0 -11 3.4 -7Z" fill="#1d2433"/></g>
  <g transform="translate(76 100)"><path d="M-6 9 L0 -2 L6 9Z" fill="#2c4fa0"/><circle cx="0" cy="-5" r="3" fill="#fbe7d6"/><path d="M-3 -7 Q0 -10 3 -7Z" fill="#1d2433"/></g>`;

  A.brewery = `${sky}
  <path d="M0 62 Q30 52 60 58 T120 54 V120 H0Z" fill="#9cc48a"/>
  <rect x="8" y="40" width="64" height="44" fill="#b4573a"/>
  ${rep(6, j => rep(8, i => `<rect x="${10+i*8}" y="${42+j*7}" width="6" height="2.4" fill="#9a4630" opacity=".55"/>`))}
  <path d="M4 42 L40 26 L76 42Z" fill="#5d3a2c"/>
  ${rep(4, i => `<path d="M${14+i*15} 84 V68 a5 5 0 0 1 10 0 V84Z" fill="#2f3f5f"/>`)}
  <rect x="58" y="16" width="8" height="26" fill="#8a4a32"/><rect x="56" y="14" width="12" height="3" fill="#6a3424"/>
  <path d="M62 12 q-3 -5 1 -8 q4 -3 1 -6" stroke="#fff" stroke-opacity=".7" stroke-width="2" fill="none"/>
  <rect y="84" width="120" height="36" fill="#d9cdb4"/>
  <path d="M78 66 h26 v40 q0 6 -6 6 h-14 q-6 0 -6 -6Z" fill="#f2b12e"/>
  <path d="M104 74 h6 q6 0 6 6 v12 q0 6 -6 6 h-6 v-4 h5 q3 0 3 -3 v-10 q0 -3 -3 -3 h-5Z" fill="#f2f2f2" opacity=".85"/>
  <rect x="80" y="70" width="2" height="34" fill="#fff" opacity=".45"/>
  ${rep(6, i => `<circle cx="${84+i*3.6}" cy="${80+(i%3)*8}" r="${.8+(i%2)*.5}" fill="#fff" opacity=".7"/>`)}
  <path d="M76 66 q4 -8 10 -4 q4 -6 10 -1 q6 -4 10 3 q2 4 -2 5 h-26 q-4 -1 -2 -3Z" fill="#fffaf0"/>`;

  seed(51);
  A.kujuflower = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M-4 54 L22 30 L34 38 L48 22 L68 40 L84 30 L124 56 V70 H-4Z" fill="#7d8ea8"/>
  <path d="M48 22 L52 30 L48 34 L44 30Z" fill="#e8ecf2"/>
  <path d="M0 60 Q40 48 80 56 T120 54 V120 H0Z" fill="#8fbe6a"/>
  ${[['#e5487a',62],['#f2b12e',70],['#9a6ad1',79],['#ef7a3a',89],['#f06aa4',100],['#ffe066',112]].map(([c,y],i) => `<path d="M-4 ${y} Q40 ${y-10+i} 80 ${y-2} T124 ${y-4} L124 ${y+7} Q80 ${y+3} 40 ${y-2+i} T-4 ${y+8}Z" fill="${c}"/>`).join('')}
  ${rep(40, () => `<circle cx="${(r()*120).toFixed(1)}" cy="${(64+r()*54).toFixed(1)}" r="${(r()*.8+.4).toFixed(2)}" fill="#fff" opacity=".7"/>`)}
  <rect x="98" y="50" width="12" height="8" fill="#f6efe2"/><path d="M96 51 L104 45 L112 51Z" fill="#c8402a"/>`;

  A.takachiho = `
  <rect width="120" height="120" fill="#bfe0d6"/>
  <path d="M0 0 H44 L40 40 L46 80 L38 120 H0Z" fill="#5b6a5e"/>
  <path d="M120 0 H78 L84 44 L76 90 L84 120 H120Z" fill="#4f5d52"/>
  ${rep(9, i => `<line x1="${4+i*4.4}" y1="0" x2="${2+i*4.2}" y2="120" stroke="#46534a" stroke-width="1"/>`)}
  ${rep(9, i => `<line x1="${82+i*4.4}" y1="0" x2="${84+i*4.2}" y2="120" stroke="#3e4a42" stroke-width="1"/>`)}
  <path d="M0 0 H44 Q30 16 18 10 Q8 20 0 14Z" fill="#4f8a4c"/><path d="M120 0 H78 Q90 14 102 8 Q112 18 120 12Z" fill="#4f8a4c"/>
  <circle cx="20" cy="30" r="9" fill="#5f9a5c"/><circle cx="100" cy="36" r="10" fill="#5f9a5c"/>
  ${rep(6, i => `<line x1="${54+i*2.6}" y1="20" x2="${53+i*2.7}" y2="84" stroke="#ffffff" stroke-width="${2.4-i*.25}" opacity=".95"/>`)}
  <path d="M38 84 Q60 78 84 86 L84 120 L38 120Z" fill="#3fa58a"/>
  <ellipse cx="60" cy="86" rx="14" ry="3.6" fill="#fff" opacity=".75"/>
  <path d="M40 98 q10 -2 20 0 M58 108 q10 -2 20 0" stroke="#bfeee0" stroke-width="1.1" fill="none"/>
  <g transform="translate(66 102) rotate(-8)"><path d="M-12 0 h24 l-3 4 h-18Z" fill="#d2452b"/><path d="M-4 -1 l6 -9" stroke="#7a4a2a" stroke-width="1.2"/><circle cx="-3" cy="-4" r="2" fill="#2c4fa0"/><circle cx="5" cy="-4" r="2" fill="#f2b12e"/></g>`;

  A.amanoiwato = `
  <rect width="120" height="120" fill="#28322c"/>
  <path d="M0 0 H120 V120 H0Z M14 120 Q10 50 60 36 Q110 50 106 120Z" fill="#3d4a40" fill-rule="evenodd"/>
  <path d="M14 120 Q10 50 60 36 Q110 50 106 120Z" fill="#59665a"/>
  <path d="M24 120 Q22 66 60 54 Q98 66 96 120Z" fill="#6f7b6d"/>
  ${rep(26, i => { const x = 28 + (i%13)*5.4, y = 104 - Math.floor(i/13)*18 - (i%3)*3; return `<g transform="translate(${x.toFixed(1)} ${y})"><ellipse cx="0" cy="6" rx="3.6" ry="1.6" fill="#b8b2a4"/><ellipse cx="0" cy="3" rx="2.8" ry="1.4" fill="#cfc9bb"/><ellipse cx="0" cy=".4" rx="2" ry="1.2" fill="#e2ddd0"/></g>`; })}
  <path d="M44 88 Q60 85 76 88 L76 91 L44 91Z" fill="#d8452c"/><rect x="46" y="91" width="28" height="2" fill="#2f2f2f"/>
  <rect x="47" y="91" width="3" height="22" fill="#d8452c"/><rect x="70" y="91" width="3" height="22" fill="#d8452c"/>
  <path d="M50 96 h20" stroke="#f3efe6" stroke-width="1"/>${rep(4, i => `<path d="M${52+i*5} 96 l1 4 l1 -4" fill="#fff"/>`)}
  <path d="M0 0 Q20 18 40 6 Q60 -6 80 8 Q100 18 120 0Z" fill="#4f8a4c"/>`;

  A.tsujun = `${sky}
  <path d="M0 50 Q30 38 60 46 T120 42 V120 H0Z" fill="#6aa04e"/>
  ${trees(18, 44, 62, ['#5a8e40','#4f8a4c','#7aa04a'], 4, 7)}
  <rect y="62" width="120" height="58" fill="#5f9a5c"/>
  <path d="M0 64 H120 V82 H0Z" fill="#9b9182"/>
  ${rep(12, i => `<line x1="${i*10+5}" y1="64" x2="${i*10+5}" y2="82" stroke="#857b6d" stroke-width=".7"/>`)}
  <path d="M0 70 H120 M0 76 H120" stroke="#857b6d" stroke-width=".7"/>
  <path d="M28 120 Q28 84 60 84 Q92 84 92 120Z" fill="#3e5a3c"/>
  <path d="M24 120 Q24 80 60 80 Q96 80 96 120" fill="none" stroke="#9b9182" stroke-width="6"/>
  <rect x="0" y="60" width="120" height="4" fill="#7a6e60"/>
  <path d="M52 64 Q30 66 14 96 Q8 108 6 120" stroke="#ffffff" stroke-width="6" fill="none" opacity=".9" stroke-linecap="round"/>
  <path d="M68 64 Q90 66 106 96 Q112 108 114 120" stroke="#ffffff" stroke-width="6" fill="none" opacity=".9" stroke-linecap="round"/>
  <path d="M52 64 Q30 66 14 96" stroke="#bfe6f5" stroke-width="2" fill="none"/><path d="M68 64 Q90 66 106 96" stroke="#bfe6f5" stroke-width="2" fill="none"/>
  ${rep(14, i => `<circle cx="${(i<7?8+i*2:96+(i-7)*2.4).toFixed(1)}" cy="${(100+(i%4)*4).toFixed(1)}" r="1.4" fill="#fff" opacity=".8"/>`)}
  <path d="M30 120 Q60 112 90 120Z" fill="#5fa1bd"/>`;

  A.udo = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  ${sea(70)}
  ${waves([[6,96,22],[60,108,26],[80,88,20]])}
  <path d="M0 20 Q40 0 120 18 V70 Q100 78 80 74 Q60 86 30 80 Q12 84 0 78Z" fill="#7d6a58"/>
  <path d="M26 74 Q26 34 60 30 Q94 34 94 74Z" fill="#3b2f27"/>
  <rect x="42" y="52" width="36" height="18" fill="#e14d2f"/>
  ${rep(4, i => `<rect x="${45+i*8.6}" y="56" width="5" height="10" fill="#fbe9d8"/>`)}
  <path d="M36 54 Q48 50 52 44 L68 44 Q72 50 84 54Z" fill="#40504e"/>
  <rect x="34" y="70" width="52" height="4" fill="#c8402a"/>
  <path d="M8 104 Q20 94 34 102 Q28 112 12 112Z" fill="#5c5a54"/>
  <ellipse cx="22" cy="100" rx="5" ry="2.4" fill="none" stroke="#e8e2d0" stroke-width="1.2"/>
  <circle cx="21" cy="99" r="1.2" fill="#c8a06a"/>
  <path d="M0 78 Q12 74 22 84 Q14 92 0 90Z" fill="#6a5848"/>`;

  A.senganen = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <ellipse cx="78" cy="22" rx="10" ry="6" fill="#d9d4cc" opacity=".9"/><ellipse cx="86" cy="12" rx="9" ry="6" fill="#cfc9c0" opacity=".85"/>
  <path d="M40 58 Q60 30 74 30 Q86 30 108 58Z" fill="#7d7a86"/><path d="M70 30 L78 30 L76 34 L72 34Z" fill="#5a5862"/>
  <rect y="56" width="120" height="14" fill="#6fa6c8"/>
  <rect y="68" width="120" height="52" fill="#93c07f"/>
  <path d="M0 100 Q40 88 80 96 T120 92 V120 H0Z" fill="#7fb06a"/>
  <path d="M86 112 q-6 -20 4 -36 q4 -8 -2 -14" stroke="#5a3b2e" stroke-width="3.4" fill="none" stroke-linecap="round"/>
  <ellipse cx="86" cy="60" rx="16" ry="5" fill="#2f6a3e"/><ellipse cx="102" cy="72" rx="12" ry="4.4" fill="#2f6a3e"/><ellipse cx="80" cy="76" rx="10" ry="4" fill="#2f6a3e"/>
  <rect x="22" y="84" width="10" height="2.4" fill="#8c8678"/><rect x="24" y="78" width="6" height="6" fill="#b4ae9f"/><path d="M18 78 L27 70 L36 78Z" fill="#8c8678"/><rect x="25.5" y="86" width="3" height="12" fill="#8c8678"/><rect x="21" y="98" width="12" height="3" fill="#8c8678"/>
  <rect x="42" y="72" width="30" height="10" fill="#f3ead6"/><path d="M38 73 L57 64 L76 73Z" fill="#4a3d36"/>`;

  A.shiroyama = `
  <rect width="120" height="120" fill="url(#gDusk)"/>
  <ellipse cx="74" cy="24" rx="10" ry="6" fill="#d9c8d4" opacity=".85"/><ellipse cx="82" cy="14" rx="9" ry="6" fill="#cfbccb" opacity=".8"/>
  <path d="M34 66 Q56 36 70 34 Q84 34 112 66Z" fill="#5f5a78"/><path d="M66 34 L74 34 L72 38 L68 38Z" fill="#4a4562"/>
  <rect y="64" width="120" height="10" fill="#8aa6c8"/>
  ${rep(14, i => { const x = i*8.6, h = 8 + ((i*7)%5)*4; return `<rect x="${x}" y="${82-h}" width="7.6" height="${h+10}" fill="#3d4566"/>` + rep(Math.floor(h/5), j => `<rect x="${x+2}" y="${82-h+2+j*5}" width="2" height="2" fill="#ffd479" opacity=".8"/>`); })}
  <rect y="88" width="120" height="32" fill="#2f5a3e"/>
  <rect x="0" y="86" width="120" height="3" fill="#8b6a4a"/>
  ${rep(9, i => `<line x1="${4+i*13}" y1="86" x2="${4+i*13}" y2="96" stroke="#8b6a4a" stroke-width="1.4"/>`)}
  <path d="M100 118 Q100 96 106 80" stroke="#6b4e34" stroke-width="2.4" fill="none"/>
  <path d="M106 80 q-10 -2 -14 6 M106 80 q-7 -8 -14 -5 M106 80 q9 -6 14 0 M106 80 q8 1 10 8" stroke="#3f7a4a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;

  /* ---------- Shikoku ---------- */
  A.akashi = `${sky}
  ${sea(76)}
  ${waves([[8,100,20],[70,110,24]])}
  <path d="M-4 78 Q20 70 34 78Z" fill="#7da57a"/><path d="M90 78 Q110 66 124 78Z" fill="#7da57a"/>
  ${[24,96].map(x => `<rect x="${x-3}" y="18" width="2.4" height="62" fill="#e9eef4"/><rect x="${x+1}" y="18" width="2.4" height="62" fill="#e9eef4"/>${rep(4, i => `<rect x="${x-3}" y="${24+i*14}" width="6.4" height="1.6" fill="#e9eef4"/>`)}`).join('')}
  <path d="M-4 54 Q8 22 24 18 Q60 60 96 18 Q112 22 124 54" stroke="#f4f6f9" stroke-width="1.4" fill="none"/>
  ${rep(23, i => { const x = 26 + i*3; const t = (x-24)/72; const y = 18 + 42*4*t*(1-t)*.98; return `<line x1="${x}" y1="${y.toFixed(1)}" x2="${x}" y2="64" stroke="#f4f6f9" stroke-width=".5"/>`; })}
  <rect x="-4" y="63" width="128" height="3.4" fill="#f4f6f9"/><rect x="-4" y="66" width="128" height="1.4" fill="#9fb3c8"/>
  <path d="M52 100 h22 l-3 4 h-16Z" fill="#fff"/><rect x="58" y="96" width="10" height="4" fill="#fff"/>`;

  A.naruto = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  ${sea(46)}
  <path d="M-4 48 Q20 40 30 50Z" fill="#7da57a"/><path d="M96 50 Q110 38 124 46Z" fill="#7da57a"/>
  <rect x="-4" y="36" width="128" height="3" fill="#e9eef4"/>
  <path d="M-4 24 Q30 36 60 30 Q90 24 124 30" stroke="#e9eef4" stroke-width="1" fill="none"/>
  <rect x="28" y="20" width="3" height="20" fill="#e9eef4"/><rect x="88" y="16" width="3" height="24" fill="#e9eef4"/>
  ${[[44,84,18],[86,96,12]].map(([cx,cy,R]) => rep(5, i => { const rr = R - i*3.4; return `<path d="M${cx-rr} ${cy} a${rr} ${rr*.45} 0 1 1 ${rr*2} 0 a${rr*.8} ${rr*.36} 0 1 1 ${-rr*1.6} 0" fill="none" stroke="${i%2?'#e8f6fb':'#a9d6ea'}" stroke-width="${1.6-i*.15}"/>`; })).join('')}
  <circle cx="44" cy="84" r="2.4" fill="#1d5a80"/><circle cx="86" cy="96" r="1.8" fill="#1d5a80"/>
  <g transform="translate(86 66)"><path d="M-14 4 h28 l-5 6 h-18Z" fill="#ffffff"/><rect x="-8" y="-3" width="16" height="7" fill="#d2452b"/><rect x="-5" y="-1" width="10" height="3" fill="#ffe08a"/><path d="M-16 12 q8 3 18 0" stroke="#fff" stroke-width="1.2" fill="none"/></g>`;

  A.ritsurin = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M-4 54 Q20 28 46 30 Q70 32 90 46 Q104 40 124 52 V70 H-4Z" fill="#4f8a4c"/>
  ${trees(20, 36, 60, ['#3f7a42','#5f9a5c','#4f8a52'], 4, 7)}
  <rect y="62" width="120" height="58" fill="#9cc48a"/>
  <path d="M0 84 Q30 74 70 80 T120 78 V120 H0Z" fill="#6db3c8"/>
  <path d="M20 84 Q40 64 60 84" fill="none" stroke="#c8402a" stroke-width="3.4"/>
  <path d="M20 84 Q40 104 60 84" fill="none" stroke="#c8402a" stroke-width="2" opacity=".35"/>
  <rect x="74" y="64" width="34" height="12" fill="#f3ead6"/><path d="M70 66 L91 56 L112 66Z" fill="#6c5c53"/>
  ${rep(3, i => `<rect x="${78+i*10}" y="67" width="6" height="7" fill="#e3d6b8"/>`)}
  <rect x="72" y="76" width="38" height="2" fill="#6c5c53"/>
  <path d="M14 70 q-2 -14 8 -22" stroke="#5a3b2e" stroke-width="2.6" fill="none"/>
  <ellipse cx="22" cy="48" rx="12" ry="4.4" fill="#2f6a3e"/><ellipse cx="10" cy="58" rx="9" ry="3.6" fill="#2f6a3e"/><ellipse cx="26" cy="60" rx="8" ry="3.4" fill="#2f6a3e"/>
  <path d="M84 96 h20 M10 104 h18 M60 110 h20" stroke="#d6eef7" stroke-width="1.1" stroke-linecap="round"/>
  ${rep(5, i => `<ellipse cx="${30+i*9}" cy="${100+(i%2)*6}" rx="2.6" ry="1" fill="${i%2?'#fff':'#f08a3a'}"/>`)}`;

  A.udon = `
  <rect width="120" height="120" fill="#efe2c6"/>
  <rect y="76" width="120" height="44" fill="#c99a62"/>
  ${rep(5, i => `<line x1="0" y1="${82+i*8}" x2="120" y2="${82+i*8}" stroke="#b5864e" stroke-width=".8"/>`)}
  <rect x="6" y="20" width="44" height="36" rx="3" fill="#fbf7ee" stroke="#d8cbb0"/>
  <text x="28" y="44" text-anchor="middle" font-size="15" font-weight="700" fill="#2c4fa0" font-family="Zen Maru Gothic, sans-serif">うどん</text>
  <path d="M60 12 v26 M72 12 v26 M84 12 v26 M96 12 v26" stroke="#2c4fa0" stroke-width="6"/><rect x="56" y="10" width="46" height="4" fill="#3a2c1e"/>
  <path d="M22 78 Q22 104 50 106 Q78 104 78 78Z" fill="#1d2433"/>
  <path d="M24 80 Q24 100 50 102 Q76 100 76 80Z" fill="#c8402a"/>
  <ellipse cx="50" cy="78" rx="28" ry="7" fill="#e9d29a"/>
  ${rep(9, i => `<path d="M${28+i*5} 76 q3 2 0 5 q-3 2 0 4" stroke="#fffaf0" stroke-width="2" fill="none" stroke-linecap="round"/>`)}
  <circle cx="40" cy="76" r="2.2" fill="#6aa04e"/><circle cx="44" cy="78" r="1.8" fill="#6aa04e"/><ellipse cx="60" cy="76" rx="4" ry="2" fill="#f7f1e3"/><circle cx="60" cy="76" r="1.4" fill="#f2b12e"/>
  <path d="M60 60 L100 92" stroke="#7a4a2a" stroke-width="3.4" stroke-linecap="round"/><path d="M66 58 L104 88" stroke="#a87038" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="98" cy="104" rx="16" ry="6" fill="#f3ead8"/><path d="M84 104 h28" stroke="#e2d6be" stroke-width=".8"/>`;

  A.konpira = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M-4 40 Q40 10 124 32 V120 H-4Z" fill="#4f8a4c"/>
  ${trees(26, 16, 80, ['#3f7a42','#5f9a5c','#4f8a52','#6aa762'], 4, 8)}
  <path d="M44 120 L56 40 H64 L76 120Z" fill="#c9bfae"/>
  ${rep(18, i => { const y = 44 + i*4.4; const t = (y-40)/80; return `<line x1="${(56 - 12*t).toFixed(1)}" y1="${y.toFixed(1)}" x2="${(64 + 12*t).toFixed(1)}" y2="${y.toFixed(1)}" stroke="#a89c86" stroke-width=".9"/>`; })}
  ${rep(6, i => { const y = 50 + i*12; const t = (y-40)/80; const xl = 52 - 14*t, xr = 68 + 14*t; return [xl, xr].map(x => `<rect x="${(x-1.6).toFixed(1)}" y="${y-6}" width="3.2" height="6" fill="#9c968a"/><path d="M${(x-3).toFixed(1)} ${y-6} L${x.toFixed(1)} ${y-9} L${(x+3).toFixed(1)} ${y-6}Z" fill="#7d776c"/>`).join(''); })}
  <rect x="44" y="24" width="32" height="12" fill="#efe6d4"/>
  <path d="M38 26 Q50 22 54 14 L66 14 Q70 22 82 26Z" fill="#6c5c53"/><rect x="40" y="36" width="40" height="3" fill="#8a7a6e"/>
  <circle cx="60" cy="30" r="2.6" fill="#d9b24c"/>`;

  A.ryoma = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  ${sea(66)}
  ${waves([[60,90,24],[80,104,26],[54,112,20]])}
  <path d="M0 50 Q16 44 30 52 L44 120 H0Z" fill="#6b8f4e"/>
  ${trees(8, 50, 70, ['#3f7a42','#4f8a52'], 4, 6)}
  <rect x="12" y="74" width="26" height="46" fill="#cfc6b4"/><rect x="10" y="72" width="30" height="4" fill="#b8ae9a"/>
  <g transform="translate(25 40)">
    <path d="M-7 32 L-6 12 Q-6 4 0 4 Q6 4 6 12 L7 32Z" fill="#4f6168"/>
    <path d="M-6 12 Q0 16 6 12 L4 20 Q0 22 -4 20Z" fill="#3f5056"/>
    <rect x="-6.4" y="26" width="5" height="6" fill="#2f3b40"/><rect x="1.4" y="26" width="5" height="6" fill="#2f3b40"/>
    <circle cx="0" cy="0" r="4.4" fill="#5a6c72"/><path d="M-4 -2 Q0 -7 4 -2" fill="#3f5056"/>
  </g>
  <path d="M90 66 Q96 56 104 60 Q112 56 118 66Z" fill="#5c5a54"/>`;

  A.hirome = `
  <rect width="120" height="120" fill="#efe2c6"/>
  <path d="M0 0 H120 V24 H0Z" fill="#2c4fa0"/>
  <text x="60" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#fff8ec" font-family="Zen Maru Gothic, sans-serif">ひろめ市場</text>
  ${rep(6, i => `<rect x="${i*20}" y="24" width="20" height="10" fill="${i%2?'#d2452b':'#f2b12e'}"/>`)}
  <rect y="78" width="120" height="42" fill="#8b5a3c"/>
  <path d="M30 62 q-4 -14 4 -24 q2 8 8 8 q-2 -10 6 -16 q0 10 6 12 q4 -6 2 -12 q10 10 4 26 Q44 70 30 62Z" fill="#f28a2a"/>
  <path d="M36 62 q-2 -8 4 -14 q2 6 6 6 q0 -6 4 -10 q2 8 4 10 q4 6 0 12Z" fill="#ffd25a"/>
  <path d="M18 76 L82 62 L86 70 L22 84Z" fill="#7a5a3a"/>
  <rect x="24" y="66" width="56" height="3" fill="#3a2c1e" transform="rotate(-12 52 67)"/>
  <ellipse cx="88" cy="98" rx="24" ry="9" fill="#f7f1e3"/>
  ${rep(5, i => `<path d="M${70+i*7.6} 92 h6.6 v8 h-6.6Z" fill="#b8402e"/><path d="M${70+i*7.6} 92 h6.6 v2 h-6.6Z" fill="#4a2a24"/>`)}
  <circle cx="80" cy="102" r="1.6" fill="#6aa04e"/><circle cx="96" cy="102" r="1.6" fill="#f2f2f2"/>`;

  A.ashizuri = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  ${sea(60)}
  ${waves([[6,84,22],[70,96,24],[40,110,26]])}
  <path d="M40 120 Q50 70 70 60 Q96 56 124 64 V120Z" fill="#6b5a48"/>
  <path d="M60 64 Q80 50 124 54 V70 Q96 62 70 70Z" fill="#4f8a4c"/>
  ${trees(10, 50, 66, ['#2f6a3e','#3f7a42'], 4, 6)}
  ${[[78,56],[92,52],[106,56],[70,62]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="1.8" fill="#e5487a"/>`).join('')}
  <rect x="82" y="22" width="12" height="32" fill="#f6f6f2"/><rect x="82" y="22" width="3" height="32" fill="#dfe3ea"/>
  <rect x="80" y="18" width="16" height="5" fill="#2f3f5f"/><rect x="83" y="12" width="10" height="7" fill="#ffe08a"/><path d="M82 12 L88 6 L94 12Z" fill="#2f3f5f"/>
  <path d="M96 15 L120 10 L120 20Z" fill="#fff6c8" opacity=".55"/>
  <path d="M40 120 Q46 100 54 96 Q56 108 50 120Z" fill="#fff" opacity=".6"/>`;

  A.matsuyama = `${sky}
  <path d="M-4 120 Q20 60 60 46 Q100 60 124 120Z" fill="#4f8a4c"/>
  ${trees(26, 56, 116, ['#3f7a42','#5f9a5c','#4f8a52'], 4, 8)}
  <path d="M30 54 Q34 44 44 42 L76 42 Q86 44 90 54Z" fill="#a69d8c"/>
  <rect x="40" y="30" width="40" height="12" fill="#f3f1ea"/>
  ${rep(4, i => `<rect x="${44+i*9}" y="33" width="4" height="4" fill="#2b2f36"/>`)}
  <path d="M34 32 Q42 28 46 22 L74 22 Q78 28 86 32Z" fill="#3d424b"/>
  <rect x="48" y="12" width="24" height="10" fill="#f3f1ea"/>
  <rect x="52" y="14" width="4" height="4" fill="#2b2f36"/><rect x="64" y="14" width="4" height="4" fill="#2b2f36"/>
  <path d="M42 14 Q50 10 54 4 L66 4 Q70 10 78 14Z" fill="#3d424b"/>
  <path d="M52 22 L60 16 L68 22" fill="none" stroke="#f3f1ea" stroke-width=".8"/>
  <line x1="88" y1="44" x2="124" y2="112" stroke="#555" stroke-width=".8"/>
  ${[[96,59],[108,82],[118,101]].map(([x,y]) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y+5}" stroke="#555" stroke-width=".8"/><rect x="${x-3}" y="${y+5}" width="6" height="2" fill="#2c4fa0"/><circle cx="${x}" cy="${y+3.4}" r="1.6" fill="#f2b12e"/>`).join('')}`;

  A.dogo = `
  <rect width="120" height="120" fill="url(#gDusk)"/>
  <rect y="96" width="120" height="24" fill="#5a5148"/>
  <rect x="10" y="66" width="100" height="32" fill="#6b4e36"/>
  ${rep(8, i => `<rect x="${14+i*12}" y="72" width="8" height="10" fill="#ffd27a"/><line x1="${18+i*12}" y1="72" x2="${18+i*12}" y2="82" stroke="#b88a3a" stroke-width=".6"/>`)}
  ${rep(8, i => `<rect x="${14+i*12}" y="86" width="8" height="10" fill="${i===3||i===4?'#3a2a1e':'#ffcf6a'}"/>`)}
  <path d="M4 68 Q16 64 22 56 L98 56 Q104 64 116 68Z" fill="#4a4038"/>
  <rect x="26" y="40" width="68" height="16" fill="#6b4e36"/>
  ${rep(5, i => `<rect x="${30+i*13}" y="44" width="8" height="8" fill="#ffd27a"/>`)}
  <path d="M20 42 Q30 38 36 30 L84 30 Q90 38 100 42Z" fill="#4a4038"/>
  <rect x="44" y="18" width="32" height="12" fill="#6b4e36"/><rect x="48" y="20" width="24" height="7" fill="#ffd27a"/>
  <path d="M38 20 Q48 16 52 10 L68 10 Q72 16 82 20Z" fill="#4a4038"/>
  <g transform="translate(60 7)"><path d="M-5 0 q5 -4 10 0 l2 -3 l-2 4 q-5 2 -10 0Z" fill="#fff"/><line x1="0" y1="1" x2="-1" y2="4" stroke="#fff" stroke-width=".8"/></g>
  <rect x="54" y="84" width="12" height="12" fill="#2a1d14"/><rect x="55" y="84" width="10" height="5" fill="#c8402a"/>
  ${[[30,98],[90,98]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="8" fill="#ffb347" opacity=".2"/><ellipse cx="${x}" cy="${y}" rx="3.4" ry="4.6" fill="#ef5638"/>`).join('')}
  <path d="M104 44 q-4 -6 0 -12 q4 -6 0 -12" stroke="#fff" stroke-opacity=".45" stroke-width="2" fill="none" stroke-linecap="round"/>`;

  A.towel = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <path d="M0 70 Q30 62 60 66 T120 64 V120 H0Z" fill="#9cc48a"/>
  <rect x="58" y="38" width="56" height="38" fill="#f1e6d0"/>
  <path d="M54 40 L86 22 L118 40Z" fill="#7b5a48"/>
  ${rep(4, i => `<rect x="${63+i*12}" y="48" width="7" height="12" fill="#a6c3d4"/>`)}
  <rect x="80" y="64" width="12" height="12" fill="#6b4e36"/>
  <line x1="2" y1="34" x2="56" y2="30" stroke="#6b5a40" stroke-width="1"/>
  ${[['#e5487a',6],['#2c9ad1',20],['#f2b12e',34]].map(([c,x],i) => `<path d="M${x} ${33.4-i*.3} h12 v30 q-6 3 -12 0Z" fill="${c}"/>` + rep(4, j => `<line x1="${x}" y1="${40+j*6}" x2="${x+12}" y2="${40+j*6}" stroke="#fff" stroke-width=".8" opacity=".6"/>`)).join('')}
  ${[['#ffffff',18,92],['#a6d8c8',18,86],['#f7c6d4',18,80],['#ffe7a6',18,74]].map(([c,x,y]) => `<rect x="${x}" y="${y}" width="34" height="6" rx="2.4" fill="${c}" stroke="#d8cbb0" stroke-width=".5"/>`).join('')}
  <rect x="14" y="98" width="42" height="3" fill="#b8956a"/>`;

  A.kurashiki = `${sky}
  <rect x="0" y="34" width="54" height="50" fill="#f8f6f0"/><rect x="0" y="66" width="54" height="18" fill="url(#pNamako)"/>
  <path d="M-4 36 L26 20 L58 36Z" fill="#2e3036"/>
  <rect x="16" y="44" width="10" height="8" fill="#3a3c42"/>
  <rect x="74" y="38" width="46" height="46" fill="#f1ece0"/><rect x="74" y="66" width="46" height="18" fill="url(#pNamako)"/>
  <path d="M70 40 L98 26 L124 40Z" fill="#2e3036"/>
  <rect x="0" y="84" width="120" height="6" fill="#a89c86"/>
  <path d="M0 90 H120 V120 H0Z" fill="#5f9fb4"/>
  <path d="M30 100 h18 M80 110 h22" stroke="#d6eef7" stroke-width="1.1" stroke-linecap="round"/>
  <g transform="translate(64 104)"><path d="M-16 0 h32 l-5 5 h-22Z" fill="#7a5a3a"/><path d="M-4 -12 q4 -3 8 0 l-4 -2Z" fill="#e2c88a"/><path d="M-4 -12 l4 10 l4 -10" fill="#e2c88a"/><line x1="10" y1="-14" x2="14" y2="0" stroke="#5a3b2e" stroke-width="1.2"/></g>
  ${[[58,20],[112,30]].map(([x,y]) => `<path d="M${x} ${y} q-2 30 -10 56 M${x} ${y} q2 30 -4 58 M${x} ${y} q4 28 2 56 M${x} ${y} q-6 24 -16 48" stroke="#6aa04e" stroke-width="1.4" fill="none"/>`).join('')}
  <path d="M58 20 L58 84" stroke="#5a3b2e" stroke-width="2.4"/><path d="M112 30 L112 84" stroke="#5a3b2e" stroke-width="2.4"/>`;

  A.osakajo = `${sky}
  <path d="M0 70 Q30 60 60 64 T120 62 V120 H0Z" fill="#8fbb7d"/>
  <rect y="96" width="120" height="24" fill="#6fa6c8"/>
  <path d="M20 96 L26 70 H94 L100 96Z" fill="#a69d8c"/>
  ${rep(5, i => `<line x1="${22+i*1.4}" y1="${76+i*5}" x2="${98-i*1.4}" y2="${76+i*5}" stroke="#8d8576" stroke-width=".8"/>`)}
  <rect x="34" y="54" width="52" height="16" fill="#f3f1ea"/>
  ${rep(5, i => `<rect x="${38+i*10}" y="58" width="5" height="6" fill="#2b2f36"/>`)}
  <path d="M26 56 Q34 52 38 46 L82 46 Q86 52 94 56Z" fill="#5f9a8c"/>
  <path d="M28 55.4 Q35 52 39 47 L81 47 Q85 52 92 55.4" fill="none" stroke="#d9b24c" stroke-width="1"/>
  <rect x="40" y="36" width="40" height="10" fill="#f3f1ea"/>
  ${rep(4, i => `<rect x="${44+i*9}" y="38" width="4" height="5" fill="#2b2f36"/>`)}
  <path d="M34 38 Q42 34 46 28 L74 28 Q78 34 86 38Z" fill="#5f9a8c"/>
  <path d="M52 28 L60 22 L68 28Z" fill="#5f9a8c" stroke="#d9b24c" stroke-width=".8"/>
  <rect x="46" y="16" width="28" height="12" fill="#f3f1ea"/>
  <rect x="50" y="19" width="4" height="5" fill="#2b2f36"/><rect x="58" y="19" width="4" height="5" fill="#2b2f36"/><rect x="66" y="19" width="4" height="5" fill="#2b2f36"/>
  <path d="M40 18 Q48 14 52 8 L68 8 Q72 14 80 18Z" fill="#5f9a8c"/>
  <path d="M51 7 q-2 -4 1 -6 M69 7 q2 -4 -1 -6" stroke="#e2b84b" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M10 104 h16 M86 110 h20" stroke="#d6eef7" stroke-width="1.1" stroke-linecap="round"/>`;

  A.kuromon = `
  <rect width="120" height="120" fill="#e6dccb"/>
  <path d="M0 0 H120 V20 Q60 8 0 20Z" fill="#3d424b"/>
  ${rep(5, i => `<path d="M0 ${20+i*2} Q60 ${8+i*4} 120 ${20+i*2}" stroke="#565c66" stroke-width=".8" fill="none"/>`)}
  <rect x="30" y="18" width="60" height="12" fill="#1d2433"/>
  <text x="60" y="27.6" text-anchor="middle" font-size="8.4" font-weight="700" fill="#f2c94c" font-family="Zen Maru Gothic, sans-serif">黒門市場</text>
  <path d="M0 22 L40 48 L40 92 L0 120Z" fill="#b9a07e"/><path d="M120 22 L80 48 L80 92 L120 120Z" fill="#a88f6c"/>
  <path d="M40 48 H80 V92 H40Z" fill="#f4ead6"/>
  <path d="M0 120 L40 92 H80 L120 120Z" fill="#8d877b"/>
  <path d="M2 96 L38 82 L38 90 L2 106Z" fill="#dfe8ee"/>
  <g transform="translate(16 92) rotate(-20)"><path d="M-14 0 q10 -8 28 -2 l6 -4 v10 l-6 -4 q-18 6 -28 0Z" fill="#3d5a7a"/><path d="M-14 0 q10 -3 28 -2" stroke="#c9d6e2" stroke-width="1" fill="none"/><circle cx="-9" cy="-1" r="1" fill="#fff"/></g>
  <path d="M118 96 L82 82 L82 90 L118 106Z" fill="#f2e2c4"/>
  <g transform="translate(100 92)"><ellipse cx="0" cy="0" rx="9" ry="5" fill="#d2452b"/><path d="M-9 -2 l-6 -6 M-8 2 l-7 2 M9 -2 l6 -6 M8 2 l7 2 M-4 -4 l-3 -6 l-3 1 M4 -4 l3 -6 l3 1" stroke="#d2452b" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="-2" cy="-4" r="1" fill="#1d2433"/><circle cx="2" cy="-4" r="1" fill="#1d2433"/></g>
  <ellipse cx="60" cy="40" rx="4" ry="5" fill="#e8503a"/><rect x="54" y="58" width="12" height="20" fill="#d9ccb2"/>`;

  seed(61);
  A.dotonbori = `
  <rect width="120" height="120" fill="url(#gNight)"/>
  ${[[0,20,22],[22,10,18],[40,26,20],[60,8,22],[82,18,18],[100,12,20]].map(([x,y,w]) => `<rect x="${x}" y="${y}" width="${w}" height="${80-y}" fill="#2a2f52"/>`).join('')}
  <rect x="4" y="30" width="16" height="26" rx="2" fill="#ff4f7b"/><rect x="6" y="32" width="12" height="22" fill="none" stroke="#ffd0dc" stroke-width=".8"/>
  <rect x="26" y="18" width="12" height="40" rx="2" fill="#29c4e6"/>${rep(4, i => `<circle cx="32" cy="${24+i*9}" r="2.6" fill="#e9fbff"/>`)}
  <rect x="44" y="34" width="34" height="20" rx="3" fill="#ffd23f"/><path d="M50 46 q6 -6 12 0 t12 0" stroke="#d2452b" stroke-width="2" fill="none"/>
  <g transform="translate(96 30)"><ellipse cx="0" cy="0" rx="10" ry="6" fill="#ef5a3a"/><path d="M-10 -2 l-6 -7 M-9 3 l-8 2 M10 -2 l6 -7 M9 3 l8 2" stroke="#ef5a3a" stroke-width="2.4" stroke-linecap="round"/><circle cx="-3" cy="-6" r="1.6" fill="#fff"/><circle cx="3" cy="-6" r="1.6" fill="#fff"/></g>
  <rect x="84" y="46" width="30" height="12" rx="2" fill="#9b6af0"/>
  <rect y="80" width="120" height="40" fill="#141c3e"/>
  ${rep(30, () => { const x = r()*120, y = 84 + r()*32; return `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x+3+r()*6).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${['#ff4f7b','#29c4e6','#ffd23f','#9b6af0'][Math.floor(r()*4)]}" stroke-width="1.2" opacity=".7"/>`; })}
  <path d="M10 78 Q60 64 110 78" stroke="#c9b48a" stroke-width="3" fill="none"/>
  <rect x="0" y="76" width="120" height="3" fill="#3a3f62"/>`;

  /* ---------- Yamaguchi and San'in ---------- */
  A.sarakura = `${sky}
  <path d="M-4 90 Q30 70 60 20 Q76 4 90 22 Q110 50 124 70 V120 H-4Z" fill="#4f8a4c"/>
  ${trees(26, 30, 100, ['#3f7a42','#5f9a5c','#4f8a52'], 4, 7)}
  <rect x="68" y="10" width="14" height="10" fill="#e8e4da"/><rect x="66" y="8" width="18" height="3" fill="#5a6b80"/><rect x="70" y="12" width="10" height="4" fill="#a6c3d4"/>
  <line x1="6" y1="112" x2="74" y2="20" stroke="#555" stroke-width=".8"/>
  <g transform="translate(40 66) rotate(-54)"><rect x="-6" y="-4" width="12" height="8" rx="2" fill="#2f8a64"/><rect x="-4" y="-2.4" width="8" height="3" fill="#e9f6ff"/></g>
  <rect y="102" width="120" height="18" fill="#6fa6c8"/>
  ${rep(10, i => `<rect x="${i*12+2}" y="${96-((i*5)%3)*3}" width="9" height="${8+((i*5)%3)*3}" fill="#d9d4c8"/>`)}`;

  A.karato = `
  <rect width="120" height="120" fill="#e6eef2"/>
  <path d="M0 0 H120 V30 L60 18 L0 30Z" fill="#5a6b80"/>
  ${rep(10, i => `<line x1="${i*12}" y1="${30-Math.abs(60-i*12)/5}" x2="${i*12}" y2="0" stroke="#4a5a6e" stroke-width=".8"/>`)}
  <rect y="78" width="120" height="42" fill="#6a7684"/>
  <g transform="translate(56 54)">
    <ellipse cx="0" cy="0" rx="26" ry="20" fill="#e8d9b0"/>
    <ellipse cx="0" cy="6" rx="22" ry="12" fill="#fbf7ee"/>
    ${rep(10, i => `<circle cx="${(-16+i*3.6).toFixed(1)}" cy="${(i%2?-6:-10).toFixed(1)}" r="1.6" fill="#a88f6c"/>`)}
    <path d="M26 -2 l10 -8 v20Z" fill="#e8d9b0"/>
    <circle cx="-14" cy="-6" r="4" fill="#fff"/><circle cx="-14" cy="-6" r="2" fill="#1d2433"/>
    <path d="M-24 2 q4 4 0 6" stroke="#c8402a" stroke-width="2" fill="none"/>
    <path d="M-10 10 q4 2 8 0" stroke="#d8c9a0" stroke-width="1" fill="none"/>
  </g>
  <rect x="10" y="90" width="100" height="22" rx="4" fill="#2c3e30"/>
  ${rep(6, i => `<g transform="translate(${20+i*16} 101)"><rect x="-6" y="-2" width="12" height="7" rx="3" fill="#fbf7ee"/><path d="M-7 -3 q7 -5 14 0 v2 q-7 -3 -14 0Z" fill="${['#f08a6a','#f7f1e3','#d2452b','#f0a24a','#f7f1e3','#e5687a'][i]}"/></g>`)}`;

  A.bishanohana = `${sky}
  ${sea(56)}
  ${waves([[10,80,22],[70,92,26],[40,108,24]])}
  <path d="M30 120 Q36 76 60 64 Q90 58 124 62 V120Z" fill="#7d6a58"/>
  <path d="M54 66 Q80 52 124 56 V64 Q90 60 60 70Z" fill="#8fbb7d"/>
  <path d="M60 66 Q80 58 112 60" stroke="#e8e2d0" stroke-width="2.4" fill="none"/>
  <rect x="96" y="46" width="14" height="12" fill="#e8e4da"/><rect x="94" y="44" width="18" height="3" fill="#5a6b80"/>
  <path d="M100 58 v-4 M106 58 v-4" stroke="#5a6b80" stroke-width="1"/>
  <rect x="58" y="56" width="5" height="10" fill="#c8c2b4"/><path d="M57 56 h7 l-3.5 -4Z" fill="#9c968a"/>
  <path d="M20 40 q3 -3 6 0 q3 -3 6 0" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>`;

  A.tsunoshima = `${sky}
  <rect y="58" width="120" height="62" fill="#3fbfc0"/>
  <path d="M0 70 H120 V120 H0Z" fill="#2aa3b5" opacity=".5"/>
  <path d="M0 90 H120 V120 H0Z" fill="#2384a8" opacity=".5"/>
  <path d="M84 60 Q100 46 124 52 V64 Q104 60 84 64Z" fill="#6aa04e"/>
  <rect x="104" y="34" width="8" height="18" fill="#c9c5bb"/><rect x="102" y="31" width="12" height="4" fill="#2f3f5f"/><rect x="105" y="27" width="6" height="5" fill="#ffe08a"/><path d="M104 27 L108 23 L112 27Z" fill="#2f3f5f"/>
  <path d="M-4 112 C30 96 60 80 92 62" stroke="#f4f6f9" stroke-width="4.4" fill="none"/>
  <path d="M-4 112 C30 96 60 80 92 62" stroke="#c9d6e2" stroke-width="1" fill="none" transform="translate(0 3)"/>
  ${rep(12, i => { const t = i/12; const x = -4 + t*96, y = 112 - 50*t + 6*Math.sin(t*Math.PI); return `<line x1="${x.toFixed(1)}" y1="${(y+1).toFixed(1)}" x2="${x.toFixed(1)}" y2="${(y+10).toFixed(1)}" stroke="#e9eef4" stroke-width="1.4"/>`; })}
  <path d="M8 74 h16 M40 96 h20 M74 106 h22" stroke="#bff3f0" stroke-width="1.1" stroke-linecap="round"/>`;

  A.ushirobata = `
  <rect width="120" height="120" fill="url(#gDusk)"/>
  <circle cx="88" cy="40" r="9" fill="#ffd9a0"/>
  <rect y="44" width="120" height="16" fill="#5e7ab0"/>
  ${rep(7, i => `<circle cx="${10+i*16}" cy="${50+(i%2)*4}" r="1.2" fill="#fff3a0"/>`)}
  ${rep(9, i => { const y = 58 + i*7; const col = i%2 ? '#8fb86a' : '#7aa85a'; const wave = 4 + (i%3)*2; return `<path d="M-4 ${y} Q30 ${y-wave} 60 ${y} T124 ${y-2} V${y+8} Q90 ${y+4} 60 ${y+8} T-4 ${y+6}Z" fill="${col}"/><path d="M-4 ${y} Q30 ${y-wave} 60 ${y} T124 ${y-2}" stroke="#bcd9e6" stroke-width="1.2" fill="none" opacity=".8"/>`; })}`;

  A.motonosumi = `${sky}
  ${sea(60)}
  ${waves([[60,80,24],[80,96,22],[70,110,26]])}
  <path d="M-4 40 Q30 34 50 50 Q60 64 56 84 Q46 112 -4 120Z" fill="#5f9a5c"/>
  <path d="M-4 120 Q46 112 56 84 Q62 96 52 120Z" fill="#7d6a58"/>
  ${rep(12, i => { const t = i/11; const x = 12 + t*38, y = 44 + t*58 + Math.sin(t*6)*5; const sz = 7 - t*1.6; return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${(sz/7).toFixed(2)})"><path d="M-7 -6 Q0 -8 7 -6 L7 -4 L-7 -4Z" fill="#d8452c"/><rect x="-5.6" y="-4" width="1.8" height="10" fill="#d8452c"/><rect x="3.8" y="-4" width="1.8" height="10" fill="#d8452c"/><rect x="-5" y="-2" width="10" height="1.2" fill="#d8452c"/></g>`; })}
  <path d="M56 92 q6 -4 10 2 M58 100 q6 -2 8 4" stroke="#fff" stroke-width="1.6" fill="none" opacity=".8"/>`;

  A.akiyoshi = `
  <rect width="120" height="120" fill="#2b2f36"/>
  <path d="M0 0 H120 V30 Q90 20 60 26 Q30 20 0 30Z" fill="#3a3f48"/>
  ${rep(12, i => `<path d="M${6+i*10} ${22+(i%3)*4} l3 ${10+(i%4)*5} l3 ${-10-(i%4)*5}Z" fill="#c9bfa6"/>`)}
  <ellipse cx="60" cy="52" rx="40" ry="20" fill="#ffcf8a" opacity=".12"/>
  ${rep(6, i => { const y = 64 + i*9; const w = 26 + i*16; return `<path d="M${60-w/2} ${y} q${w/4} -6 ${w/2} 0 q${w/4} -6 ${w/2} 0 L${60+w/2} ${y+7} L${60-w/2} ${y+7}Z" fill="${i%2?'#d9cfb6':'#e8dfc8'}"/><path d="M${60-w/2+3} ${y+1.4} q${w/4-2} -4 ${w/2-3} 0 q${w/4-2} -4 ${w/2-3} 0" fill="#7fc6d6" opacity=".85"/>`; })}
  <path d="M8 120 L12 78 L16 120Z M104 120 L108 70 L112 120Z" fill="#b8ad94"/>`;

  A.tsuwano = `${sky}
  <path d="M0 52 Q30 38 60 46 T120 42 V120 H0Z" fill="#6aa04e"/>
  <rect x="0" y="40" width="70" height="44" fill="#f8f6f0"/>
  <rect x="0" y="62" width="70" height="22" fill="url(#pNamako)"/>
  <path d="M-4 42 L30 28 L74 42Z" fill="#9c3c2a"/>
  <rect x="24" y="48" width="12" height="8" fill="#3a3c42"/>
  <rect x="84" y="40" width="6" height="40" fill="#2a3a4a"/><path d="M80 42 L87 30 L94 42Z" fill="#2a3a4a"/>
  <rect x="78" y="56" width="36" height="28" fill="#e8e2d6"/><path d="M76 58 L96 46 L116 58Z" fill="#6b4e36"/>
  <path d="M96 64 a4 4 0 0 1 8 0 v8 h-8Z" fill="#a6c3d4"/>
  <rect x="0" y="84" width="120" height="6" fill="#a89c86"/>
  <rect y="90" width="120" height="30" fill="#6fb3c4"/>
  ${[[20,100,'#f08a3a'],[40,108,'#fff'],[58,98,'#e8503a'],[80,110,'#f2b12e'],[100,102,'#fff']].map(([x,y,c]) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="0" rx="5" ry="2" fill="${c}"/><path d="M5 0 l3 -2 v4Z" fill="${c}"/>${c==='#fff'?'<circle cx="-1" cy="0" r="1.2" fill="#e8503a"/>':''}</g>`).join('')}
  ${rep(5, i => `<path d="M${10+i*24} 90 v-8 M${12+i*24} 90 v-6" stroke="#4f8a4c" stroke-width="1.4"/><circle cx="${11+i*24}" cy="80" r="2" fill="#7a5ad1"/>`)}`;

  A.winery = `${sky}
  <path d="M0 64 Q30 54 60 60 T120 56 V120 H0Z" fill="#9cc48a"/>
  ${rep(5, i => `<path d="M-4 ${80+i*8} Q60 ${72+i*8} 124 ${80+i*8}" stroke="#5f9a5c" stroke-width="2.4" fill="none"/>`)}
  <rect x="26" y="36" width="56" height="34" fill="#f3e8cf"/>
  <path d="M22 38 L54 20 L86 38Z" fill="#b5573a"/>
  <rect x="48" y="12" width="12" height="24" fill="#f3e8cf"/><path d="M46 14 L54 4 L62 14Z" fill="#b5573a"/>
  ${rep(4, i => `<path d="M${32+i*12} 70 V56 a4 4 0 0 1 8 0 V70Z" fill="#6b4e36"/>`)}
  <g transform="translate(96 82)"><path d="M-8 -16 h16 q0 14 -8 16 q-8 -2 -8 -16Z" fill="#fff" fill-opacity=".85" stroke="#9fb3c8" stroke-width=".8"/><path d="M-7 -10 h14 q-1 8 -7 10 q-6 -2 -7 -10Z" fill="#8a1f3a"/><rect x="-1" y="0" width="2" height="14" fill="#cfd8e2"/><ellipse cx="0" cy="14" rx="7" ry="2" fill="#cfd8e2"/></g>
  <g transform="translate(16 82)">${[[0,0],[5,0],[-5,0],[2.5,5],[-2.5,5],[0,10]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="3.2" fill="#6b3a8a"/>`).join('')}<path d="M0 -4 q4 -6 8 -4" stroke="#4f8a4c" stroke-width="1.6" fill="none"/></g>`;

  A.izumo = `${sky}
  <path d="M0 50 Q30 34 60 40 T120 36 V120 H0Z" fill="#4f8a4c"/>
  <rect y="90" width="120" height="30" fill="#d9d2c2"/>
  <rect x="18" y="56" width="84" height="34" fill="#c9a77a"/>
  ${rep(7, i => `<rect x="${20+i*12}" y="56" width="3" height="34" fill="#a8865a"/>`)}
  <path d="M6 58 Q20 50 26 36 L94 36 Q100 50 114 58Z" fill="#7a6a5a"/>
  <path d="M22 36 L60 22 L98 36Z" fill="#6a5a4a"/>
  <path d="M44 22 l-4 -8 M76 22 l4 -8" stroke="#6a5a4a" stroke-width="2.4"/>
  <path d="M14 60 Q60 80 106 60 L106 66 Q60 90 14 66Z" fill="#e9d48a"/>
  <path d="M14 63 Q60 84 106 63" stroke="#c9b06a" stroke-width="1" fill="none"/>
  ${rep(9, i => { const x = 22 + i*9.6; const t = (x-14)/92; const y = 66 + 22*4*t*(1-t)*.92; return `<path d="M${x} ${y.toFixed(1)} l-1.6 8 h3.2Z" fill="#e9d48a"/>`; })}
  <path d="M40 74 l3 4 h-6Z M80 74 l3 4 h-6Z" fill="#fff"/>`;

  A.inasabeach = `
  <rect width="120" height="120" fill="url(#gDusk)"/>
  <circle cx="30" cy="58" r="12" fill="#ffcf8a"/>
  <rect y="60" width="120" height="30" fill="#7b7ab0"/>
  ${rep(5, i => `<line x1="${18+i*2}" y1="${66+i*4}" x2="${42-i*2}" y2="${66+i*4}" stroke="#ffd9a0" stroke-width="1"/>`)}
  <path d="M62 62 Q66 40 78 38 Q90 40 92 62Z" fill="#4a4040"/>
  <path d="M74 40 Q78 30 84 40Z" fill="#2f6a3e"/>
  <rect x="76" y="32" width="4" height="4" fill="#d8452c"/><path d="M73 32 h10 v-1.4 h-10Z" fill="#d8452c"/>
  <path d="M0 88 Q60 80 120 90 V120 H0Z" fill="#e9cf9a"/>
  <path d="M0 96 Q60 88 120 98" stroke="#fff" stroke-width="1.6" fill="none" opacity=".7"/>
  ${rep(8, i => `<path d="M${8+i*14} ${106+(i%2)*4} q3 -1.6 6 0" stroke="#d4b47a" stroke-width="1" fill="none"/>`)}`;

  A.yushien = `${sky}
  <path d="M-4 50 Q30 30 60 40 Q90 30 124 46 V70 H-4Z" fill="#4f8a4c"/>
  ${rep(5, i => `<line x1="${92+i*2.4}" y1="44" x2="${90+i*2.6}" y2="76" stroke="#fff" stroke-width="${1.8-i*.2}" opacity=".9"/>`)}
  <rect y="66" width="120" height="54" fill="#5fa6bc"/>
  ${[[24,82,'#f06aa4'],[44,90,'#e5487a'],[66,84,'#f7a6c4'],[86,96,'#e5487a'],[34,104,'#f7a6c4'],[58,110,'#f06aa4'],[96,110,'#f7a6c4'],[12,96,'#e5487a'],[76,102,'#ffffff']].map(([x,y,c]) => `<g transform="translate(${x} ${y})">${rep(7, i => { const a = i*Math.PI*2/7; return `<ellipse cx="${(Math.cos(a)*4).toFixed(1)}" cy="${(Math.sin(a)*2.2).toFixed(1)}" rx="4" ry="2.6" fill="${c}"/>`; })}<circle r="2" fill="#f2c94c"/></g>`).join('')}
  <rect x="10" y="56" width="10" height="2.4" fill="#8c8678"/><rect x="12" y="50" width="6" height="6" fill="#b4ae9f"/><path d="M8 50 L15 44 L22 50Z" fill="#8c8678"/><rect x="13.5" y="58" width="3" height="8" fill="#8c8678"/>`;

  A.eshima = `${sky}
  <rect y="74" width="120" height="46" fill="url(#gSea)"/>
  ${waves([[10,96,20],[70,106,24]])}
  <path d="M-4 104 L4 104 Q30 104 52 46 Q60 30 68 46 Q90 104 116 104 L124 104 L124 112 L-4 112Z" fill="#f4f6f9"/>
  <path d="M4 104 Q30 104 52 46 Q60 30 68 46 Q90 104 116 104" stroke="#c9d6e2" stroke-width="1.4" fill="none"/>
  ${rep(9, i => `<rect x="${12+i*12}" y="${i===4?44:i===3||i===5?62:i===2||i===6?82:96}" width="3" height="${i===4?70:i===3||i===5?52:i===2||i===6?32:18}" fill="#dfe6ee"/>`)}
  <g transform="translate(40 72) rotate(-62)"><rect x="-5" y="-3" width="10" height="6" rx="2" fill="#d2452b"/></g>`;

  A.mizuki = `${sky}
  <rect x="0" y="34" width="34" height="56" fill="#e8e2d6"/><path d="M-4 36 L15 24 L38 36Z" fill="#5d706b"/>
  <rect x="86" y="30" width="34" height="60" fill="#efe6d4"/><path d="M82 32 L103 20 L124 32Z" fill="#7b5a48"/>
  ${rep(4, i => `<rect x="${92+i*7}" y="40" width="4" height="8" fill="#a6c3d4"/>`)}
  <path d="M0 120 L34 86 H86 L120 120Z" fill="#cfc5b2"/>
  ${[[22,96,1.1],[60,86,.8],[98,96,1.1]].map(([x,y,k]) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-8" y="10" width="16" height="6" fill="#9c968a"/><path d="M-6 10 Q-8 -4 0 -6 Q8 -4 6 10Z" fill="#7a6a4e"/><circle cx="0" cy="-8" r="6" fill="#7a6a4e"/><circle cx="-2" cy="-9" r="1.6" fill="#e9e2c8"/><circle cx="2.4" cy="-9" r="1.6" fill="#e9e2c8"/><circle cx="-2" cy="-9" r=".7" fill="#2b2f36"/><circle cx="2.4" cy="-9" r=".7" fill="#2b2f36"/><path d="M-5 -13 l-2 -4 M5 -13 l2 -4" stroke="#7a6a4e" stroke-width="1.6" stroke-linecap="round"/></g>`).join('')}
  <g transform="translate(60 50)"><line x1="0" y1="-14" x2="0" y2="-8" stroke="#555" stroke-width=".8"/><ellipse cx="0" cy="0" rx="6" ry="8" fill="#f3e6c8" stroke="#c94a2e" stroke-width="1"/><path d="M-6 -2 h12 M-6 2 h12" stroke="#c94a2e" stroke-width=".6"/><rect x="-3" y="-9" width="6" height="2" fill="#2b2f36"/><rect x="-3" y="7" width="6" height="2" fill="#2b2f36"/></g>`;

  A.manga = `${sky}
  <path d="M0 76 Q30 68 60 72 T120 70 V120 H0Z" fill="#9cc48a"/>
  <rect x="14" y="34" width="70" height="44" fill="#f6efe2"/>
  <rect x="14" y="30" width="70" height="6" fill="#2c4fa0"/>
  ${rep(5, i => `<rect x="${18+i*13}" y="42" width="9" height="12" fill="#a6c3d4"/>`)}
  <rect x="42" y="60" width="14" height="18" fill="#2c4fa0"/>
  <path d="M84 30 h26 q4 0 4 4 v16 q0 4 -4 4 h-14 l-6 6 v-6 h-6 q-4 0 -4 -4Z" fill="#ffffff" stroke="#1d2433" stroke-width="1.2"/>
  <text x="100" y="47" text-anchor="middle" font-size="13" font-weight="700" fill="#d2452b" font-family="Zen Maru Gothic, sans-serif">!?</text>
  <g transform="translate(86 92) rotate(-24)"><circle r="12" fill="#cfe6f5" fill-opacity=".7" stroke="#6b4e36" stroke-width="3"/><rect x="10" y="-2.6" width="18" height="5.2" rx="2.4" fill="#6b4e36"/><path d="M-6 -6 q3 -3 7 -3" stroke="#fff" stroke-width="1.6" fill="none"/></g>
  <path d="M0 104 H60 V108 H0Z" fill="#c8402a"/>${rep(6, i => `<rect x="${4+i*10}" y="98" width="1.6" height="6" fill="#c8402a"/>`)}`;

  seed(71);
  A.tottori = `
  <rect width="120" height="120" fill="url(#gDay)"/>
  <rect y="40" width="120" height="16" fill="#3f8fbf"/>
  <path d="M0 54 Q30 38 60 48 Q90 30 120 46 V120 H0Z" fill="#e8c88e"/>
  <path d="M60 48 Q90 30 120 46 V60 Q90 46 64 56Z" fill="#d4ae6e"/>
  ${rep(10, i => `<path d="M${-4+(i%2)*6} ${66+i*5.6} Q30 ${60+i*5.6} 60 ${66+i*5.6} T124 ${64+i*5.6}" stroke="#d0a866" stroke-width="1" fill="none"/>`)}
  <g transform="translate(40 76)">
    <path d="M-12 0 q2 -10 8 -8 q4 -8 8 0 q4 -6 6 2 l6 -10 q3 -3 4 2 l-4 8 q-2 6 -6 8 h-20 q-4 -2 -2 -2Z" fill="#a8743e"/>
    ${[-8,-4,6,10].map(x => `<line x1="${x}" y1="2" x2="${x}" y2="16" stroke="#8a5a2e" stroke-width="2"/>`).join('')}
    <circle cx="20" cy="-10" r="1" fill="#1d2433"/>
  </g>
  <g transform="translate(26 70)"><path d="M-3 12 L0 0 L3 12Z" fill="#2c4fa0"/><circle cx="0" cy="-2" r="2.4" fill="#fbe7d6"/></g>
  <path d="M80 22 q8 -6 16 0 q-8 -2 -16 0Z" fill="#d2452b"/><line x1="88" y1="22" x2="88" y2="34" stroke="#555" stroke-width=".6"/>
  <rect x="94" y="96" width="20" height="12" fill="#f3e8cf"/><path d="M92 98 L104 90 L116 98Z" fill="#b5573a"/>`;

  A.arima = `
  <rect width="120" height="120" fill="url(#gDusk)"/>
  <path d="M0 56 Q30 40 60 46 T120 42 V120 H0Z" fill="#4f6a4c"/>
  <path d="M0 120 L48 70 H72 L120 120Z" fill="#b8a98e"/>
  ${rep(5, i => `<path d="M${36-i*8} ${84+i*8} H${84+i*8}" stroke="#a69676" stroke-width=".8"/>`)}
  <rect x="0" y="54" width="44" height="50" fill="#6b4e36"/>
  ${rep(4, i => `<rect x="${4+i*10}" y="62" width="7" height="10" fill="#ffd27a"/>`)}
  <path d="M-4 56 L20 44 L48 56Z" fill="#3d3530"/>
  <rect x="76" y="50" width="44" height="54" fill="#6b4e36"/>
  ${rep(4, i => `<rect x="${80+i*10}" y="58" width="7" height="10" fill="#ffd27a"/>`)}
  <path d="M72 52 L98 40 L124 52Z" fill="#3d3530"/>
  <ellipse cx="60" cy="98" rx="20" ry="6" fill="#5c5a54"/>
  <ellipse cx="60" cy="97" rx="17" ry="4.6" fill="#b4642a"/>
  <ellipse cx="56" cy="96" rx="6" ry="1.2" fill="#d6884a"/>
  ${[[50,86,8],[62,78,9],[70,68,7],[56,64,6]].map(([x,y,rr]) => `<circle cx="${x}" cy="${y}" r="${rr}" fill="#fff" opacity=".55"/>`).join('')}
  ${[[20,104],[100,104]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#ffb347" opacity=".22"/><ellipse cx="${x}" cy="${y}" rx="3.2" ry="4.4" fill="#ef5638"/>`).join('')}`;

  const symbols = Object.entries(A).map(([k, v]) => `<symbol id="a-${k}" viewBox="0 0 120 120"><g clip-path="url(#cc)">${v}</g></symbol>`).join('');
  return { keys:Object.keys(A), svg:`<svg width="0" height="0" style="position:absolute" aria-hidden="true">${symbols}</svg>` };
})();
