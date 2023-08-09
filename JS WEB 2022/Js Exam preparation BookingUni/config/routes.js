const authController = require("../controlers/authController");
const homeController = require("../controlers/homeController");
const hotelController = require("../controlers/hotelController");
const profileController = require("../controlers/profileController");
const { hasUser } = require("../middlewares/guards");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/hotel", hasUser(), hotelController);
  app.use("/profile", profileController);
};
