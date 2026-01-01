import { useState } from "react";

function DragReorder() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Learn Node",
    "Learn DSA",
    "Learn JavaScript",
  ]);

  const moveUp = (index) => {
    if (index === 0) return;

    const updatedTasks = [...tasks];
    [updatedTasks[index - 1], updatedTasks[index]] = [
      updatedTasks[index],
      updatedTasks[index - 1],
    ];

    setTasks(updatedTasks);
  };

  const moveDown = (index) => {
    if (index == tasks.length - 1) return;

    const updatedTasks = [...tasks];
    [updatedTasks[index + 1], updatedTasks[index]] = [
      updatedTasks[index],
      updatedTasks[index + 1],
    ];

    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "420px" }}>
      <h2>Task Reorder</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={task}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <span>{index + 1}.</span>
            <span style={{ flex: 1 }}>{task}</span>

            <button onClick={() => moveUp(index)} disabled={index === 0}>
              Move Up
            </button>

            <button
              onClick={() => moveDown(index)}
              disabled={index == tasks.length - 1}
            >
              Move Down
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragReorder;