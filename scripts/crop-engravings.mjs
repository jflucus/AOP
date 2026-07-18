import sharp from 'sharp';

const jobs = [
  { src: 'C:\\Users\\Ben19\\Downloads\\ChatGPT Image Jul 18, 2026, 06_09_45 PM.png', out: 'public/team/andre.jpg' },
  { src: 'C:\\Users\\Ben19\\Downloads\\ChatGPT Image Jul 18, 2026, 06_13_07 PM.png', out: 'public/team/ibrahima.jpg' },
];

for (const job of jobs) {
  const meta = await sharp(job.src).metadata();
  const side = Math.round(Math.min(meta.width, meta.height) * 0.94);
  const left = Math.round((meta.width - side) / 2);
  const top = Math.max(0, Math.round(meta.height * 0.03));
  await sharp(job.src)
    .extract({ left, top, width: side, height: Math.min(side, meta.height - top) })
    .resize(600, 600, { fit: 'cover' })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(job.out);
  console.log('wrote', job.out, 'from', meta.width + 'x' + meta.height);
}
