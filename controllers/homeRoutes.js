const router = require("express").Router();
const { User, Posts } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Posts.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    const post = postData.map((item) => item.get({ plain: true }));

    if (req.session.logged_in) {
      res.render("home", {
        post,
        logged_in: req.session.logged_in,
      });
    } else {
      res.render("login");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newpost", async (req, res) => {
  res.render("newpost");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
