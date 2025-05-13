// part2_bookstore/server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const pagesDir = path.join(__dirname, 'pages');

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  // Route handling
  if (method === 'GET') {
    let filePath;
    if (url === '/') filePath = 'index.html';
    else if (url === '/books') filePath = 'books.html';
    else filePath = null;

    if (filePath) {
      const fullPath = path.join(pagesDir, filePath);
      fs.readFile(fullPath, (err, data) => {
        if (err) return send404(res);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    } else {
      send404(res);
    }
  } else {
    // Method not implemented
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
});

function send404(res) {
  const notFoundPath = path.join(pagesDir, '404.html');
  fs.readFile(notFoundPath, (err, data) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));