/* globals Sammy */
import { homePage, createPage, postCreate, detailsPage, editPage, deleteArticle, postEdit } from './controllers/catalog.js';
import { registerPage, loginPage, postRegister, postLogin } from './controllers/user.js';
import { getUserData } from './util.js'


const app = Sammy('#root', function(context){

    this.use('Handlebars', 'hbs');

    const user = getUserData();
    this.userData = user;

    this.get('/', homePage);
    this.get('/home', homePage);

    this.get('/register', registerPage);
    this.get('/login', loginPage);
    this.get('/create', createPage);
    this.get('/details/:id', detailsPage);
    this.get('/edit/:id', editPage);
    this.get('/delete/:id', deleteArticle);

    this.post('/register', (ctx) => { postRegister(ctx); });
    this.post('/login', (ctx) => { postLogin(ctx); });
    this.post('/create', (ctx) => { postCreate(ctx); });
    this.post('/edit/:id', (ctx) => { postEdit(ctx); });



});

app.run();