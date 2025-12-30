import { useState } from "react";
import Rule from "./Rule";

export default function PasswordInput() {
  const [password, setPassword] = useState("");

  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const passedCount = Object.values(rules).filter(Boolean).length;

  const getBorderColor = () => {
    if (passedCount <= 1) return "red";
    if (passedCount <= 3) return "orange";
    return "green";
  };

  return (
    <>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        style={{
          width: "100%",
          padding: "10px",
          border: `2px solid ${getBorderColor()}`,
          borderRadius: "5px",
          outline: "none",
          marginBottom: "15px",
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        <Rule label="Min 8 characters" valid={rules.length} />
        <Rule label="Uppercase letter" valid={rules.uppercase} />
        <Rule label="Number" valid={rules.number} />
        <Rule label="Special character" valid={rules.special} />
      </ul>
    </>
  );
}