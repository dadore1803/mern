const Signup = require("../models/signupmodel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.createUser = async (req,res)=>{
    const {username, phone, password} = req.body
    
  const existUser = await Signup.findOne({$or:[{phone}]})
  if(existUser){
    return res.send("user already exist")
  }
const hashPassword = await bcrypt.hash(password,10)

const token = jwt.sign(
  { role: 'candidate', username: username },
  process.env.JWT_SECRET,
  { expiresIn: '1d' }
);


        const data = new Signup({
            username,
            phone,
            password:hashPassword,
            accountType,
            token,
        })
        data.save()
        res.cookie("token", token,{
          httpOnly:true, 
          sameSite:"strict",
          secure:false,
        })
        res.send("data submitted")
      
    }

