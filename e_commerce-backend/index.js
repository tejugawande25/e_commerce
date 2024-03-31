require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/route.js");
const connectDb = require("./utils/connection.js");
const bodyparser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(router);
connectDb();

app.use("/api/auth",router);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})