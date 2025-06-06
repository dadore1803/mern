const product = require('../models/productmodel')

const home = async (req,res)=>{
    let filter = {}
    let price = Number(req.query.price)
    let name = req.query.name
    if( price== 123){
        filter.price = price

    }
    if( name == "Shoes"){
        filter.name = name
    }
    
    const data = await product.find(filter)
    console.log(data)
    res.render('index',{data})
}



module.exports = {home}