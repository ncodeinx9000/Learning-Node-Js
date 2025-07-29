const { create } = require('domain');
const http = require('http');

const requestHandler = require('./requests');
const server = http.createServer(requestHandler);

const PORT = 30004;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})