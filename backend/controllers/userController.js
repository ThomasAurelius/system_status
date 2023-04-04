const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

//@desc Register a new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
   const { name, email, password } = req.body;
   
   if(!name || !email || !password) {
      res.status(400);
      throw new Error('Please fill in all fields');
   }

   //check if user exists
   const userExists = await User.findOne({email});
   if(userExists) {
      res.status(400);
      throw new Error('User already exists');
   }

   //hash password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);
   

   res.json({ message: 'Register user' })
});

//@desc Auth user & get token
//@route POST /api/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login user' });
});
      
//@desc Get user data
//@route GET /api/users/profile
//@access Private
const getUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Get user data' });
});
     


module.exports = { 
   registerUser,
   loginUser,
   getUser,
};