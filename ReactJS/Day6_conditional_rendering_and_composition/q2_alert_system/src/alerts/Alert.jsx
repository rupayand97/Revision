const icons = {
  success: "✓",
  error: "✕",
  warning: "!",
  info: "i",
};

const Alert = ({ type, message, onRemove }) => {
  return (
    <div style={{ border: "1px solid #ccc", marginTop: 6, padding: 6 }}>
      <span>
        {icons[type]} {message}
      </span>
      <button onClick={onRemove} style={{ marginLeft: 8 }}>
        x
      </button>
    </div>
  );
};

export default Alert;