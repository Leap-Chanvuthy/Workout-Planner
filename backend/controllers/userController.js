const User = require('../models/userModel');
const jwt = require ('jsonwebtoken');


// sign jwt token
const createToken = (_id) =>{
    return jwt.sign({_id} , process.env.SECRET , {expiresIn : '3d'});
}

const loginUser = async (req , res)=> {
    const {email , password} = req.body;
    try {
        const user = await User.login(email , password);
        const token = createToken(user._id);
        res.status(200).json ({email , user , token});
        console.log (req.body);
    }
    catch (error){
        res.status(404).json({error : error.message});
    }
}

const signupUser = async (req , res) =>{
    const {email , password} = req.body;
    try {
        const user = await User.signup(email , password);
        //generate token
        const token = createToken(user._id);
        res.status(200).json({email , user , token});
        console.log(req.body);
    }
    catch (error){
        res.status(404).json ({error : error.message});
    }
}

module.exports = {loginUser , signupUser};