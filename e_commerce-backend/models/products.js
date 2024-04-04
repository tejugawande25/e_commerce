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
    }
});


const products = new mongoose.model("products",productSchema);
module.exports= products;

