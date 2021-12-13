const config = {
    PORT: 4000,
    DB_URI: `mongodb://localhost/softuni-tutorials`, //change skeleton for the current exam!!!
    SALT_ROUNDS: 10,
    SECRET: 'SALTSALT',
    COOKIE_NAME: 'token'
}

module.exports = config;