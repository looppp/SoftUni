const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true, minlength: [3, 'Username must be at least 3 characters long'] },
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