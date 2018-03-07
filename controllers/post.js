const Post = require("../models/Post");

exports.getPosts = (req, res) => {
  Post.find()
    .exec()
    .then(docs => res.json(docs))
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.savePost = (req, res) => {
  const newPost = new Post({
    category: req.body.category,
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
    date: req.body.date
  });
  newPost
    .save()
    .then(res => res.redirect("/"))
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
