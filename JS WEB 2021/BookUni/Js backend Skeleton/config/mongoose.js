const mongoose = require('mongoose')
const { DB_URI } = require('./config')

main().catch(err => console.log(err));

const db = mongoose.connection;

async function main() {
  await mongoose.connect(DB_URI);
}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('DB is connected')
});

module.exports = db;