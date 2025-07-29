const http = require('http');



const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
  
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on addresss http://localhost:${PORT}`)
})