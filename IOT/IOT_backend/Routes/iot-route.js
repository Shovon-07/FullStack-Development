const express = require("express");
const router = express.Router();
const IotController = require("../Controllers/IotController");

router.get("/", IotController.GetData);
router.post("/store", IotController.Store);
router.put("/update/:id", IotController.Update);

module.exports = router;
