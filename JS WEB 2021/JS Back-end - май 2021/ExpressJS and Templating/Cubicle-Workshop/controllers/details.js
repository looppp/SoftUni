module.exports = {
    details: async (req, res) => {
        const cube = await req.storage.getbyId(req.params.id);
        if (cube == undefined) {
            res.redirect('/404')
        } else {
            const context = {
                title: 'Cubicle',
                cube
            }
            res.render('details', context);
        }
    }
};