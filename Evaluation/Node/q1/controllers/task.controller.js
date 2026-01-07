const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {
  isValidDate,
  isValidStatus,
  isValidPriority
} = require('../utils/validators');

const filePath = path.join(__dirname, '../data/tasks.json');

const readTasks = () =>
  JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const writeTasks = (tasks) =>
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

exports.getAllTasks = (req, res) => {
  let tasks = readTasks();
  const { status, priority, sortBy } = req.query;

  if (status) tasks = tasks.filter(t => t.status == status);
  if (priority) tasks = tasks.filter(t => t.priority == priority);
  if (sortBy) {
    tasks.sort((a, b) => new Date(a[sortBy]) - new Date(b[sortBy]));
  }

  res.json({
    success: true,
    count: tasks.length,
    data: tasks
  });
};

exports.getTaskById = (req, res) => {
  const task = readTasks().find(t => t.id === req.params.id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }

  res.json({ success: true, data: task });
};

exports.createTask = (req, res) => {
  const { title, status, priority, dueDate } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: 'Title is required'
    });
  }

  if (status && !isValidStatus(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status' });
  }

  if (priority && !isValidPriority(priority)) {
    return res.status(400).json({ success: false, message: 'Invalid priority' });
  }

  if (dueDate && !isValidDate(dueDate)) {
    return res.status(400).json({ success: false, message: 'Invalid date' });
  }

  const tasks = readTasks();

  const newTask = {
    id: crypto.randomUUID(),
    ...req.body,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json({
    success: true,
    message: 'Task created successfully',
    data: newTask
  });
};

exports.updateTask = (req, res) => {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }

  tasks[index] = { ...tasks[index], ...req.body };
  writeTasks(tasks);

  res.json({
    success: true,
    message: 'Task updated successfully',
    data: tasks[index]
  });
};

exports.deleteTask = (req, res) => {
  const tasks = readTasks();
  const updated = tasks.filter(t => t.id !== req.params.id);

  if (updated.length === tasks.length) {
    return res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }

  writeTasks(updated);

  res.json({
    success: true,
    message: 'Task deleted successfully'
  });
};