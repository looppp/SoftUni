const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


const JWT_SECRET = '345efdawd2dawgfddawdd';

async function register (username, email, password) {
    const exists = await User.findOne({ username }).collation({ locale: 'en', strength: 2});
    if(exists){
        throw new Error('Username is taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        hashedPassword
    });

    return createSession(user);
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2});
    if(!user){
        throw new Error('Incorect username or password');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword)

    if(hasMatch == false){
        throw new Error('Incorect username or password');
    }

    return createSession(user);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

function createSession({ _id, username }){
    const payload = {
        _id,
        username
    }

    return jwt.sign(payload, JWT_SECRET);
   
}



module.exports = {
    register,
    login,
    verifyToken
}