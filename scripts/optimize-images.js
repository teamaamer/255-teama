const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages(folderPath) {
  const files = fs.readdirSync(folderPath);
  
  for (const file of files) {
    if (/\.(png|jpe?g)$/i.test(file)) {
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(folderPath, file.replace(/\.(png|jpe?g)$/i, '.webp'));
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
          .toFile(outputPath);
        
        console.log(`✓ Converted: ${file} -> ${path.basename(outputPath)}`);
        
        // Optional: Remove original after conversion
        // fs.unlinkSync(inputPath);
      } catch (error) {
        console.error(`✗ Failed to convert ${file}:`, error.message);
      }
    }
  }
}

// Get folder path from command line argument
const folderPath = process.argv[2];

if (!folderPath) {
  console.error('Usage: node optimize-images.js <folder-path>');
  process.exit(1);
}

optimizeImages(folderPath)
  .then(() => console.log('✓ Image optimization complete!'))
  .catch(err => console.error('Error:', err));
