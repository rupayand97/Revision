const store = new Map();
const limit = 5;
const windowMs = 60000;

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();

  if (!store.has(ip)) {
    store.set(ip, { count: 1, time: now });
    return next();
  }

  const data = store.get(ip);

  if (now - data.time > windowMs) {
    store.set(ip, { count: 1, time: now });
    return next();
  }

  if (data.count >= limit) {
    return res.status(429).json({
      error: "Too many requests"
    });
  }

  data.count++;
  next();
}

module.exports = rateLimiter;
