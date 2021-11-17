const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const articles = [{
    title: 'Test Article',
    createdAt: new Date().toLocaleDateString(),
    description: 'Test description',
  },
  {
    title: 'Test Article',
    createdAt: new Date().toLocaleDateString(),
    description: 'Test description',
  }];
  res
  // .render('index');
    .send('index');
  // { articles });
});

module.exports = router;
