const express = require ('express');
const router = express.Router();


// GET all workouts
router.get ('/' , (req , res) =>{
    res.json ({message : "get all workouts"})
});


// GET a sigle workout
router.get ('/:id' , (req , res ) =>{
    res.json ({message : "get a single workout"});
});


// POST a new workout
router.post ('/' , (req , res) =>{
    res.json ({message : "post a new workout"})
});


// DELETE a workout
router.delete ('/:id' , (req , res) =>{
    res.json ({message : "delete a workout"});
});


// UPDATE a workouts
router.patch('/:id' , (req , res)=>{
    res.json ({message : "update a workout"});
});


module.exports = router;