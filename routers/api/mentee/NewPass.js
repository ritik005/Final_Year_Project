const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const User = require("../../../models/Mentee/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const async = require("async");
const crypto = require("crypto");
var smtpTransport = require("nodemailer-smtp-transport");

/* @userApi route-end point api/user/password/forgot
   @des for forgot password
   @access Public
*/

module.exports = router;
