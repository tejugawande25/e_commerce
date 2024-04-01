const mongoose = require("mongoose");  

const productSchema = new mongoose.Schema({
    src:{
        type:String,
        require:true
    },
    alt:{
        type:String,
        require:true
    },
    text:{
        type:String,
        require:true
    },
    newtext:{
        type:String,
        require:true
    },
    views:{
        type:Number,
        require:true
    }
});


const products = new mongoose.model("products",productSchema);
module.exports= products;

