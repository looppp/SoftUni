const express = require('express');

const { PORT } = require('./config');
const databaseConfig = require('./config/datebase');
const expresConfig = require('./config/express');

const userService = require('./services/user')
const authMiddleware = require('./middleware/auth')

start();

async function start(){

    const app = express();

    await databaseConfig(app);
    await expresConfig(app);

    app.get('/', (req, res) => {
        res.send('<h1>Hello dddd</h1>')
    });
    
    app.listen(PORT, () => { testAuth(); console.log(`Application started at http://localhost:${PORT}`)});
}


async function testAuth(){
    const reqMock = {};
    const resMock = {
        cookie() {
            console.log('Set cookie', arguments);
        }
    };
    const nextMock = () => {};
    try {
        const auth = authMiddleware();
        auth(reqMock, resMock, nextMock);

        await reqMock.auth.login('hristo', '2999daw');

    } catch(err) {
        console.log('Error:', err.message)
    }
}




async function testAuthServices(){
    try {
        const result = await userService.createUser('Petter', '123123');
        console.log(result);
        const user = await userService.getUserByUsername('peter')
        console.log(result);

    } catch(err) {
        console.log('Error:', err.message)
    }
}

