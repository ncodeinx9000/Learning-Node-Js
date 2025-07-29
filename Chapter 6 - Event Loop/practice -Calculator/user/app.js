const http = require('http');

const requestHandler = require('./user')
const server = http.createServer(requestHandler);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on addresss http://localhost:${PORT}`)
})