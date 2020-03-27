
require('dotenv').config();
const Phone = require("./Mongoose/models/phone");

const express = require('express');
const morgan = require("morgan");
morgan.token("myToken",function (req) {
	return JSON.stringify(req.body)
});

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(morgan(':method :status :res[content-length] - :response-time ms :myToken'));
app.use(express.static("build"));

// const url = "http://localhost:3001/api/persons";
//
//
//
//
// app.get(url,(req,res) => {
// 	Phone.find({}).then(results => {
// 		res.json(results)
// 	})
// });
//
// const getID = (url,urlID) => app.get(`${url}/${urlID}`,(req,res) => {
// 	const paramId = req.params.id;
// 	Phone.find({id:paramId}).then((results) => {
// 		res.json(results)
// 	})
// });
//
// const addPerson = (url) => {
// 	app.post(url,(req,res) => {
// 		const reqBody = req.body;
// 		new Phone({
// 			name:reqBody.name,
// 			number:reqBody.number
// 		}).save().then((result) => {
// 			res.json(result)
// 		});
// 	})
// };
//
// addPerson(url);






app.get('/api/persons', (req,res,next) => {
	Phone.find({}).then((results) => {
		res.json(results)
	}).catch((e) => {
		next(e)
	})
});

app.get("/api/persons/:id",(req,res,next) => {
	const reqId = req.params.id;
	Phone.findById(reqId).then((result) => {
		if (result) {
			res.json(result);
			res.status(200).end()
		}else {
			res.status(400).end();
		}
	}).catch((e) => {
		next(e)
	});
});

app.post("/api/persons",(req,res,next) => {
	const reqBody  = req.body;
	if (!reqBody.name || !reqBody.number) {
		res.status(400).send("lack name or number!")
	}
	new Phone({
			...reqBody
	}).save().then((result) => {
		res.json(result)
	}).catch((e) => {
		next(e)
	});
});

app.put("/api/persons/:id",(req,res,next) => {
	const reqBody = req.body;
	const phone = {
		name:reqBody.name,
		number:reqBody.number
	};
	
	Phone.findByIdAndUpdate(req.params.id,phone,{new:true}).then((updatedPhone) => {
		res.json(updatedPhone);
	}).catch((error) => {
		next(error)
	})
});


app.delete("/api/persons/:id",(req,res,next) => {
	const reqId = req.params.id;
	Phone.findByIdAndRemove(reqId).then((result) => {
		res.status(204).end();
	}).catch((e) => {
		next(e)
	});
	// const ids = data.map(({id}) => id.toString());
	// if (!ids.includes(reqId)) {
	// 	res.status(204);
	// }
	// else {
	// 	const ids = data.map(({id}) => id.toString());
	// 	const index = ids.indexOf(reqId);
	// 	data.splice(index,1);
	// 	res.send("deleted!");
	// 	res.status(200);
	// }
});


app.get("/info",(req,res) => {
	const date = new Date();
	res.send(`<p>phonebook length ${data.length}</p>` + date.toString());
	res.status(200)
});
app.use((err,req,res,next) => {
	if (err.name === 'CastError' && err.kind === 'ObjectId') {
		return res.status(400).send({ error: 'malformatted id' })
	}
	else if (err.name === "ValidationError") {
		return res.status(500).send({
			err:err.message
		})
	}
	next(err)
});

app.listen(port, () => console.log(`app listening on port ${port}!`));