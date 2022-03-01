const home = require("express").Router();

home.get("/", (req, res) => {
  res.render("homepage");
});

module.exports = home;
