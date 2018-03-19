const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb://admin:admin@ds113019.mlab.com:13019/react-blog-db");

const postsRoutes = require("./routes/posts");
const usersRoutes = require("./routes/users");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/posts/uploads", express.static("uploads"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
