import sharp from 'sharp';

const input = 'public/assets/hero-img.webp';
const output = 'public/assets/hero-img-mobile.webp';

const info = await sharp(input)
  .resize(640, null, { withoutEnlargement: true })
  .webp({ quality: 75 })
  .toFile(output);

console.log('Mobile hero generated:', JSON.stringify(info));
