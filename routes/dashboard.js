const express = require('express')
const router = express.Router()

const auth = require('../authentication/auth')

router.get('/dashboard',auth, (req,res)=>{res.render('dashboard')})
router.get('/admindashboard',auth,(req,res)=>{res.render('admin/dashboard')})



module.exports = router
