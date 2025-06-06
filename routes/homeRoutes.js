const express = require('express')
const router = express.Router()
const mainpage = require('../controllers/homeController')

router.get('/', mainpage.home)

module.exports = router