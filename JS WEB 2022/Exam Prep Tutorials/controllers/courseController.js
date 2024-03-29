const { response } = require('express');
const { createCourse, getById, deleteById, editCourse, enrollUser, isEnrolled } = require('../services/courseService');
const { parseError } = require('../util/parser');

const courseController = require('express').Router();

courseController.get('/create', (req, res) =>{
    res.render('create', {
        title: 'Create Course'
    });
});

courseController.get('/:id', async (req, res) => {
    const course = await getById(req.params.id)

   course.isOwner = course.owner.toString() == req.user._id.toString();
   course.enrolled = course.users.map(x => x.toString()).includes(req.user._id.toString());

    res.render('details', {
        title: course.title,
        course
    });
});

courseController.post('/create', async (req, res) =>{
    const course = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration,
        owner: req.user._id
    };

    
    try {
        await createCourse(course);
        res.redirect('/');
    } catch (error) {
        res.render('create', {
            title: 'Create Course',
            errors: parseError(error),
            body: course
        })
    }
});

courseController.get('/:id/delete', async (req, res) => {
    const course = await getById(req.params.id);

    if (course.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/');
});

courseController.get('/:id/edit', async (req, res) =>{
    const course = await getById(req.params.id);

    if (course.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Course',
        course
    });
});


courseController.post('/:id/edit', async (req, res) => {
    const course = await getById(req.params.id);

    if (course.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login');
    }

    try {
         await editCourse(req.params.id, req.body)
         res.redirect(`/course/${req.params.id}`)
        
    } catch (error) {
        res.render('edit', {
            title: 'Edit Course',
            errors: parseError(error),
            course: req.body
        })
    }

});

courseController.get('/:id/enroll', async (req, res) =>{
    const course = await getById(req.params.id);

    if (course.owner.toString() != req.user._id.toString()
       && course.users.map(x => x.toString()).includes((req.user._id.toString())) == false) {
       await enrollUser(req.params.id, req.user._id)
    }

    res.redirect(`/course/${req.params.id}`);
});

module.exports = courseController;