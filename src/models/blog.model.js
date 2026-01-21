const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    author: AuthorSchema,
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model("Blog", BlogSchema);
module.exports = BlogModel;
