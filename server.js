require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const db = require('./config/db');
db(process.env.CNN_MONGO_DB);

// const router = require('./components/messages/network');
const routes = require('./network/routes');
const app = express();

app.use(cors());

// app.use(bodyParser.json());
app.use(express.json());
// app.use(router);
routes(app);

app.use('/app', express.static('public'));

app.listen(3000, () => {
  console.log(`Aplicacion en puerto 3000`);
});
