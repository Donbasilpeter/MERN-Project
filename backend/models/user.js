const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  lastName: String,
  firstName: String,
  dob: Date,
  address1: String,
  address2: String,
  city: String,
  postalCode: String,
  country: String,
  phoneNumber: String,
  email: String
});

module.exports = mongoose.model('User', userSchema);
