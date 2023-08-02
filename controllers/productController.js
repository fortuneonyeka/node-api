const Product = require("../models/productModel");
const asyncHandler = require('express-async-handler')


//post a product
const postProduct = asyncHandler (async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
throw new Error(error.message)
  }
});

//get all products
const getProducts = asyncHandler (async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message)
  }
});


//get single product
const getProduct = asyncHandler (async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
throw new Error(error.message)
  }
});

//modify a product
const updateProduct = asyncHandler (async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404);
      throw new Error(`The product with the ID ${id} does not exist`);
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500);
throw new Error(error.message)
  }
});


//delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404);
      throw new Error(`The product with the ID ${id} does not exist`);
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    
  }
});


//export each methods function
module.exports = {
  postProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
