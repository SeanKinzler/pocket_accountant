module.exports = function(app, express) {
	app.get('/api/users', function(req, res, next) {
		console.log('gotten');
		res.sendStatus(200);
		next();
	})
};