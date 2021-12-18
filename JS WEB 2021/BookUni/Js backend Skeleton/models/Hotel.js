const mongoose = require('mongoose');


const hotelScheme = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
        Unique: true
    },
    city: {
        type: String,
        required: true,
        minlength: 5,
    },
    imageUrl: {
        type: String,
        required: true,
        Unique: true
    },
    freeRooms: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    bookedBy: [{type: Schema.Types.ObjectId, ref: 'User'}],
    owner: { type: Schema.Types.ObjectId, ref: 'User'}
})
