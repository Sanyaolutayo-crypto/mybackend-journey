//creating image with width 300px and height 300px
const sharp = require("sharp");

async function resizeImage(){
    await sharp("uploads/photo.jpg")
    .resize(300,300 )
    .toFile("uploads/resize-Photo.jpg");
}

resizeImage();

//converting image format(convert JPEG TO PNG)
const sharp=require("sharp");

async function  convertImage() {
    await sharp("uploads/photo.jpg")
             .png()
             toFile("uploads/photo.png");
}
convertImage();
    

//convert JPEG TO WebP
await sharp("uploads/photo.jpg")
.webp()
.toFile("uploads/photo.webp");

//Resize and Convert at the same time(this reads or uploads photo.jpg
//resize it to 500*500, convertit towebpage and save it as photo.webp)

await sharp("uploads/photo.jpg")
.resize(500,500)
.webp({quality: 80})
.toFile("uploads/photo.webp");

