const router = require(`express`).Router();

router.get(`/`, async (req, res) => {
  res.status(200).json({ message: "We have made it" });
});

module.exports = router;
