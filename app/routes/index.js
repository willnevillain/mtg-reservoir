const express = require('express');
const fs = require('fs');

const router = express.Router();

// TODO load auth here?

fs.readdirSync(`${__dirname}/`).forEach((file) => {
  const routeName = file.split('.').slice(0, -1).join('.').toString(); // Handle periods in name
  if (routeName !== 'index') {
    router.use(`/${routeName}`, require(`./${routeName}`));
  }
});

// Global 404 handler
router.use('*', (req, res) => {
  res.status(404).json({ error: 'URL Not Found' });
});

module.exports = router;
