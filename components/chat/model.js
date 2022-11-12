const { Schema, model } = require('mongoose');

const ChatSchema = Schema({
  users: [
    {
      type: Schema.ObjectId,
      ref: 'User'
    }
  ]
});

ChatSchema.method('toJSON', function() {
  const { __v, _id, ...data } = this.toObject();
  data.id = _id;
  return data;
});

module.exports = model('Chat', ChatSchema);
