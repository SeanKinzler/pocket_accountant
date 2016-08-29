var User = require('./../user/userModel')
var controller = require('./../user/userController')
module.exports = function(app, express) {
	app.post('/api/login', controller.login);

	app.post('/api/addUser', function(req, res, next) {
		new User({
			username: req.body.username,
			password: req.body.username,
		}).save();
		console.log('saved username: ', req.body.username);
		res.sendStatus(201);
		next();
	});
};