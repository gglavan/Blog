const express = require("express");
const router = express.Router();
const multer = require("multer");
const PostsController = require("../controllers/posts");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", PostsController.getAllPosts);

router.post("/", upload.single("image"), PostsController.createPost);

router.get("/:postId", PostsController.getSinglePost);

router.patch("/:postId", PostsController.updatePost);

router.delete("/:postId", PostsController.deletePost);

module.exports = router;
