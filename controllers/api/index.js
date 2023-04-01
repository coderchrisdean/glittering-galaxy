const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const dashboardRoutes = require('./dashboard-routes');
const htmlRoutes = require('./html-routes');


router.use('/html', htmlRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/dashboard', dashboardRoutes);



module.exports = router;
