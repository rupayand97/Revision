const router = require("express").Router();
const data = require("../data/data");

router.post("/", (req, res) => {
  data.posts.push(req.body);
  res.send("Post created");
});

router.get("/", (req, res) => {
  res.json(data.posts);
});

router.get("/user/:userId", (req, res) => {
  const userPosts = data.posts.filter(
    post => post.userId === req.params.userId
  );
  res.json(userPosts);
});

router.delete("/:id", (req, res) => {
  const postId = req.params.id;

  data.comments = data.comments.filter(
    comment => comment.postId !== postId
  );
  data.posts = data.posts.filter(post => post.id !== postId);

  res.send("Post and related comments deleted");
});

module.exports = router;
