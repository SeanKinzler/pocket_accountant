var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var creditSchema = new Schema({
	ammount: Number
})

var Debit = mongoose.Model('Debit', debitSchema);

module.exports = Debit;