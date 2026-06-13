// single file uuload (upload endpoints)
const express=require("express");
const upload=require("../multerConfig");

const router =express.Router();

router.post(
    "/upload-single",upload.single("image"),
    (require,res)=>{
        res.json({
            res.json({
                message:"File uploaded successfully",
                file:require,file
            });
        });
    });

    module.exports=router;