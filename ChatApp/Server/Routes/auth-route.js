const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/AuthController");

router.route("/").post(AuthController.index);
router.route("/login").post(AuthController.Login);
router.route("/sign-up").post(AuthController.SignUp);

module.exports = router;
