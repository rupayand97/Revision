const ProgressBar = ({ step }) => {
  const steps = ["Personal", "Account", "Preferences", "Review"];

  return (
    <div style={{ display: "flex", marginBottom: 20 }}>
      {steps.map((label, index) => (
        <div
          key={label}
          style={{
            flex: 1,
            padding: 6,
            textAlign: "center",
            backgroundColor: step > index ? "#4caf50" : "#ccc",
            color: "#fff",
            marginRight: 4
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
