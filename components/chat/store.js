const Chat = require('./model');

const addChat = (chat) => {
  const chatDB = new Chat(chat);
  return chatDB.save();
}

const getChats = async(userId) => {
  let filter = {};
  if (userId != null) {
    filter = { user: userId };
  }

  return await Chat.find(filter);
}

module.exports = {
  add: addChat,
  list: getChats,
}