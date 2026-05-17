import type { ImageMetadata } from 'astro';

import img1416879595882 from '../assets/photos/1416879595882-3373a0480b5b.jpg';
import img1448375240586 from '../assets/photos/1448375240586-882707db888b.jpg';
import img1486325212027 from '../assets/photos/1486325212027-8081e485255e.jpg';
import img1502082553048 from '../assets/photos/1502082553048-f009c37129b9.jpg';
import img1508193638397 from '../assets/photos/1508193638397-1c4234db14d8.jpg';
import img1542601906990 from '../assets/photos/1542601906990-b4d3fb778b09.jpg';
import img1558618666 from '../assets/photos/1558618666-fcd25c85cd64.jpg';
import img1564501049412 from '../assets/photos/1564501049412-61c2a3083791.jpg';
import img1574691250077 from '../assets/photos/1574691250077-03a929faece5.jpg';
import img1596484552834 from '../assets/photos/1596484552834-6a58f850e0a1.jpg';
import img1600596542815 from '../assets/photos/1600596542815-ffad4c1539a9.jpg';

export const imgMap: Record<string, ImageMetadata> = {
  '1416879595882-3373a0480b5b': img1416879595882,
  '1448375240586-882707db888b': img1448375240586,
  '1486325212027-8081e485255e': img1486325212027,
  '1502082553048-f009c37129b9': img1502082553048,
  '1508193638397-1c4234db14d8': img1508193638397,
  '1542601906990-b4d3fb778b09': img1542601906990,
  '1558618666-fcd25c85cd64': img1558618666,
  '1564501049412-61c2a3083791': img1564501049412,
  '1574691250077-03a929faece5': img1574691250077,
  '1596484552834-6a58f850e0a1': img1596484552834,
  '1600596542815-ffad4c1539a9': img1600596542815,
};

export function pic(idOrUrl: string): ImageMetadata {
  // Accept either bare ID ("1416879595882-3373a0480b5b") or legacy URL.
  let id = idOrUrl;
  const m = idOrUrl.match(/photo-([0-9a-f-]+)/);
  if (m) id = m[1];
  const found = imgMap[id];
  if (!found) throw new Error(`Unknown image id: ${id}`);
  return found;
}
