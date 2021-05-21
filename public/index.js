const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB ='mongodb+srv://user_1905:bookmarked05@cluster0.ujle9.mongodb.net/bookstack?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex:  true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('no connection'));


app.get('/',(req, res) => {
    res.send('Hello world from the server');
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

app.listen(3000, () => {
    console.log('server is running at port no 3000');
})