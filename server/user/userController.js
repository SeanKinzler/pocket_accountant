//acct balance = credits - debits
//func calc balance
//func get current user data
//
var User = require('./userModel.js');
module.exports = {
	login: function(req, res, next) {

		var user = User.find({
			username: req.body.username
			// password: req.body.password 
		}).exec().then(function(data, err) {
			if(err) {
				console.log('Error: ', err)
				res.sendStatus(500);
			} else {
				console.log(data.username);
				res.json(data.username);
			}
			next();
		});
		
	}
}