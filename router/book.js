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
   title = req.body.title;
   isbn = req.body.isbn;
   author = req.body.author;
   language = req.body.language;
   description = req.body.description;
   year = req.body.year;
   genre = req.body.genre;

   const Book = new bookSchema({title:title,isbn:isbn,author:author,language:language,description:description,year:year,genre:genre})
	try{
		await Book.save();
		res.send("Book Added")
	}catch(err){
		console.log(err);
	}
	
});





module.exports = router;