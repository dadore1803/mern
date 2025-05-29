const express = require('express');
const multer = require('multer');
const Product = require('../models/productmodel');

const productImage = multer.diskStorage({
    destination:'public/productimage',
    filename:(req,file,tempname)=>{
        tempname(null,file.originalname)
    },
})
const uploadimage = multer({storage:productImage})

// Route to add product
const addproduct=  async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const imagePaths = req.files.map(file => file.filename);

    const product = new Product({
      name,
      description,
      price,
      images: imagePaths,
    });

    await product.save();
    res.status(201).json({ message: 'Product added', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const fetchproduct = async (req,res)=>{
    const data = await Product.find()
    res.render('admin/fetchproduct',{data})
}

const updateproduct = async (req,res)=>{
 const {id} = req.params
 const testing = await Product.findById(id)
 if(!testing){
    return res.send("wring id")
 }
 res.render('admin/update',{testing})
}
module.exports = {uploadimage,addproduct,fetchproduct,updateproduct}
