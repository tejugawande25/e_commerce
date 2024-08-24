require("dotenv").config();
const express = require("express");
const router = express.Router();
const products = require("../models/products.js");
const users = require("../models/users.js");
const contacts = require("../models/contact.js");
const cart = require("../models/cart.js");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const Axios = require("axios");

// const { default: mongoose, Query } = require("mongoose");const assert = require('assert');



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
//this is the route for the sideupper items
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

//route for product page tshirts
router.get("/item/tshirtproducts",async(req,res) =>{
    const{size} = req.query;
    await products.aggregate([{$match:{views:1}}]).limit(Number(size))
    .then((items) =>{
        res.json(items);
    })
    .catch((error) =>{
        console.log(error);
    })
});

//route for the product page denims
router.get("./item/denimproducts",(req,res) =>{

})

//route for product page jeans
router.get("/item/jeansproducts",async(req,res) =>{
    const{size} = req.query;
    await products.aggregate([{$match:{views:2}}]).limit(Number(size))
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

       console.log(req.body.user);
       const {username,password,confirmPassword,mobileNo} = req.body.user;
       if(!username){
        return res.status(400).json({message:"Username is required"});
       }
       
       if(!password){
        return res.status(400).json({message:"Password is required"});
       }
       if(!confirmPassword){
        return res.status(400).json({message:"Confirmpassword is required"});
       }
       if(!mobileNo){
        return res.status(400).json({message:"mobileNo is required"});
       }
       if(!req.body.user[0]){
        return res.status(400).json({message:" role is required"});
       }
       if(password !== confirmPassword){
        return res.status(400).json({message:"Password dosen't match"});
       }

      const saveUser =  await users.insertMany(req.body.users);

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
       const{mobileNo, password} = req.body.user;  
       const userExit = await users.findOne({
        mobileNo:mobileNo,
      
    });

       console.log(userExit);

       if(!userExit){
        return res.status(400).json({message:"Invalid Credentials(username)."});
       }
       console.log(userExit.password);
       if(userExit.password !== parseInt(password)){
       return res.status(400).json({message:"Invalid credentials(password)"});
       }
       
        const payload = {
            user_id: req.body.user.mobileNo,
            role:req.body.user[0],
        };  
        const secreteKey = `ebhjbahbhibfuiwbf`;
        const expiresIn= '1d';
        
        const token = jwt.sign(payload,secreteKey,{expiresIn});
        console.log(token);
        // res.status(200).json({
        //     message:token,

        // })
        res.cookie("jwt",token,{
            httpOnly:true,
            secure:true,
            maxAge:3600000
        });
        console.log(cookie);
    }catch(error){
        console.log(error);
    }
});

//getting the particular user from the users database
router.post("/getUsers",async(req,res) =>{
    console.log(req.body.id);
    try{
        const userId = req.body.id;
        const user = await users.findById(userId).exec();
        console.log(user);
        res.status(200).json({
            user: user[0],
        })
    }catch(error){
        console.log(error);
    }
})

//route for the user-contact
router.post("/contact", async(req,res) =>{
    try{
       await contacts.insertMany(req.body.userProblem);
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


//cart routes
//adding the element to the cart
router.post("/cart/add/:id",async(req,res) =>{
    try{
    const id = req.params.id;
    const productExit = await cart.findById(id).exec();
    if(productExit){
        return res.status(200).json({
            message:"product already exits in the cart!"
        })
    }
    const product = await products.findById(id).exec();
    cart.insertMany(product);
    res.status(200).json({
        product:product,
    })
    }catch(error){
        console.log(error);
    }
});


// displaying the cart item
router.get("/cart/items",async(req,res) =>{
    await cart.find({})
   .then((items) =>{
    res.json(items);
   })
   .catch((error) =>{
    console.log(error);
   })
});

//geting the sum aggregate for all the products in the cart
router.get("/cart/items/sum", async(req,res) =>{
    await cart.aggregate([{
        $group:{
            _id:{},
            totalAmount:{$sum:{$multiply:["$price","$quantity"]}}
        }
    }])
    .then((totalamount) =>{
        res.status(200).json({
            totalAmount:totalamount[0].totalAmount,
            message:"added successfully !"
        })
    })
    .catch((error) =>{
        console.log(error);
    })
})


//increasing the quantity for the product
router.post("/cart/items/increaseQuantity/:id",async(req,res) =>{
   const id = req.params.id;
   console.log(id);
   console.log(req.body);
   await cart.findOneAndUpdate(
    {_id:id},
    req.body,
    {upsert:true}
   )
   .then((item) =>{
    res.status(200).json({
        message:"sucessfully increase !"
    })
   })
   .catch((error) =>{
    console.log(error);
})
})

//decreasing the quantity for the product
router.post("/cart/items/decreaseQuantity/:id",async(req,res) =>{
    const id = req.params.id;
    await cart.findOneAndUpdate(
        {_id:id},
        req.body,
        {upsert:true}
    )
    .then((item) =>{
        res.status(200).json({
            message:"successfully decrease !"
        })
    })
    .catch((error) =>{
        console.log(error);
    })

})

//deleting the particular item from the cart
router.delete("/cart/items/:id",async(req,res) =>{
   const id = req.params.id;
   await cart.findByIdAndDelete(id)
   .then((items) =>{
    res.status(200).json({
        message:"cart item deleted",
    })
   })
   .catch((error) =>{
    console.log(error);
   })
  
})

// deleting all items from the cart
router.delete("/cart/deleteall", async(req,res) =>{
    await cart.deleteMany({})
    .then((items) =>{
        res.status(200).json({
            message:"cart deleted successfully",
        })
    })
    .catch((error) =>{
        console.log(error);
    })
})



//TRACKING API OF FEDEX
//CREATING THE FUNCTION FOR THE ACCESS TOKEN
const authFedex = async () => {
    try {
      // Input Data
      const inputPayload = {
        grant_type: 'client_credentials',
        client_id: process.env.FEDEX_API_KEY,
        client_secret: process.env.FEDEX_SECRET_KEY
      }
      // Headers
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      const response = await Axios.post(`${process.env.FEDEX_BASE_API_URL}/oauth/token`, inputPayload, { headers: headers })
      return response.data
    } catch (error) {
      console.error('Error authenticating with FedEx API:', error);
      throw new Error('Failed to authenticate with FedEx API');
    }
  }
  


router.post("/trackorder",async(req,res) =>{
    console.log(req.body.trackingNumber);
    try{
    const authRes = await authFedex();
    const inputPayload = {
        includeDetailedScans:true,
        trackingInfo:[
            {
                trackingNumberInfo:{
                    trackingNumber: req.body.trackingNumber,
                }
            }
        ]
    }
    const headers ={
        'Content-Type': 'application/json',
        'X-locale': 'en_US',
        'Authorization': `Bearer ${authRes.access_token}`
    }
    const response = await Axios.post(`${process.env.
        FEDEX_BASE_API_URL}/track/v1/trackingnumbers`,inputPayload,
        {headers:headers})
        const trackingDetails = response.data.output.completeTrackResults[0].trackResults[0].scanEvents.map(item => ({
            eventDescription: item.eventDescription,
            city: item.scanLocation.city
          }))
        res.send(trackingDetails);  
    }catch(error){
     console.log(error);
    }
})


module.exports = router;