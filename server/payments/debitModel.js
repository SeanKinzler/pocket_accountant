var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	userName: {type: String, required: true, unique: true},
	password: {type: String, required: true, unique: true},
	acctBalance: Number,
	credits: Number,
	debits: Number
})

userSchema.methods.updateBalance = function() {
	this.acctBalance = this.credits - this.debits;
};


var User = mongoose.Model('User', userSchema);

module.exports = User;