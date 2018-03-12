const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  category: String,
  title: String,
  content: String,
  image: String,
  author: String,
  date: String
});

postSchema.methods.joiValidate = function(post) {
  const Joi = require("joi");
  const schema = Joi.object().keys({
    category: Joi.string()
      .min(3)
      .max(50)
      .required(),
    title: Joi.string()
      .min(3)
      .max(100)
      .regex(/[a-zA-Z0-9]{3,100}/)
      .required(),
    content: Joi.string()
      .min(100)
      .max(1500)
      .required(),
    image: Joi.string()
      .min(3)
      .max(50)
      .required(),
    author: Joi.string()
      .min(2)
      .max(100)
      .required(),
    date: Joi.string(),
    _id: Joi.object()
  });
  return Joi.validate(post, schema);
};

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
