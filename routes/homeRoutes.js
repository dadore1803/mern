const express = require('express')
const router = express.Router()
const mainpage = require('../controllers/homeController')

router.get('/header', (req,res)=>{
    let username = req.username
    console.log(username)
    if(!username){
        username=null
        res.render('assets/header',username)
    }
    else{
        console.log(username)
        res.render('assets/header',username)
    }
})
router.get('/', mainpage.home)
module.exports = router