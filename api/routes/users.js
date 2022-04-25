const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.index);    //gets all users
router.get('/:id', usersController.show);  //gets user by user id
router.post('/', usersController.create);  //creates post route for user

module.exports = router;