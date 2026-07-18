import sharp from 'sharp';

const src = 'C:\\Users\\Ben19\\Downloads\\Resized_Resized_20230325_214612.jpg';
const meta = await sharp(src).metadata();
console.log('source', meta.width, 'x', meta.height);

// Full-body shot: crop the head-and-shoulders region near the top.
const left = 31;
const top = 12;
const side = 122;

await sharp(src)
  .extract({ left, top, width: side, height: side })
  .resize(400, 400, { fit: 'cover' })
  .sharpen()
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/team/joe.jpg');

console.log('output written: public/team/joe.jpg');
