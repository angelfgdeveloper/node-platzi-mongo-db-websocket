const store = require('./store');

const addUser = async(name) => {
  if (!name) {
    return Promise.reject('Invalid name'); // Promesa rechazada
  }

  const user = { name };

  return store.add(user);
}

const getUsers = async() => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  addUser,
  getUsers
}