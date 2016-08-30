var User = require('./../user/userModel')
var controller = require('./../user/userController')
module.exports = function(app, express) {
	app.post('/api/login', controller.login);

	app.post('/api/addUser', controller.signup)
};