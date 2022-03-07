const router = require("express").Router();

const userRoutes = require("./userRoutes");
const tipRoutes = require("./tipRoutes");
const profileRoutes = require("./profileRoutes");
const accountRoutes = require("./accountRoutes");
router.use("/users", userRoutes);
router.use("/tips", tipRoutes);
router.use("/profile", profileRoutes);
router.use("/account", accountRoutes);

module.exports = router;
