// External Module
const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  // res.send("<p>Came from first middleware</p>");
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Welcome To The Express JS Series</p>");
});

app.use("/", (req, res, next) => {
  console.log("Came from another middleware", req.url, req.method);
  res.send("<p>Came from another middleware</p>");
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on addresss http://localhost:${PORT}`);
});
