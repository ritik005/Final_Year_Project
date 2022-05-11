const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const ApplicationSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  bio: {
    type: String
  },
  expectation: {
    type: String
  },
  mentorName: {
    type: String
  },
  mentorId: {
    type: String
  },
  accepted: {
    type: Boolean,
    default: false
  },
  rejected: {
    type: Boolean,
    default: false
  }
});

module.exports = Application = mongoose.model("application", ApplicationSchema);
