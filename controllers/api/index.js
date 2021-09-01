const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const batterRoutes = require('./batters-routes.js');
// const addRoutes = require('./add-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/batters', batterRoutes);
// router.use('/add', addRoutes);

module.exports = router;
