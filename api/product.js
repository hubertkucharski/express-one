const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json({
      status: 200,
      message: 'Successfully json',
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Błąd serwera');
  }
});

module.exports = router;
