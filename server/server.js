
var express = require("express");
var app = express();
var session = require('express-session')

app.use(session({
  secret: 'Sd9JKlui26nbM52UQwer0pM15oPzXL',
  resave: false,
  saveUninitialized: true,
  rolling: true //resets session timeout everytime the user interacts with the site
}));

// var React = require('../client/node_modules/react');


// var bodyParser = require('body-parser');
// app.use(bodyParser.json());


// var path = require("path");

// app.use(express.static(path.join(__dirname, "../client/public")));

// require('./config/mongoose.js');

// var routes_setter = require('./config/routes.js');
// routes_setter(app);


// (Receive authCode via HTTPS POST)


if (request.getHeader('X-Requested-With') == null) {
  // Without the `X-Requested-With` header, this request could be forged. Aborts.
}

var http = require('http');
var express = require('express');
var Session = require('express-session');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var plus = google.plus('v1');
const ClientId = "YourGoogleAppClientId";
const ClientSecret = "YourGoogleAppClientSecret";
const RedirectionUrl = "http://localhost:1234/oauthCallback";
 
//starting the express app
var app = express();
 
//using session in express
app.use(Session({
    secret: 'your-random-secret-19890913007',
    resave: true,
    saveUninitialized: true
}));
 
//this is the base route
app.use("/", function (req, res) {
    res.send(`
        &lt;h1&gt;Authentication using google oAuth&lt;/h1&gt;
    `)
});
 

function getOAuthClient () {
    return new OAuth2(ClientId ,  ClientSecret, RedirectionUrl);
}
 
function getAuthUrl () {
    var oauth2Client = getOAuthClient();
    // generate a url that asks permissions for Google+ and Google Calendar scopes
    var scopes = [
      'https://www.googleapis.com/auth/plus.me'
    ];
 
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes // If you only need one scope you can pass it as string
    });
 
    return url;
}
 

app.use("/", function (req, res) {
    var url = getAuthUrl();
    res.send(`
        &lt;h1&gt;Authentication using google oAuth&lt;/h1&gt;
        &lt;a href=${url}&gt;Login&lt;/a&gt;
    `)
});
 



var port = 1234;
var server = http.createServer(app);
server.listen(port);
server.on('listening', function () {
    console.log(`listening to ${port}`);
});
 


var port = process.env.PORT || 8000;
var server = app.listen(port, function() {
 console.log("listening on port "+port);
})