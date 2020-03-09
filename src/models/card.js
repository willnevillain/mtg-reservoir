const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserCardSchema = new mongoose.Schema({
  condition: String,
  location: { type: String, index: true },
  isSigned: Boolean,
  isAltered: Boolean,
  imageUrl: String,
  notes: String,
  tags: { type: [String], index: true },
});

mongoose.model('UserCard', UserCardSchema);
