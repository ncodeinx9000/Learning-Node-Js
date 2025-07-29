const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("Third Middleware", req.url, req.method);
//   res.send("<h1>Welcome to Complete Coding</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <form action="/contact-us" method="POST">
      <label for="name"></label>
      <input type="text" id="name" placeholder="enter your name here" value="name"></input>

      <label for="email"></label>
      <input
        type="text"
        id="email"
        placeholder="enter your name here"
        value="email"
      ></input>
      <input type="Submit">Submit</input>
    </form>;
`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  res.send(`<h1>We will contatc you shortly</h1>`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on addresss http://localhost:${PORT}`);
});
