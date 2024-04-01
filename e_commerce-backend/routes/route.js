const express = require("express");
const router = express.Router();
const products = require("../models/products.js");
const users = require("../models/users.js");
const contacts = require("../models/contact.js");
const jwt = require("jsonwebtoken");


router.get("/items",async(req,res) =>{
    products.find({})
    .then((items) => {
        res.json(items)
    })
    .catch((error) =>{
        console.log(error);
    });
});

// route for the usersignup
router.post("/signup",async(req,res) =>{
    try{
       const {username,password,confirmPassword,mobileNo,role} = req.body;

       if(!username){
        return res.status(400).json({message:"Username is required"});
       }
       
       if(!password){
        return res.status(400).json({message:"Username is required"});
       }
       if(!confirmPassword){
        return res.status(400).json({message:"Username is required"});
       }
       if(!mobileNo){
        return res.status(400).json({message:"Username is required"});
       }
       if(!role){
        return res.status(400).json({message:"Username is required"});
       }
       if(password !== confirmPassword){
        return res.status(200).json({message:"Password dosen't match"});
       }

      const saveUser =  await users.insertMany(req.body);

      if(!saveUser){
        return res.status(500).json({message:"Registrain failed"});
      }
      
       res.status(200).json({
        message:"Registration Successful. Please login in !",
       })

      
    }catch(error){
        console.log(error);
    }
});

//route for the userlogin
router.post("/login", async(req, res) =>{
    try{
        const{username,password,role} = req.body;
        
       const userExit = await users.findOne({
        username:username,
        role:role
    });

       console.log(userExit);

       if(!userExit){
        return res.status(400).json({message:"Invalid Credentials."});
       }

       if(userExit.password !== parseInt(req.body.password)){
       return res.json({message:"Invalid credentials"});
       }
       
        const payload = {
            user_id: req.body.username,
            role:role,
        };  
        const secreteKey = `ebhjbahbhibfuiwbf`;
        const expiresIn= '1d';
        
        const token = jwt.sign(payload,secreteKey,{expiresIn});
        console.log(token);
        res.status(200).json({
            message:token,
        })
    }catch(error){
        console.log(error);
    }
});

//route for the user-contact
router.post("/contact", async(req,res) =>{
    try{
       console.log(req.body);
       await contacts.insertMany(req.body);
       res.status(200).json({
        message:"contact successful.",
       })
    }catch(error){
        console.log(error);
    }
})

module.exports = router;