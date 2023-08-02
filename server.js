const express = require("express");
const app = express();
const cors = require('cors')
const productRoutes = require("./routes/productRoutes")
const mongoose = require("mongoose");
const errorMiddleware = require("./middleware/errorMiddleware");
require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 4996
const FRONTEND = process.env.FRONTEND

//enabling only specific domain or ip to access the backend
// if you want multiple routes, put the routes in an array
// example origin: ['http://example.com', 'http://localhost:4996']
//else, set it as below for a single route

// const corsOptions = {
//   origin: FRONTEND,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }



app.use(express.json());
//Simple Usage (Enable All CORS Requests)
app.use(cors())

//defined routes
// app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: false }));
app.use(errorMiddleware)



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

