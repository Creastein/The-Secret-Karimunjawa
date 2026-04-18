import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Direktori target yang berisi foto galeri dan master plan di website
const targetDirs = [
  'public/assets/Birdsong',
  'public/assets/Cipaku',
  'public/assets/TivoliGarden',
  'public/assets/common-area'
];

async function processImages() {
  let totalSaved = 0;

  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;

    console.log(`\n📂 Memproses folder: ${dir}`);
    const files = fs.readdirSync(dir).filter(f => f.match(/\.(webp|jpg|jpeg|png)$/i));

    for (const file of files) {
      const filePath = path.join(dir, file);
      const originalSize = fs.statSync(filePath).size;

      try {
        // Baca file ke memory untuk menghindari file-locking di Windows EBUSY
        const buffer = fs.readFileSync(filePath);

        // Kompres dengan sharp
        const outputBuffer = await sharp(buffer)
          .resize({ width: 1000, withoutEnlargement: true }) // Maksimal lebar 1000px, cocok utk gallery
          .webp({ quality: 65, effort: 4 }) // Kompresi WebP wajar
          .toBuffer();

        const newSize = outputBuffer.length;
        
        // Hanya timpa kalau ukuran barunya lebih kecil, mencegah kualitas numpuk rusak
        if (newSize < originalSize) {
          fs.writeFileSync(filePath, outputBuffer);
          const saved = originalSize - newSize;
          totalSaved += saved;
          console.log(`  ✅ ${file}: ${(originalSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB`);
        } else {
          console.log(`  ⏩ ${file}: Sudah optimal (${(originalSize / 1024).toFixed(1)}KB)`);
        }
      } catch (err) {
        console.error(`  ❌ Error memproses ${file}:`, err.message);
      }
    }
  }

  console.log(`\n🎉 Selesai! Total ukuran yang dihemat dari seluruh galeri: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

processImages();
