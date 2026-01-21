const { getData } = require("../model/userModel")

const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({ msg: "Authorization header missing" })
  }

  const encoded = authHeader.split(" ")[1]
  const decoded = Buffer.from(encoded, "base64").toString("utf-8")
  const [username, password] = decoded.split(":")

  const { users } = getData()

  const user = users.find(
    (u) => u.username === username && u.password === password
  )

  if (!user) {
    return res.status(401).json({ msg: "Invalid credentials" })
  }

  next()
}

module.exports = basicAuth