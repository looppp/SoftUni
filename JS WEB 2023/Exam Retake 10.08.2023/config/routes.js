const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const creatureController = require("../controllers/creatureController");
const { hasUser } = require("../middlewares/guards");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use("/creature", hasUser(), creatureController);
};
