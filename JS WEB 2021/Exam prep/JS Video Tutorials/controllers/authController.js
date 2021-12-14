const router = require('express').Router();
const authService = require('../services/authService')
const { body } = require('express-validator');

router.get('/', (req, res) => {
    res.send('Auth Controller');
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    authService.login(username, password)
        .then(token => {

            res.cookie('token', token, { httpOnly: true});
            res.redirect('/')
        })
        .catch(next)
});

router.get('/register', (req, res, ) => {
    res.render('register')
});

router.post('/register', (req, res, next) => {
        const { username, password, repeatPassword } = req.body;

        console.log(req.body);

        if(password != repeatPassword){
           return res.render('register', { error: {message: 'Passwords should match'}})
        }

        authService.register(username, password)
            .then(createdUser => {
                res.redirect('/auth/login');
            })
            .catch(next) // or .catch(next)

    });

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;