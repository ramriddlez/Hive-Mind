const router = require("express").Router();

const homeRoutes = require("./homeRoute");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// wild card route
router.get("/*", (req, res) => {
  res.redirect("/login");
});

module.exports = router;
