const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const blogController = require("../controllers/blogController");
const invalidPageController = require("../controllers/invalidPageController");


module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController)
    app.use('/blog',  blogController)
    app.use('*', invalidPageController)
};