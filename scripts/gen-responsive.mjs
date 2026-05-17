import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import path from 'path';

const DIR = path.resolve('public/images/landscape');
const WIDTHS = [320, 640, 1024, 1920];
const FORMATS = [
  { ext: 'webp', opts: { quality: 78 } },
  { ext: 'avif', opts: { quality: 55 } },
];

const files = readdirSync(DIR).filter(f => /\.(jpe?g|png)$/i.test(f));
let totalBefore = 0, totalAfter = 0;

for (const file of files) {
  const base = path.basename(file, path.extname(file));
  const src = path.join(DIR, file);
  totalBefore += statSync(src).size;
  for (const w of WIDTHS) {
    for (const { ext, opts } of FORMATS) {
      const out = path.join(DIR, `${base}-${w}.${ext}`);
      try {
        statSync(out);
        continue; // already exists
      } catch {}
      const img = sharp(src).resize({ width: w, withoutEnlargement: true });
      const buf = await img[ext](opts).toBuffer();
      const { default: fs } = await import('fs/promises');
      await fs.writeFile(out, buf);
      totalAfter += buf.byteLength;
      process.stdout.write(`  ${base}-${w}.${ext}  ${(buf.byteLength/1024).toFixed(1)}KB\n`);
    }
  }
}

console.log(`\nOriginals: ${(totalBefore/1024/1024).toFixed(2)}MB`);
console.log(`Responsive (generated): ${(totalAfter/1024/1024).toFixed(2)}MB`);
