import Alert from "./Alert";

const AlertContainer = ({ alerts, onRemove, onShow }) => {
  return (
    <div>
      <button onClick={onShow}>Show Sample Alerts</button>

      {alerts.map((alert) => (
        <Alert key={alert.id} {...alert} onRemove={() => onRemove(alert.id)} />
      ))}
    </div>
  );
};

export default AlertContainer;
