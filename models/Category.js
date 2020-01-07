const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    required: true
  }
});

module.exports = mongoose.model("Category", CategorySchema);
