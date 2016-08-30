var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	credits: [{
		ammount: {type: Number}
	}],
	debits: [{
		ammount: {type: Number}
	}]
})

var User = mongoose.model('user', userSchema);

module.exports = User;