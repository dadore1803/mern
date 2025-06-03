    const express = require('express')
    const signupRoutes = require('./routes/signuproutes')
    const loginRoutes = require('./routes/loginroutes')
    const dashRoutes = require('./routes/dashboard')
    const addProductRoute = require('./routes/addproduct')
    const fetchproduct = require('./routes/productRoutes')
    const cart = require('./routes/cartRoute')

    const bodyParser = require('body-parser')
    const multer = require('multer')
    const cookieParser = require('cookie-parser');
    require('dotenv').config(); 

    const app = express()
  
    app.use(cookieParser());

    app.use(express.static('public'))

    app.set('view engine', 'ejs')
    app.set('views',__dirname + '/views')
    app.use(bodyParser.urlencoded({extended:true}))

    const productImage = multer.diskStorage({
        destination:'public/productimage',
        filename:(req,file,tempname)=>{
            tempname(null,file.originalname)
        },
    })
    const uploadimage = multer({storage:productImage})


app.use('/', signupRoutes)

app.use('/', loginRoutes)

app.use('/', dashRoutes)

app.use('/' ,addProductRoute)

app.use('/',fetchproduct)
app.use('/',cart)

 app.listen(3000,()=>{
        console.log("server created at 3000")
    })

// jsonwebtoken, cookie-parser, .env(dotenv)