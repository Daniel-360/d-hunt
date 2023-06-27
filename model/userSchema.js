const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // _id: { type: String, required: true }, 
  // name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  tel: {type: String, required: true, unique: true},
  role: { type: String, required: true }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;