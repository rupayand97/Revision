import { useState } from "react";

const Dashboard = () => {
  const [widgets, setWidgets] = useState({
    userStats: true,
    recentActivity: true,
    quickActions: true,
  });

  const toggle = (key) => {
    setWidgets((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const noWidgetSelected =
    !widgets.userStats && !widgets.recentActivity && !widgets.quickActions;

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={widgets.userStats}
            onChange={() => toggle("userStats")}
          />
          User Stats
        </label>

        <label>
          <input
            type="checkbox"
            checked={widgets.recentActivity}
            onChange={() => toggle("recentActivity")}
          />
          Recent Activity
        </label>

        <label>
          <input
            type="checkbox"
            checked={widgets.quickActions}
            onChange={() => toggle("quickActions")}
          />
          Quick Actions
        </label>
      </div>

      <hr />

      {widgets.userStats && <div>User Stats Widget</div>}
      {widgets.recentActivity && <div>Recent Activity Widget</div>}
      {widgets.quickActions && <div>Quick Actions Widget</div>}

      {noWidgetSelected && <div>No widgets selected</div>}
    </div>
  );
};

export default Dashboard;