// server-video.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/video') {
    const videoPath = path.join(__dirname, 'video.mp4');
    const stat = fs.statSync(videoPath);

    res.writeHead(200, {
      'Content-Type': 'video/mp4',
      'Content-Length': stat.size,
    });

    const readStream = fs.createReadStream(videoPath);
    let chunkCounter = 0;

    readStream.on('data', (chunk) => {
      chunkCounter++;
      console.log(`chunk ${chunkCounter}: ${chunk.length} bytes leídos y enviados`);
    });

    readStream.pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3005, () => {
  console.log('server is running on http://localhost:3005');
});