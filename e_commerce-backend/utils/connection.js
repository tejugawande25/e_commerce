const mongoose = require("mongoose");


const URI = "mongodb+srv://tejugawande25:LLDZ98bSZm0TUsQj@ecommerce.vmywynx.mongodb.net/ecommerce-1?retryWrites=true&w=majority&appName=ecommerce";

const connectDb = async()=>{
    mongoose.connect(URI,{
       
    }).then((connection) =>{
       console.log("connected.")
    }).catch((error) =>{
        console.log(error);
    })
}

module.exports = connectDb;