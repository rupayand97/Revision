require('dotenv').config();
const express = require('express');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.use((req, res) => {
  res.status(404).json({ msg: "REQUEST IS NOT FOUND!!!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});