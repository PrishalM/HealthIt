const express = require("express");
const router = express.Router();
const authRoutes = require("../controllers/auth");

router.post("/", authRoutes.index); 


module.exports = router;
