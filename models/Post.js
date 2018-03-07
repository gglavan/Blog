const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  category: String,
  title: String,
  body: String,
  image: String,
  date: Date
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
