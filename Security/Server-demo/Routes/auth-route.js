const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/AuthController");

router.route("/").get((req, res) => {
  res.status(200).send("This auth route");
});
router.route("/login").post(AuthController.Login);
router.route("/sign-up").post(AuthController.SignUp);

module.exports = router;
