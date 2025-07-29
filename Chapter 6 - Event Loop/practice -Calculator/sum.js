const sumRequestsHandler = (req, res) => {
  console.log("1. In Sum Request Handler", req.url);
  const body = [];
  let result;
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
    console.log("2. Chunk Came");
  });
  req.on("end", () => {
    console.log("3. End event came");
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);

    const bodyObject = Object.fromEntries(params);
    result = Number(bodyObject.first) + Number(bodyObject.second);
    console.log(result);
  });

  console.log("4. Sending the response");
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
};

exports.sumRequestsHandler = sumRequestsHandler;
