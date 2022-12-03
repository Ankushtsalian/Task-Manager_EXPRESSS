const { validate } = require("../Model/Task");
const Task = require("../Model/Task");

const createTask = async (req, res) => {
  try {
    const tasks = await Task.create(req.body);
    return res.json({ tasks });
  } catch (error) {
    return res.status(500).json({ msg: error.errors.name.message });
  }
};
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(201).json({ tasks });
  } catch (error) {
    return res.status(500).json({ msg: error.errors.name.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res
        .status(404)
        .json({ msg: ` No Task with ID: ${taskId} in DataBase ` });
    }
    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task)
      return res
        .status(404)
        .json({ msg: ` No Task with ID: ${id} in DataBase ` });
    return res.status(201).json({ success: true, data: null });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ msg: ` No Task with ID: ${taskId} in DataBase ` });
    }
    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const editTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ msg: ` No Task with ID: ${taskId} in DataBase ` });
    }
    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
