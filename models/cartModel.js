const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
    productid:{type:Schema.Types.ObjectId, ref:'Product'},
    quantity:{type:Number, default:1},
})

module.exports = mongoose.model('Cart', cartSchema)