const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
}); 

// server.js
// const http = require('http');

// const server = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello world');
// });

// server.listen(3000, 'localhost', () => {
//   console.log('Server running');
// });
