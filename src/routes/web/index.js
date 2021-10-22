const express = require('express');

const router = express.Router();

router.get('/app', async (req, res) => {
  res.render('homepage');
});
module.exports = router;
