// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  profilePicture: { type: String, default: '' }, // URL of profile picture
  cart: [
    {
      productId: String,
      quantity: Number,
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
