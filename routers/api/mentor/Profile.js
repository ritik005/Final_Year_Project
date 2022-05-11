const express = require("express");
const config = require("config");
const router = express.Router();
const auth = require("../../../middleware/auth");
const { check, validationResult } = require("express-validator");
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require("normalize-url");
const checkObjectId = require("../../../middleware/CheckObjectId");

const MentorProfile = require("../../../models/Mentor/mentor");

/* @ProfileApi route-end point /api/mentor/profile/:user_id
   @des single mentor profile
   @access Public
*/

router.get(
  "/:user_id",
  checkObjectId("user_id"),
  async ({ params: { user_id } }, res) => {
    console.log(user_id);
    try {
      const profile = await MentorProfile.findOne({ _id: user_id });
      if (!profile) return res.status(400).json({ msg: "Profile not found" });
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

/* @ProfileApi route-end point /api/mentor/profile/update
   @des single mentee profile
   @access Public
*/

router.post("/update", auth, async (req, res) => {
  const userId = req.user.id;
  const {
    job_title,
    location,
    highest_eduction,
    category,
    monthly_fee,
    avatar,
    bio
  } = req.body;
  let mentor = await MentorProfile.findOne({ _id: userId });
  mentor.avatar = avatar;
  mentor.job_title = job_title;
  mentor.location = location;
  mentor.highest_eduction = highest_eduction;
  mentor.category = category;
  mentor.monthly_fee = monthly_fee;
  mentor.bio = bio;
  mentor.save();
  res.send(mentor);
});

module.exports = router;
