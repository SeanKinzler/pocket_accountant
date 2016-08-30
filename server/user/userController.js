//acct balance = credits - debits
//func calc balance
//func get current user data
//
var User = require('./userModel.js');
module.exports = {
	login: function(req, res, next) {
		console.log('req: ', req.body.username);
		var user = User.find({
			username: req.body.username,
			password: req.body.password 
		}).exec().then(function(data, err) {
			if(err) {
				console.log('Error: ', err)
				res.sendStatus(500);
			} else {
				console.log(data);
				res.json(data[0].username);
			}
			next();
		});
		
	},

	signup: function(req, res, next) {
		User.create({
			username: req.body.username,
			password: req.body.password,
		}, function(data, err) {
			res.sendStatus(201);
			next();
		});
	}
}