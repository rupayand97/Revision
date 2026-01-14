const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    category: String,
    price: Number,
    rating: Number,
    inStock: Boolean,
  },
  { timestamps: true }
);


productSchema.index({ name: "text", description: "text" });
productSchema.index({ category: 1, price: 1 });
productSchema.index({ rating: -1 });

module.exports = mongoose.model("Product", productSchema);