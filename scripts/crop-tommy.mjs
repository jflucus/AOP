import sharp from 'sharp';

const src = 'C:\\Users\\Ben19\\Downloads\\0Y5A2715-Edit.jpeg';
const meta = await sharp(src).metadata();
console.log('source', meta.width, 'x', meta.height);

// Portrait headshot: square the width of the image, positioned so the face
// (upper portion) is centered in the crop.
const side = Math.min(meta.width, meta.height);
const faceCenterY = Math.round(meta.height * 0.32);
let top = faceCenterY - Math.round(side / 2);
top = Math.max(0, Math.min(top, meta.height - side));
const left = Math.max(0, Math.round((meta.width - side) / 2));

await sharp(src)
  .extract({ left, top, width: side, height: side })
  .resize(600, 600, { fit: 'cover' })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/team/tommy.jpg');

const out = await sharp('public/team/tommy.jpg').metadata();
console.log('output', out.width, 'x', out.height, 'crop left/top', left, top, 'side', side);
