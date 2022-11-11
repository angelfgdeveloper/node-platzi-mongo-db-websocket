const { request, response } = require('express');

const success = (req = request, res = response, message, status) => {
  res.status(status || 200).json({
    error: '',
    body: message
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