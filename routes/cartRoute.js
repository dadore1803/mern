const auth = require('../authentication/auth')
const express = require('express')
const router = express.Router()
const Cart = require('../controllers/cartController')

router.get('/cart/:id', auth, Cart.cartController)

module.exports = router