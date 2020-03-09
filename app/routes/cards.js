const express = require('express');
const controller = require('../controllers/cards');

const router = express.Router();


router.get('/', async (req, res) => {
  const cards = await controller.getAll();
  res.status(200).json(cards);
});

// router.get('/:id', async (req, res) => {
//   const card = await Card.findById(req.params.id);
//   res.status(200).json(card);
// });

// router.post('/', async (req, res) => {
//   const card = await new Card({ ...req.body }).save();
//   res.status(201).location(card.id).json(card);
// });

module.exports = router;
