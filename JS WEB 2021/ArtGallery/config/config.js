const config = {
    PORT: 3000,
    DB_URI: `mongodb://localhost/artGallery`, //change skeleton for the current exam!!!
    SALT_ROUNDS: 10,
    SECRET: 'SALTSALT',
    COOKIE_NAME: 'token'
}

module.exports = config;