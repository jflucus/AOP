import sharp from 'sharp';

const src = 'C:\\Users\\Ben19\\Downloads\\ChatGPT Image Jul 18, 2026, 06_27_22 PM.png';
const meta = await sharp(src).metadata();
const side = Math.round(Math.min(meta.width, meta.height) * 0.94);
const left = Math.round((meta.width - side) / 2);
const top = Math.max(0, Math.round(meta.height * 0.03));
await sharp(src)
  .extract({ left, top, width: side, height: Math.min(side, meta.height - top) })
  .resize(600, 600, { fit: 'cover' })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/team/joe.jpg');
console.log('wrote public/team/joe.jpg from', meta.width + 'x' + meta.height);
