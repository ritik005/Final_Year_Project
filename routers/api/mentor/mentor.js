const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../../models/Mentor/mentor");
var gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const normalize = require("normalize-url");
const jwt = require("jsonwebtoken");
const config = require("config");

/* @userApi route-end point api/user
   @des register user 
   @access public
*/

router.post(
  "/",
  [
    check("first_name", "First Name is required")
      .not()
      .isEmpty(),
    check("last_name", "Last name is required")
      .not()
      .isEmpty(),
    check("monthly_fee", "monthly_fee is required")
      .not()
      .isEmpty(),
    check("category", "category is required")
      .not()
      .isEmpty(),
    check("bio", "bio is required")
      .not()
      .isEmpty(),
    check("tags", "tags is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const {
      first_name,
      last_name,
      email,
      password,
      job_title,
      location,
      highest_eduction,
      category,
      monthly_fee,
      tags,
      date,
      bio,
      type
    } = req.body;
    const profileFields = {
      first_name,
      last_name,
      email,
      password,
      job_title,
      location,
      highest_eduction,
      category,
      monthly_fee,
      tags: Array.isArray(tags)
        ? tags
        : tags.split(",").map(tag => " " + tag.trim()),
      date,
      type,
      bio
    };
    console.log(profileFields);

    let user;

    try {
      user = await User.findOne({ email });

      if (user) {
        return res.status(400).json([
          {
            errors: "Mentor already exists"
          }
        ]);
      }

      const avatar = normalize(
        gravatar.url(email, {
          s: "200",
          r: "pg",
          d: "mm"
        }),
        { forceHttps: true }
      );

      user = new User(profileFields);

      // bcrypt before save
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      // Save
      await user.save();

      //define payload
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({
            token
          });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

/* @mentorAou route-end point api/user/profiles
   @des finds profiles
   @access public
*/
router.get("/profiles", async (req, res) => {
  try {
    const profiles = await User.find();
    res.json(profiles);
  } catch (err) {
    console.err(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
