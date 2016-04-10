//Set Up
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 8000;

// Routes
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
//app.use(morgan('combined'));

app.use(function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// start app
var server = app.listen(8000);

// shoutout to the user                     
console.log('Persona Experiment on ' + port);

// expose app           
exports = module.exports = app;    