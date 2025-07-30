const Home = require("../models/home");
const Favourite = require("../models/favourite");

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
  Favourite.getFavourites((favourites) => {
    Home.fetchAll((registeredHome) => {
      const favouriteHomes = registeredHome.filter((home) =>
        favourites.includes(home.id)
      );
      res.render("store/favourites", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My favourite lists",
        currentPage: "favourites",
      });
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
  console.log("Came to add to favourite", req.body);
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourite");
    }
    res.redirect("/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      res.redirect("/homes");
      console.log("Home not found");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
  });
};
