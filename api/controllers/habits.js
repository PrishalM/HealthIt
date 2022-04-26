const Habit = require('../models/habits');

// index route: gets all habits
async function index (req, res) {
    try {
        const habits = await Habit.all
        res.status(200).json(habits)
    } catch(err) {
        res.status(500).json({err})
    }
};

// show route: gets habit by habit id
async function showHabitbyHabitId (req, res) {
    try {
        const habit = await Habit.findByHabitId(req.params.id);
        res.status(200).json(habit)
    } catch(err) {
        res.status(404).json({err})
    }
};

// show route: gets habit by user id
async function showHabitsbyUser (req, res) {
    try {
        const habit = await Habit.HabitsByUserId(req.params.id);
        res.status(200).json(habit)
    } catch(err) {
        res.status(404).json({err})
    }
};

//post route - creates post route for habit
async function create (req, res) {
    try {
        const habit = await Habit.create(req.body);
        res.status(201).json(habit)
    } catch (err) {
        res.status(422).json({err})
    }
};

//patch route - 'creates' an update route for habit
async function patch (req, res) {
    try {
        const habit = await Habit.patch(req.body);
        res.status(200).json(habit)
    } catch (err) {
        res.status(422).json({err})
    }
};

//delete route - creates delete route for habit

async function destroy (req, res) {
    try {
    const habit = await Habit.destroy(req.params.id);
    const resp = await habit.destroy();
    res.status(204).end()
} catch (err) {
    res.status(404).json({err})
}
}

module.exports= {index, showHabitbyHabitId, showHabitsbyUser, create, patch, destroy};
