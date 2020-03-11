const router = require('express').Router();

router.use('/cards', require('./cards'));
router.use('/printings', require('./printings'));

// Global 404 handler
router.use('*', (req, res) => {
  res.status(404).json({ error: 'URL Not Found' });
});

module.exports = router;
