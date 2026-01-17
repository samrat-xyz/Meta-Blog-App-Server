const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        required:true,
    },
    author:{
        name:String,
        image:String
    }
})

const BlogModel = mongoose.model("Blog",BlogSchema)

module.exports=BlogModel