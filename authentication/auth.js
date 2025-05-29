// const auth = (req,res,next)=>{

//     const token = req.cookie.token
//     if(!token){
//         return res.send("no token")
//     }
//     const decode = jwt.verify(token)
//     req.username = decode
//     next()
    
// }

const jwt = require('jsonwebtoken')
const authDashboard = async (req,res,next)=>{
    const token= req.cookies.token
    console.log(token)
    if(!token){
        return res.redirect("/login")
    }
    const userData = jwt.verify(token, process.env.JWT_SECRET)
    req.username = userData 
    next()

}

module.exports = authDashboard