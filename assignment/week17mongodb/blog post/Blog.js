const mongoose=
require(mongoose);

const blogSchema=new
mongoose.Schema(
    {
        title:String,
        required: true,
        trim: true,
    },
content:{
    type: String
    required: true,
},
author:{
    type:{
        type: String,
        required: true,
        trim: true,
    },
    tags:{
        type:[String], default:[],
    },
    category:{
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps: true,
}
),

module.exports=
mongoose.model("Blog,"blogSchema);