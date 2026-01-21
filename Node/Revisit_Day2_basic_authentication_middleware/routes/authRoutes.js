const express = require("express")
const { login, logout } = require("../controller/authController")
const basicAuth = require("../middleware/basicAuth")
const cookieAuth = require("../middleware/cookieAuth")

const authRouter = express.Router()

authRouter.post("/login", login)

authRouter.post("/logout", cookieAuth, logout)

authRouter.get("/basic-protected", basicAuth, (req, res) => {
  res.json({ msg: "Basic Auth protected route" })
})

authRouter.get("/cookie-protected", cookieAuth, (req, res) => {
  res.json({ msg: "Cookie Auth protected route" })
})

module.exports = authRouter