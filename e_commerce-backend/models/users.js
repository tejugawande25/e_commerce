const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    0:{
        type:String,
        require:true
    },
    password:{
        type:Number,
        require:true
    },
    confirmPassword:{
        type:Number,
        require:true
    },
    mobileNo:{
        type:Number,
        require:true
    }
});

const users = new mongoose.model("users", signUpSchema);

module.exports = users;