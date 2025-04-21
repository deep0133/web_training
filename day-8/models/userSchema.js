// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const {Schema} = mongoose;
// const mongoose = require('mongoose');
const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  phone: String,
  password: String,
});

const user  = mongoose.model('user', userSchema);
module.exports = user;