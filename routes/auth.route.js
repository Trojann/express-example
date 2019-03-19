const express = require('express')
const router = express.Router()

const db = require('../db.js')
const AuthController = require('../controllers/auth.ctr')

router.get('/login', AuthController.login)

router.post('/login', AuthController.postLogin)

module.exports = router