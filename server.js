const express = require("express")
const app = express()
const port = 4996

const api = [
  {
    name: "Husky", breed:"Bull"
  }
]

app.listen(port, () => {
  console.log(`listening at port ${port}`)
})

app.get("/", (req, res) => {
  res.send(api)
})
app.put("/api/:id", (req, res) => {
  res.send(api)
})