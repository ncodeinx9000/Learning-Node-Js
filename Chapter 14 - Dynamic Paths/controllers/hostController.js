const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-Home", {
    pageTitle: "Add Hme To airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }
    console.log(homeId, editing, home);
    res.render("host/edit-Home", {
      home: home,
      pageTitle: "Edit your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};
exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("host/host-home-list", {
      registeredHome: registeredHome,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  );
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.redirect("host/host-home-list");
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl } = req.body;
  home.id = id;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.redirect("host/host-home-list");
};
