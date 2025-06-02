const express = require('express')
const fetchproduct = require('../controllers/userProductController')
const router = express.Router()

router.get('/products', fetchproduct)

module.exports = router