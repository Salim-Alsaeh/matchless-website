const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: [50, "name can not be more than 50 characters"],
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  size: {
    type: String,
    default: "Standard"
  },
  price: {
    type: Number,
    min: 1,
    required: [true, "item must have a price"]
  },
  brand: {
    type: String,
    default: "Unknown"
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [140, "Name can not be more than 140 characters"]
  },
  image_url: [String]
});

module.exports = mongoose.model("Item", ItemSchema);