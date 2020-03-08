const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const UserCard = mongoose.model('UserCard');

router.get('/', async (req, res) => {
  try {
    const userCards = await UserCard.find();
    res.status(200).json(userCards);
  }
  catch(err) {
    res.json({ err: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userCard = await UserCard.findById(req.params.id);
    res.status(200).json(userCard);
  }
  catch(err) {
    res.json({ err: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const userCard = await new UserCard({ ...req.body }).save();
    res.status(201).location(userCard.id).json(userCard);
  }
  catch (err) {
      res.status(500).json({ err: err });
  }
});

module.exports = router;
