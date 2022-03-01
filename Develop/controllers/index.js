const app = require("express").Router();
const homeRoutes = require("./homeRoute");
const apiRoutes = require("./api/index");
app.use("/", homeRoutes);
app.use("/api", apiRoutes);
module.exports = app;
