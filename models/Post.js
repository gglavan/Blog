const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  category: String,
  title: String,
  content: String,
  image: String,
  author: String,
  date: String
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
