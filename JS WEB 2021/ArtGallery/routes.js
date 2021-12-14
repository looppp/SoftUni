const router = require('express').Router();
const isAuth = require('./middlewares/isAuth')


const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const publicationController = require('./controllers/publicationController')
//controllers

router.use('/', homeController);
router.use('/auth', authController);
router.use('/publication', publicationController)
//user controllers

module.exports = router;