const express = require("express");
const BlogModel = require("../models/blog.model");

const router = express.Router();

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
