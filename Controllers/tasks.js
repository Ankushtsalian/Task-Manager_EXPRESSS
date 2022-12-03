const Task = require("../Model/Task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error.errors.name.message });
  }
};
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    return res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error.errors.name.message });
  }
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
