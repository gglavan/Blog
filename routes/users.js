const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");

router.get("/", UsersController.getAllUsers);
router.post("/signup", UsersController.signUpUser);
router.post("/signin", UsersController.signInUser);
router.delete("/:userId", UsersController.deleteUser);

module.exports = router;
