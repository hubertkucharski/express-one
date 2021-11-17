const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const home = require('./routers/home');
const articleRouter = require('./routers/articles');
//
const app = express();
app.use(cookieParser());
// app.use('/api/product', product);

app.use(express.static('public'));
app.engine('.hbs', hbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use('/articles', articleRouter);
app.use('/home', home);
// const object1 = {
//   a: 'somestring',
//   b: 42,
// };
//
// const entryObject = Object.entries(object1);
//
// for (const [one, sec] of entryObject) {
//   console.log(one, sec);
// }
// app.get('/', (req, res) => {
//   console.log(req.originalUrl);
//   res
//     .cookie('ciastko1', 'niamniam')
//     .send(req.cookies);
// });
//
app.listen('0.0.0.0', () => { console.log('server is running..'); });
// const myPromise = new Promise();
// (async () => {
//   await setTimeout(() => {
//     console.log('koniec czasu');
//   }, 1000);
//   await setInterval(() => console.log('500'), 500);
// })();
