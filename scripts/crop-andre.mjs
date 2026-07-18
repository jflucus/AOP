import sharp from 'sharp';

const src = 'C:\\Users\\Ben19\\Downloads\\image1.jpeg';
const meta = await sharp(src).metadata();
console.log('source', meta.width, 'x', meta.height);

// Portrait: take a square the width of the image, positioned so the face
// (roughly the upper third) is centered vertically in the crop.
const side = Math.min(meta.width, meta.height);
const faceCenterY = Math.round(meta.height * 0.4);
let top = faceCenterY - Math.round(side / 2);
top = Math.max(0, Math.min(top, meta.height - side));
const left = Math.max(0, Math.round((meta.width - side) / 2));

await sharp(src)
  .extract({ left, top, width: side, height: side })
  .resize(600, 600, { fit: 'cover' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/team/andre.jpg');

const out = await sharp('public/team/andre.jpg').metadata();
console.log('output', out.width, 'x', out.height, 'crop left/top', left, top, 'side', side);
