const express = require('express');
const router = express.Router();
const Pickup = require('../models/pickup');

// Example: Get stats
router.get('/stats', async (req, res) => {
  const totalPickups = await Pickup.countDocuments();
  const completedPickups = await Pickup.countDocuments({ status: 'Completed' });
  res.json({ totalPickups, completedPickups });
});

module.exports = router;