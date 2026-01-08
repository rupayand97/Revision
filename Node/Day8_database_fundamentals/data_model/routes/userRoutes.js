const router = require("express").Router();
const data = require("../data/data");

router.post("/", (req, res) => {
  data.users.push(req.body);
  res.send("User created");
});

router.get("/", (req, res) => {
  res.json(data.users);
});

router.delete("/:id", (req, res) => {
  const userId = req.params.id;

  data.posts = data.posts.filter(post => post.userId !== userId);
  data.comments = data.comments.filter(comment => comment.userId !== userId);
  data.users = data.users.filter(user => user.id !== userId);

  res.send("User and related posts/comments deleted");
});

module.exports = router;
