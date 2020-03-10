const { buildErrorObject } = require('../middleware/utils');

const DB_ERROR_STATUS_CODE = 500;

exports.get = async (model, query)  => {
  return new Promise((resolve, reject) => {
    model.find(query, (err, items) => {
      if (err) {
        reject(buildErrorObject(DB_ERROR_STATUS_CODE, message));
      }
      resolve(items);
    });
  });
};
