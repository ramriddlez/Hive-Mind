const router = require("express").Router();
const { User } = require("../../models");
const { getAllTips } = require("../../utils/helpers");
router.get("/", async (req, res) => {
  // console.log("this is my req session: ", req.session.loggedIn);
  let loggedIn = req.session.loggedIn;
  const tips = await getAllTips();
  let formattedTips = tips.map((tip) => tip.get({ plain: true }));
  console.log("my tips: ", formattedTips);
  res.render("profile", { loggedIn, formattedTips });
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
