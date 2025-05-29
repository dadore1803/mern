const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/deepika')

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  images: [String], 
});

module.exports = mongoose.model('Product', productSchema);