const mongoose = require('mongoose');

const publicationScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 6,
        
    },
    paintingTechnique : {
        type: String,
        required: true,
        maxlength: 15,

    },
    artPicture: {
        type: String,
        required: true,
    },
    certificate : {
        type: String,
        default: 'No',
    },
    usersShared: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

});
module.exports = mongoose.model('Publication', publicationScheme)
