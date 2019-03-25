const express = require('express')
const router = express.Router()

const CartController = require('../controllers/cart.ctr')

router.get('/add/:productId', CartController.addToCart)

module.exports = router