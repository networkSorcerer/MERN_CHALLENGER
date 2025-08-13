const express = require("express");
const router = express.Router();
const classController = require("../controller/class.controller");
router.post("/", authController.authenticate, classController.addClass);

module.exports = router;
