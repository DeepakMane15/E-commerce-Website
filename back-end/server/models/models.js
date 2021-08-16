const mongoose = require('mongoose')
const bcrypt=require('bcrypt')

const signupTemplate = new mongoose.Schema({
    Name: {
        type:String,
        required:true

    },
    Email: {
        type: String,
        required:true,
        unique:true
    },
    Password : {
        type: String,
        required:true,
        unique:true
    },
    Role : {

        type:String,
        required:true
    }
})

signupTemplate.virtual('password')
.set(function(password) {
    this.Password = bcrypt.hashSync(password, 10);
});

signupTemplate.methods = {
    authenticate: function(password) {
        if(password == this.Password) {
            return true
        }else{
            return false
        }
    }
}

module.exports=mongoose.model('mytable',signupTemplate)