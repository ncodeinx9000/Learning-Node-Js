const express = require("express");
const bodyParser = require("body-parser");

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
      <h1>Enter your details here</h1>
      <label for="name"></label>
      <input type="text" name="name" id="name" placeholder="enter your name here"></input>

      <label for="email"></label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="enter your name here"
      ></input>
      <input type="Submit"></input>
    </form>
`);
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.send(`<h1>We will contact you shortly</h1>`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on addresss http://localhost:${PORT}`);
});
