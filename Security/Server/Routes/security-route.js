const express = require("express");
const router = express.Router();
const SecurityController = require("../Controllers/SecurityController");

router.route("/get-security").post(SecurityController.GetSecurity);
router.route("/update-security").post(SecurityController.UpdateSecurity);

module.exports = router;
