const express = require("express")
const app = express();
const port = 8008

app.get("/", (req,res) => {
    //req contain all the data for request 
    // res contain all the data for response
    res.send ("Hello World")
});
// now we want to tell the server to run on which port 
app.listen(port,()=>{
    console.log("This server is running on port " + port)
})