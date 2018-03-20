const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");

exports.getAllUsers = (req, res, next) => {
  User.find()
    .exec()
    .then(docs => res.json(docs))
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.signInUser = (req, res, next) => {
  User.findOne(req.body)
    .exec()
    .then(user => {
      console.log("From database", user);
      if (user) {
        res
          .status(200)
          .json({
            token:
              req.body.email == "admin@admin.com" &&
              req.body.password == "Admin1"
                ? "special"
                : String(user._id)
          });
      } else {
        res.status(404).json({ message: "No such user!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.signUpUser = (req, res, next) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  const newUser = new User(user);
  newUser
    .save()
    .then(result =>
      res.status(200).json({
        message: "Your user registration was successful!"
      })
    )
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.userId;
  User.remove({ _id: id })
    .exec()
    .then(result => {
      console.log("User deleted");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
