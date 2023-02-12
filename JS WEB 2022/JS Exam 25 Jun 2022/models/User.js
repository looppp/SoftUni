const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true, minlength: [5, 'Username must be at least 5 characters long'] },
    email: { type: String, required: true},
    hashedPassword: { type: String, require: true, minlength: 4 }
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);


module.exports = User