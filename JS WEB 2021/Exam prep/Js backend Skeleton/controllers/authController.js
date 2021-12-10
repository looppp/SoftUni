const router = require('express').Router();

router.get('/auth', (req,res) => {
    res.send('Auth Controller');
});

module.exports = router;