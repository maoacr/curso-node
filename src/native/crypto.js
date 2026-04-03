const crypto = require('crypto');

const text = 'Hello, Crypto World!';
const hash = crypto.createHash('sha256').update(text).digest('hex');

console.log(`Text: ${text}`);
console.log(`SHA-256 Hash: ${hash}`); 