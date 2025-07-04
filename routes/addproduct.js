const express = require('express')
const router = express.Router()
const {uploadimage, addproduct, fetchproduct,updateproduct, updatedProduct, deleteProduct,view} = require('../controllers/productcontroller')
const Product = require('../models/productmodel')
const {auth,isAdmin,isCandidate} = require('../authentication/auth')



router.get('/addproduct',auth,(req,res)=>{res.render('admin/addproduct')})

router.get('/fetchdata',auth,fetchproduct)
router.get('/fetchdata/:id',auth, updateproduct)
router.get('/deleteProduct/:id',auth, deleteProduct)
router.get('/view/:id',view)
router.post('/updateproduct/:id',auth, updatedProduct)

router.post('/add-product', uploadimage.array('images'),addproduct);



module.exports = router

