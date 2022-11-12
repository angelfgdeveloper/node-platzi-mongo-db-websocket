const { Schema, model } = require('mongoose');

const MessageSchema = Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date
});

MessageSchema.method('toJSON', function() {
  const { __v, _id, ...data } = this.toObject();
  data.id = _id;
  return data;
});

module.exports = model('Message', MessageSchema);
