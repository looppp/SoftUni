const homeController = require("../controlers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
};
