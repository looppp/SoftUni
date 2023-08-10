const homeController = require("express").Router();

homeController.get("/", (req, res) => {
  let courses = [];

  if (req.user) {
    res.render("user-home", {
      title: "Home Page",
      courses,
    });
  } else {
    res.render("guest-home", {
      title: "Home Page",
      courses,
    });
  }
});

module.exports = homeController;
