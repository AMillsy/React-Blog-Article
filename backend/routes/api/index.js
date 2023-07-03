const router = require("express").Router();
const blogRoute = require("./blogRoutes");

router.use(`/blogs`, blogRoute);

module.exports = router;
