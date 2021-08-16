const express = require('express');
const router= express.Router();
const cart= require('../models/cart');
const slugify = require('slugify')
const {addItemToCart} = require('../controller/cart')
const {requireSignin, userMiddleware} = require('../common-middleware/index')



router.post('/user/cart', requireSignin, userMiddleware, addItemToCart);

module.exports = router