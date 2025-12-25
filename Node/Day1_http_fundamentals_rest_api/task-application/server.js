const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let nextId = 1;

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "This is test route" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

//----------get all tasks-----------
app.get("/tasks", (req, res) => {
  res.status(200).json({
    msg: "List of all tasks", tasks,
  });
});

//---------get task by ID-------------
app.get("/tasks/:id", (req, res) => {
  let id = Number(req.params.id);
  let index = tasks.findIndex((task) => task.id === id);

  if(index === -1) {
    res.status(404).json({ msg: "Task Not Found" });
  } else {
    res.status(200).json({
      msg: "Task Details",
      task: tasks[index],
    });
  }
});

//-------------add task-------------------
app.post("/add-task", (req, res) => {
  let { title, description, status } = req.body;
  if (!title) {
    return res.status(400).json({ msg: "Title is required" });
  }

  let newTask = {
    id: nextId++,
    title,
    description: description || "",
    status: status || "pending",
  };

  tasks.push(newTask);

  res.status(201).json({
    msg: "New Task Added",
    task: newTask,
  });
});

//-----------update task by ID----------------
app.put("/update-task/:id", (req, res) => {
  let id = Number(req.params.id);
  let updatedTask = req.body;

  let index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    res.status(404).json({ msg: "Task Not Found" });
  } else {
    tasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...updatedTask };
      }
      return task;
    });

    res.status(200).json({ msg: "Task Updated" });
  }
});

//--------------delete task by ID-------------------
app.delete("/delete-task/:id", (req, res) => {
  let id = Number(req.params.id);

  let index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    res.status(404).json({ msg: "Task Not Found" });
  } else {
    tasks = tasks.filter((task) => task.id !== id);
    res.status(200).json({ msg: "Task Deleted" });
  }
});