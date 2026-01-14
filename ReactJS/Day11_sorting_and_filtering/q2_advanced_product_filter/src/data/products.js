const products = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ["Electronics", "Clothing", "Books", "Home"][i % 4],
  price: Math.floor(Math.random() * 200) + 20,
  inStock: Math.random() > 0.3
}));

export default products;