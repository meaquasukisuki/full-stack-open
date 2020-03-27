const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");


const url = process.env.DATABASE_URL;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log("connected success!")
}).catch((e) => {
	console.log(e.message)
});

const phoneSchema = new mongoose.Schema({
	name: {
		type:String,
		required:true,
		unique:true,
		minlength:3
	},
	number: {
		type:String,
		required:true,
		unique:true,
		minlength: 8
	}
});

phoneSchema.plugin(uniqueValidator);

phoneSchema.set("toJSON",{
	transform:(document,returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});


const Phone = mongoose.model('Phone', phoneSchema);



module.exports = Phone;