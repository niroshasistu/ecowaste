const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/contactMessage');

router.post('/', async (req, res) => {
  const message = new ContactMessage(req.body);
  await message.save();
  res.status(201).json({ message: "Message received!" });
});

module.exports = router;