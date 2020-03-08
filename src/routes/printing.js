const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Printing = mongoose.model('Printing');

router.get('/', (req, res) => {
  res.send('This will be a list of card printings, with optional query param filters');
});

module.exports = router;
