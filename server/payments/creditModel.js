var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var creditSchema = new Schema({
	ammount: Number,
	_owner: {type: Number, ref: 'user'}
})

var Credit = mongoose.Model('credit', creditSchema);

module.exports = Credit;