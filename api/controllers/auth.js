// const express = require('express');
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const Auth = require("../models/auth");
// const User = require("../models/users");

// router.post('/', async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt();
//         const hashed = await bcrypt.hash(req.body.password, salt);
//         await User.create({...req.body, password: hashed})
//         res.status(201).json({msg: 'User created'})
//     } catch (err) {
//         res.status(500).json({err});
//     }
// })


// index route -
async function index(req, res) {
  try {
    const auths = await Auth.comparePassword(req.body);
    console.log(auths);
    res.status(200).json({auth: auths });
  } catch (err) {
    res.status(500).json({ err });
  }
}

module.exports = { index };
