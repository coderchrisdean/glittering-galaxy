const router = require('express').Router();

// render the main page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// render the login page
router.get('/login', (req, res) => {
    res.render('login');
        // loggedIn: req.session.loggedIn
});

module.exports = router;