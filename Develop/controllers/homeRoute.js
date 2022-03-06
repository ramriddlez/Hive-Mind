const router = require("express").Router();
const { User } = require("../models");

//get homepage
router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/api/profile");
    return;
  }
  res.render("login");
});

// router.get("/*", (req, res) => {
//   res.redirect("/login");
// });

module.exports = router;
