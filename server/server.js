var express = require('express');

var app = express();
app.use(express.static(__dirname + '/../client'));
require('./config/routes.js')(app, express);
app.listen(8000);

module.exports = app;