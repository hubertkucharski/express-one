const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');
// const { db } = require('./utils/db');
const { handleError } = require('./utils/errors');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', hbs({
  extname: '.hbs',
  // helpers: handlebarsHelpers
}));
app.set('view engine', '.hbs');
// wersja bez routera używa get
// app.get('/', (req, res) => {
//     res.render('test')
// }
// wersja z router musi byc z use
app.use('/', homeRouter);
app.use('/client', clientRouter);
app.get('/test', (req, res) => {
  res.send('Ok');
});
app.use(handleError);
app.listen(3000, '0.0.0.0', () => {
  console.log('running server on http:/localhost:3000');
});
