const sumRequestsHandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });

  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);

    const bodyObject = Object.fromEntries(params);
    const result = Number(bodyObject.first) + Number(bodyObject.second);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
    <head><title>Pratice-set</title></head>
    <body>
    <h1>Your Sum is ${result}</h1>
    <a href="/">Go To Calculator
    </body>
    </html>`);
    return res.end();
  });
};

exports.sumRequestsHandler = sumRequestsHandler;
