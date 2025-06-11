const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/deepika')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  discountedPrice: { type: Number },
  discountPercent: { type: Number },
  category: { type: String, required: true }, // e.g., Men, Women, Kids
  subCategory: { type: String }, // e.g., Shirts, Jeans, Dresses
  sizes: [{ type: String }], // e.g., ["S", "M", "L", "XL"]
  colors: [{ type: String }], // e.g., ["Red", "Blue"]
  images: [String],
  material: { type: String }, // e.g., Cotton, Polyester
  fit: { type: String }, // e.g., Slim Fit, Regular Fit
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