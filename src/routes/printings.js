const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This will be a list of card printings, with optional query param filters');
});

module.exports = router;
