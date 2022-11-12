const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: String,
});

UserSchema.method('toJSON', function() {
  const { __v, _id, ...data } = this.toObject();
  data.uid = _id;
  return data;
});

module.exports = model('User', UserSchema);
