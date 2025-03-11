// Create web server
// Create a web server that listens to incoming HTTP requests on port 3000.
// For the time being, the server should respond with a simple text message for all requests.

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, World!');
  res.end();
});

server.listen(3000);
console.log('Server is listening on port 3000');