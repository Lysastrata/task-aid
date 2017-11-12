
var express = require("express");
var app = express();

var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var client = new auth.OAuth2(CLIENT_ID, '', '');
client.verifyIdToken(
    token,
    CLIENT_ID,
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
    function(e, login) {
      var payload = login.getPayload();
      var userid = payload['sub'];
      // If request specified a G Suite domain:
      //var domain = payload['hd'];
    });



// var React = require('../client/node_modules/react');


var bodyParser = require('body-parser');
app.use(bodyParser.json());


var path = require("path");

// app.use(express.static(path.join(__dirname, "../client/public")));

require('./config/mongoose.js');

// var routes_setter = require('./config/routes.js');
// routes_setter(app);




var port = process.env.PORT || 8000;
var server = app.listen(port, function() {
 console.log("listening on port "+port);
})