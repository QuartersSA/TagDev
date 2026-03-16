const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };

http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    let filePath = path.join(__dirname, url.pathname === '/' ? 'index.html' : url.pathname);
    // Prevent path traversal attacks
    const resolved = path.resolve(filePath);
    if (!resolved.startsWith(path.resolve(__dirname))) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }
    let ext = path.extname(filePath);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            const notFoundPath = path.join(__dirname, '404.html');
            fs.readFile(notFoundPath, (err404, data404) => {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(err404 ? 'Not Found' : data404);
            });
            return;
        }
        res.writeHead(200, {
            'Content-Type': MIME[ext] || 'text/plain',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'SAMEORIGIN',
        });
        res.end(data);
    });
}).listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
