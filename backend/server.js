const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');
require('dotenv').config();

// midlleware
app.use(express.json());

app.use ((req , res , next) =>{
    console.log (req.path , req.method);
    next();
})

// routes
app.use ( '/api/workouts' ,workoutRoutes);
app.use('/api/user' , userRoutes);

// connect to database 
mongoose.connect (process.env.DB_URI )
    .then (() =>{
        app.listen (process.env.PORT);
    })
    .catch ((error) =>{
        console.log('Internal server error : ' , error);
    })


