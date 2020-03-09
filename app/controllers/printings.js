const model = require('../models/printing');

exports.getAll = async (req, res) => {
  return new Promise((resolve, reject) => {
    model.find((err, items) => {
      if (err) {
        reject(err);
      }
      resolve(items);
    });
  });
};
