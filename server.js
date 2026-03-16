const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const MIME = {
    '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
    '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
    '.json': 'application/json', '.woff': 'font/woff', '.woff2': 'font/woff2',
    '.ttf': 'font/ttf', '.ico': 'image/x-icon',
};

const SECURITY_HEADERS = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
};

http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const pathname = url.pathname;

    // Determine file path
    let filePath;
    if (pathname === '/') {
        filePath = path.join(__dirname, 'index.html');
    } else if (pathname.startsWith('/dashboard')) {
        // SPA fallback for dashboard routes
        const dashFile = path.join(__dirname, 'dashboard', 'dist', pathname.replace('/dashboard', '') || 'index.html');
        const dashResolved = path.resolve(dashFile);
        const dashRoot = path.resolve(path.join(__dirname, 'dashboard', 'dist'));

        if (dashResolved.startsWith(dashRoot) && fs.existsSync(dashResolved) && fs.statSync(dashResolved).isFile()) {
            filePath = dashResolved;
        } else {
            // SPA fallback: serve index.html for client-side routing
            filePath = path.join(__dirname, 'dashboard', 'dist', 'index.html');
        }
    } else {
        filePath = path.join(__dirname, pathname);
    }

    // Prevent path traversal
    const resolved = path.resolve(filePath);
    if (!resolved.startsWith(path.resolve(__dirname))) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    const ext = path.extname(filePath);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            const notFoundPath = path.join(__dirname, '404.html');
            fs.readFile(notFoundPath, (err404, data404) => {
                res.writeHead(404, { 'Content-Type': 'text/html', ...SECURITY_HEADERS });
                res.end(err404 ? 'Not Found' : data404);
            });
            return;
        }
        res.writeHead(200, {
            'Content-Type': MIME[ext] || 'application/octet-stream',
            ...SECURITY_HEADERS,
        });
        res.end(data);
    });
}).listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
