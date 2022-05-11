const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
// bring in normalize to give us a proper url, regardless of what user entered
const checkObjectId = require("../../../middleware/CheckObjectId");

const MenteeProfile = require("../../../models/Mentee/User");
var cloudinary = require("cloudinary").v2;
var multiparty = require("multiparty");

// Cloudnary set up
cloudinary.config({
  cloud_name: "dlqxpkg7h",
  api_key: "661815952242859",
  api_secret: "zfP44FsPnUFcaXBvRF1TW0xfdlw"
});

/* @ProfileApi route-end point /api/mentee/profile/:user_id
   @des single mentee profile
   @access Public
*/

router.get(
  "/:user_id",
  checkObjectId("user_id"),
  async ({ params: { user_id } }, res) => {
    console.log(user_id);
    try {
      const profile = await MenteeProfile.findOne({ _id: user_id });
      if (!profile) return res.status(400).json({ msg: "Profile not found" });
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

// @route    DELETE /api/mentee/profile
// @desc     Delete user
// @access   Private
router.delete("/", auth, async (req, res) => {
  try {
    // Remove profile
    await MenteeProfile.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/profile/update
// @desc     Add Profile
// @  access  Private

router.post("/update", auth, async (req, res) => {
  const userId = req.user.id;
  const { name, email, avatar, bio } = req.body;
  let mentee = await MenteeProfile.findOne({ _id: userId });
  mentee.name = name;
  mentee.email = email;
  mentee.avatar = avatar;
  mentee.bio = bio;
  mentee.save();
  res.send(mentee);
});

//@route    PUT api/profile/upload
//@desc     Image Profile
//@  access  Private
router.post("/upload", auth, async (req, res) => {
  var form = new multiparty.Form();
  form.parse(req, function(err, fields, files) {
    console.log(files);
    cloudinary.uploader.upload(
      files.avatar[0].path,
      { resource_type: "image" },
      async function(err, result) {
        if (err) {
          console.log("error message: ", err);
        } else {
          var updatedUser = await MenteeProfile.findByIdAndUpdate(
            req.user.id,
            {
              $set: { avatar: result.secure_url }
            },
            { new: true }
          );
          res.json(updatedUser);
        }
      }
    );
  });
});

module.exports = router;
