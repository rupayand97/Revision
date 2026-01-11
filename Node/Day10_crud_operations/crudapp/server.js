import express from "express";

const app = express();
app.use(express.json());

let products = [];
let idCounter = 1;

app.post("/products", (req, res) => {
  const { name, category, price, description } = req.body;

  const product = {
    _id: idCounter++,
    name,
    category,
    price,
    description,
  };

  products.push(product);
  res.status(201).json(product);
});

app.get("/products", (req, res) => {
  let result = [...products];

  const {
    category,
    minPrice,
    maxPrice,
    search,
    sortBy = "_id",
    order = "asc",
    page = 1,
    limit = 5,
  } = req.query;

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (minPrice) {
    result = result.filter((p) => p.price >= Number(minPrice));
  }

  if (maxPrice) {
    result = result.filter((p) => p.price <= Number(maxPrice));
  }

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  result.sort((a, b) => {
    if (order === "desc") return b[sortBy] > a[sortBy] ? 1 : -1;
    return a[sortBy] > b[sortBy] ? 1 : -1;
  });

  const start = (page - 1) * limit;
  const paginatedData = result.slice(start, start + Number(limit));

  res.json({
    total: result.length,
    page: Number(page),
    limit: Number(limit),
    data: paginatedData,
  });
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id == Number(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

app.put("/products/:id", (req, res) => {
  const index = products.findIndex((p) => p._id == Number(req.params.id));
  if (index == -1)
    return res.status(404).json({ message: "Product not found" });

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

app.delete("/products/:id", (req, res) => {
  products = products.filter((p) => p._id != Number(req.params.id));
  res.json({ message: "Product deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});