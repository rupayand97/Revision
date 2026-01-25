import { useState } from "react";

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getFactors = (num) => {
  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) factors.push(i);
  }
  return factors;
};

const NumberAnalyzer = () => {
  const [number, setNumber] = useState(10);
  const [theme, setTheme] = useState("light");

  const prime = isPrime(number);
  const factors = getFactors(number);
  const sumOfFactors = factors.reduce((s, f) => s + f, 0);

  return (
    <div
      style={{
        padding: "20px",
        background: theme == "light" ? "#fff" : "#222",
        color: theme == "light" ? "#000" : "#fff",
      }}
    >
      <h2>Number Analyzer</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      <p>Is Prime: {prime ? "Yes" : "No"}</p>
      <p>Factors: {factors.join(", ")}</p>
      <p>Sum of Factors: {sumOfFactors}</p>
    </div>
  );
};

export default NumberAnalyzer;