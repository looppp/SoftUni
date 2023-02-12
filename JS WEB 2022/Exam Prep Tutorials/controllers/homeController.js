const { getAllByDate, getResent } = require('../services/courseService');

const homeController = require('express').Router();

homeController.get('/',  async (req, res) => {
    let courses = [];

    if (req.user) {
        res.render('user-home', {
            title: 'Home Page',
            user: req.user,
            courses: await getAllByDate(req.query.search)
        });
    } else {
        res.render('guest-home', {
            title: 'Home Page',
            courses:  await getResent(),
            search: rq.query.search
        });
    }
    });


module.exports = homeController;