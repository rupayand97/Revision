import React, { useRef, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const textRef = useRef();
  const priorityRef = useRef();

  const addTodo = () => {
    const text = textRef.current.value;
    const priority = priorityRef.current.value;

    if (!text) {
      return;
    }

    setTodos((prev) => [...prev, { text, priority }]);

    textRef.current.value = "";
    priorityRef.current.value = "Low";
  };

  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((item, i) => i !== index));
  };

  return (
    <>
      <input type="text" placeholder="Enter Todo" ref={textRef} />

      <select ref={priorityRef} defaultValue="Low">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button onClick={addTodo}>Add</button>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text} — <strong>{todo.priority}</strong>
            <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default TodoList;