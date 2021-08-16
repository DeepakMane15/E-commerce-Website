const express = require('express');
const router= express.Router();
const category= require('../models/category');
const slugify = require('slugify')
const {addCategory, getCategories} = require('../controller/category')
const {requireSignin, adminMiddleware} = require('../common-middleware/index')



router.post('/category/create', requireSignin, adminMiddleware, addCategory);

router.get('/categories',getCategories);

module.exports = router