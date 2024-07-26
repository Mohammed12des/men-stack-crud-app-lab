const mongoose = require('mongoose');


const clothingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: {type: Number, required: false},
  description: { type: String, required: false },
})

const Clothing = mongoose.model('clothing', clothingSchema);

module.exports = Clothing;