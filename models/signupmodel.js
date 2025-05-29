const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/deepika')

    const signupSchema = mongoose.Schema({
        username:String,
        phone:Number,
        password:String,
        accountType:String,
        token:String,
    })

Signup = mongoose.model('Signup',signupSchema)
module.exports = Signup