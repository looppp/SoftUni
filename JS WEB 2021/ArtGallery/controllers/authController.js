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

router.post('/register',(req, res, next) => { 

        let rePassword = req.body['re-password'];
        const { username, password, address } = req.body;

        if(username.count < 4){
            return res.render('register', { error: {message: 'Username should be atleast 4 characters long'}})
         }

        if(password.count < 3){
            return res.render('register', { error: {message: 'Password should be atleast 3 characters long'}})
         }

        if(password != rePassword){
            return res.render('register', { error: {message: 'Passwords should match'}})
         }
 

        authService.register(username, password, rePassword, address)
            .then(createdUser => {
                authService.login(username, password)
                .then(token => {
                    res.cookie('token', token, { httpOnly: true});
                    res.redirect('/')
                })
                .catch(next)
            })
            .catch(next) // or .catch(next)

    });

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;