const Product = require('../models/productmodel');
const express = require('express');
const fetchproduct = async (req,res)=>{

    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const skip = (page-1)*limit
    const total = await Product.countDocuments()

    const data = await Product.find().skip(skip).limit(limit)
    res.render('product',{
        data,
        currentpage:page,
        totalpages: Math.ceil(total/limit),
        limit
    })
}

module.exports = fetchproduct