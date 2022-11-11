const { request, response } = require('express');

const express = require('express');
// const bodyParser = require('body-parser');

const { success, error } = require('./network/response');

const router = express.Router();

const app = express();

// app.use('/', (req = request, res = response) => {
//   res.send('Hola!');
// });

app.use(express.json());
// app.use(bodyParser.json());
app.use(router);

app.use('/app', express.static('public'));

router.get('/message', (req = request, res = response) => {
  // console.log(req.headers);

  res.header({
    'custom-header': 'Nuestro valor personalizado'
  });

  success(req, res, 'Lista de mensajes');
});

router.post('/message', (req = request, res = response) => {
  // console.log(req.body);
  // console.log(req.query);
  // res.send('Mensaje añadido correctamente');
  
  // res.json({
  //   message: req.body.text,
  //   queries: req.query
  // });

  if (req.query.error == 'ok') {
    error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores');
  } else {
    success(req, res, 'Mensaje creado correctamente');
  }
  
});

router.delete('/message', (req = request, res = response) => {
  // res.send('Mensaje eliminado');
  res.status(201).json({
    error: '',
    body: 'Eliminado correctamente'
  });
});

app.listen(3000, () => {
  console.log(`Aplicacion en puerto 3000`);
});
