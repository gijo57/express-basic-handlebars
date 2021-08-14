const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home page'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

app.get('/works', (req, res) => {
  res.render('works', {
    title: 'Achievements'
  });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', {
    title: 'Gallery'
  });
});

app.listen(3001);
