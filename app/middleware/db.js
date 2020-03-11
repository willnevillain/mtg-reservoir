const { buildErrorObject } = require('../middleware/utils');

const DB_ERROR_STATUS_CODE = 500;

async function get(model, query) {
  return new Promise((resolve, reject) => {
    model.find(query, (err, items) => {
      if (err) {
        reject(buildErrorObject(DB_ERROR_STATUS_CODE, err.message));
      }
      resolve(items);
    });
  });
}

module.exports = {
  get,
};
