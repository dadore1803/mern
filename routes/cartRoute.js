const {auth} = require('../authentication/auth')
const express = require('express')
const router = express.Router()
const Cart = require('../controllers/cartController')
const { route } = require('./signuproutes')

router.get('/cart/:id', auth, Cart.cartController)
router.get('/cart',auth, Cart.cartpage)
router.get('/cart/increase/:id',auth, Cart.increaseQuantity)
router.get('/cart/decrease/:id',auth, Cart.decreaseQuantity)

module.exports = router