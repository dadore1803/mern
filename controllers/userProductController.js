const Product = require('../models/productmodel');
const express = require('express');
const fetchproduct = async (req,res)=>{
    const {category , price}= req.query //req.body, req.params.id
    let filter = {}
    if(category){
        filter.category = category
    }
    if(price){
        filter.price = price
    }
    const data = await Product.find(filter)
    res.render('product',{data})
}

module.exports = fetchproduct