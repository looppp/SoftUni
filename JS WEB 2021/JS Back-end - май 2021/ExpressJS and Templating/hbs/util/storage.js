const fs = require('fs');

let data = {};

async function init() {
    data = JSON.parse(await fs.readFile('../data/books.json'))
}

function getAll(){
    return Object.values(data);
}

function getById(id) {
    return data[id];
}

module.exports = {
    init,
    getAll,
    getById
};