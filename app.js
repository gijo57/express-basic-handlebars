const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/works', (req, res) => {
  res.render('works');
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.listen(3001);
