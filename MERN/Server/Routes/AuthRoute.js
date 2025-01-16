const express = require("express");
const router = express.Router();
const authController = require("../Controllers/AuthController");

router.route("/").get(authController.index);

router.route("/sign-up").get(authController.SignUp);

module.exports = router;
