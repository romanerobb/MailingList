// The following block of code below are standard boilerplate code for ALL express projects.

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// The following block of code above are standard boilerplate code for ALL express projects.

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/c400c0053d";

    const options = {
        method: "POST",
        auth: "romanerobb:97564b4c5bedad349a6f3d386b1028c8-us14"
    }

   const request = https.request(url, options, function(response){

    if (response.statusCode == 200) {
        res.sendFile(__dirname + "/success.html");
    } else {
        res.sendFile(__dirname + "/failure.html");
    };

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });

    });

    request.write(jsonData);
    request.end();

});

app.post("/failure", function(req, res){
    res.redirect("/")
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Robb Server is running on port 3000");
});

//API Key
// 97564b4c5bedad349a6f3d386b1028c8-us14

//List Id
// c400c0053d