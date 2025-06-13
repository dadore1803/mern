const Razorpay = require('razorpay')
const Order = require('../models/orderModel')
const Cart = require('../models/cartModel')



const razorpay = new Razorpay({
    key_id:'rzp_test_zXC6ASVtJqVA6v',
    key_secret:'8emSfX5JPuTVBPJrO4c59ECt',
})

const createOrder = async (req,res)=>{
const {totalAmount} = req.body
const option = {
    amount:totalAmount*100,
    currency:'INR',
    receipt:'rporder' + Math.random().toString(10).substring(2,10)
}
    const order = await razorpay.orders.create(option)

    res.json(
            {orderId:order.id, 
            amount:order.amount, 
            currency:order.currency, 
            key:razorpay.key_id
        })
}


const saveOrder = async (req,res)=>{
const {razorpay_payment_id, razorpay_order_id, amount} = req.body 
const username = req.username
const userId = req.username.id
const cart = await Cart.findOne({userId})
const order = new Order({
    paymentId:razorpay_payment_id,
    orderId:razorpay_order_id,
    amount:amount,
    username,
    product:cart.product,
    status:"Paid"
})
await order.save()

await Cart.findOneAndDelete({userId})
res.status(200).json({message:"payment done"})
}
module.exports = {createOrder,saveOrder}