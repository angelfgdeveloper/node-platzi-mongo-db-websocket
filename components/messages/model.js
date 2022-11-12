const { Schema, model } = require('mongoose');

const MessageSchema = Schema({
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file: String
});

MessageSchema.method('toJSON', function() {
  const { __v, _id, ...data } = this.toObject();
  data.id = _id;
  return data;
});

module.exports = model('Message', MessageSchema);
