const invalidPage = require('express').Router();


invalidPage.get('*', async (req, res) => {
    res.render('404', {
        title: 'Invalid Page',
    });
});

module.exports = invalidPage;