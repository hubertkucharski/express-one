const express = require('express');
const product = require('./api/product');

// const cookieParser = require('cookie-parser');
//
const app = express();
// app.use(cookieParser());
app.use('/api/product', product);
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
app.listen('3000', () => { console.log('server is running..'); });
// const myPromise = new Promise();
// (async () => {
//   await setTimeout(() => {
//     console.log('koniec czasu');
//   }, 1000);
//   await setInterval(() => console.log('500'), 500);
// })();
