const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const concerns = {
  'acne.jpg': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
  'acne-scars.jpg': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
  'pigmentation.jpg': 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
  'melasma.jpg': 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop',
  'rosacea.jpg': 'https://images.unsplash.com/photo-1498842812179-c81beecf902c?q=80&w=800&auto=format&fit=crop',
  'dark-circles.jpg': 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
  'skin-brightening.jpg': 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
  'open-pores.jpg': 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop',
  'anti-ageing.jpg': 'https://images.unsplash.com/photo-1516975080661-46b02ac85973?q=80&w=800&auto=format&fit=crop',
  'hydration.jpg': 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=800&auto=format&fit=crop',
  'medical-facials.jpg': 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=800&auto=format&fit=crop'
};

const categories = {
  'skin-treatments.jpg': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
  'laser-treatments.jpg': 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
  'injectables.jpg': 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=800&auto=format&fit=crop',
  'hair-treatments.jpg': 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
  'chemical-peels.jpg': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
  'permanent-makeup.jpg': 'https://images.unsplash.com/photo-1512496015851-a1cbfb9b0485?q=80&w=800&auto=format&fit=crop',
  'body-treatments.jpg': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop'
};

async function run() {
  const publicSkin = path.join(__dirname, 'public', 'skin');
  const publicTreatments = path.join(__dirname, 'public', 'treatments');
  
  if (!fs.existsSync(publicSkin)) fs.mkdirSync(publicSkin, { recursive: true });
  if (!fs.existsSync(publicTreatments)) fs.mkdirSync(publicTreatments, { recursive: true });

  for (const [name, url] of Object.entries(concerns)) {
    console.log(`Downloading ${name}...`);
    await download(url, path.join(publicSkin, name));
  }

  for (const [name, url] of Object.entries(categories)) {
    console.log(`Downloading ${name}...`);
    await download(url, path.join(publicTreatments, name));
  }
  
  console.log('Done!');
}

run();
