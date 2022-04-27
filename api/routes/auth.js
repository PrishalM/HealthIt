const express = require("express");
const router = express.Router();
const authRoutes = require("../controllers/auth");

router.get("/", authRoutes.index); 


module.exports = router;
