const express = require("express");
const handlebars = require("express-handlebars");
const { engine } = require("express/lib/application");

module.exports = (app) => {
  const hbs = handlebars.create({
    extname: ".hbs",
  });

  app.engine(".hbs", hbs.engine());
  app.set("view engine", ".hbs");

  app.use("/static", express.static("static"));
  app.use(express.urlencoded({ extended: true }));
};
