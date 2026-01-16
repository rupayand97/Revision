import { useEffect, useState } from "react";

const initialStocks = [
  { symbol: "AAPL", price: 178.5, name: "Apple Inc." },
  { symbol: "GOOGL", price: 142.3, name: "Alphabet Inc." },
  { symbol: "MSFT", price: 378.9, name: "Microsoft Corp." },
  { symbol: "AMZN", price: 145.2, name: "Amazon.com Inc." },
  { symbol: "TSLA", price: 242.8, name: "Tesla Inc." },
];

function StockTicker() {
  const [stocks, setStocks] = useState(
    initialStocks.map((s) => ({
      ...s,
      prevPrice: s.price,
    })),
  );
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          const change = (Math.random() - 0.5).toFixed(2);
          const newPrice = Math.max(
            0,
            +(stock.price + Number(change)).toFixed(2),
          );

          return {
            ...stock,
            prevPrice: stock.price,
            price: newPrice,
          };
        }),
      );
    }, 2000);

    return () => clearInterval(id);
  }, [isRunning]);

  const toggleUpdates = () => {
    setIsRunning((prev) => !prev);
  };

  const getColor = (price, prevPrice) => {
    if (price > prevPrice) return "green";
    if (price < prevPrice) return "red";
    return "black";
  };

  const getPercentage = (price, prevPrice) => {
    const diff = price - prevPrice;
    return ((diff / prevPrice) * 100).toFixed(2);
  };

  return (
    <div>
      <h2>Stock Price Ticker</h2>

      <button onClick={toggleUpdates}>
        {isRunning ? "Stop Updates" : "Start Updates"}
      </button>

      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            <strong>{stock.symbol}</strong> ({stock.name}) :{" "}
            <span style={{ color: getColor(stock.price, stock.prevPrice) }}>
              ${stock.price} ({getPercentage(stock.price, stock.prevPrice)}%)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockTicker;