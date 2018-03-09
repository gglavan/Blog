const express = require("express");
const mongoose = require("mongoose");
const Post = require("../models/Post");

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .exec()
    .then(docs => res.json(docs))
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.getSinglePost = (req, res, next) => {
  const id = req.params.postId;
  Post.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.createPost = (req, res, next) => {
  const dateOptions = {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const newPost = new Post({
    category: req.body.category,
    title: req.body.title,
    content: req.body.content,
    image: req.file.path,
    author: req.body.author,
    date: new Date().toLocaleDateString("en-US", dateOptions)
  });
  newPost
    .save()
    .then(result => res.redirect("/posts"))
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.deletePost = (req, res, next) => {
  const id = req.params.postId;
  Post.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Post deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
