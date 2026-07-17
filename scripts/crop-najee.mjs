import sharp from 'sharp';

const src = 'C:\\Users\\Ben19\\Downloads\\image0 (1).png';
const meta = await sharp(src).metadata();
console.log('source', meta.width, 'x', meta.height);

// Square crop centered on the face (full width), then resize to 600x600.
const side = meta.width; // 1284
const top = 421; // headroom above hairline, shoulders below
await sharp(src)
  .extract({ left: 0, top, width: side, height: side })
  .resize(600, 600, { fit: 'cover' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/team/najee.jpg');

const out = await sharp('public/team/najee.jpg').metadata();
console.log('output', out.width, 'x', out.height);
