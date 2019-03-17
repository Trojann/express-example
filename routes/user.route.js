const express = require('express')
const router = express.Router()

const db = require('../db.js')
const UserController = require('../controllers/user.ctr')

router.get('/', UserController.index)

router.get('/search', UserController.search)

router.get('/create', UserController.create)

router.get('/:id', UserController.detail)

router.post('/create', UserController.postCreate)

module.exports = router