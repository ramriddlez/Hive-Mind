const router = require("express").Router();
const {
  findUserByEmail,
  createNewTip,
  deleteTip,
  mostPopularFilter,
} = require("../../utils/helpers");

router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  let userEmail = req.session.email;
  let user = await findUserByEmail(userEmail).catch((err) => console.log(err));

  res.render("account", {
    loggedIn: req.session.loggedIn,
    username: user.name,
    tips: user.tips,
  });
});

router.post("/newTip", async (req, res) => {
  let newTip = createNewTip(req.session.email, req.body);
  res.status(200).json(newTip);
});

router.delete("/:id", (req, res) => {
  let deleteId = req.params.id;
  let isDeleted = deleteTip(deleteId);

  if (isDeleted) {
    res.status(200).json({});
  } else {
    res.status(500).json({ message: "Error handling delete request" });
  }
});
// filters route
router.get("/:filter", async (req, res) => {
  let tipFilterType = req.params.filter;

  if (tipFilterType === "upvote") {
    let popular = await mostPopularFilter().catch((err) => console.log(err));
    if (popular) {
      res.status(200).json(popular);
      return;
    } else {
      res.status(400).json({ message: "could not complete filter request" });
      return;
    }
  }
});
module.exports = router;
