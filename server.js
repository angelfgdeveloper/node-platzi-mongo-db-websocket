require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const config = require('./config');

const app = express();

// configurando socket.io
const server = require('http').Server(app);
const socket = require('./socket');
socket.connect(server);

const db = require('./config/db');
db(config.dbUrl);

// const router = require('./components/messages/network');
const routes = require('./network/routes');

app.use(cors());

// app.use(bodyParser.json());
app.use(express.json());
// app.use(router);
routes(app);

app.use('/app', express.static('public'));

server.listen(config.port, () => {
  console.log(`Aplicacion en puerto ${config.host}:${config.port}`);
});
