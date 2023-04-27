const router = require('express').Router();
const { User, Post } = require('../models'); // import models
// const withAuth = require('../../utils/auth');  
//login page render

router.get('/login', (req, res) => {
    res.render('login');
  });

router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
        order: [['createdAt', 'DESC']],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('main', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;