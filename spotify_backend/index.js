const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 3000;
//connecting our database to node package
//mongoose.connect("<database ka url>",{<connections options and modifications>})
mongoose.connect(
  "mongodb+srv://nipunjain892:" +
    process.env.mongoPassword +
    "@cluster0.soacbs9.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then((x)=>{
    console.log("Connected to Mongo")

}).catch((err)=>{
console.log("error while connecting")
});
app.get("/", (req, res) => {
  //req contain all the data for request
  // res contain all the data for response
  res.send("Hello World");
});
// now we want to tell the server to run on which port
app.listen(port, () => {
  console.log("This server is running on port " + port);
});
