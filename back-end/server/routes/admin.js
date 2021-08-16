const express = require('express')
const { render } = require('react-dom')
const router = express.Router()
const signupTemplateCopy = require('../models/models')
const jwt = require('jsonwebtoken')
const {signup, signin} = require('../controller/admin')



router.post('/admin/signup', signup);

router.post('/admin/signin', signin);




module.exports = router