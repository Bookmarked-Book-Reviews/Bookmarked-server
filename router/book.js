const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json());


require('../db/conn');
const bookSchema = require('../model/bookSchema');



app.get("/books",async(req,res)=>{
	bookSchema.find({},function(err,books){
		if(err){
			console.log(`error ${req}`);
		} else {
			res.send(books);
		}
	});
});



app.post("/create",async(req,res)=>{
   const title = req.body.title;
   const isbn = req.body.isbn;
   const author = req.body.author;
   const language = req.body.language;
   const description = req.body.description;
   const year = req.body.year;
   const genre = req.body.genre;

   const Book = new bookSchema({title:title,isbn:isbn,author:author,language:language,description:description,year:year,genre:genre})
	try{
		await Book.save();
		res.send("Book Added")
	}catch(err){
		console.log(err);
	}
	
});





module.exports = router;