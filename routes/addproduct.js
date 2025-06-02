const express = require('express')
const router = express.Router()
const {uploadimage, addproduct, fetchproduct,updateproduct, updatedProduct, deleteProduct} = require('../controllers/productcontroller')
const Product = require('../models/productmodel')
const auth = require('../authentication/auth')



router.get('/addproduct',(req,res)=>{res.render('admin/addproduct')})

router.get('/fetchdata',auth,fetchproduct)
router.get('/fetchdata/:id',auth, updateproduct)
router.get('/deleteProduct/:id',auth, deleteProduct)
router.post('/updateproduct/:id',auth, updatedProduct)
router.post('/add-product', uploadimage.array('images',2),addproduct);



module.exports = router

