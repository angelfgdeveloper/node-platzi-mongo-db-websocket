const express = require('express');

const { request, response } = require('express');

const controller = require('./controller');
const { success, error } = require('../../network/response');

const router = express.Router();

router.post('/', async(req = request, res = response) => {
  const { name } = req.body;

  try {
    const data = await controller.addUser(name);
    success(req, res, data, 201);
  } catch(err) {
    error(req, res, 'Internal error', 500, err);
  }

});

router.get('/', async(req = request, res = response) => {
  try {
    const data = await controller.getUsers();
    success(req, res, data, 200);
  } catch(err) {
    error(req, res, 'Internal error', 500, err);
  }

});

module.exports = router;