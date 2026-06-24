const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Find the line containing name:'REMOVED'
const lines = content.split('\n');
let newLines = lines.filter(line => !line.includes("name:'REMOVED'"));

if (lines.length !== newLines.length) {
    fs.writeFileSync('index.html', newLines.join('\n'));
    console.log(`Removed ${lines.length - newLines.length} line(s) containing 'REMOVED'.`);
} else {
    console.log("No lines with name:'REMOVED' found.");
}
