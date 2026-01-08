const router = require("express").Router();
const data = require("../data/data");

router.post("/", (req, res) => {
  data.comments.push(req.body);
  res.send("Comment added");
});

router.get("/post/:postId", (req, res) => {
  const postComments = data.comments.filter(
    comment => comment.postId === req.params.postId
  );
  res.json(postComments);
});

router.delete("/:id", (req, res) => {
  data.comments = data.comments.filter(
    comment => comment.id !== req.params.id
  );
  res.send("Comment deleted");
});

module.exports = router;