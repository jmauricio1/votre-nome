const express = require('express');
const mongoose = require('mongoose');
const ejs = ('ejs');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port: 3000');
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Successfully connected to Votre Nome Database.');
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/home', (req, res) => {
    res.redirect('/');
})

app.get('/names', (req, res) => {
    res.render('names');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.route('/name-request')
    .get((req, res) => {

    })
    .post((req, res) => {

    });