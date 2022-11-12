const { request, response } = require('express');

const statusMessage = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid Format',
  '500': 'Internal Error'
}

const success = (req = request, res = response, body, status) => {
  // let statusCode = status;
  // let statusMessage = body
  // if (!status) {
  //   status = 200;
  // }

  // if (!body) {
  //   statusMessage = statusMessage[status];
  // }

  res.status(status || 200).json({
    error: '',
    body
  });
}

const error = (req = request, res = response, mensaje, status, details) => {
  console.error('[response.error]', details);
  
  res.status(status || 500).json({
    error: mensaje,
    body: ''
  });
}

module.exports = {
  success,
  error
}