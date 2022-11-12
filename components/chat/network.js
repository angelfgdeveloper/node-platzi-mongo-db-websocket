const express = require('express');

const { request, response } = require('express');

const controller = require('./controller');
const { success, error } = require('../../network/response');

const router = express.Router();

router.post('/', async(req = request, res = response) => {
  const { users } = req.body;

  try {
    const data = await controller.addChat(users);
    success(req, res, data, 201);
  } catch(err) {
    error(req, res, 'Internal error', 500, err);
  }

});

router.get('/:userId', async(req = request, res = response) => {
  const { userId } = req.params;

  try {
    const users = await controller.getChats(userId);
    success(req, res, users, 200);
  } catch(err) {
    error(req, res, 'Internal error', 500, err);
  }

});

module.exports = router;