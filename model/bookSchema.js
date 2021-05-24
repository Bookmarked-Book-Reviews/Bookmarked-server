const mongoose = require('mongoose')
const path = require('path')

// const coverImageBasePath = 'uploads/bookCovers'

const bookSchema = new mongoose.Schema({
    ibnNumber: {
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
    coverImageName: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true [{
            validate:{
                validator: value => validator.isURL(value, { protocols: ['http', 'https', 'ftp'],
                 require_tld: true,
                  require_protocol: true}),
                message: 'Must be a valid URL'
                    }
                  }]
       
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

bookSchema.virtual("coverImagePath").get(function(){
    if(this.coverImageName != null) {
        return path.join('/', coverImageBasePath, this.coverImageName);
    }
})

module.exports = mongoose.model('Book', bookSchema)
// module.exports.coverImageBasePath = coverImagePath;