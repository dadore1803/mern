const express = require('express')
const router = express.Router()
const {uploadimage, addproduct, fetchproduct,updateproduct} = require('../controllers/productcontroller')
const Product = require('../models/productmodel')
const auth = require('../authentication/auth')



router.get('/addproduct',(req,res)=>{res.render('admin/addproduct')})

router.get('/fetchdata',fetchproduct)
router.get('/fetchdata/:id', updateproduct)

router.post('/add-product', uploadimage.array('images',2),addproduct);



module.exports = router

