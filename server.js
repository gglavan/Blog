const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost/mydb");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postController = require("./controllers/post");

app.get("/api/posts", postController.getPosts);
app.post("/api/posts", postController.savePost);

app.listen(port, () => console.log(`Listening on port ${port}`));
