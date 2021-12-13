const Course = require('../models/Course');

const create = (courseData) => {
    let course = new Course({...courseData, createdAt: new Date()})

    return course.save();
};

module.exports = {
    create
}