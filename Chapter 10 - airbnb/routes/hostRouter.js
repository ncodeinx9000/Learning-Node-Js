// Core Module
const path = require("path");

// External Module
const express = require("express");

// Local Module
const rootDir = require("../utils/pathUtil");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
  console.log(req.body);
});

module.exports = hostRouter;
