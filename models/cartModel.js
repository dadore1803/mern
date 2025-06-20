const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'Signup'},
    product:[
        {
        productid:{type:mongoose.Schema.Types.ObjectId, ref:'Product'},
        quantity:{type:Number, default:1},
        }
    ]
    
    
})

module.exports = mongoose.model('Cart', cartSchema)