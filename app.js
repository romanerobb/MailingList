// The following block of code below are standard boilerplate code for ALL express projects.

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// The following block of code above are standard boilerplate code for ALL express projects.

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let emailAddress = req.body.emailAddress;

    console.log(firstName, lastName, emailAddress);
});

app.listen(3000, function(){
    console.log("Robb Server is running on port 3000");
});

//API Key
// f688e6be55ddd673f2fd79f276c8a322-us14

//List Id
// c400c0053d