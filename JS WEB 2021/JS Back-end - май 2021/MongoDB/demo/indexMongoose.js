const mongoose = require("mongoose");

start();

async function start() {
    const connectionStr = 'mongodb://localhost:27017/test';

    const client = await mongoose.connect(connectionStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("Database connected");

    const catShema = new mongoose.Schema({
        name: { type: String, required: true, unique: true},
        color: { type: String, required: true}
    });
    const Cat = mongoose.model('Cat', catShema);

    const myCat = new Cat({
        name: "Misho",
        color: "grey",
    });

    const personShema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        age: Number
    })
    personShema.virtual('fullName').get(function() {
        return `${this.firstName} ${this.lastName}`;
    })
    personShema.methods.sayHi = function() {
        console.log(`My name is ${this.firstName} and I am ${this.age} years old.`)
    };

    const Person = mongoose.model('Person', personShema);

    const people = await Person.find({});
    people.forEach(p => p.sayHi());
    people.map(p => p.fullName).forEach(n => console.log(n));

}