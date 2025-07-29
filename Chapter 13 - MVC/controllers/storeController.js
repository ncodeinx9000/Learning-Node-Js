const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("store/index", {
      registeredHome: registeredHome,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("store/home-list", {
      registeredHome: registeredHome,
      pageTitle: "Homes-List",
      currentPage: "Home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("store/favourite-list", {
      registeredHome: registeredHome,
      pageTitle: "My favourite lists",
      currentPage: "favourites",
    })
  );
};
