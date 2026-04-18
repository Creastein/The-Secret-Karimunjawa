import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const directory = 'public/assets/Team';

async function compressDirectory() {
  try {
    const files = await fs.readdir(directory);
    const webpFiles = files.filter(f => f.endsWith('.webp') && !f.includes('-temp'));
    let totalSaved = 0;

    for (const file of webpFiles) {
      const filePath = path.join(directory, file);
      
      // BACA KE MEMORY SEPENUHNYA (Mematikan file-lock di Windows)
      const inputBuffer = await fs.readFile(filePath);
      const originalSize = inputBuffer.length;
      
      // PROSES DARI MEMORY LANGSUNG KE BUFFER BARU
      const outputBuffer = await sharp(inputBuffer)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 60, effort: 6 })
        .toBuffer();
        
      const newSize = outputBuffer.length;
      
      // OVERWRITE FILE LAMA KARENA LOCKNYA SUDAH LEPAS
      await fs.writeFile(filePath, outputBuffer);
      
      totalSaved += (originalSize - newSize);
      console.log(`✅ ${file} dikompresi: ${(originalSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB`);
    }

    console.log(`\n🎉 Selesai! Total ukuran yang dihemat: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  } catch (error) {
    console.error('Error compressing files:', error);
  }
}

compressDirectory();
