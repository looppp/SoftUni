const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
//controllers

router.use('/', homeController);
router.use('/auth', authController);
//user controllers

module.exports = router;