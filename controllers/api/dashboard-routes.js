const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('This is the dashboard route.');
});

module.exports = router;
