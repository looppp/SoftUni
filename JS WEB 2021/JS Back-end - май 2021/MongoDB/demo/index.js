const { MongoClient } = require ("mongodb");

const connectionStr = 'mongodb://localhost:27017';

const client = new MongoClient(connectionStr, {
    useUnifiedTopology: true
});
client.connect(async (err) => {
    if(err != null){
        console.log('Something unexpected happened!');
        return;
    }

    console.log('Database Connected');

    const db = client.db('test');
    const collection = db.collection('cats');
    const data = await collection.find({}).toArray();
    console.log(data);
});