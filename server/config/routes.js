var User = require('./../user/userModel')
var controller = require('./../user/userController')
module.exports = function(app, express) {
	app.post('/api/login', controller.login);

	app.post('/api/addUser', controller.signup);

	app.post('/api/getcredits', controller.getCredits);

	app.post('/api/getdebits', controller.getDebits);

	app.post('/api/addcredit', controller.addCredit);

	app.post('/api/adddebit', controller.addDebit);
};