const Cart = require('../models/cartModel')
const cartController =  async (req,res)=>{

const productId = req.params.id
const userId = req.username.id

let cart = await Cart.findOne({userId})

if(cart){
    const item = cart.product.find((items)=>items.productid==productId)
  
    if(item){
        item.quantity+=1
    }
    else{
        cart.product.push({productid:productId,quantity:1})
    }
}
else{
    cart = new Cart({
        userId,
        product:[{productid:productId,quantity:1}]
    })
}
await cart.save()
res.redirect('/products')
}

module.exports = {cartController}

// logic ->userfind->ifuserexist->findproduct->if exists +1 else add data