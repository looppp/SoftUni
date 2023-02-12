const authController = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { register, login } = require('../services/userService');
const { parseError } = require('../util/parser');



authController.get('/login', isGuest(), (req, res) => {
    res.render('login', {
        title: 'Login Page'
    });
});


authController.post('/login',  isGuest(), async (req, res) => {
    try {
        if(req.body.email == '' || req.body.password == ''){
            throw new Error('All fields are required');
        }
        const token = await login(req.body.email,  req.body.password)

        res.cookie('token', token);
        res.redirect('/'); 
    } catch (error) {

        const errors = parseError(error);
        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                username: req.body.email
            }
        });
    }
});


authController.get('/register',  isGuest(), (req, res) => {
    res.render('register', {
        title: 'Register Page'
    });
});

authController.post('/register',  isGuest(), async (req, res) => {
    try {
        if(req.body.username == '' || req.body.password == ''){
            throw new Error('All fields are required');
        }
        if(req.body.password != req.body.repass){
            throw new Error('Passwords dont match');
        }
        const token = await register(req.body.username, req.body.email, req.body.password)

       
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {

        //TODO add's error display to actual template from assignment
        const errors = parseError(error);
        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                username: req.body.username
            }
        });
    }
});

authController.get('/logout', (req, res) =>{
    res.clearCookie('token');
    res.redirect('/')
})


module.exports = authController;