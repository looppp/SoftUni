const Course = require('../models/Course');

const getAll = () => Course.find({}).sort({ createdAt: -1 }).lean();

const getOne = (id, userId) => Course.findById(id).lean()
    .then(courses => {
        courses.isEnrolled = courses.usersEnrolled.some(x => x._id == userId);
        courses.isOwn = courses.creator == userId;

        return courses;
    });


const create = (courseData, userId) => {
    let course = new Course({ ...courseData, createdAt: new Date(), creator: userId })
    return course.save();
};

const enrollUser = (courseId, userId) => {
    return course = Course.findById(courseId)
        .then(course => {
            course.usersEnrolled.push(userId);

            return course.save();

        })
}

const deleteCourse = (courseId) => {
    return Course.deleteOne({_id: courseId});
}

module.exports = {
    create,
    getAll,
    getOne,
    enrollUser,
    deleteCourse
}