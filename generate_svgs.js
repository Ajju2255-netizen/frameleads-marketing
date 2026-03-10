const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'blogs');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const baseSvg = (content) => `
<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Deep elegant gradient matching the 2nd & 3rd inspirations -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FF8A3D" />
      <stop offset="60%" stop-color="#DE5D1A" />
      <stop offset="100%" stop-color="#9E3500" />
    </linearGradient>
    <radialGradient id="glowHighlight" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.2)" />
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0)" />
    </radialGradient>
  </defs>
  
  <rect width="100%" height="100%" fill="url(#bgGradient)"/>
  <rect width="100%" height="100%" fill="url(#glowHighlight)"/>
  
  <g transform="translate(400, 250)" stroke="#FFF6F2" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${content}
  </g>
</svg>
`;

// Helper for randomish but deterministic data lines
const hLine = (x1, x2, y) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" opacity="${Math.random() * 0.5 + 0.3}"/>`;
const vLine = (x, y1, y2) => `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" opacity="${Math.random() * 0.5 + 0.3}"/>`;
const circ = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFF6F2"/>`;

const icons = {
  'geo_seo_blog.svg': `
    <!-- Concentric detailed data circles / AI transformation -->
    ${Array.from({ length: 8 }).map((_, i) => `<circle cx="0" cy="0" r="${20 + i * 15}" stroke-dasharray="${5 + i * 2} ${10 + i}" opacity="${0.8 - i * 0.05}"/>`).join('')}
    <!-- Center core -->
    <circle cx="0" cy="0" r="10" fill="#FFF6F2" opacity="0.9"/>
    <path d="M-10,-10 L-50,-50 M10,-10 L50,-50 M-10,10 L-50,50 M10,10 L50,50" stroke-width="2" opacity="0.6"/>
    <!-- Intricate network nodes -->
    <circle cx="-50" cy="-50" r="4" fill="#FFF6F2"/>
    <circle cx="50" cy="-50" r="4" fill="#FFF6F2"/>
    <circle cx="-50" cy="50" r="4" fill="#FFF6F2"/>
    <circle cx="50" cy="50" r="4" fill="#FFF6F2"/>
    <!-- Connecting geometric data tracks -->
    <path d="M-80,-20 L-50,-50 L0,-70 L50,-50 L80,-20 M-80,20 L-50,50 L0,70 L50,50 L80,20" stroke-width="1" opacity="0.4"/>
    <line x1="-120" y1="0" x2="-80" y2="0" stroke-width="1.5" stroke-dasharray="4 4"/>
    <line x1="80" y1="0" x2="120" y2="0" stroke-width="1.5" stroke-dasharray="4 4"/>
  `,

  'ai_spam_blog.svg': `
    <!-- Complex filtration network -->
    <path d="M-100,-40 L-40,0 L-100,40 M-80,-40 L-20,0 L-80,40 M-60,-40 L0,0 L-60,40" stroke-width="1" opacity="0.5"/>
    <!-- Central processing core -->
    <rect x="-20" y="-30" width="40" height="60" rx="4" stroke-width="2"/>
    <line x1="-10" y1="-15" x2="10" y2="-15" stroke-width="1.5"/>
    <line x1="-10" y1="0" x2="10" y2="0" stroke-width="1.5"/>
    <line x1="-10" y1="15" x2="10" y2="15" stroke-width="1.5"/>
    <!-- Output fine data streams -->
    <path d="M20,0 C50,0 50,-60 100,-60 M20,0 C50,0 50,0 100,0 M20,0 C50,0 50,60 100,60" stroke-width="1.5"/>
    ${circ(100, -60, 3)} ${circ(100, 0, 3)} ${circ(100, 60, 3)}
    <!-- Sub-tracks -->
    <path d="M60,-30 L100,-30 M60,30 L100,30" stroke-dasharray="3 3"/>
  `,

  'intent_signal_blog.svg': `
    <!-- Abstract fingerprint/wave representation -->
    ${Array.from({ length: 12 }).map((_, i) => `<path d="M${-80 + i * 10},80 C${-40 + i * 15},${-80 + Math.sin(i) * 50} ${40 - i * 15},${-80 + Math.cos(i) * 50} ${80 - i * 10},80" stroke-width="1.5" opacity="${0.8 - Math.abs(6 - i) * 0.08}"/>`).join('')}
    <!-- Intersecting data axes -->
    <line x1="-120" y1="80" x2="120" y2="80" stroke-width="2" opacity="0.7"/>
    <line x1="0" y1="-100" x2="0" y2="100" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/>
    <!-- Signal hit points -->
    ${circ(-30, 0, 3)} ${circ(30, 20, 3)} ${circ(-10, -30, 4)} ${circ(50, -10, 3)}
    <!-- Surrounding tech lines -->
    ${hLine(-100, -70, -20)} ${hLine(70, 100, -40)} ${vLine(-90, 40, 70)}
  `,

  'mer_roas_blog.svg': `
    <!-- Complex rising analytics chart with secondary data -->
    <path d="M-120,60 L-80,40 L-40,50 L0,-10 L40,-30 L80,-90 L120,-110" stroke-width="2.5"/>
    <path d="M-120,40 L-80,0 L-40,20 L0,-40 L40,-50 L80,-70" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
    <path d="M-120,80 L-80,90 L-40,70 L0,90 L40,80 L80,100" stroke-width="1" opacity="0.4"/>
    <!-- Shattering effect below main line -->
    <path d="M-20,20 L-40,40 L-30,50 M10,10 L30,40 L20,60 M-60,70 L-50,60" stroke-width="1" opacity="0.6"/>
    <!-- Grid axes -->
    <line x1="-120" y1="120" x2="120" y2="120" stroke-width="2" opacity="0.6"/>
    <line x1="-120" y1="120" x2="-120" y2="-120" stroke-width="2" opacity="0.6"/>
    <!-- Grid measurement ticks -->
    ${Array.from({ length: 5 }).map((_, i) => `<line x1="-120" y1="${120 - i * 50}" x2="-115" y2="${120 - i * 50}" stroke-width="1.5"/>`).join('')}
    ${Array.from({ length: 5 }).map((_, i) => `<line x1="${-120 + i * 50}" y1="120" x2="${-120 + i * 50}" y2="125" stroke-width="1.5"/>`).join('')}
    <!-- Target node -->
    <circle cx="120" cy="-110" r="4" fill="#FFF6F2"/>
    <circle cx="120" cy="-110" r="10" stroke-dasharray="2 2"/>
  `,

  'digital_twin_blog.svg': `
    <!-- Complex geometric multi-layer representation -->
    <rect x="-60" y="-60" width="80" height="80" rx="8" stroke-width="1.5"/>
    <rect x="-20" y="-20" width="80" height="80" rx="8" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
    <path d="M-60,-60 L-20,-20 M20,-60 L60,-20 M-60,20 L-20,60 M20,20 L60,60" stroke-width="1" opacity="0.5"/>
    <!-- Detailed technical marks -->
    <circle cx="-20" cy="-20" r="20" stroke-width="1" opacity="0.7"/>
    <circle cx="20" cy="20" r="20" stroke-width="1" stroke-dasharray="2 2" opacity="0.5"/>
    <!-- Annotations lines -->
    <polyline points="-80,-80 -60,-60" stroke-width="1" opacity="0.5"/>
    <polyline points="-80,-80 -100,-80" stroke-width="1" opacity="0.5"/>
    <polyline points="80,80 60,60" stroke-width="1" opacity="0.5"/>
    <polyline points="80,80 100,80" stroke-width="1" opacity="0.5"/>
  `,

  'saas_pql_blog.svg': `
    <!-- Intricate Server / Funnel -->
    <path d="M-60,-80 L60,-80 L80,-40 L80,0 L60,40 L60,80 L-60,80 L-60,40 L-80,0 L-80,-40 Z" stroke-width="1.5" opacity="0.3"/>
    <rect x="-40" y="-60" width="80" height="20" rx="2" stroke-width="1.5"/>
    <rect x="-40" y="-20" width="80" height="20" rx="2" stroke-width="1.5"/>
    <rect x="-40" y="20" width="80" height="20" rx="2" stroke-width="1.5"/>
    <!-- Data points passing through -->
    <circle cx="0" cy="-50" r="3" fill="#FFF6F2"/>
    <circle cx="-20" cy="-10" r="3" fill="#FFF6F2"/>
    <circle cx="20" cy="-10" r="3" fill="#FFF6F2"/>
    <circle cx="0" cy="30" r="4" fill="#FFF6F2"/>
    <!-- Circuit lines cutting across -->
    <path d="M-100,-50 L-40,-50 M-100,-10 L-40,-10 M-100,30 L-40,30" stroke-width="1" stroke-dasharray="3 3"/>
    <path d="M40,-50 L100,-50 M40,-10 L100,-10 M40,30 L100,30" stroke-width="1" stroke-dasharray="3 3"/>
  `,

  'identity_travel_blog.svg': `
    <!-- Spherical astrolabe / globe logic -->
    <circle cx="0" cy="0" r="60" stroke-width="1.5"/>
    <ellipse cx="0" cy="0" rx="60" ry="20" stroke-width="1" opacity="0.6"/>
    <ellipse cx="0" cy="0" rx="20" ry="60" stroke-width="1" opacity="0.6"/>
    <!-- Location pinpoint tracking -->
    <path d="M-30,-40 L-10,-55 L10,-40 L30,-50 L50,-20 L60,0 L80,-10" stroke-width="1.5"/>
    ${circ(-30, -40, 3)} ${circ(10, -40, 3)} ${circ(50, -20, 3)}
    <!-- Technical framing angles -->
    <path d="M-80,-60 L-80,-80 L-60,-80" stroke-width="1" opacity="0.5"/>
    <path d="M80,60 L80,80 L60,80" stroke-width="1" opacity="0.5"/>
    <line x1="-90" y1="0" x2="-60" y2="0" stroke-dasharray="2 2" stroke-width="1"/>
  `,

  'signal_recovery_blog.svg': `
    <!-- Radar / Loop recovery signal -->
    <path d="M-80,0 A 80 80 0 0 1 80,0" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.7"/>
    <path d="M-50,0 A 50 50 0 0 1 50,0" stroke-width="1.5" opacity="0.9"/>
    <!-- Signal pulse -->
    <path d="M-40,50 L-20,30 L0,70 L20,-10 L40,50" stroke-width="2"/>
    <!-- Recovery link returning upwards -->
    <path d="M20,-10 Q40,-50 0,-80 Q-40,-50 -20,30" fill="none" stroke-width="1.5" opacity="0.5"/>
    <circle cx="0" cy="-80" r="4" fill="#FFF6F2"/>
    <circle cx="-20" cy="30" r="3" fill="#FFF6F2"/>
    <circle cx="20" cy="-10" r="3" fill="#FFF6F2"/>
    <!-- Grid dots abstract -->
    ${circ(-100, 50, 1)} ${circ(-80, 50, 1)} ${circ(80, 50, 1)} ${circ(100, 50, 1)}
  `,

  'ai_video_blog.svg': `
    <!-- Film strip combined with node graph -->
    <path d="M-80,-60 Q-40,0 -80,60" fill="none" stroke-width="1"/>
    <path d="M-40,-60 Q0,0 -40,60" fill="none" stroke-width="2"/>
    <path d="M40,-60 Q0,0 40,60" fill="none" stroke-width="2"/>
    <path d="M80,-60 Q40,0 80,60" fill="none" stroke-width="1"/>
    <!-- Horizontal film strips (curved) -->
    ${Array.from({ length: 6 }).map((_, i) => `<line x1="-35" y1="${-50 + i * 20}" x2="35" y2="${-50 + i * 20}" stroke-width="1" opacity="0.6"/>`).join('')}
    <!-- AI nodes extending from frames -->
    <path d="M40,-40 L70,-50 L90,-30" stroke-width="1.5" stroke-dasharray="2 2"/>
    <path d="M40,20 L80,10 L100,40" stroke-width="1.5" stroke-dasharray="2 2"/>
    ${circ(70, -50, 3)} ${circ(90, -30, 2)} ${circ(80, 10, 3)} ${circ(100, 40, 2)}
  `,

  'hipaa_soc2_blog.svg': `
    <!-- Complex locked vault / secure sphere -->
    <polygon points="0,-80 70,-40 70,40 0,80 -70,40 -70,-40" stroke-width="1.5" opacity="0.8"/>
    <polygon points="0,-50 40,-25 40,25 0,50 -40,25 -40,-25" stroke-width="1.5" stroke-dasharray="3 3"/>
    <!-- Inner Cross / Shield mechanism -->
    <path d="M-15,-5 L-15,5 L-5,5 L-5,15 L5,15 L5,5 L15,5 L15,-5 L5,-5 L5,-15 L-5,-15 L-5,-5 Z" fill="#FFF6F2" opacity="0.9" stroke="none"/>
    <!-- Secure data streams deflecting -->
    <path d="M-100,-20 Q-80,-10 -70,20" stroke-width="1" opacity="0.5"/>
    <path d="M100,20 Q80,10 70,-20" stroke-width="1" opacity="0.5"/>
    <circle cx="0" cy="-80" r="3" fill="#FFF6F2"/>
    <circle cx="0" cy="80" r="3" fill="#FFF6F2"/>
  `,

  'glossy_ui_blog.svg': `
    <!-- Concentric layered glass rings showing UI depth and liquid smooth mechanics -->
    <circle cx="-20" cy="-20" r="40" stroke-width="1.5" opacity="0.8" />
    <circle cx="20" cy="20" r="40" stroke-width="1.5" stroke-dasharray="2 3" opacity="0.5" />
    <rect x="-50" y="-50" width="100" height="100" rx="20" stroke-width="2" opacity="0.9" />
    
    <!-- Liquid nodes and wave physics -->
    <path d="M-50,0 Q0,50 50,0" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M-30,-20 Q0,-50 30,-20" stroke-width="1" fill="none" stroke-dasharray="4 4" opacity="0.4"/>
    
    <!-- Technical framing markers mapping the UI component grid -->
    <polyline points="-80,-60 -80,-80 -60,-80" stroke-width="1.5" opacity="0.5" />
    <polyline points="60,80 80,80 80,60" stroke-width="1.5" opacity="0.5" />
    
    <!-- Connection points establishing trust hierarchy -->
    ${circ(-20, -20, 4)}
    ${circ(20, 20, 4)}
    ${circ(-50, 0, 3)}
    ${circ(50, 0, 3)}

    <!-- Dynamic rising background vectors -->
    <line x1="-120" y1="50" x2="-80" y2="10" stroke-width="1" opacity="0.3"/>
    <line x1="80" y1="-10" x2="120" y2="-50" stroke-width="1" opacity="0.3"/>
  `,

  'startup_growth_blog.svg': `
    <!-- Architectural grid and blueprint structure -->
    <path d="M-80,-60 L-40,-60 L-40,-20 L0,-20 L0,20 L40,20 L40,60 L80,60" stroke-width="2" stroke-dasharray="2 4" opacity="0.4"/>
    <path d="M-80,-20 L-40,-20 L-40,20 L0,20 L0,60 L40,60 L40,100" stroke-width="2" stroke-dasharray="2 4" opacity="0.2"/>
    
    <!-- Central technical growth pillar / bridge -->
    <rect x="-20" y="-80" width="40" height="160" rx="4" stroke-width="1.5" opacity="0.6" />
    <path d="M-20,0 L20,0 M-20,-40 L20,-40 M-20,40 L20,40" stroke-width="1.5" />
    
    <!-- Rising exponential curve intersecting the architecture -->
    <path d="M-100,60 Q-40,40 20,-20 T100,-80" fill="none" stroke-width="2" />
    
    <!-- Arrow head at the top of curve -->
    <polyline points="70,-80 100,-80 100,-50" stroke-width="2" fill="none" stroke-linejoin="round" />
    
    <!-- Technical nodes & data points -->
    ${circ(-65, 45, 3)}
    ${circ(-15, 5, 4)}
    ${circ(45, -45, 3)}
    
    <!-- Connection lines -->
    <line x1="-15" y1="5" x2="-50" y2="-20" stroke-width="1" opacity="0.5" />
    <line x1="45" y1="-45" x2="20" y2="-60" stroke-width="1" opacity="0.5" />
    ${circ(-50, -20, 2)}
    ${circ(20, -60, 2)}
  `,

  'b2b_lead_gen_blog.svg': `
    <!-- Architectural Funnel/Pipeline -->
    <path d="M-80,-80 L80,-80 L40,-20 L40,60 L-40,60 L-40,-20 Z" stroke-width="1.5" stroke-dasharray="2 4" opacity="0.4"/>
    <path d="M-60,-80 L60,-80 L30,-20 L30,40 L-30,40 L-30,-20 Z" stroke-width="2" opacity="0.6"/>
    
    <!-- Filtering mechanism / AI Gatekeeper -->
    <line x1="-50" y1="-20" x2="50" y2="-20" stroke-width="1.5" stroke-dasharray="4 2"/>
    <line x1="-40" y1="10" x2="40" y2="10" stroke-width="1.5" stroke-dasharray="4 2"/>
    
    <!-- Nodes entering the funnel -->
    ${circ(-40, -60, 2)} ${circ(0, -50, 4)} ${circ(50, -60, 2)} ${circ(-20, -70, 3)}
    
    <!-- High-value intent captured at the bottom -->
    <path d="M-10,40 L0,55 L10,40 Z" fill="#FFF6F2" opacity="0.9" stroke="none"/>
    <circle cx="0" cy="75" r="5" fill="#FFF6F2"/>
    ${circ(0, 75, 12)}
    
    <!-- Technical connection lines outside -->
    <polyline points="-120,-40 -80,-40 -60,-20" stroke-width="1" opacity="0.5"/>
    <polyline points="120,0 60,0 40,20" stroke-width="1" opacity="0.5"/>
  `,

  'lead_generation_guide.svg': `
    <!-- Large Magnet/Capture Core Structure -->
    <path d="M-60,-50 C-60,-80 60,-80 60,-50 L60,10 C60,40 -60,40 -60,10 Z" fill="none" stroke-width="2" stroke-dasharray="0" opacity="0.6"/>
    <path d="M-40,-40 C-40,-60 40,-60 40,-40 L40,0 C40,20 -40,20 -40,0 Z" fill="none" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.5"/>
    
    <!-- Magnetic/Pulling Waves -->
    <path d="M-80,-60 Q-40,-30 0,0" fill="none" stroke-width="1" opacity="0.4"/>
    <path d="M80,-60 Q40,-30 0,0" fill="none" stroke-width="1" opacity="0.4"/>
    <path d="M-100,-20 Q-50,10 0,40" fill="none" stroke-width="1.5" stroke-dasharray="2 4" opacity="0.8"/>
    <path d="M100,-20 Q50,10 0,40" fill="none" stroke-width="1.5" stroke-dasharray="2 4" opacity="0.8"/>

    <!-- Acquired Data Nodes (Leads) flowing downward -->
    ${circ(-80, -60, 3)}
    ${circ(80, -60, 3)}
    ${circ(-100, -20, 2)}
    ${circ(100, -20, 2)}
    ${circ(-50, 10, 4)}
    ${circ(50, 10, 4)}
    
    <!-- Central Processing Vault & High-Intent Anchor -->
    <rect x="-20" y="30" width="40" height="40" rx="8" fill="none" stroke-width="2" opacity="0.9"/>
    <circle cx="0" cy="50" r="10" fill="#FFF6F2" opacity="0.9"/>
    
    <!-- Base structural lines -->
    <line x1="-100" y1="80" x2="100" y2="80" stroke-width="2" opacity="0.4"/>
    <line x1="-80" y1="90" x2="80" y2="90" stroke-width="1" opacity="0.2"/>
    <line x1="0" y1="70" x2="0" y2="80" stroke-width="2"/>
  `
};

for (const [filename, content] of Object.entries(icons)) {
  fs.writeFileSync(path.join(outDir, filename), baseSvg(content));
}
console.log('Successfully generated 10 fine-line sketches!');
