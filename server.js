const express = require("express")
const app = express()
const mongoose = require('mongoose');
const port = 4996

const api = [
  {
    name: "Husky", breed:"Bull"
  },
  {
    name: "Terry", breed:"Rot"
  }
]


mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://admin:ogubuike4996@demoapi.sdxkjvv.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
  console.log('connected to mongoDB');
  app.listen(port, () => {
    console.log(`listening at port ${port}`)
  })
}).catch((error) => {
  console.log(`error message: ${error}`);
})

app.get("/", (req, res) => {
  res.send(api)
})
app.put("/api/:id", (req, res) => {
  res.send(api)
})