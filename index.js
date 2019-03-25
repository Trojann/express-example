require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const db = require('./db.js')
const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')
const productRoute = require('./routes/product.route')
const CartRoute = require('./routes/cart.route')
const AuthMiddleware = require('./middlewares/auth.mdw')
const SessionMiddleware = require('./middlewares/session.mdw')

const app = express()
const port = 8080
app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser(process.env.SECRET_KEY))
app.use(SessionMiddleware)

app.get('/', (req, res) => res.render('index', {
	name: 'Thu'
}))

app.use('/users', AuthMiddleware.requireAuth, userRoute)

app.use('/auth', authRoute)

app.use('/products', AuthMiddleware.requireAuth, productRoute)

app.use('/cart', CartRoute)

app.use(express.static('public'))

app.listen(port, () => console.log(`App is running on port ${port}`))