// importing http module
const http = require ('http');

// creating a server
const server = http.createServer((req, res) => {
    // setting the content type  to HTML
    res.writeHead(200, {
        'content-Type': 'text/html'
    });

     // sending the HTML response
     res.end('<h1> Hello World</h>');
});

// Listening on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});