const express = require('express')
const router = express.Router()
const loginUser = require('../controllers/logincontroller')

router.get('/login', (req,res)=>{res.render('login')})
router.post('/loginuser', loginUser)

module.exports = router