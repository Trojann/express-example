const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db.js')
const userRoute = require('./routes/user.route')

const app = express()
const port = 8080

app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.render('index', {
	name: 'Thu'
}))

app.use('/users', userRoute)

app.use(express.static('public'))

app.listen(port, () => console.log(`App is running on port ${port}`))