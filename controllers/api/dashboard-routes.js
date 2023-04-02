const router = require('express').Router();
const withAuth = require('../../utils/auth');

// Route to render the dashboard page
router.get('/', withAuth, async (req, res) => {
  res.render('dashboard');
});


module.exports = router;
