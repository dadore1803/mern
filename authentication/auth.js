
const jwt = require('jsonwebtoken')
const authDashboard = async (req,res,next)=>{
    const token= req.cookies.token
    
    if(!token){
        return res.redirect("/login")
    }
   else{
     const userData = jwt.verify(token, process.env.JWT_SECRET)
     req.username = userData
   } 
   
    next()

}

module.exports = authDashboard