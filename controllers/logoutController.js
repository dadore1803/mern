const auth = require('../authentication/auth')
const logout= async (req,res)=>{
    res.clearCookie('token')
    res.redirect('/login')
}

module.exports =logout