const express = require('express');
const multer = require('multer');
const Product = require('../models/productmodel');
const path = require('path')
const productImage = multer.diskStorage({
    destination:'public/productimage/',

    filename:(req,file,tempname)=>{
        const oldname = path.extname(file.originalname)
        uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${oldname}`;
        tempname(null,uniqueName)
    },
})
const uploadimage = multer({storage:productImage})

// Route to add product
const addproduct=  async (req, res) => {
  
    const { name, description, price } = req.body;
    const imagePaths = req.files.map(file => `/productimage/${file.filename}`);

    const product = new Product({
      name,
      description,
      price,
      images: imagePaths,
    });

    await product.save();
    res.redirect('/fetchdata')
  
}

const fetchproduct = async (req,res)=>{
    const data = await Product.find()
    res.render('admin/fetchproduct',{data})
}

const updateproduct = async (req,res)=>{
 const {id} = req.params
 const testing = await Product.findById(id)
 if(!testing){
    return res.send("wrong id")
 }
 res.render('admin/update',{testing})
}

const updatedProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
    await Product.findByIdAndUpdate(id, { 
        name, 
        price, 
        description })
      res.redirect('/fetchdata');
}

const deleteProduct = async (req,res)=>{
    const {id} = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/fetchdata');
}

const view = async (req,res)=>{
    const {id} = req.params
    const data = await Product.findById(id)
    res.render('productpage',{data})
}
module.exports = {uploadimage,addproduct,fetchproduct,updateproduct, updatedProduct, deleteProduct,view}
