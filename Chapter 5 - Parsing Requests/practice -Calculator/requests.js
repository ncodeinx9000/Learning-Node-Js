const { sumRequestsHandler } = require("./sum");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html lang="en">
<head>
  <title>Practice-set</title>
</head>
<body>
  <h1>Get The Sum Here</h1>
  <a href = "/calculator">Calculator</a>
</body>
</html>`);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html lang="en">
<head>
  <title>Practice-set</title>
</head>
<body>
  <form action="/calculator-result", method="POST">
    <input type="text", placeholder="First Num", name="first">
    <input type="text" placeholder="Second Num", name="second">
    <input type="submit", value="Sum">
  </form>
</body>
</html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculator-result" &&
    req.method === "POST"
  ) {
    return sumRequestsHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
    <head><title>Pratice-set</title></head>
    <body>
    <h1>404 Page Does not Exist</h1>
    <a href="/">Go To Calculator
    </body>
    </html>`);
  return res.end();
};

module.exports = userRequestHandler;
