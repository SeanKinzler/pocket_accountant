var User = require('./../user/userModel')
module.exports = function(app, express) {
	app.post('/api/login', function(req, res, next) {
		var data = User.find(req.body)
		console.log('data: ', data);
		res.json();
		next();
	});

	app.post('/api/addUser', function(res, res, next) {
		new User({
			username: req.body.username,
			password: req.body.username,
		}).save();
		console.log('saved username: ', req.body.username);
		res.sendStatus(201);
		next();
	});
};