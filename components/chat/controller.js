const store = require('./store');

const addChat = async(users) => {
  if (!users || !Array.isArray(users)) {
    return Promise.reject('Invalid user list'); // Promesa rechazada
  }

  const chat = { users };

  return store.add(chat);
}

const getChats = async(userId) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(userId));
  });
}

module.exports = {
  addChat,
  getChats
}