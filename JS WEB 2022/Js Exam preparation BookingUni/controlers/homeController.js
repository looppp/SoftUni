const homeController = require("express").Router();

// TODO replace with real controller by asignment
homeController.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
});

module.exports = homeController;
