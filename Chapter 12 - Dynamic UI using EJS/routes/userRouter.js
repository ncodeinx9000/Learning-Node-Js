// Core Modules
const path = require("path");

// External Module
const express = require("express");

const userRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
const { registeredHome } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHome);
  res.render("home", {
    registeredHome: registeredHome,
    pageTitle: "airbnb Home",
    currentPage: "Home",
  });
});

module.exports = userRouter;
