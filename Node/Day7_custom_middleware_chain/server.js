const express = require("express");
const app = express();

const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error("Unauthorized");
    err.status = 401;
    return next(err);
  }

  next();
};

const timingMiddleware = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const timeTaken = Date.now() - start;
    console.log(`Request took ${timeTaken}ms`);
  });

  next();
};

app.get(
  "/secure",
  loggerMiddleware,
  timingMiddleware,
  authMiddleware,
  (req, res) => {
    res.send("Secure data accessed");
  }
);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
