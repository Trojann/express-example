const express = require('express')
const router = express.Router()

const UserValidation = require('../validate/user.validate')
const db = require('../db.js')
const UserController = require('../controllers/user.ctr')

router.get('/', UserController.index)

router.get('/cookie', (req, res, next) => {
	res.cookie('id', 12345)
	res.send('Test cookie')
	next()
})

router.get('/search', UserController.search)

router.get('/create', UserController.create)

router.get('/:id', UserController.detail)

router.post('/create', UserValidation.postCreate, UserController.postCreate)

module.exports = router