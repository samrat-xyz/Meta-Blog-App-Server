const express = require('express')
const BlogModel = require('../models/blog.model')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Blog Routes')
})
router.post('/add-blog',async(req,res)=>{
   try {
    const blogData = req.body
    const blog = new BlogModel(blogData)
    const savedBlog = await blog.save()
    res.status(201).json({
        success:true,
        message:"blog created successfully",
        savedBlog
    })
    
   } catch (error) {
    res.status(400).json({
        success:false,
        message:'failed to create blog'
    })
   }

})

module.exports=router