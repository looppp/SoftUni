const { hasUser } = require('../middlewares/guards');
const { createBlog, getById, getResent, getAllByDate, editBlog, deleteById } = require('../services/blogService');
const { parseError } = require('../util/parser');

const blogController = require('express').Router();

blogController.get('/create', hasUser(), (req, res) =>{
    res.render('create', {
        title: 'Create Blog',
        user: req.user
    });
});


blogController.get('/catalog', async (req, res) => {

    res.render('catalog', {
         title: 'Blogs Page',
         user: req.user,
         blogs:  await getAllByDate()
     });
 });

 blogController.get('/:id', async (req, res) => {
    const blog = await getById(req.params.id)

     blog.isOwner = blog.owner.toString() == req.user._id.toString();

    res.render('details', {
         title: blog.title,
         user: req.user._id,
         blog
     });


});



blogController.post('/create', hasUser(), async (req, res) =>{
    
    const blog = {
        title: req.body.title,
        image: req.body.image,
        content: req.body.content,
        blogCategory: req.body.category,
        owner: req.user._id
    };

    
    try {
        await createBlog(blog);
        res.redirect('/');
    } catch (error) {
        res.render('create', {
            title: 'Create Blog',
            errors: parseError(error),
            body: blog
        })
    }

});

blogController.get('/:id/edit', hasUser(), async (req, res) =>{
    const blog = await getById(req.params.id);

    if (blog.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Blog',
        blog
    });
});

blogController.post('/:id/edit', hasUser(), async (req, res) =>{
    const blog = await getById(req.params.id);

    if (blog.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login');
    }

    try {
         await editBlog(req.params.id, req.body)
         res.redirect(`/blog/${req.params.id}`)
        
    } catch (error) {
        res.render('edit', {
            title: 'Edit Blog',
            errors: parseError(error),
            blog: req.body
        })
    }
});

blogController.get('/:id/delete', hasUser(), async (req, res) => {
    const blog = await getById(req.params.id);

    if (blog.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/');
});


module.exports = blogController;