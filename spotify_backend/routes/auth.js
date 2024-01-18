const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helpers");

//this post route will help to register a new user
router.post("/register", async (req, res) => {
  // this code will run if /register api is called as a POST request
  //thus defines the properties of the user that we are trying to create
  const { username, firstName, lastName, email, password } = req.body;

  // Step 2 : this thing helps us to identify if a user already exists or not if if exists we will throw error that this user already exists otherwise it will create a new user
  const user = await User.findOne({ email: email });

  // Step 2.1 if this user exists this code will throw an error
  if (user) {
    return res
      .status(403)
      .json({ error: "The user with this email already exists" });
  }
  //Step: 3 now if the user is not found  we will create a new user
  //Step: 3.1 we need to encrypt the password here by converting into hash.
  const hashedPassword = bcrypt.hash(password, 10);
  const newUserData = {
    username,
    firstName,
    lastName,
    email,
    password: hashedPassword,
  };
  const newUser = await User.create(newUserData);

  //step 4 : we need to get a token fora user for recognizing the user all the request and response will be handled using this token only
  const token = await getToken(email, newUser);
  // we will return the result to the user
  const returnToUser = { ...newUser.toJSON(), token };
  delete returnToUser.password;
  return res.status(200).json(returnToUser);
});

router.post("/login", async (req, res) => {
  // This route will help us in logging in existing user in the application
  // Step 1: We will first get our credentials from req.body and then we will check wether the credentials exist in our database or not if present we will log in the user otherwise we will give a error of INVALID credentials
  const { email, password } = req.body;
  const user = await user.findOne({ email: email });
  if (!user) {
    return res.status(403).json({ err: "Invalid Credentials" });
  }
  // IF the user exists check if the password is correct of not give error that credentials are invalid ; this is a tricky step because we can convert a password into hash but we can never convert a hash into a password again but what can we do is we can set a hash based on parameters so because we have same parameters the password that we will enter will always have the same hash, so to implement this thing we have      bcrypt.compare which will automatically compare the hashed passwords and give you a result in from of true or false
  const isPasswordValid = await bcrypt.compare(password, user.password); // this will be true or false
  if (!isPasswordValid) {
    return res.status(403).json({ err: "Invalid Credentials" });
  }
  const token = await getToken(user.email, user);
  const returnToUser = { ...newUser.toJSON(), token };
  if ("password" in returnToUser) {
    delete returnToUser.password;
  }
  return res.status(200).json(returnToUser);
});
module.exports = router;
