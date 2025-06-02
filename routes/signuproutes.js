const express = require('express')
const router = express.Router();
const signupController = require('../controllers/signupcontroller')

router.get('/signup', (req,res)=>{res.render('signup')})
router.post('/signup', signupController.createUser);


module.exports = router;