const Message = require('./model');

// const list = [];

const addMessage = (message) => {
  // list.push(message);
  const messageDB = new Message(message);
  messageDB.save();
}

// const getMessages = async() => list;
const getMessages = async(filterUser) => {
  let filter = {};
  if (filterUser != null) {
    filter = { user: filterUser };
  }

  return await Message.find(filter);
}

// const updateText = async(id, message) => {
//   const foundMessage = await Message.findOne({
//     _id: id
//   });

//   foundMessage.message = message;
//   const newMessage = await foundMessage.save();
//   return newMessage;
// }

const updateText = async(id, message) => {
  
  try {
    await Message.findById(id);

    return await Message.findByIdAndUpdate(id, message, { new: true });
    
  } catch (err) {
    return {
      message: 'El id del mensaje no existe'
    };
  }
}

const remove = async(id) => {
  
  try {
    return await Message.findByIdAndDelete(id);
  } catch (err) {
    return {
      message: 'El id del mensaje no existe'
    };
  }
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText,
  remove
}