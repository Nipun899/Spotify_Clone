const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

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
      .json({ error: "This user with this email already exists" });
  }
  //Step: 3 now if the user is not found  we will create a new user
  //Step: 3.1 we need to encrypt the password here by converting into hash.
  const hashedPassword = bcrypt.hash(password, 20);
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
