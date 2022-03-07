const router = require("express").Router();
const Tip = require("../../models/Tip");
const { incrementUpVotes } = require("../../utils/helpers");

//gets all tips
router.get("/", async (req, res) => {
  const tipData = await Tip.findAll().catch((err) => {
    res.json(err);
  });
  // let tips = tipData.map((tip) => tip.get({ plain: true }));

  res.send(tipData);
});

//gets specific tips based on tip id
router.put("/:id", async (req, res) => {
  let upvoted = await incrementUpVotes(req.params.id, 1);

  if (upvoted) {
    res.status(200).render("account");
  } else {
    res.status(400).json({ message: "error upvoting request" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tipData = await Tip.findByPk(req.params.id);
    if (!tipData) {
      res.status(404).json({ message: "No tips" });
      return;
    }
    res.status(200).json(tipData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
