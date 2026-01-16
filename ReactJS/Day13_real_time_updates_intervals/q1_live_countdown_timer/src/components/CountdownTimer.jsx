import { useEffect, useState } from "react";

function CountdownTimer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    const totalSeconds = minutes * 60 + seconds;
    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => setIsRunning(false);
  const resumeTimer = () => {
    if (timeLeft > 0) setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(id);
          setIsRunning(false);
          alert("Time's Up!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  const formatTime = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>Countdown Timer</h2>

      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(+e.target.value)}
        placeholder="Minutes"
      />

      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(+e.target.value)}
        placeholder="Seconds"
      />

      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resumeTimer}>Resume</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      <h3>{formatTime()}</h3>
    </div>
  );
}

export default CountdownTimer;
