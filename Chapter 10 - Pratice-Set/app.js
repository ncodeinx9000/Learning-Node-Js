const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./utils/pathUtil");
const homeRouter = require("./routes/homeRouter");

const contactRouter = require("./routes/contactRouter");
const app = express();

app.use(express.urlencoded());
app.use(homeRouter);

app.use(contactRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on addresss http://localhost:${PORT}`);
});
