exports.handleError = (res, err) => {
  res.status(err.code).json({
    error: err.message
  });
};

exports.buildErrorObject = (code, message) => {
  return { code, message };
};
