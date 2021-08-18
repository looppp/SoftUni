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
        name: String,
        color: String
    });
    const Cat = mongoose.model('Cat', catShema);

    /*const myCat = new Cat({
        name: "Misho",
        color: "Brown"
    });

    await myCat.save(); */ //adds a new cat to database by schema(constructor)

    const data = await Cat.find({});
    console.log(data);

}