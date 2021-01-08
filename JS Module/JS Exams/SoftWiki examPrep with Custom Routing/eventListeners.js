import authService from './services/authService.js'
import router from './router.js'
import articleService from './services/articleService.js';
var currentUser = '';

export const onLoginSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let email = formData.get('email');
    let password = formData.get('password');

    authService.login(email, password)
        .then(data => {
            localStorage.setItem('auth', JSON.stringify(data));
            console.log(`You are Logged In ${data.email}`)
            if(authService.getUserData().isAuthenticated){
                router('/');
                currentUser = data.email;
            }
        })
}

export const onRegisterSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let email = formData.get('email');
    let password = formData.get('password');

    authService.register(email, password)
        .then(data => {
            localStorage.setItem('auth', JSON.stringify(data));
            console.log(`You are CReated In ${data.email}`)
        })
}

export const onCreateMovieSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let creator = currentUser;
    let title = formData.get('title');
    let category = formData.get('category');
    let content = formData.get('content');

    articleService.createMovie({
        title,
        category,
        content,
        creator,
    })
    .then(data => {
        console.log(`You have CReated An article In ${data.title}`)
        router('/')
    })

   

}