const express = require("express");
const BlogModel = require("../models/blog.model");

const router = express.Router();

router.get('/',async(req,res)=>{
  try {
    const blogs = await BlogModel.find()
    res.status(200).json({
      success:true,
      message:"successfully blogs data fetch",
      blogs
    })
    
  } catch (error) {
    res.status(204).json({
      success:false,
      message:"No Data Found"
    })
  }
})


router.post("/add-blogs", async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    const savedBlog = await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: savedBlog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add blog",
      error: error.message,
    });
  }
});


module.exports = router;
