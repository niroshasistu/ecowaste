const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  date: Date,
  wasteType: String,
  status: { type: String, default: 'Scheduled' },
});

module.exports = mongoose.model('Pickup', pickupSchema);