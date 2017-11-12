
var express = require("express");
var app = express();



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