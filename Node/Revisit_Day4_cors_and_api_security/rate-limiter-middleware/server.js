const express = require("express");
const rateLimiter = require("./rateLimiter");

const app = express();

app.use(rateLimiter);

app.get("/api/data", (req, res) => {
  res.json({
    data: "This is a rate-limited API response"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
