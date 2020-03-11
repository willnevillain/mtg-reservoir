const mongoose = require('mongoose');

const SetSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  name: String,
});

module.exports = mongoose.model('Set', SetSchema);
