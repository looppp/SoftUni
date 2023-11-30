const authController = require('express').Router();
const {register, login} = require('../services/userService');
const { parseError } = require('../util/parser');
const { body, validationResult } = require('express-validator');
const { isGuest } = require('../middlewares/guards');


authController.get('/login', isGuest(), (req, res) => {
    res.render('login', {
        title: 'Login Page'
    });
});


authController.post('/login', isGuest(), async (req, res) => {
    try {
        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required');
        }
        const token = await login(req.body.username, req.body.password)

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {

        const errors = parseError(error);
        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                username: req.body.username
            }
        });
    }
});


authController.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        title: 'Register Page'
    });
});

authController.post('/register', isGuest(),
    body('username').isLength({ min: 5 }).withMessage('Username must be atleast 5 characters long')
    .isAlphanumeric().withMessage('Username must be only numbers and letters'),
    body('password').isLength({ min: 5 }).withMessage('Password must be atleast 5 characters long')
    .isAlphanumeric().withMessage('Password must be only numbers and letters'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }
            if (req.body.username == '' || req.body.password == '') {
                throw new Error('All fields are required');
            }
            if (req.body.password != req.body.repass) {
                throw new Error('Passwords dont match');
            }
            const token = await register(req.body.username, req.body.password)

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

authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/')
})


module.exports = authController;