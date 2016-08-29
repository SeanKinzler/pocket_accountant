//acct balance = credits - debits
//func calc balance
//func get current user data
//
module.exports = {
	login: function(req, res, next) {
		var user = User.find(req.body);
		console.log(user)
		//always logs in
		res.json(user.username);
		next();
	}
}