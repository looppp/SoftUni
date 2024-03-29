const { query } = require('express');
const fs = require('fs/promises');
const uniqid = require('uniqid');

//load and parse data file
//provide ability to:
//- read all entries
//- read single entry by ID
//- add new entry
//-* get matching entries by search criteria

let data = {};

async function init() {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json'));
    } catch {
        console.error('Error reading database');
    }

    return (req, res, next) => {
        req.storage = {
            getbyId,
            getAll,
            create
        };
        next();
    }
}

async function getAll(query) {
    let cubes = Object
        .entries(data)
        .map(([id, v]) => Object.assign({}, {id}, v));

        //filter cubes by query params
        if(query.search) {
            cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));
        }
        if(query.from) {
            cubes = cubes.filter(c => c.difficultyLevel >= Number(query.from));
        }
        if(query.to) {
            cubes = cubes.filter(c => c.difficultyLevel <= Number(query.to));
        }

        return cubes;
}

async function getbyId(id) {
    const cube = data[id];
    if(cube){
        return Object.assign({}, {id}, cube);
    } else {
        return undefined;
    }
}

async function create(cube) {
    const id = uniqid();
    data[id] = cube;

    try {
        fs.writeFile('./models/data.json', JSON.stringify(data, null, 2));
        console.log('>>> created new Cube');
    } catch {
        console.error('Error writing out database');
    }
}

module.exports = {
    init,
    getAll,
    getbyId,
    create
}