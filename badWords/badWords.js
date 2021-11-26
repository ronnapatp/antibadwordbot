const fs = require('fs');
const path = require("path");

const files = fs.readdirSync('./badWords').filter((f) => !f.endsWith('.js'));

let badWords = [];

for (const file of files) {
  const fileContent = fs.readFileSync(path.resolve(`./badWords/${file}`));
  
  badWords.push({
    fileName: file,
    fileContent: fileContent.toString().split('\n'),
  });
}

module.exports = badWords;
