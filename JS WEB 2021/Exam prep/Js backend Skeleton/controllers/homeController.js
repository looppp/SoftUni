const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('home/inder');
});

module.exports = router;