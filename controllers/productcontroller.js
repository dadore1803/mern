const express = require('express');
const multer = require('multer');
const Product = require('../models/productmodel');
const path = require('path');

// Multer configuration
const productImage = multer.diskStorage({
  destination: 'public/productimage/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
    cb(null, uniqueName);
  },
});
const uploadimage = multer({ storage: productImage });

// Add Product
const addproduct = async (req, res) => {
  try {
    const {
      name, brand, description, price, discountedPrice, discountPercent,
      category, subCategory, sizes, colors, material, fit, gender, inStock
    } = req.body;

    const imagePaths = req.files.map(file => `/productimage/${file.filename}`);

    const product = new Product({
      name,
      brand,
      description,
      price,
      discountedPrice: discountedPrice || null,
      discountPercent: discountPercent || null,
      category,
      subCategory,
      sizes: sizes ? sizes.split(',').map(s => s.trim()) : [],
      colors: colors ? colors.split(',').map(c => c.trim()) : [],
      material,
      fit,
      gender,
      inStock: inStock === 'true',
      images: imagePaths,
    });

    await product.save();
    res.redirect('/fetchdata');
  } catch (err) {
    console.error('Product Add Error:', err);
    res.status(500).send(`Failed to add product: ${err.message}`);
  }
};

// Fetch all products
const fetchproduct = async (req, res) => {
   
  const data = await Product.find();
  res.render('admin/fetchproduct', { data });
};

// Render update product form
const updateproduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) return res.status(404).send("Invalid product ID");
  res.render('admin/update', { product });
};

// Update product
const updatedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name, brand, description, price, discountedPrice, discountPercent,
      category, subCategory, sizes, colors, material, fit, gender, inStock
    } = req.body;

    const updateData = {
      name,
      brand,
      description,
      price,
      discountedPrice: discountedPrice || null,
      discountPercent: discountPercent || null,
      category,
      subCategory,
      sizes: sizes ? sizes.split(',').map(s => s.trim()) : [],
      colors: colors ? colors.split(',').map(c => c.trim()) : [],
      material,
      fit,
      gender,
      inStock: inStock === 'true',
    };

    // If new images uploaded, replace the existing ones
    if (req.files && req.files.length > 0) {
      updateData.images = req.files.map(file => `/productimage/${file.filename}`);
    }

    await Product.findByIdAndUpdate(id, updateData);
    res.redirect('/fetchdata');
  } catch (err) {
    console.error('Product Update Error:', err);
    res.status(500).send(`Failed to update product: ${err.message}`);
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/fetchdata');
};

// View product detail
const view = async (req, res) => {
  const { id } = req.params;
  const data = await Product.findById(id);
  res.render('productpage', { data });
};

module.exports = {
  uploadimage,
  addproduct,
  fetchproduct,
  updateproduct,
  updatedProduct,
  deleteProduct,
  view
};
