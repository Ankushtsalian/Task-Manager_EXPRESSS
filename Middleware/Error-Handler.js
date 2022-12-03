const errorHandlerMiddleware = (err, req, res, next) => {
  const {
    errors: {
      name: { message },
    },
  } = err;
  //   return res.status(500).json({ msg: err.errors.name.message });
  return res.status(500).json(message);
};

module.exports = errorHandlerMiddleware;
