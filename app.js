const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home page',
    subtitle: 'Welcome to the Barack Obama tribute page'
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
    title: 'Gallery',
    photos: ['obama1.jpg', 'obama2.jpg']
  });
});

app.listen(3001);
