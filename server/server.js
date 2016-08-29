var express = require(express);

var app = express();
app.use(express.static(__dirname + '/../client/index.html'));
require('./config/routes.js');
app.listen(8000);

module.exports = app;