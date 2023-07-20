const express = require ('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');


// GET all workouts
router.get ('/' , workoutController.getWorkouts);


// GET a sigle workout
router.get ('/:id' , workoutController.getWorkout);


// POST a new workout
router.post ('/' , workoutController.createWorkout);


// DELETE a workout
router.delete ('/:id' , workoutController.deleteWorkout);


// UPDATE a workouts
router.patch('/:id' , workoutController.updateWorkout);


module.exports = router;