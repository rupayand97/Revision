export default function Rule({ label, valid }) {
  return (
    <li style={{ color: valid ? "green" : "red", marginBottom: "5px" }}>
      {valid ? "✓" : "✗"} {label}
    </li>
  );
}