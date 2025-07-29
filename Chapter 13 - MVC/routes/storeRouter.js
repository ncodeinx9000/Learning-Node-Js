// External Module
const express = require("express");
const storeRouter = express.Router();

const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/homes", storeController.getHome);
storeRouter.get("/favourite-list", storeController.getFavouriteList);

module.exports = storeRouter;
