const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  paymentId: String,
  orderId: String,
  signature: String,
  amount: Number,
  username: String,   
  status: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
