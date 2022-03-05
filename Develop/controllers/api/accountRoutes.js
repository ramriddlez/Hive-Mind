const router = require("express").Router();
const { findUserByEmail, mostPopularFilter } = require("../../utils/helpers");
router.get("/", async (req, res) => {
  let userEmail = req.session.email;
  let user = await findUserByEmail(userEmail).catch((err) => console.log(err));
  console.log("my user response object from helper function: ", user);

  res.render("account", { username: user.name });
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
