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

router.post('/register',
    (req, res, next) => {
        const {
            username,
            password,
            email
        } = req.body;

        
        authService.register(username, password, email)
            .then(createdUser => {
                console.log(createdUser);
                res.redirect('/auth/login');
            })
            .catch(next) 

    });

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;