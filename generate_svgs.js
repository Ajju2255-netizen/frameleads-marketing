const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'blogs');

// Ensure directory exists
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const baseSvg = (content) => `
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glossyOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF8A50" />
      <stop offset="100%" stop-color="#FF6B35" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.2"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#glossyOrange)"/>
  <rect width="100%" height="100%" fill="none" stroke="rgba(255,246,242,0.15)" stroke-width="2"/>
  <g transform="translate(400, 200)" filter="url(#glow)">
    ${content}
  </g>
</svg>
`;

const icons = {
    // Magnifying glass + nodes
    'geo_seo_blog.svg': `
    <!-- Magnifying glass -->
    <circle cx="-40" cy="-40" r="50" fill="none" stroke="#FFF6F2" stroke-width="12" stroke-linecap="round"/>
    <line x1="-5" y1="-5" x2="40" y2="40" stroke="#FFF6F2" stroke-width="14" stroke-linecap="round"/>
    <!-- Node network -->
    <circle cx="60" cy="-60" r="10" fill="#FFF6F2"/>
    <circle cx="100" cy="0" r="12" fill="none" stroke="#FFF6F2" stroke-width="8"/>
    <circle cx="50" cy="60" r="8" fill="#FFF6F2"/>
    <path d="M50,-50 L90,-10 M90,10 L60,50 M0,-15 L45,-55" stroke="#FFF6F2" stroke-width="6" stroke-linecap="round" stroke-dasharray="10 10"/>
  `,
    // Mail + Sparkles (AI replacing spam)
    'ai_spam_blog.svg': `
    <rect x="-80" y="-50" width="160" height="100" rx="10" fill="none" stroke="#FFF6F2" stroke-width="10" stroke-linejoin="round"/>
    <polyline points="-80,-50 0,10 80,-50" fill="none" stroke="#FFF6F2" stroke-width="10" stroke-linejoin="round"/>
    <circle cx="90" cy="-80" r="4" fill="#FFF6F2"/>
    <path d="M80,-80 L100,-80 M90,-90 L90,-70" stroke="#FFF6F2" stroke-width="4" stroke-linecap="round"/>
    <circle cx="-50" cy="80" r="3" fill="#FFF6F2"/>
    <path d="M-60,80 L-40,80 M-50,70 L-50,90" stroke="#FFF6F2" stroke-width="3" stroke-linecap="round"/>
  `,
    // Fingerprint (Zero-click intent) - stylized as overlapping concentric curves
    'intent_signal_blog.svg': `
    <path d="M-30,40 Q0,-60 30,40" fill="none" stroke="#FFF6F2" stroke-width="10" stroke-linecap="round"/>
    <path d="M-50,60 Q0,-90 50,60" fill="none" stroke="#FFF6F2" stroke-width="10" stroke-linecap="round"/>
    <path d="M-70,80 Q0,-120 70,80" fill="none" stroke="#FFF6F2" stroke-width="10" stroke-linecap="round"/>
    <path d="M-10,30 Q0,-10 10,30" fill="none" stroke="#FFF6F2" stroke-width="10" stroke-linecap="round"/>
    <circle cx="0" cy="40" r="4" fill="#FFF6F2" />
    <!-- Signal dots -->
    <circle cx="-50" cy="-40" r="6" fill="#FFF6F2"/>
    <circle cx="45" cy="0" r="6" fill="#FFF6F2"/>
  `,
    // Rising Chart (MER vs ROAS)
    'mer_roas_blog.svg': `
    <polyline points="-120,60 -60,0 0,40 60,-40 120,-100" fill="none" stroke="#FFF6F2" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
    <polygon points="100,-100 120,-100 120,-80" fill="#FFF6F2" stroke="#FFF6F2" stroke-width="4" stroke-linejoin="round" />
    <path d="M-120,80 L120,80" stroke="rgba(255,246,242,0.4)" stroke-width="6" stroke-linecap="round" stroke-dasharray="12 12"/>
    <!-- Shattered lines below -->
    <path d="M-80,40 L-60,50 L-90,90" fill="none" stroke="#FFF6F2" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="-60" cy="0" r="8" fill="#FFF6F2"/>
    <circle cx="60" cy="-40" r="8" fill="#FFF6F2"/>
  `,
    // Gear + Glowing duplicate (Digital twin)
    'digital_twin_blog.svg': `
    <circle cx="-40" cy="0" r="40" fill="none" stroke="#FFF6F2" stroke-width="12" stroke-dasharray="12 8"/>
    <circle cx="-40" cy="0" r="20" fill="none" stroke="#FFF6F2" stroke-width="10"/>
    <circle cx="40" cy="0" r="40" fill="none" stroke="rgba(255,246,242,0.4)" stroke-width="12" stroke-dasharray="12 8"/>
    <circle cx="40" cy="0" r="20" fill="none" stroke="rgba(255,246,242,0.4)" stroke-width="10"/>
    <line x1="-15" y1="0" x2="15" y2="0" stroke="#FFF6F2" stroke-width="8" stroke-linecap="round"/>
    <!-- Nodes -->
    <circle cx="40" cy="-40" r="4" fill="#FFF6F2"/>
    <circle cx="40" cy="40" r="4" fill="#FFF6F2"/>
  `,
    // Server rack (SaaS data/Server side)
    'saas_pql_blog.svg': `
    <rect x="-60" y="-80" width="120" height="40" rx="8" fill="none" stroke="#FFF6F2" stroke-width="10"/>
    <rect x="-60" y="-20" width="120" height="40" rx="8" fill="none" stroke="#FFF6F2" stroke-width="10"/>
    <rect x="-60" y="40" width="120" height="40" rx="8" fill="none" stroke="#FFF6F2" stroke-width="10"/>
    <circle cx="-30" cy="-60" r="6" fill="#FFF6F2"/>
    <circle cx="-30" cy="0" r="6" fill="#FFF6F2"/>
    <circle cx="-30" cy="60" r="6" fill="#FFF6F2"/>
    <line x1="10" y1="-60" x2="40" y2="-60" stroke="#FFF6F2" stroke-width="6" stroke-linecap="round"/>
    <line x1="10" y1="0" x2="40" y2="0" stroke="#FFF6F2" stroke-width="6" stroke-linecap="round"/>
    <line x1="10" y1="60" x2="40" y2="60" stroke="#FFF6F2" stroke-width="6" stroke-linecap="round"/>
  `,
    // Globe + Pointer (Identity Travel)
    'identity_travel_blog.svg': `
    <circle cx="-20" cy="20" r="60" fill="none" stroke="#FFF6F2" stroke-width="10"/>
    <ellipse cx="-20" cy="20" rx="20" ry="60" fill="none" stroke="#FFF6F2" stroke-width="8"/>
    <line x1="-80" y1="20" x2="40" y2="20" stroke="#FFF6F2" stroke-width="8"/>
    <!-- Map marker pin -->
    <path d="M40,-70 Q60,-70 60,-50 Q60,-30 40,0 Q20,-30 20,-50 Q20,-70 40,-70 Z" fill="none" stroke="#FFF6F2" stroke-width="10" stroke-linejoin="round"/>
    <circle cx="40" cy="-50" r="8" fill="#FFF6F2"/>
  `,
    // Signal Bars + Checkmark (Signal Recovery)
    'signal_recovery_blog.svg': `
    <!-- Signal arcs -->
    <path d="M-60,-20 Q0,-60 60,-20" fill="none" stroke="rgba(255,246,242,0.4)" stroke-width="10" stroke-linecap="round"/>
    <path d="M-30,10 Q0,-15 30,10" fill="none" stroke="rgba(255,246,242,0.4)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="0" cy="40" r="8" fill="rgba(255,246,242,0.4)"/>
    <!-- Checkmark loop / recovery -->
    <path d="M-20,60 L20,100 L90,20 L80,0" fill="none" stroke="#FFF6F2" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  `,
    // Clapperboard / Play + Sparkles (AI Video / Scalable Authenticity)
    'ai_video_blog.svg': `
    <rect x="-80" y="-50" width="160" height="100" rx="10" fill="none" stroke="#FFF6F2" stroke-width="10" stroke-linejoin="round"/>
    <polygon points="-20,-20 30,0 -20,20" fill="#FFF6F2"/>
    <!-- Film reel holes top and bottom -->
    <line x1="-80" y1="-30" x2="80" y2="-30" stroke="#FFF6F2" stroke-width="4" stroke-dasharray="10 10"/>
    <line x1="-80" y1="30" x2="80" y2="30" stroke="#FFF6F2" stroke-width="4" stroke-dasharray="10 10"/>
    <!-- Magic sparkles -->
    <path d="M70,-90 L90,-90 M80,-100 L80,-80" stroke="#FFF6F2" stroke-width="6" stroke-linecap="round"/>
  `,
    // Shield + Medical Cross (HIPAA / Privacy)
    'hipaa_soc2_blog.svg': `
    <path d="M-60,-60 L0,-90 L60,-60 L60,10 Q60,60 0,90 Q-60,60 -60,10 Z" fill="none" stroke="#FFF6F2" stroke-width="12" stroke-linejoin="round"/>
    <!-- Cross inside -->
    <path d="M-20,0 L20,0 M0,-20 L0,20" stroke="#FFF6F2" stroke-width="14" stroke-linecap="round"/>
  `
};

for (const [filename, content] of Object.entries(icons)) {
    fs.writeFileSync(path.join(outDir, filename), baseSvg(content));
}
console.log('Successfully generated 10 sketches!');

