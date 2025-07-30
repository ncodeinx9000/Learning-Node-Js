// External Module
const express = require("express");
const hostRouter = express.Router();
const homesController = require("../controllers/hostController");

// Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", homesController.getAddHome);

hostRouter.post("/add-home", homesController.postAddHome);
hostRouter.get("/host-home-list", homesController.getHostHomes);
module.exports = hostRouter;
