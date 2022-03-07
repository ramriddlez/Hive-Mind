const router = require("express").Router();
const {
  findUserByEmail,
  createNewTip,
  deleteTip,
  mostPopularFilter,
  formatDate,
} = require("../../utils/helpers");

router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  let userEmail = req.session.email;
  let user = await findUserByEmail(userEmail).catch((err) => console.log(err));

  if (user) {
    let usersTips = user.tips.map((tip) => {
      let temp = tip;
      temp.createdAt = formatDate(tip.createdAt);
      return temp;
    });
    res.status(200).render("account", {
      loggedIn: req.session.loggedIn,
      username: user.name,
      tips: usersTips,
    });
  } else {
    res.status(400).redirect("/login");
  }
});

router.post("/newTip", async (req, res) => {

  let newTip = createNewTip(req.session.email, req.body);

  if (!newTip) {
    res.status(400).json({ message: "error making new tip" });
  }
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

// VOTE UP OR DOWN FUNCTIONALITY
router.put("/:id/vote-up", async (req, res) => {
  let user = await findById(req.params.id).then((err, post) => {
    post.upVotes.push(req.params.id);
    post.voteScore += 1;
    post.save();

    return res.status(200);
  });
});

router.put("/:id/vote-down", (req, res) => {
  Post.findById(req.params.id).then((err, post) => {
    post.downVotes.push(req.user._id);
    post.voteScore -= 1;
    post.save();

    return res.status(200);
  });
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
