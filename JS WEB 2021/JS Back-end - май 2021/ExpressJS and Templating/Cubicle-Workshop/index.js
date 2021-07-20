//incitialize express app
//setup habdlebars
//setup static files
//setup storage middleware
//set route handlebar (controller actions)

const express = require('express');
const hbs = require('express-handlebars');

const { init: storage } = require('./models/storage')

const { about } = require('./controllers/about');
const { catalog } = require('./controllers/catalog');
const { create, post } = require('./controllers/create');
const { details } = require('./controllers/details');
const { notFound } = require('./controllers/notFound');

start();

async function start(){
    const port = 3000;
    const app = express();

    app.engine('hbs', hbs({
    extname: '.hbs'
    }));
    app.set('view engine', 'hbs');
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({extended: false}));
    app.use(await storage());

    app.get('/', catalog);
    app.get('/details/:id', details);
    app.get('/about', about);
    app.get('/create', create);
    app.post('/create', post);

    app.all('*', notFound);

    app.listen(port, () => console.log(`Server listening on port ${port}`));
}
