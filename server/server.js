var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird')
var bodyParser = require('body-parser');

var app = express();
mongoose.connect('mongodb://localhost/pocketacct')

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./config/routes.js')(app, express);

app.listen(8000);

module.exports = app;