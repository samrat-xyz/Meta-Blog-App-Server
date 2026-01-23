const express = require("express");
const BlogModel = require("../models/blog.model");

const router = express.Router();

// get all blogs

router.get("/", async (req, res) => {
  try {
    const blogs = await BlogModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "successfully blogs data fetch",
      blogs,
    });
  } catch (error) {
    res.status(204).json({
      success: false,
      message: "No Data Found",
    });
  }
});

//get single blog by id

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await BlogModel.findById(id);
    res.status(200).json({
      success: true,
      message: "fetch single blog by id",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to fetch single blog",
    });
  }
});

// delete single blog

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await BlogModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "successfully data delete",
      blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "failed to delete blog",
    });
  }
});

// update single blog

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const UpdatedBlogData = req.body;
    const updatedBlog = await BlogModel.findByIdAndUpdate(id, UpdatedBlogData, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Blog update successfully",
      updatedBlog,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "failed to update blog",
    });
  }
});

// create or add blogs
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
