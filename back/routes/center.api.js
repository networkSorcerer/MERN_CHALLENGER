const express = require("express");
const router = express.Router();
const centerController = require("../controller/center.controller");
const authController = require("../controller/auth.controller");

router.post(
  "/",
  authController.authenticate,
  authController.checkAdminPermission,
  centerController.addCenter
);

module.exports = router;
