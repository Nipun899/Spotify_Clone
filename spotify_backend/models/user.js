const mongoose = require("mongoose");
const User = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  likedArtist: {
    // we will change this to array later
    type: String,
    default: "",
  },
  likedSongs: {
    // we will change this to array later
    type:String,
    default:""
  },
  likedPlaylist:{
    //we will change this to array later
    type: String,
    default:""
  },
  subscribedArtist:{
    //we will change this to array later
    type: String,
    default:""
  }
});

const userModel = mongoose.model('User',User)
module.exports = userModel
