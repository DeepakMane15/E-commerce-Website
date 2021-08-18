const signupTemplateCopy = require('../models/models')
const jwt = require('jsonwebtoken')

exports.signup = (request,response) => { 
    const signedupUser = new signupTemplateCopy({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    Email: request.body.Email,
    Password: request.body.Password,
    Role: "user"
})


    signupTemplateCopy.findOne({ Email: request.body.Email })
    .exec((error, user) => {
        if (user) {
            return response.status(400).json({
                message: "user already registered"
            });
        }
        signedupUser.save((error, data) => {
            if (error) {
                return response.status(400).json({
                    message: "something went wrong"
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
                    const token = jwt.sign({ _id: user._id, Role: user.Role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    const {Name, Email} = user

                    response.status(200).json({
                        // message: "Logged in successfully"
                        token,
                        user:{Name, Email}
                    });
                } else {
                    
                    response.status(400).json({
                        message: "invalid password"
                    })
                }

            } else {
                response.status(400).json({
                    message: "Wrong email id or password"
                })
            }
        });
    }

    exports.requireSignin= (req, res,next) => {
        if(req.headers.authorization){ 
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token,process.env.JWT_SECRET);
        req.user = user;
        next();
        }
        return res.status(400).json({messsage: "Authorization required"})
    }



