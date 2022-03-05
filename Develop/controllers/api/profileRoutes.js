const router = require("express").Router();
const { User } = require("../../models");
router.get("/", (req, res) => {
  // console.log("this is my req session: ", req.session.loggedIn);
  let loggedIn = req.session.loggedIn;
  console.log("logged in boolean: ", req.session.logged);
  res.render("profile", { loggedIn });
});
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
