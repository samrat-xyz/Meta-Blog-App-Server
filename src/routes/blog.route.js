const express = require("express");
const { getAllBlogs, getSingleBlog, deleteSingleBlog, updateSingleBlog, createBlog } = require("../controllers/blog.controller");

const router = express.Router();

// get all blogs

router.get("/", getAllBlogs);

//get single blog by id

router.get("/:id", getSingleBlog);

// delete single blog

router.delete("/:id", deleteSingleBlog);

// update single blog

router.put("/:id", updateSingleBlog);

// create or add blogs
router.post("/add-blogs", createBlog);

module.exports = router;
