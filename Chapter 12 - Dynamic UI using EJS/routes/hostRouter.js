// Core Module
const path = require("path");

// External Module
const express = require("express");

// Local Module
const rootDir = require("../utils/pathUtil");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Hme To airbnb",
    currentPage: "addHome",
  });
});

const registeredHome = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home Registration succesful for:", req.body);
  registeredHome.push(req.body);
  res.render("homeAdded", {
    pageTitle: "Home added succesfully",
    currentPage: "404",
  });
});

exports.hostRouter = hostRouter;
exports.registeredHome = registeredHome;
