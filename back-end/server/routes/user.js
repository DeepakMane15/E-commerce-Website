const express = require('express')
const { render } = require('react-dom')
const router = express.Router()
const {signup, signin} = require('../controller/user')
const { requireSignin } = require('../common-middleware');




router.post('/signup', signup);

router.post('/signin', signin);

router.post('/profile', requireSignin, (request,response) => {
    response.status(200).json({user:'profile'})
});


module.exports = router