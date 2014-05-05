
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var StudentSchema = new schema({
	name : String
})

module.exports = mongoose.model('Student', StudentSchema);