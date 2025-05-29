const User = require('../models/signupmodel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginUser = async (req,res)=>{
    const { username, password} = req.body
    const existUser = await User.findOne({$or:[{username:username}]})
    
    if(username=='admin@gmail.com' && password == "admin@1234"){
       const token1 = jwt.sign(
        {username:'admin@gmail.com'},
        process.env.JWT_SECRET
      )
    
       res.cookie("token1", token1,{
        httpOnly:true, 
        sameSite:"strict",
        secure:false,
      })
    
       return res.redirect('/admindashboard')
    }
    else if(!existUser){
        return res.send("this user not in the database")
    }
   const hashedPassword = await bcrypt.compare(password, existUser.password)
   if(!hashedPassword){
    return res.send("password is wrong")
   }

  const token = jwt.sign(
    {id:existUser._id, username:existUser.username},
    process.env.JWT_SECRET
  )

   res.cookie("token", token,{
    httpOnly:true, 
    sameSite:"strict",
    secure:false,
  })

   res.redirect('/dashboard')
}

module.exports = loginUser