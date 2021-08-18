const signupTemplateCopy = require('../models/models')
const jwt = require('jsonwebtoken')

exports.signup = (request,response) => { 
    const signedupUser = new signupTemplateCopy({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    Email: request.body.Email,
    Password: request.body.Password,
    Role: "admin"
})


    signupTemplateCopy.findOne({ Email: request.body.Email })
    .exec((error, user) => {
        if (user) {
            return response.status(400).json({
                message: "admin already registered"
            });
        }
        signedupUser.save((error, data) => {
            if (error) {
                return response.status(400).json({
                    message: error
                });
            }
            if (data) {
                return response.status(200).json({
                   message: "signed up successfully"
                })
            }

        })
    })
}


  exports.signin = (request,response) => {

    signupTemplateCopy.findOne({ Email: request.body.Email })
        .exec((error, user) => {
            if (error) return response.status(400).json({ error });
            if (user) {
                if (user.authenticate(request.body.Password)) {
                    const token = jwt.sign({ _id: user._id, Role: user.Role}, process.env.JWT_SECRET, { expiresIn: '1h' });
                    response.cookie('token', token, { expiresIn: '1h'});

                    response.status(200).json({
                        // message: "Admin: Logged in successfully"
                        token,
                        user
                    });
                } else {
                    
                    response.status(400).json({
                        message: "Admin: invalid password"
                    })
                }

            } else {
                response.status(400).json({
                    message: "Admin: Wrong email id or password"
                })
            }
        });
    }

exports.signout =(req,res) => {
    res.clearCookie('token');
    res.status(200).json({message: "signed out successfully"});
}