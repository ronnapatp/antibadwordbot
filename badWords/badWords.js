// Import fs and path
const fs = require('fs');
const path = require("path");

// Read all files in this directory
const files = fs.readdirSync('./badWords').filter((f) => !f.endsWith('.js'));

// Array of bad words
let badWords = [];

// Loop for all files
for (const file of files) {
  // Filter file that ends with .js
  const fileContent = fs.readFileSync(path.resolve(`./badWords/${file}`));
  
  // Push to badWords array
  badWords.push({
    fileName: file,
    fileContent: fileContent.toString().split('\n'),
  });
}

// Export bad words
module.exports = badWords;
