var mongoose = require('mongoose')
	,Schema = mongoose.Schema
	,ObjectId = Schema.ObjectId;
	
var loanSchema = new Schema({
	borrower : String,
	item : String,
	loan_date : {
		type : Date,
		default : Date.now,
	},
	due_date : Date,
	creation_date : {
		type : Date,
		default : Date.now,
	},
	returned_status : String,
	returned_date : Date,
	last_update : {
		type : Date,
		default : Date.now,
	},
});


module.exports = mongoose.model('Loan', loanSchema);
