const { request, response } = require('express');

const express = require('express');
const router = express.Router();

const app = express();

// app.use('/', (req = request, res = response) => {
//   res.send('Hola!');
// });

app.use(router);

router.get('/message', (req = request, res = response) => {
  res.send('Lista de mensajes');
});

router.post('/message', (req = request, res = response) => {
  res.send('Mensaje añadido!');
});

router.delete('/message/:id', (req = request, res = response) => {
  res.send('Mensaje eliminado');
});


app.listen(3000, () => {
  console.log(`Aplicacion en puerto 3000`);
});
