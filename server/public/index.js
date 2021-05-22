const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy
app.use(require('./router/auth'));


// app.get('/',(req, res) => {
//    res.send('Hello world from the server index.js');
// });

app.get('/login',(req, res) => {
    res.send('login ');
});

app.get('/signup',(req, res) => {
    res.send('signup');
});

app.get('/dashboard',(req, res) => {
    res.send('dashboard');
});

app.get('/create',(req, res) => {
    res.send('Add Book');
});

app.listen(3000, () => {
    console.log('server is running at port no 3000');
})