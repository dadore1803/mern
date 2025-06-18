const mongoose = require('mongoose')

    const signupSchema = mongoose.Schema({
        username:String,
        phone:Number,
        password:String,
        accountType:String,
        token:String,
    })

Signup = mongoose.model('Signup',signupSchema)
module.exports = Signup