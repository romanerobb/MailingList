// The following block of code are standard boilerplate code for ALL express projects.

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// The following block of code are standard boilerplate code for ALL express projects.

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){


})

app.listen(3000, function(){
    console.log("Robb Server is running on port 3000");
});