module.exports = {
    catalog: async (req, res) => {
        const cubes = await req.storage.getAll();
        const context = {
            title: 'Cubicle',
            cubes
        }
        res.render('index', context);
    }
}