require("dotenv").config();

const express=
require("express");
const connectDB=require("./config/db");

const app=express();

connectDB();

app.use(express.json());

app.listen(5000, () =>{
    console.log("serve running on port 5000");
});