const fs = require('fs');
const readableStream = fs.createReadStream('./src/book/js.txt', { encoding: 'utf-8' });
const writeableStream = fs.createWriteStream('./src/book/output.txt', { encoding: 'utf-8' });

readableStream.on('data', (chunk) => {
    console.log('chunk received');
    writeableStream.write(chunk);
});

readableStream.on('end', () => {
    console.log('no more data to read');
    writeableStream.end();
});

writeableStream.on('finish', () => {
    console.log('all data has been written');
});

readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

writeableStream.on('error', (err) => {
    console.error('Error writing file:', err);
}); 