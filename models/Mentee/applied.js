const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const AppliedShema = new Schema({
  bio: {
    type: String
  },
  exp: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  mentorId: {
    type: String
  },
  menteeId: {
    type: String
  },
  mentorName: {
    type: String
  }
});

module.exports = Applied = mongoose.model("Applied", AppliedShema);
