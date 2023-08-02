const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes")
const mongoose = require("mongoose");
require('dotenv').config()


const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 4996



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(PORT, () => {
      console.log(`listening at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`error message: ${error}`);
  });

 app.use("/api/products", productRoutes)

  app.get("/", (req, res) => {
    res.send("hello API");
  });

