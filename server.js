const express = require("express")
const app = express()
const mongoose = require('mongoose');
const Product = require('./models/productModel')
const port = 4996
app.use(express.json())




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
  res.send("hello API")
})

app.get("/products", async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products)
  } catch (error) {
    console.log(error.message);
  res.status(500).json({message: error.message})
  }
})




app.post("/products", async(req, res) => {
 try {
  const product = await Product.create(req.body)
  res.status(200).json(product)

 } catch (error) {
  console.log(error.message);
  res.status(500).json({message: error.message})
 }
})

