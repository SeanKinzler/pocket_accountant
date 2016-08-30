var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var debitSchema = new Schema({
	ammount: Number
})

var Debit = mongoose.model('Debit', debitSchema);

module.exports = Debit;