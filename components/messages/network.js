const express = require('express');

const { request, response } = require('express');

const controller = require('./controller');
const { success, error } = require('../../network/response');

const router = express.Router();

router.get('/', async(req = request, res = response) => {
  const filterUser = req.query.user || null;

  try {
    const rta = await controller.getMessages(filterUser);
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

router.patch('/:id', async(req = request, res = response) => {
  const { text } = req.body;
  const { id } = req.params;

  try {
    const rta = await controller.updateMessage(id, text);
    success(req, res, rta, 200);
  } catch(err) {
    error(req, res, 'Error interno', 500, err);
  }

});

router.delete('/:id', async(req = request, res = response) => {
  const { id } = req.params;

  try {
    await controller.deleteMessage(id);
    success(req, res, `Usuario ${id} eliminado`, 200);
  } catch(err) {
    error(req, res, 'Error interno', 500, err);
  }
});

module.exports = router;