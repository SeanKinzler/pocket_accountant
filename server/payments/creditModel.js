var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var creditSchema = new Schema({
	ammount: Number,
	_owner: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})
var Credit = mongoose.model('credit', creditSchema, 'credit');

module.exports = Credit;