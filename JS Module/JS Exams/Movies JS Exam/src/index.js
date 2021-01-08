/* globals Sammy */
import {homePage, createPage, detailsPage, postCreate, destinationsPage, editPage, postEditPage, deleteDestination} from './controllers/destination.js';
import { registerPage, loginPage, postRegister, postLogin, getLogout } from './controllers/user.js';
import { deleteUser, getUserData } from './util.js'


const app = Sammy('#container', function(context){

    this.use('Handlebars', 'hbs');

    const user = getUserData();
    this.userData = user;

    this.get('/', homePage);
    this.get('/home', homePage);

    this.get('/register', registerPage);
    this.get('/login', loginPage);
    this.get('/create', createPage);
    this.get('/details/:id', detailsPage);
    this.get('/logout', getLogout);
    this.get('/destinations', destinationsPage);
    this.get('/edit/:id', editPage);
    this.get('/remove/:id', deleteDestination)

    this.post('/register', (ctx) => { postRegister(ctx); });
    this.post('/login', (ctx) => { postLogin(ctx); });
    this.post('/create', (ctx) => { postCreate(ctx); });
    this.post('/edit/:id', (ctx) => { postEditPage(ctx); });

    
});

app.run();