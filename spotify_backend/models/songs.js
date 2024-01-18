const mongoose = require("mongoose");
const Song = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
track:{
    type:String,
    required:true,
},
  thumbnail: {
    type: String,
    required:true,
  },
  artist: {
    // we will change this to array later
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const songModel = mongoose.model("Song", Song);
module.exports = songModel;
