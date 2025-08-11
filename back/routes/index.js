const express = require("express");
const router = express.Router();

const authApi = require("./auth.api");

router.use("/auth", authApi);

module.exports = router;
