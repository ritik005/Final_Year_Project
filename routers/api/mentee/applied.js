const express = require("express");
const config = require("config");
const router = express.Router();
const auth = require("../../../middleware/auth");
const { check, validationResult } = require("express-validator");
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require("normalize-url");
const checkObjectId = require("../../../middleware/CheckObjectId");

const Application = require("../../../models/Mentee/applied");

/* @ProfileApi route-end point /api/mentorship/apply
   @des apply mentor ship
   @access Public
*/
router.post("/apply/:name", [auth], async (req, res) => {
  const { bio, exp, name, email, mentorId } = req.body;
  // const alreadyApplied = await Application.findOne({
  //   menteeId: req.body.menteeId,
  // })
  // if (alreadyApplied) return res.status(400).send('already applied')

  const applicationFields = new Application({
    bio,
    exp,
    name,
    email,
    mentorId,
    menteeId: req.user.id,
    mentorName: req.params.name
  });
  try {
    // Using upsert option (creates new doc if no match is found):
    applicationFields.save();
    res.json({
      msg: "success",
      applicationFields
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/apply", auth, async (req, res) => {
  console.log("hello");
  try {
    let applied = await Application.find();
    let data = {};
    applied.map(apply => {
      if (apply.menteeId === req.user.id) {
        data = apply.mentorName;
      }
      if (apply.mentorId === req.user.id) {
        console.log("ok");
        data = apply.name;
      }
    });
    console.log(data);
    res.json(data);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
