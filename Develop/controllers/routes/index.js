const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoute = require('./homeRoute');

router.use('/readers', readerRoutes);
router.use('/cards', libraryCardRoutes);

module.exports = router;
