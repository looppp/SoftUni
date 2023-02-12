const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /https?:\/\/./i

const blogSchema = new Schema({
    title: { 
        type: String,
        required: true,
        minlength: [5, 'Title must be atleast 5 characters long'],
        maxlength: [50, 'Title can be maximum 50 characters long']
        },
    image: { 
        type: String,
        required: true,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL'
        }
        },
    content: { type: String, required: true, minlength: [10, 'Content must be atleast 10 characters long']},
    blogCategory: { type: String, required: true, minlength: [3, 'Category must be atleast 3 characters long'] },
    followList: { type: [Types.ObjectId], ref: 'User', default: [] },
    owner: { type: [Types.ObjectId], ref: 'User'}

});

const Blog = model('Blog', blogSchema);

module.exports = Blog;