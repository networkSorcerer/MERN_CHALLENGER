const express = require("express");
const router = express.Router();

const authApi = require("./auth.api");

router.use("/auth", authApi);
router.use("/center", centerApi);
router.use("/class", classApi);

module.exports = router;
