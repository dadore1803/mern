const express = require('express')
const router = express.Router()

const auth = require('../authentication/auth')

router.get('/dashboard',auth, (req,res)=>{res.render('dashboard')})
router.get('/admindashboard',auth,(req,res)=>{res.render('admin/dashboard')})

module.exports = router

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

