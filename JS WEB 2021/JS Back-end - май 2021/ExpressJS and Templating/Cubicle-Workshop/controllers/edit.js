module.exports = {
    async edit (req, res) {
        const cube = await req.storage.getbyId(req.params.id);
        console.log(cube)

        const context = {
            title: 'Edit Cube',
            cube
        }
        res.render('edit', context);


    },
    postEdit (req, res){
        res.redirect('/');
    }
}