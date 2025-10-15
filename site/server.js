const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// MIME type mapping
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.map': 'application/json'
};

const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

async function buildSite() {
  console.log('🧹 Cleaning previous build...');
  try {
    await execAsync('npm run clean');
    console.log('✅ Clean completed');
  } catch (error) {
    console.log('⚠️ Clean failed, continuing anyway:', error.message);
  }

  console.log('🔨 Building Gatsby site...');
  try {
    await execAsync('npm run build');
    console.log('✅ Build completed successfully');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

function serveFile(filePath, res) {
  const extname = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, serve 404
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>The requested file was not found.</p>');
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}

const server = http.createServer((req, res) => {
  // Parse URL and remove query string
  const parsedUrl = new URL(req.url, `http://localhost:${port}`);
  let pathname = parsedUrl.pathname;

  // Remove trailing slash (except for root)
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // Construct file path
  let filePath = path.join(publicDir, pathname);

  // If it's a directory or doesn't have an extension, try to serve index.html
  if (pathname === '/' || (!path.extname(pathname) && fs.existsSync(filePath) && fs.statSync(filePath).isDirectory())) {
    filePath = path.join(filePath, 'index.html');
  }

  // If the file doesn't exist and it's not a file with extension, try adding .html
  if (!fs.existsSync(filePath) && !path.extname(pathname)) {
    const htmlFilePath = filePath + '.html';
    if (fs.existsSync(htmlFilePath)) {
      filePath = htmlFilePath;
    } else {
      // Try index.html in the directory
      const indexPath = path.join(filePath, 'index.html');
      if (fs.existsSync(indexPath)) {
        filePath = indexPath;
      }
    }
  }

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    // For SPA routing, serve index.html for non-file requests
    if (!path.extname(pathname)) {
      filePath = path.join(publicDir, 'index.html');
    }
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Serve the file
  serveFile(filePath, res);
});

async function startServer() {
  try {
    await buildSite();
    
    server.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
      console.log(`📁 Serving files from: ${publicDir}`);
      console.log('Press Ctrl+C to stop the server');
    });

    // Graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n👋 Shutting down server...');
      server.close(() => {
        console.log('Server stopped');
        process.exit(0);
      });
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Start the server
startServer();
