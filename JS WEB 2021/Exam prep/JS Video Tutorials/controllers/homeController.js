const router = require('express').Router();
const courseService = require('../services/courseService')
const moment = require('moment');


router.get('/', (req, res, next) => {
    courseService.getAll()
        .then(courses => {
             courses = courses.map(x => ({...x, createdAt: moment(x.createdAt).format('MMMM Do YYYY, h:mm:ss a')}))
            res.render('home', { courses })
        })
        .catch(next);
});

module.exports = router;