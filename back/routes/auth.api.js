const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller.js");
router.post("/google", authController.loginWithGoogle);
