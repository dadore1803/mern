const express = require('express')
const router = express.Router()
const loginUser = require('../controllers/logincontroller')
const logout = require('../controllers/logoutController')
router.get('/login', (req,res)=>{res.render('login')})
router.post('/loginuser', loginUser)
router.get('/logout',logout)

module.exports = router