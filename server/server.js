var express = require('express');
var mongoose = require('mongoose');


var app = express();
mongoose.connect('mongodb://localhost/pocketacct')
app.use(express.static(__dirname + '/../client'));
require('./config/routes.js')(app, express);
app.listen(8000);

module.exports = app;