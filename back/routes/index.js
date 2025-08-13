const express = require("express");
const router = express.Router();

const authApi = require("./auth.api");
const centerApi = require("./center.api");
const classApi = require("./class.api");
const userApi = require("./user.api");

router.use("/auth", authApi);
router.use("/center", centerApi);
router.use("/class", classApi);
router.use("/user", userApi);

module.exports = router;
