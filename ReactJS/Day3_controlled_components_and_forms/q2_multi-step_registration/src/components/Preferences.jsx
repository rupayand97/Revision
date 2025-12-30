const Preferences = ({ data, setData, next, back }) => {
  return (
    <>
      <select
        value={data.theme}
        onChange={(e) =>
          setData({ ...data, theme: e.target.value })
        }
      >
        <option value="">Select Theme</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <br />

      <label>
        <input
          type="checkbox"
          checked={data.notifications}
          onChange={(e) =>
            setData({ ...data, notifications: e.target.checked })
          }
        />
        Enable Notifications
      </label>
      <br />

      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
};

export default Preferences;
