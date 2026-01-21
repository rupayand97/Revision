const { getData } = require("../model/userModel")

const login = (req, res) => {
  const { username, password } = req.body
  const { users } = getData()

  const user = users.find(
    (u) => u.username === username && u.password === password
  )

  if (!user) {
    return res.status(401).json({ msg: "Invalid credentials" })
  }

  res.cookie("auth", "true", {
    httpOnly: true
  })

  res.json({ msg: "Login successful" })
}

const logout = (req, res) => {
  res.clearCookie("auth")
  res.json({ msg: "Logout successful" })
}

module.exports = { login, logout }