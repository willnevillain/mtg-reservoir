function buildErrorObject(code, message) {
  return { code, message };
}

function handleError(res, err) {
  res.status(err.code).json({
    error: err.message,
  });
}

module.exports = {
  buildErrorObject,
  handleError,
};
