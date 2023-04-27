const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// const htmlRoutes = require('./html-routes');



router.use('/users', userRoutes);
router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);
router.use('/dashboard', dashboardRoutes);



module.exports = router;
