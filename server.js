const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routers/api/mentee/users");
const mentorUser = require("./routers/api/mentor/mentor");

const app = express();

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useFindAndModify: false, upsert: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Authentication Routes
app.use("/api/user", users);
app.use("/api/auth", require("./routers/api/mentee/auth"));
app.use("/api/mentor", mentorUser);
app.use("/api/mentor/auth", require("./routers/api/mentor/auth"));
// Profile Routes
app.use("/api/mentee/profile", require("./routers/api/mentee/Profile"));
app.use("/api/mentor/profile", require("./routers/api/mentor/Profile"));
// Filter Api
app.use("/api/filter", require("./routers/api/mentor/Filter"));

// MentorShip Apply
app.use("/api/mentorship", require("./routers/api/mentee/applied"));
app.use("/api/applications", require("./routers/api/mentor/application"));

// for forgot password
app.use("/api/user/password", require("./routers/api/mentee/auth"));

// FOR PRODUCATUION
if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    let url = path.join(__dirname, "client/build", "index.html");
    if (!url.startsWith("/app/"))
      // since we're on local windows
      url = url.substring(1);
    res.sendFile(url);
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
