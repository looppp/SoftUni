const router = require('express').Router();

const isAuth = require('./middlewares/isAuth')

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const courseController = require('./controllers/courseController');
//controllers

router.use('/', homeController);
router.use('/auth', authController);
router.use('/courses', isAuth, courseController)
//user controllers

module.exports = router;