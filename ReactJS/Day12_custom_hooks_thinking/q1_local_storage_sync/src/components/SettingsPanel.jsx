import { useEffect, useState } from "react";

const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
  notifications: true,
};

function SettingsPanel() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || DEFAULT_SETTINGS.theme;
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || DEFAULT_SETTINGS.language;
  });

  const [notifications, setNotifications] = useState(() => {
    const stored = localStorage.getItem("notifications");
    return stored !== null
      ? JSON.parse(stored)
      : DEFAULT_SETTINGS.notifications;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  function resetSettings() {
    setTheme(DEFAULT_SETTINGS.theme);
    setLanguage(DEFAULT_SETTINGS.language);
    setNotifications(DEFAULT_SETTINGS.notifications);

    localStorage.removeItem("theme");
    localStorage.removeItem("language");
    localStorage.removeItem("notifications");
  }

  return (
    <div>
      <h2>Settings Panel</h2>

      <div>
        <label>Theme:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div>
        <label>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>
      </div>

      <button onClick={resetSettings}>Reset to Defaults</button>
    </div>
  );
}

export default SettingsPanel;