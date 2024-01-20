const express = require("express");
const passport = require("passport");
const router = express.Router();
const Playlist = require("../models/playlist");
const User = require("../models/user");
const Song = require("../models/songs");
// Route 1 create a playlist
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
   async (req, res) => {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
      return res
        .status(301)
        .json({ err: "Insufficient details to create a playlist" });
    }
    const playlistData = {
      name,
      thumbnail,
      songs,
      owner: currentUser._id,
      HTMLAllCollection: [],
    };
    const playlist = await Playlist.create(playlistData);
    return res.status(200).json(playlist);
  }
);

// Route 2 - get a playlist by playlist ID
//we will get the playlist id as a route parameter and we will return the playlist having that id

router.get(
  "/get/playlist/:playlistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    //this concept is called req.params
    const playlistId = req.params.playlistId;
    // I need to find the playlist with the _id = playlistId
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      return res.status(301).json({ err: "Invalid Id" });
    }
    return res.status(200).json(playlist);
  }
);

// Get all the playlist made by an artist
router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt",
  { session: false }),
  async (req, res) => {
    const artistId = req.params.artistId;
    // We can check here if a given artist with given id exists ?
    const artist = await User.findOne({ _id: artistId });
    if (!artistId) {
      return res.status(304).json({ err: "Invalid Artist ID " });
    }
    const playlist = await Playlist.find({ owner: artistId });
    return res.status(200).json({ data: playlist });
  }
);

// Add a song to a playlist
router.post(
  "/add/song",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const {playlistId, songId} = req.body
    //First check if the current user is in the owner of the playlist or any collaborator of the playlist
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
      res.status(304).json({ err: "Playlist does not exists" });
    }
    //Check if the  current user owns the playlist or is a collaborator
    if (
      !playlist.owner.equals( currentUser._id )&&
      !playlist.collaborators.includes(currentUser)
    ) {
      return res.status(400).json({ err: "Not Allowed" });
    }
    // Check if the song is a valid song
    const song = await Song.findOne({ _id: songId });
    if (!song) {
      return res.status(304).json({ err: "Song does not exist" });
    }
    //We can now add the songs to the playlist
    playlist.songs.push(songId);
    await playlist.save();
    return res.status(200).json(playlist);
  }
);
module.exports = router;
