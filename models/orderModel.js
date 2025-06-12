const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    paymentId:String,
    orderId:String,
    amount:Number,
    username:String,
    status:String,
    created:{type:Date, default:Date.now}
})

module.exports = mongoose.model('Order',orderSchema)