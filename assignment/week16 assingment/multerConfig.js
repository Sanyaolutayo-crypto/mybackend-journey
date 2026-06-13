//configure multer(multer setting)
const multer=require("multer");

const storage=
multer.diskStorage({destination: (req, file,cb)=>{
    cb(null, "uploads/");
},

filename: (req,file,cb) =>{

    cb(null, Date.now() + "-" + file.originalname);
}

});

const upload=multer({ storage});

module.exports=upload


//Validate file typs
const multer=
require("multer");

const fileFilter= (req,file,cb)=>{
    const allowedTypes=["image/jpeg", "image/png", 
        "application/pdf"
    ];

    if
    (allowedTypes.includes(file.mimetype)){
        cb(null,true);
    }else {
        cb(new Error("only JPG,PNG,and PDF files are allowed"));
    }
};



//validate file size
const upload=multer({
    storage,fileFilter, limits:{
        filesize:5*1024*1024//5mb
    }
});


//custom filename sanitization
const path =require("path");

const storage=multer.diskStorage({
    destination:(req,file.cb)=>{
        cb(null, "uploads/");
    },

    filename:(req,file cb)=> {
        const sanitizedName=file.originalname
        .replace(/\s+/g,"-")//spaces->hyphens
        .replace(/[^a-zA-Z0-9.-]/g,"");//remove special characters
         cb(
        null,Date.now()+"-"+
        sanitizedName
    );
  }
});