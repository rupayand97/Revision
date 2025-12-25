import { useState } from "react";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const price = 29.99;
  const hasDiscount = quantity >= 5;
  const total = quantity * price;
  const finalTotal = hasDiscount ? total * 0.9 : total;

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "300px",
      }}
    >
      <h3>Product Card</h3>

      <p>Unit Price: ${price.toFixed(2)}</p>

      <div>
        <button onClick={decrement}>-</button>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>

      {hasDiscount && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Bulk Discount Applied (10% OFF)
        </p>
      )}

      <p style={{ marginTop: "10px" }}>
        Total: ${finalTotal.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductCard;