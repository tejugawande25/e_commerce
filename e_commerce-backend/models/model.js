const mongoose = require("mongoose");  

const itemSchema = new mongoose.Schema({
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
    }
});

const Item = new mongoose.model("Item",itemSchema);
module.exports= Item;

