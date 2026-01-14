const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});