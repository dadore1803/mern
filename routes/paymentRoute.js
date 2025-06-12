const {createOrder,saveOrder} = require('../controllers/paymentController')
const express = require('express')
const router = express.Router()
const auth = require('../authentication/auth')
router.post('/createOrder', auth, createOrder)
router.post('/saveOrder', auth, saveOrder)
router.get('/thankyou', async (req,res)=>{res.send("payment done and cart cleared")})
module.exports = router