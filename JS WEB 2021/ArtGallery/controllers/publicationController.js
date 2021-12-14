const router = require('express').Router();
const publicationService = require('../services/publicationService')


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

router.get('/gallery', (req, res, next) => {
    publicationService.getAll()
    .then(publications => {
        res.render('gallery', { publications })
    })
    .catch(next);
})

router.get('/:publicationId/details', (req, res, next) => {

    publicationService.getOne(req.params.publicationId, req.user._id)
        .then(publications => {
            res.render('details', { ...publications })
        })
        .catch(next)
})

router.get('/:publicationId/userShare', (req, res, next) => {
    publicationService.userShare(req.params.publicationId, req.user._id)
        .then(() => {
            res.redirect('/')
        })
        .catch(next)
})

router.get('/:publicationId/delete', (req, res, next) => {
    publicationService.deletePublication(req.params.publicationId)
        .then(() => {
            res.redirect('/')
        })
        .catch(next);
})

router.get('/:publicationId/edit', (req, res, next) => {
    publicationService.getOne(req.params.publicationId, req.user._id)
        .then(publication => {
            res.render('edit', { ...publication })
        })
        .catch(next)
})

router.post('/:publicationId/edit', (req, res, next) => {
    let {title, paintingTechnique, artPicture, certificate} = req.body;

    publicationService.updateOne(req.params.publicationId, title, paintingTechnique, artPicture, certificate)
        .then(() => {
            res.redirect(`/publication/${req.params.publicationId}/details`);
        })
        .catch(next)
})


module.exports = router;