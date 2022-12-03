const asyncWrapper = require("../Middleware/Async");
const Task = require("../Model/Task");

const createTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.create(req.body);
  return res.json({ tasks });
});

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  return res.status(201).json({ tasks });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return res
      .status(404)
      .json({ msg: ` No Task with ID: ${taskId} in DataBase ` });
  }
  return res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task)
    return res
      .status(404)
      .json({ msg: ` No Task with ID: ${id} in DataBase ` });
  return res.status(201).json({ success: true, data: null });
});

const updateTask = asyncWrapper(async (req, res) => {
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
});

const editTask = asyncWrapper(async (req, res) => {
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
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
