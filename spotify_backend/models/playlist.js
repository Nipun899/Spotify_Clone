const mongoose = require("mongoose");
const Playlist = mongoose.Schema({
 //this is the name of the playlist
  name: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String,
    required: true,
  },

  owner: {
    // we will change this to array later
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  songs: [
    {
      type: String,
      required: true,
    },
  ],
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const songModel = mongoose.model("playlist", Playlist);
module.exports = songModel;
