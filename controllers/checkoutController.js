const checkout = async (req,res)=>{
    const amount = req.body.totalAmount
    res.render('checkout', {amount:amount})
}

module.exports = {checkout}


//payment - gateways - razorpay, paytm, phonepay, instaMozo, cashfree, stripe   
//map 
//third api