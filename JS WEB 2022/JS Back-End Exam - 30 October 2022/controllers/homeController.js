const { getResent } = require('../services/blogService');

const homeController = require('express').Router();


homeController.get('/', async (req, res) => {
    res.render('home', {
        title: 'Home Page',
        user: req.user,
        blogs:  await getResent(),
    });
});

module.exports = homeController;