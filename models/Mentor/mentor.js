const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const MentorSchema = new Schema({
  applied: { type: Schema.Types.ObjectId, ref: "applied" },

  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  job_title: {
    type: String
  },
  location: {
    type: String
  },
  highest_eduction: {
    type: String
  },
  //   Mentorship question
  category: {
    type: String
  },
  tags: {
    type: [String],
    required: true
  },

  monthly_fee: {
    type: Number
  },
  bio: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    default: "Mentor"
  },
  application: [
    {
      type: Schema.Types.ObjectId,
      ref: "application"
    }
  ],
  avatar: {
    type: String
  }
});

MentorSchema.index({ "$**": "text" });

module.exports = User = mongoose.model("mentor", MentorSchema);
