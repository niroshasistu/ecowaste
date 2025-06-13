const express = require('express');
const router = express.Router();
const Pickup = require('../models/pickup');

// GET all pickups (for Dashboard)
router.get('/', async (req, res) => {
  const pickups = await Pickup.find();
  res.json(pickups);
});

// POST new pickup (for Schedule Pickup form)
router.post('/', async (req, res) => {
  const newPickup = new Pickup(req.body);
  await newPickup.save();
  res.status(201).json(newPickup);
});

// DELETE pickup
router.delete('/:id', async (req, res) => {
  await Pickup.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;