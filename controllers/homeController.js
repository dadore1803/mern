const Product = require('../models/productmodel')
const Cart = require('../models/cartModel')

const home = async (req,res)=>{
  const data = await Product.find()
  res.render('index', {data});
}



module.exports = {home}