const express = require('express')
const router = express.Router()

const db = require('../db.js')
const ProductController = require('../controllers/product.ctr')

router.get('/', ProductController.index)

module.exports = router