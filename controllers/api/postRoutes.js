const router = require("express").Router();

const { Posts } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  const newPost = await Posts.create({
    main: req.body.main,
    user_id: req.session.user_id,
  });
  res.json(newPost);
});

module.exports = router;
