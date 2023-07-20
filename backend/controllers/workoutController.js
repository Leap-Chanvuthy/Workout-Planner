const mongoose = require('mongoose');
const Workout = require('../models/workoutModel');


// get all workouts
module.exports.getWorkouts = async (req , res) =>{
    const workout = await Workout.find({}).sort({createdAt : -1});
    res.status(200).json(workout);
}


// get single workout
module.exports.getWorkout = async ( req , res) =>{
    const {id} = req.params.id;
    const workout = await Workout.findById(id);
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "such no workout"});
    }
    if (!workout){
        return res.status(404).json({error : "such no workout"});
    }
    res.status(200).json({workout});
}


// post a new workout
module.exports.createWorkout =  async (req , res)  => {
    const {title , load , reps} = req.body;
    try {
        const workout = await Workout.create ({
            title,
            load,
            reps
        });
        res.status (200).json (workout);
        console.log (req.body);
    }
    catch (error){
        res.status(404).json ({erorr : error.message});
    }
}


// delete a workout
module.exports.deleteWorkout = async ( req , res) =>{

}


// update a workout
module.exports.updateWorkout = async ( req , res)=>{

}