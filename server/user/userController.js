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
				if (data.length > 0){
					res.json(data[0].username);
				} else {
					res.sendStatus(301);
				}
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
	},

	getCredits: function(req, res, next) {
		var user = User.find({
			username: req.body.username
		}).exec().then(function(data, err) {
			res.json(data[0].credits);
		})
	},

	getDebits: function(req, res, next) {
		var user = User.find({
			username: req.body.username
		}).exec().then(function(data, err) {
			console.log('userController: ', data[0].debits)
			res.json(data[0].debits);
		})
	},

	addCredit: function(req, res, next) {
		var user = User.findOneAndUpdate({username: req.body.username}, 
			{$push: {credits: {ammount: req.body.ammount}}}, 
			{safe: true, upsert: true, new: true})
		.exec().then(function(data, err) {
			res.sendStatus(201);
		})
	},

	addDebit: function(req, res, next) {
		var user = User.findOneAndUpdate({username: req.body.username}, 
			{$push: {debits: {ammount: req.body.ammount}}}, 
			{safe: true, upsert: true, new: true})
		.exec().then(function(data, err) {
			res.sendStatus(201);
		})
	}
}