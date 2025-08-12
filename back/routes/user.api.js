const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const authController = require("../controller/auth.controller");
router.get("/me", authController.authenticate, userController.getUser);
module.exports = router;
