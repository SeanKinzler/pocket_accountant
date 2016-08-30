var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true}
	// acctBalance: Number,
	// credits: Number,
	// debits: Number
})

// userSchema.methods.updateBalance = function() {
// 	this.acctBalance = this.credits - this.debits;
// };

// console.log(userSchema);
var User = mongoose.model('user', userSchema);

module.exports = User;