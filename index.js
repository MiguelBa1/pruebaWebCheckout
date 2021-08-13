const express = require('express')

const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
require('dotenv').config()

const loginRoutes = require('./routes/login')
const ventaRoutes = require('./routes/payment')
const productsRoute = require('./routes/products')
const responseRoute = require('./routes/response')

const app = express()
const cookieSecret = process.env.COOKIE_SECRET

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use(express.json())

app.use(express.urlencoded({extended : true}))

app.use(cookieParser(cookieSecret))
app.use(session({
	secret: cookieSecret,
	resave: true,
	saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'ejs')

app.use('/login', loginRoutes)
app.use('/payment', ventaRoutes)
app.use('/products', productsRoute)
app.use('/response', responseRoute)

app.listen(3000, () => console.log('Server started'))
