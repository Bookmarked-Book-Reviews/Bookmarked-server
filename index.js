const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

const PORT = process.env.PORT || 5000;

// we link the router files to make our route easy
app.use(require('./router/auth'));
app.use(require('./router/book'));


const port = process.env.PORT || 5000
 app.get('/',(req, res) => {
    res.send('Hello world from the server index.js');
 });

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

app.listen(PORT, () => {
    console.log('server is running at port no 5000');
})