import { useState } from "react";
import products from "../data/products";

const categories = ["Electronics", "Clothing", "Books", "Home"];

const ProductFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((p) => {
    if (selectedCategories.length && !selectedCategories.includes(p.category))
      return false;
    if (minPrice && p.price < minPrice) return false;
    if (maxPrice && p.price > maxPrice) return false;
    if (inStockOnly && !p.inStock) return false;
    return true;
  });

  return (
    <div>
      <h2>Product Filter</h2>

      {categories.map((cat) => (
        <label key={cat}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(cat)}
            onChange={() =>
              setSelectedCategories(
                selectedCategories.includes(cat)
                  ? selectedCategories.filter((c) => c !== cat)
                  : [...selectedCategories, cat]
              )
            }
          />
          {cat}
        </label>
      ))}

      <div>
        <input
          placeholder="Min price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          placeholder="Max price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={() => setInStockOnly(!inStockOnly)}
        />
        In stock only
      </label>

      <button
        onClick={() => {
          setSelectedCategories([]);
          setMinPrice("");
          setMaxPrice("");
          setInStockOnly(false);
        }}
      >
        Clear All Filters
      </button>

      <h3>Results: {filteredProducts.length}</h3>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} | {p.category} | ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;