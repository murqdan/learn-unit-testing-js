const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const { getItems } = require('./models.js');
const apiRoutes = require('./routers.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

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

app.use('/api', apiRoutes);

module.exports = app;
