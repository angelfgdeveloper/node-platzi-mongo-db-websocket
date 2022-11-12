const { socket } = require('../../socket');
const store = require('./store');

const addMessage = (chat, user, message, file) => {
  return new Promise((resolve, reject) => {

    if (!chat || !user || !message) {
      console.error('[messageController] No hay chat, usuario o mensaje');
      reject('Datos son incorrectos');
      return false;
    }

    let fileUrl = '';
    if (file) {
      fileUrl = 'http://localhost:3000/app/files/' + file.filename
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl,
    }

    store.add(fullMessage);

    // Enviar socket.io
    socket.io.emit('message', fullMessage);

    resolve(fullMessage);
  });
}

const getMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }

    const result = await store.updateText(id, message);
    resolve(result);
  });
}

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid data');
      return false;
    }
    
    resolve(store.remove(id));
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}