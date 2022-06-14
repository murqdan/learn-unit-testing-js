const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

const { getItems } = require('./models.js');

const app = express();

app.engine(
  '.hbs',
  handlebars({
    extname: '.hbs'
  })
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.use(express.static('static'));

app.get('/', async (req, res) => {
  const items = await getItems();
  res.render('index', { items });
});

module.exports = app;
