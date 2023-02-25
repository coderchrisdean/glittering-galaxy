const router = require('express').Router;

// render the homepage
router.get('/', (req, res) => {
    res.render('homepage', {
        // loggedIn: req.session.loggedIn
    });
});
module.exports = router;