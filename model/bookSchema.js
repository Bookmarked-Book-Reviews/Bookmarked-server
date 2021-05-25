const mongoose = require('mongoose')
const path = require('path')



const bookSchema = new mongoose.Schema({
    isbnNumber: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    yearOfPublication: {
        type:Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
})



module.exports = mongoose.model('Book', bookSchema)
