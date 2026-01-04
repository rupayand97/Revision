import { useState } from "react";
import AlertContainer from "./AlertContainer";

const SampleAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  const showAlerts = () => {
    setAlerts([
      { id: 1, type: "success", message: "Success alert" },
      { id: 2, type: "error", message: "Error alert" },
      { id: 3, type: "warning", message: "Warning alert" },
      { id: 4, type: "info", message: "Info alert" },
    ]);
  };

  const removeAlert = (id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <AlertContainer
      alerts={alerts}
      onRemove={removeAlert}
      onShow={showAlerts}
    />
  );
};

export default SampleAlerts;