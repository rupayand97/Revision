import React, { useState, useEffect } from "react";

const Timer = ({ defaultTime = 300 }) => {
  const [time, setTime] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let interval = null;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleStartStop = () => {
    if (time === 0) return;
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(defaultTime);
  };

  const handleEditConfirm = () => {
    const newTime = parseInt(inputValue, 10);
    if (!isNaN(newTime) && newTime >= 0) {
      setTime(newTime);
    }
    setIsEditing(false);
    setInputValue("");
  };

  return (
    <div>
      {!isEditing ? (
        <div
          onClick={() => {
            setIsRunning(false);
            setIsEditing(true);
            setInputValue(time);
          }}
        >
          {formatTime()}
        </div>
      ) : (
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleEditConfirm}
          onKeyDown={(e) => e.key === "Enter" && handleEditConfirm()}
          autoFocus
        />
      )}

      <div>
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {time == 0 && <div>Time's up!</div>}
    </div>
  );
};

export default Timer;