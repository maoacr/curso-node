const { Buffer } = require('buffer');

const bufferFromString = Buffer.from('Hello, World!', 'utf-8');
console.log(bufferFromString); // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>

const bufferAlloc = Buffer.alloc(10);
console.log(bufferAlloc); // <Buffer 00 00 00 00 00 00 00 00 00 00>


bufferAlloc.write('Node.js');
console.log(bufferAlloc); // <Buffer 4e 6f 64 65 2e 6a 73 00 00 00>

const bufferToString = bufferAlloc.toString('utf-8', 0, 7);
console.log(bufferToString); // Hello, World!