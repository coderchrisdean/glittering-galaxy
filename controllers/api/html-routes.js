const router = require('express').Router();

// render the main page
router.get('/', (req, res) => {
    res.render('main', {
       
    });
});

// render the login page
router.get('/login', (req, res) => {
    res.render('login', {
        // loggedIn: req.session.loggedIn
    });
});
module.exports = router;