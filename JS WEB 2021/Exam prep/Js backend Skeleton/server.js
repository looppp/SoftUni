const app = require('express')();
const routes = require('./routes');
const { PORT } = require('./config/config');
const errorHandler = require('./middlewares/errorHandler')

require('./config/mongoose');
require('./config/express')(app)

app.use(routes);

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
