const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const batterRoutes = require('./batters-routes.js');

router.use('/users', userRoutes);
router.use('/batters', batterRoutes);

module.exports = router;
