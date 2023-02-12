const { Schema, model } = require('mongoose');

const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
    username: { type: String, required: true, minlength: [2, 'Username should be at least 2 characters long'] },
    email: { 
        type: String,
        required: true,
        minlength: [10, 'Email should be at least 10 characters long'],
        validate: {
            validator: (value) =>  EMAIL_PATTERN.test(value),
            message: 'Invalid Email'
        }
    },

    hashedPassword: { type: String, require: true }
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);


module.exports = User