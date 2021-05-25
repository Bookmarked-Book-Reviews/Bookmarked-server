const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();




require('../db/conn');
const Book = require("../model/bookSchema");



app.get("/books",function(req,res){
	Book.find({},function(err,books){
		if(err){
			console.log("Error!");
		} else {
			res.render("index",{books:books});
		}
	});
});



app.post("/create",function(req,res){

	
	console.log("book created");
});





module.exports = router;