const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth-controller");

// Routes
router.route("/").get(authController.root);
router.route("/registration").post(authController.registration);

module.exports = router;
