const Blog=require("../models/Blog");

//blog post
export.createBlog = async
(req, res)=> {
    try{
        const blog =await
        Blog.create(req.body);

        res.status(201).json({
            success:true,
            data:blog,
        }),
    }catch (error) {
        res.status(400).json({
            succss:false,
            Message: error.Message,
        });
    }
};


//Get aoo Blogs(Get)
exports.getBlogs=async (req,res)=> {
    try {
        const blogs=await
        Blog.find();

        res.status(200).json({
            success: true,
            count:blogs.length,
            data:blogs,
         });
    } catch(error){
        res.status(500).json({
            success:false,
            Message:error.Message,
        });
    }
};

//Get one blog(Get/:id)

exports.getBlog = async(req,res)=>{
    try{
        const blog=awaitBlog.findById(req.params.id);

        if(!blog) {
            return
            res.status(4004).json({
                success:false,
                message:"Blog not found",
            });
        }
    }
};

//update Blog(put)
export.updateBlog= async
(req,res) =>
    try{
        const blog =awaitBlog.friendByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators: true,
        }
    );
    if (!blog){
        return
        res.status(404).json({
            success:false,message: "Blog not found",
        });
    }

    res.status(200).json({
        success: true,
    });
    }catch (error){
        res.status(400).json({
            success:false,
            message: error.message
        });
    };


    //Delete blog (delete)
    export.deleteBlog=async(req,res)=>{
        try{
            const blog=await
            Blog.findByAndDeete(req.params.id);
            if(!blog){
                return
                res.status(400).json({
                    success:false,
                    message: "Blog not found"
                
                });
            }

            res.status(200).json({
             success: true,
             message::"Blog deleted successfully" ,
            });
        }catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };