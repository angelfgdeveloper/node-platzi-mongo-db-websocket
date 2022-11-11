const list = [];

const addMessage = (message) => {
  list.push(message);
}

const getMessages = () => list;

module.exports = {
  add: addMessage,
  list: getMessages
}