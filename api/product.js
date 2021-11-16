const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res
      .status(200)
      .send('All ok');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Błąd serwera');
  }
});

module.exports = router;
