const express = require('express')
const router = express.Router()

const auth = require('../authentication/auth')


router.get('/addproduct',auth,(req,res)=>{res.render('admin/addproduct')})

module.exports = router