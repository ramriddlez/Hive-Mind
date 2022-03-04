const router = require("express").Router();

const userRoutes = require('./userRoutes');
const tipRoutes = require('./tipRoutes');

router.use('/users', userRoutes);
router.use('/tips', tipRoutes);


module.exports = router;
