const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const clothingSchema = new mongoose.Schema({
  name: String,
  size: String,
});

const Clothing = mongoose.model('clothing', clothingSchema);

module.exports = Clothing;