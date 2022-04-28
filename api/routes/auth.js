const express = require("express");
const router = express.Router();
const authRoutes = require("../controllers/auth");

router.use("/", authRoutes);

module.exports = router;
