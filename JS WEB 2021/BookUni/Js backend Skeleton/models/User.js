const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SECRET, SALT_ROUNDS} = require('../config/config')

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
    },
    email: {
        type: String,
        required: true,
        Unique: true
    },
       bookedHotels: [{type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'}],
       offeredHotels: [{type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'}]
});

userScheme.pre('save', function(next) {
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next();
        })
});
module.exports = mongoose.model('User', userScheme)