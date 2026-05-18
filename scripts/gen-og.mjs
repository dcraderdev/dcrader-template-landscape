import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '..', 'public', 'og-image.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14321a"/>
      <stop offset="100%" stop-color="#0a1a0d"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#90cc90"/>
      <stop offset="100%" stop-color="#c8d8a0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="980" cy="120" r="260" fill="#1f4226" opacity="0.45"/>
  <circle cx="160" cy="540" r="220" fill="#1c3a22" opacity="0.4"/>
  <rect x="80" y="80" width="6" height="60" fill="url(#accent)"/>
  <text x="80" y="190" font-family="Georgia, serif" font-size="36" fill="#90cc90" font-weight="400" letter-spacing="2">LANDSCAPE COLLECTION</text>
  <text x="80" y="320" font-family="Georgia, serif" font-size="92" fill="#ffffff" font-weight="700">Landscape Template</text>
  <text x="80" y="420" font-family="Georgia, serif" font-size="92" fill="#ffffff" font-weight="700">Collection</text>
  <text x="80" y="495" font-family="system-ui, -apple-system, sans-serif" font-size="32" fill="#c8d8a0" font-weight="400">Modern websites for landscape &amp; lawn services</text>
  <line x1="80" y1="555" x2="320" y2="555" stroke="#90cc90" stroke-width="2"/>
  <text x="80" y="595" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="#ffffff" opacity="0.85" font-weight="500">dcrader.dev</text>
</svg>
`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(out, png);
console.log('wrote', out, png.length, 'bytes');
