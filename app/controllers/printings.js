const db = require('../middleware/db');
const { handleError } = require('../middleware/utils');
const model = require('../models/printing');

exports.get = async (req, res) => {
  try {
    const result = await db.get(model, req.query);
    res.status(200).json(result);
  } catch (err) {
    handleError(res, err);
  }
};
