const express = require('express');

const http = require('http');
const http_app = express();//creating express app

http_app.get('/', (req, res) => {
  console.log('http server')
  res.send("<h1> Hello from an un-secured HTTP server</h1> <h2 style= {color: red}> !!!AAAHHH!!!</h2>")

})


































const express = require('express');
const https = require('https');
const fs = require('fs');
const http = require('http');
const hsts = require('hsts'); // Import hsts for HSTS support

const app = express();
const PORT_HTTP = 3000; // Port for HTTP
const PORT_HTTPS = 3443; // Port for HTTPS

// Sample route for HTTP
app.get('/', (req, res) => {
    res.send('Hello from HTTP!');
});

// Sample route for HTTPS
app.get('/secure', (req, res) => {
    res.send('Hello from HTTPS!');
});

// Apply HSTS middleware to the HTTPS server
const hstsOptions = {
    maxAge: 31536000, // 1 year in seconds
    includeSubDomains: true, // Apply HSTS to all subdomains
    preload: true // Include this site in the HSTS preload list
};

// Create HTTP server
http.createServer(app).listen(PORT_HTTP, () => {
    console.log(`HTTP Server running at http://localhost:${PORT_HTTP}`);
});

// Create HTTPS server with SSL certificate
const options = {
    key: fs.readFileSync('path/to/private/key’), // Path to your private key
    cert: fs.readFileSync('path/to/certificate'), // Path to your certificate
};

// Create HTTPS server
const httpsServer = https.createServer(options, (req, res) => {
    // Apply HSTS middleware
    hsts(hstsOptions)(req, res, () => {
        app(req, res);
    });
});

// Start HTTPS server
httpsServer.listen(PORT_HTTPS, () => {
    console.log(`HTTPS Server running at https://localhost:${PORT_HTTPS}`);
});