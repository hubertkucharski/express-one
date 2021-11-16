const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res
    .cookie('tasty', '10')
    .send(req.cookies);
});

module.exports = router;
