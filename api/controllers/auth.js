const User = require("../models/auth");

// index route - gets all users:
async function index(req, res) {
  try {
    const auths = await Auth.comparePassword(req.body);
    res.status(200).json(auths);
  } catch (err) {
    res.status(500).json({ err });
  }
}

module.exports = { index };
