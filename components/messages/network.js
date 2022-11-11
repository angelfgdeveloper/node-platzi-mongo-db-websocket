const express = require('express');

const { request, response } = require('express');

const { success, error } = require('../../network/response');

const router = express.Router();

router.get('/', (req = request, res = response) => {
  res.header({
    'custom-header': 'Nuestro valor personalizado'
  });

  success(req, res, 'Lista de mensajes');
});

router.post('/', (req = request, res = response) => {
  if (req.query.error == 'ok') {
    error(req, res, 'Error inesperado', 500, 'Es solo una simulación de los errores');
  } else {
    success(req, res, 'Mensaje creado correctamente');
  }
  
});

router.delete('/', (req = request, res = response) => {
  res.status(201).json({
    error: '',
    body: 'Eliminado correctamente'
  });
});

module.exports = router;