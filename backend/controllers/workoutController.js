const mongoose = require('mongoose');
const Workout = require('../models/workoutModel');


// get all workouts
module.exports.getWorkouts = async (req , res) =>{
    const workout = await Workout.find({}).sort({createdAt : -1});
    res.status(200).json(workout);
}


// get single workout
module.exports.getWorkout = async ( req , res) =>{
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "such no workout"});
    }

    const workout = await Workout.findById({_id : id});

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
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message : "such no workouts"});
    }

    const workout = await Workout.findByIdAndDelete({_id : id});
    if (!workout){
        return res.status(404).json ({message : "such no workout"});
    }

    res.status(200).json(workout);

}


// update a workout
module.exports.updateWorkout = async ( req , res)=>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message : "such no workout"});
    }

    const workout = await Workout.findOneAndUpdate({_id : id} , { ...req.body });
    if (!workout){
        return res.status(404).json ({message : "such no workout"});
    }
    
    res.status(200).json(workout);
}