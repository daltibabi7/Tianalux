const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Rename Traditional Locs
html = html.replace('Traditional Loc Retie / Retwist', 'Traditional Loc (startters loc)');

// 2. Update Microlocs description
let oldDesc = "Precision microloc installation crafted to perfection. Final price depends on consultation, hair density, hair length, and grid size. A consultation is required before booking.";
let newDesc = "Precision microloc installation crafted to perfection. Final price depends on consultation, hair density, hair length, and grid size. Consultation required.";
html = html.replace(oldDesc, newDesc);

// 3. Update Microlocs image
html = html.replace("image: \"tiana-locs-2.jpg\"", "image: \"photo_microlocs.jpg\"");
html = html.replace("img:'tiana-locs-2.jpg'", "img:'photo_microlocs.jpg'"); // Check both formats

// 4. Remove Brow Correction service object. We use regex to find the object with id 'brows-3'
// The objects look like: {id:'brows-3',cat:'brows', ... video:''}
// or { id: "brows-3", ... }
let regex = /,\s*\{[^}]*id\s*:\s*['"]brows-3['"][^}]*\}/g;
html = html.replace(regex, '');

// Also bump DATA_VER to clear cache for sure
let verRegex = /const DATA_VER\s*=\s*['"]([\d.]+)['"]/;
let match = html.match(verRegex);
if(match) {
    let oldVer = match[1];
    let newVer = (parseFloat(oldVer) + 0.1).toFixed(1);
    html = html.replace(match[0], `const DATA_VER='${newVer}'`);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed index.html');
