const express = require("express")
const cookieParser = require("cookie-parser")
const authRouter = require("./routes/authRoutes")

const app = express()

app.use(express.json())
app.use(cookieParser())

app.get("/test", (req, res) => {
  res.json({ msg: "This is test route" })
})

app.use("/auth", authRouter)

app.listen(3000, () => {
  console.log("app is running on port 3000")
})