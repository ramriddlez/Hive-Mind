const router = require('express').Router();
const Tip = require('../../models/Tip');

//gets all tips
router.get('/', async (req, res) => {
    const tipData = await Tip.findAll().catch((err) => {
      res.json(err);
    });
    res.json(tipData);
  });


  //gets specific tips based on tip id

  router.get('/:id', async (req, res) => {
      try {
          const tipData = await Tip.findByPk(req.params.id);
          if (!tipData) {
              res.status(404).json({ message: 'No tips' });
              return;
          }
          res.status(200).json(tipData);
      } catch (err) {
          res.status(500).json(err);
      }
  });

  module.exports = router;