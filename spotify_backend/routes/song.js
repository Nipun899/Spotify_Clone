const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/songs");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    // passport.authenticate(user) this thing helps us to create a secure route for any user to enter if the entries of the user are invalid this thing doesn't allow our user to access the /create route
    //now we will create a  req.body which will tell what are the variables of the song like what are the things that we require for getting a song to be uploaded
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
      return res.status(301).json("Insufficient Details to Create a Song");
    } else {
      console.log("Not able to create a song");
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
  }
);

// we will make a get route for finding my own songs that I have published
router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    const currentUser = req.user;
    // We need to get all songs in which artist id == currentUser._id
    const songs = await Song.find({ artist: req.user._id });
    return res.status(200).json({ data: songs });
  }
);

module.exports = router;
