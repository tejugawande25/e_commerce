const mongoose = require("mongoose");  

const cartSchema = new mongoose.Schema({
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

const cart = new mongoose.model("cart",cartSchema);
module.exports= cart;