const express = require("express");
const router = express.Router();
const Item = require("../models/model.js");


router.get("/user/items",async(req,res) =>{
    Item.find({})
    .then((items) => res.json(items))
    .catch((error) =>{
        console.log(error);
    });
});


module.exports = router;