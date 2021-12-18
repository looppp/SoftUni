const router = require('express').Router();

router.get('/create', (req, res,) => {
    res.render('create');
})

router.post('/create', (req, res, next) => {
    let {title, paintingTechnique, artPicture, certificate} = req.body;

    publicationService.create(title, paintingTechnique, artPicture, certificate, req.user._id)
        .then(createdPublication => {
            res.redirect('/');
        })
        .catch(next);
})
module.exports = router;
