const express = require('express');
const hbs = require('express-handlebars');
const home = require('./controllers/home');
const catalog = require('./controllers/catalog');

const port = 3000;
const app = express();

app.use('/static', express.static('static'))

app.engine('.hbs', hbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', home)

app.use('/catalog', catalog)

app.listen(port, () => console.log(`Server listnening on port ${port}`));