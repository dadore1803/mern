const Product = require('../models/productmodel');
const express = require('express');
const fetchproduct = async (req,res)=>{
    const data = await Product.find()
    res.render('product',{data})
}

module.exports = fetchproduct