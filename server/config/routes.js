

module.exports = function(app, express) {
	app.get('/api/users', function(req, res, next) {
		res.statusCode(200).send('sent');
		next();
	})
};