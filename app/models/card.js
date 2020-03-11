const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  condition: String,
  location: { type: String, index: true },
  isSigned: Boolean,
  isAltered: Boolean,
  imageUrl: String,
  notes: String,
  tags: { type: [String], index: true },
});

module.exports = mongoose.model('Card', CardSchema);
