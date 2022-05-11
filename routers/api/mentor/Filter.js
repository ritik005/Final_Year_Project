const express = require("express");
const config = require("config");
const router = express.Router();
const auth = require("../../../middleware/auth");
const { check, validationResult } = require("express-validator");
// bring in normalize to give us a proper url, regardless of what user entered
const normalize = require("normalize-url");
const checkObjectId = require("../../../middleware/CheckObjectId");

const MentorProfile = require("../../../models/Mentor/mentor");

/* @FiterApi route-end point /api/filter/:category
   @des Filter By Category
   @access Public
*/

router.get("/mentor/rxy/ryz/:category", async (req, res) => {
  try {
    const categoryData = await MentorProfile.find({
      category: req.params.category
    });
    console.log(categoryData);
    if (categoryData === [])
      return res.status(400).json({ msg: "Category data not found" });
    res.json(categoryData);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server error" });
  }
});

// Search by category
router.get("/search/mentor", async (req, res) => {
  var search = req.query.q;
  console.log(search);
  var a = new RegExp("^" + search + ".*", "i");
  console.log(a);
  let finddata = await MentorProfile.find({
    $or: [
      { category: new RegExp(search, "gi") },
      { tags: new RegExp(search, "gi") },
      { bio: new RegExp(search, "gi") }
    ]
  });
  res.json(finddata);
});

module.exports = router;
