const router = require('express').Router();

router.get('/comments', (req, res) => {
  res.send('This is the comment route');
});

module.exports = router;
