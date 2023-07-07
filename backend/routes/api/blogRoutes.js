const router = require(`express`).Router();
const { Blog } = require(`../../models`);
router.get(`/`, async (req, res) => {
  res.status(200).json({ message: "We have made it" });
});

router.get(`/`);
module.exports = router;

router.get(`/:id`, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    const responseData = blogData.get({ plain: true });

    res.status(200).json(responseData);
  } catch (error) {
    res.status(404).json(error);
  }
});
