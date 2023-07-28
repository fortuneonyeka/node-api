const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a product name"]
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
     
    },
    location: {
      type: String,
      required: [true, "Please enter the location of this item"]
    },
    image: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
)

 const Product = mongoose.model('Product', productSchema);

module.exports = Product;