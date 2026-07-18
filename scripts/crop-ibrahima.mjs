import sharp from 'sharp';

const src = 'C:\\Users\\Ben19\\Downloads\\image0 (2).png';
const meta = await sharp(src).metadata();
console.log('source', meta.width, 'x', meta.height);

// Landscape studio shot: square is the image height; center horizontally on the face.
const side = Math.min(meta.width, meta.height);
const faceCenterX = Math.round(meta.width * 0.56);
let left = faceCenterX - Math.round(side / 2);
left = Math.max(0, Math.min(left, meta.width - side));
const top = Math.max(0, Math.min(0, meta.height - side));

await sharp(src)
  .extract({ left, top, width: side, height: side })
  .resize(600, 600, { fit: 'cover' })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/team/ibrahima.jpg');

const out = await sharp('public/team/ibrahima.jpg').metadata();
console.log('output', out.width, 'x', out.height, 'crop left/top', left, top, 'side', side);
