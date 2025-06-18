const {createOrder,saveOrder} = require('../controllers/paymentController')
const express = require('express')
const router = express.Router()
const Cart = require('../models/cartModel')
const {auth} = require('../authentication/auth')
router.post('/createOrder', auth, createOrder)
router.post('/saveOrder', auth, saveOrder)

router.get('/order', async (req,res)=>{res.send("payment done and cart cleared")})
module.exports = router