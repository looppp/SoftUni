const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        Unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    }
});

module.exports = mongoose.model('User', userScheme)