const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json());


require('../db/conn');
const bookSchema = require('../model/bookSchema.js');



app.get("/books",async(req,res)=>{
	bookSchema.find({},(err,books)=>{
		err?res.status(500).send(req):res.status(201).send(books);
	});
});



app.post("/create",(req,res)=>{
   const bookData=req.body;
   bookSchema.create(bookData,(err,data)=>{
	   err?res.status(500).send(err):res.status(201).send(data);
   })

   
	
});





module.exports = router;