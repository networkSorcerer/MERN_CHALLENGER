const express = require("express");
const router = express.Router();
const classController = require("../controller/class.controller");
const authController = require("../controller/auth.controller");

router.post("/", authController.authenticate, classController.addClass);
router.get("/day", authController.authenticate, classController.getLurnedDay);
module.exports = router;
