const fs = require('fs');

const data = fs.readFileSync('./src/native/example.txt', 'utf-8');
console.log('File content:', data)