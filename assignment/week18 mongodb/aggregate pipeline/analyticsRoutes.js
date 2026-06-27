const express =
require("express");
const router=
express.Router();
const {getAnalytics}=require("../controller");

router.get("/analytics",gerAnalytics);

module.exports=router