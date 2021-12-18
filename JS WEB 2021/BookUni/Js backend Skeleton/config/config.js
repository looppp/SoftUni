const config = {
    PORT: 4000,
    DB_URI: `mongodb://localhost/BookingUni`, 
    SALT_ROUNDS: 10,
    SECRET: 'SALTSALT',
    COOKIE_NAME: 'token'
}

module.exports = config;