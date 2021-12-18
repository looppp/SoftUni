const express = require('express');
const cookieParser = require('cookie-parser');
const { engine } = require('express-handlebars');
const auth = require('../middlewares/auth');


module.exports = function (app) {
    app.engine('hbs', engine({
        extname: 'hbs',
    }))

    app.set('view engine', 'hbs');

    app.use('/static', express.static('static'));

    app.use(express.urlencoded({extended: true}));

    app.use(cookieParser());

    app.use(auth);
};
