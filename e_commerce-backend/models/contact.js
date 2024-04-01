const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    contact:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    problem:{
        type:String,
        require:true
    }
})

const contacts = new mongoose.model("contacts", contactSchema);

module.exports = contacts;