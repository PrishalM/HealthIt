const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth");

const usersController = require("../controllers/users");
const User = require("../models/users");

router.get("/", usersController.index); //gets all users
router.get("/:id", usersController.show); //gets user by user id
router.post("/", verifyToken, usersController.create); //creates post route for user

module.exports = router;
