const mongoose = require("mongoose");  

const ordercartSchema = new mongoose.Schema({
    src:{
        type:String,
        require:true
    },
    alt:{
        type:String,
        require:true
    },
    heading:{
        type:String,
        require:true
    },
    subheading:{
        type:String,
        require:true
    },
    views:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    }
});

const ordercart = new mongoose.model("ordercart",ordercartSchema);
module.exports = ordercart;