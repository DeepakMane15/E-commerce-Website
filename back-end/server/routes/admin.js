const express = require('express')
const { render } = require('react-dom')
const router = express.Router()
const signupTemplateCopy = require('../models/models')
const jwt = require('jsonwebtoken')
const {signup, signin,signout} = require('../controller/admin')
const { requireSignin } = require('../common-middleware');



router.post('/admin/signup', signup);

router.post('/admin/signin', signin);
router.post('/admin/signout',requireSignin, signout);



    
module.exports = router