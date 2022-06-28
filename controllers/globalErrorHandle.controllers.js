const globalErrorHandler = (err, req, res, next) => {
  //5xx fail servidor fallo
  //4xx error usurio fallo
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

module.exports = { globalErrorHandler };
