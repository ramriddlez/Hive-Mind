const home = require("express").Router();

home.get("/", (req, res) => {
  res.render("login");
});

module.exports = home;
