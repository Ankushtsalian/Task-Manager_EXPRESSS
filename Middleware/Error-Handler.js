const { CustomAPIError } = require("../errors/Custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  // const {
  //   errors: {
  //     name: { message },
  //   },
  // } = err;
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  // const { message: msg } = err;
  return res.status(500).json({ msg: err.errors.name.message });
};

module.exports = errorHandlerMiddleware;
