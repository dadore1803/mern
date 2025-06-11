const {checkout} = require('../controllers/checkoutController')

const express = require('express')
const router = express.Router()
router.post('/checkout',checkout)

module.exports = router