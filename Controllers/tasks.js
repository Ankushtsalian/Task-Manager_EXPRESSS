const asyncWrapper = require("../Middleware/Async");
const Task = require("../Model/Task");

/**-----------------------Create Task--------------------------- */
const createTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.create(req.body);
  return res.json({ tasks });
});
/**------------------------------------------------------------- */

/**-----------------------getAllTasks--------------------------- */
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  return res.status(201).json({ tasks });
});
/**------------------------------------------------------------- */

/**-----------------------getTask--------------------------- */
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    /**-----------Custom error setup demo-------------- */
    const error = new Error("Not Found");
    error.status = 404;
    console.log(error);
    return next(error);
    /**-----------Custom error setup demo-------------- */
    // return res
    //   .status(404)
    //   .json({ msg: ` No Task with ID: ${taskId} in DataBase ` });
  }
  return res.status(200).json({ task });
});
/**------------------------------------------------------------- */

/**-----------------------deleteTask--------------------------- */
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;

  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task)
    return res
      .status(404)
      .json({ msg: ` No Task with ID: ${id} in DataBase ` });
  return res.status(201).json({ success: true, data: null });
});
/**------------------------------------------------------------- */

/**-----------------------updateTask--------------------------- */
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
/**------------------------------------------------------------- */

/**-----------------------editTask--------------------------- */
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
/**------------------------------------------------------------- */

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
