const Task = require("../Model/Task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.json({ task });
  } catch (error) {
    return res.status(500).json(error.errors.name.message);
  }
};
const getAllTasks = (req, res) => {
  return res.send("Task Manager App");
};

const getTask = (req, res) => {
  return res.send("Task Manager App");
};

const updateTask = (req, res) => {
  return res.send("Task Manager App");
};

const deleteTask = (req, res) => {
  return res.send("Task Manager App");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
