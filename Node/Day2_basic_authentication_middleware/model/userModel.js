const fs = require("fs")

const getData = () => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
  const users = data.users
  return { data, users }
}

const addOrUpdateData = (data) => {
  fs.writeFileSync("./db.json", JSON.stringify(data))
}

module.exports = { getData, addOrUpdateData }
