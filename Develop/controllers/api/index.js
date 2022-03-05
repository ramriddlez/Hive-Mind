const router = require("express").Router();

const userRoutes = require("./userRoutes");
const tipRoutes = require("./tipRoutes");
const profileRoutes = require("./profileRoutes");
router.use("/users", userRoutes);
router.use("/tips", tipRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
