var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var creditSchema = new Schema({
	userName: {type: String, required: true, unique: true},
	password: {type: String, required: true, unique: true},
	acctBalance: Number
	// credits: [{type: Schema.types.ObjectId, ref: 'credit'}],
	// debits: [{type: Schema.types.ObjectId, ref: 'debit'}]
})

// userSchema.methods.updateBalance = function() {
// 	this.acctBalance = this.credits - this.debits;
// };


var User = mongoose.Model('User', userSchema);

module.exports = User;