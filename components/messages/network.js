const express = require('express');
const multer = require('multer');

const { request, response } = require('express');

const controller = require('./controller');
const { success, error } = require('../../network/response');

const router = express.Router();

const upload = multer({
  dest: 'public/files/',
});

router.get('/', async(req = request, res = response) => {
  const filterUser = req.query.user || null;

  try {
    const rta = await controller.getMessages(filterUser);
    success(req, res, rta, 201);
  } catch(err) {
    error(req, res, 'Unexpected Error', 500, err);
  }

});

router.post('/', upload.single('file'), async(req = request, res = response) => {
  const { chat, user, message } = req.body;

  try {
    const rta = await controller.addMessage(chat, user, message, req.file);
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