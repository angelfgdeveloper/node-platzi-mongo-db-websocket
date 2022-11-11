const express = require('express');

const { request, response } = require('express');

const controller = require('./controller');
const { success, error } = require('../../network/response');

const router = express.Router();

router.get('/', async(req = request, res = response) => {

  try {
    const rta = await controller.getMessages();
    success(req, res, rta, 201);
  } catch(err) {
    error(req, res, 'Unexpected Error', 500, err);
  }

});

router.post('/', async(req = request, res = response) => {
  const { user, message } = req.body;

  try {
    const rta = await controller.addMessage(user, message);
    // success(req, res, { ...rta, message: 'Mensaje creado correctamente' }, 201);
    success(req, res, rta, 201);
  } catch(err) {
    error(req, res, 'Información invalida', 400, err);
  }

});

router.delete('/', (req = request, res = response) => {
  res.status(201).json({
    error: '',
    body: 'Eliminado correctamente'
  });
});

module.exports = router;