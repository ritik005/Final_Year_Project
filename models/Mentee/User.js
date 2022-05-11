const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const UserSchema = new Schema({
  googleId: {
    type: String
  },

  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },

  avatar: {
    type: String
  },
  image: {
    type: String
  },

  bio: {
    type: String
  },
  exp: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

module.exports = User = mongoose.model("users", UserSchema);
