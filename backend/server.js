const express = require ('express');
const app = express();
const workoutRoutes = require('./routes/workouts');
require('dotenv').config();

// midlleware
app.use(express.json());

app.use ((req , res , next) =>{
    console.log (req.path , req.method);
    next();
})

// routes
app.use ( '/api/workouts' ,workoutRoutes);


app.listen (process.env.PORT , ()=> {
    console.log ('app listening on port 4000');
})