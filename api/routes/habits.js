const express = require('express');
const router = express.Router();
const habitRoutes = require('../controllers/habits');


router.get('/', habitRoutes.index); //get all habits
router.get('/:id', habitRoutes.showHabitbyHabitId); //get habit by habit id
router.get('/user/:id', habitRoutes.showHabitsbyUser); //get habit by user id
router.post('/', habitRoutes.create); //create habit route
router.patch('/:id', habitRoutes.patch); //update habit route
router.delete('/:id', habitRoutes.destroy); //delete habit route


module.exports = router;
