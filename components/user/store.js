const User = require('./model');

const addUser = (user) => {
  const userDB = new User(user);
  return userDB.save();
}

const getUsers = async() => {
  return await User.find();
}

module.exports = {
  add: addUser,
  list: getUsers,
}