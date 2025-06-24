const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  discountedPrice: { type: Number },
  discountPercent: { type: Number },
  category: { type: String, required: true }, 
  subCategory: { type: String }, 
  sizes: [{ type: String }], 
  colors: [{ type: String }], 
  images: [String],
  material: { type: String }, 
  fit: { type: String }, 
  gender: { type: String, enum: ['Men', 'Women', 'Unisex', 'Kids'] },
  rating: { type: Number, default: 0 },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});


productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Product', productSchema);