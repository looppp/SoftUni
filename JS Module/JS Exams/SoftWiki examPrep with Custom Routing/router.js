import {render} from 'https://unpkg.com/lit-html?module';

import {onLoginSubmit} from './eventListeners.js'
import {onRegisterSubmit} from './eventListeners.js'
import {onCreateMovieSubmit} from './eventListeners.js'
import authService from './services/authService.js'


import layout from './views/layout.js'
import home from './views/home.js'
import login from './views/login.js'
import notFound from './views/not-found.js'
import register from './views/register.js'
import createMovie from './views/createMovie.js'

const routes = [
    {
        path: '/',
        template: (props) => {
            let template = home;
            let url = '/';

           if(!props.isAuthenticated){
               template = login
               url = '/login';
           }
           history.pushState({}, '', url);
           return template(props)
        }
    },
    {
        path: '/logout',
        template: (props) => {
            authService.logout();
            
            history.pushState({}, '', '/login')

            return login(props);
        }    
    },
    {
        path: '/login',
        template: login,
    }, 
    {
        path: '/create',
        template: createMovie,
        context: {
            onCreateMovieSubmit
        }
    },
    {
        path: '/not-found',
        template: notFound
    },
    {
        path: '/register',
        template: register,
        context: {
            onRegisterSubmit
        }
    }
];

const router = (path) => {
    history.pushState({}, '', path);

    let route = routes.find(x => x.path == path) || routes.find(x => x.path == '/not-found');

    let context = route.context;
    let userData = authService.getUserData();

    render(layout(route.template, { navigationHandler, onLoginSubmit, ...userData, ...context}), document.getElementById('app'));
};

function navigationHandler(e){
    if(e.target.tagName == 'A'){
        e.preventDefault()

        let url = new URL(e.target.href);

        router(url.pathname);
    }
}


export default router;