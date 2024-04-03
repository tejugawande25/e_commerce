const express = require("express");
const router = express.Router();
const products = require("../models/products.js");
const users = require("../models/users.js");
const contacts = require("../models/contact.js");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");


router.get("/items",async(req,res) =>{
    const {size} = req.query;
    await products.aggregate().sort({'views':-1}).limit(Number(size))
    .then((items) => {
        res.json(items)
        // console.log(items);
    })
    .catch((error) =>{
        console.log(error);
    });
});

//route for sideUpper items
router.get("/items/sideupper",async(req,res) =>{
    const{size} = req.query;
    await products.aggregate([{$match:{views:8}}]).limit(Number(size))
    .then((items) =>{
        res.json(items);
    })
    .catch((error) =>{
        console.log(error);
    })
});

//route for sidelower items
router.get("/items/sidelower",async(req,res) =>{
    const{size} = req.query;
    await products.aggregate([{$match:{views:7}}]).limit(Number(size))
    .then((items) =>{
        res.json(items);
    })
    .catch((error) =>{
        console.log(error);
    })
});

//route for  rightone 
router.get("/items/rightone",async(req,res) =>{
    const{size} = req.query;
    await products.aggregate([{$match:{views:9}}]).sort({'views':1}).limit(Number(size))
    .then((items) =>{
        res.json(items);
    })
    .catch((error) =>{
        console.log(error);
    })
});

//route for rightSecond 
router.get("/items/rightsecond",async(req, res) =>{
    const{size} = req.query;
    await products.aggregate([{$match:{views:6}}]).limit(Number(size))
    .then((items) =>{
        res.json(items);
    })
    .catch((error) =>{
        console.log(error);
    })
})

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

//route for the inserting the product
router.post("/products",async(req,res) =>{
    try{
        console.log(req.body);
        await products.insertMany(req.body);
        res.status(200).json({
            message:"products inserted.",
        })
    }catch(error){
        console.log(error);
    }
})

//updating the product item
router.post("/updateProduct",async(req,res) =>{
   try{
    console.log(req.body);
    const updateProduct = await products.findOneAndUpdate(
        {_id:req.body.id},
        req.body
    );
    console.log("updateProduct: ", updateProduct)
     res.status(200).json({
        message:"product updated.",
     })
   }catch(error){
    console.log(error);
   }
})

//deleting the product item
router.post("/deleteProduct",async(req, res)=>{
    try{
    console.log(req.body);
     const{productID} = req.body; 
     await products.findOneAndDelete(productID);
     res.status(200).json({
        message:"product deleted.",
     })
    }catch(error){
        console.log(error);
    }
})

//product/id
router.get("/products/:id", async(req,res) =>{
    try{
   const id = req.params.id;
   const RequireProduct = await products.findById(id).exec();
   res.status(200).json({
    RequireProduct:RequireProduct,
   })
    }catch(error){
        console.log(error);
    }
})
module.exports = router;