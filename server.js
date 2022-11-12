require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();

// configurando socket.io
const server = require('http').Server(app);
const socket = require('./socket');
socket.connect(server);

const db = require('./config/db');
db(process.env.CNN_MONGO_DB);

// const router = require('./components/messages/network');
const routes = require('./network/routes');

app.use(cors());

// app.use(bodyParser.json());
app.use(express.json());
// app.use(router);
routes(app);

app.use('/app', express.static('public'));

server.listen(3000, () => {
  console.log(`Aplicacion en puerto http://localhost:3000`);
});
