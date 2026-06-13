const cloudinary=
require("cloudinary").v2;

cloudinary.config({
    coud_name:
    process.env.clOUDINARY_CLOUD_NAME,api_key:
    process.env.clOUDINARY_API_KEY,api_seret:
    process.env.clOUDINARY_API_SECRET,
});

module.exports =cloudinary;