const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /https?:\/\/./i

const courseSchema = new Schema({
    title: { type: String, minlength: [4, 'Course title must be atleast 4 characters long']},
    description: { type: String,
         minlength: [20, 'Course description must be atleast 20 characters long'],
         maxlength: [50, 'Course description can be maximum 50 characters long']},
    imageUrg: { type: String, validate: {
        validator: (value) => URL_PATTERN.test(value),
        message: 'Invalid URL'
    }},
    duration: { type: String, required: [true, 'Duration is reqired']},
    createdAt: { type: String, required: true, default: () => (new Date()).toISOString().slice(0, 10) },
    users: { type: [Types.ObjectId], ref: 'User', default: [] },
    userCount: { type: Number, default: 0},
    owner: { type: [Types.ObjectId], ref: 'User'}
});

courseSchema.index({title: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const Course = model('Course', courseSchema);

module.exports = Course;