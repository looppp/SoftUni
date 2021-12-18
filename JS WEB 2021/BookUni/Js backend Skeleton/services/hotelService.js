const Hotel = require('../models/Hotel');

const getAll = () => Hotel.find({});

const create = (hotelName, city, imageUrl, freeRooms, userId) => {
    let hotel = new Hotel({hotelName, city, imageUrl, freeRooms, owner: userId});
    return hotel.save();
}

const getOne(id)