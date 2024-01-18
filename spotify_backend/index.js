const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport")
require("dotenv").config();
const authRoutes = require("./routes/auth.js")
const songRoutes = require("./routes/song.js")
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/user")
const app = express();
const port = 8080;
app.use(express.json());
//connecting our database to node package
//mongoose.connect("<database ka url>",{<connections options and modifications>})
mongoose
  .connect(
    "mongodb+srv://nipunjain892:" +
      process.env.mongoPassword +
      "@cluster0.soacbs9.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log(err);
  });
//setting up passport-jwt for authentication

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisISaSecretKey"; // we will setup it in emv file later
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);
app.get("/", (req, res) => {
  //req contain all the data for request
  // res contain all the data for response
  res.send("Hello World");
});
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
// now we want to tell the server to run on which port
app.listen(port, () => {
  console.log("This server is running on port " + port);
});
