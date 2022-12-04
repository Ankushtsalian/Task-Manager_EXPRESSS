const errorHandlerMiddleware = (err, req, res, next) => {
  // const {
  //   errors: {
  //     name: { message },
  //   },
  // } = err;
  const { message: msg } = err;
  //   return res.status(500).json({ msg: err.errors.name.message });
  return res.status(err.status).json(err.message);
};

module.exports = errorHandlerMiddleware;
