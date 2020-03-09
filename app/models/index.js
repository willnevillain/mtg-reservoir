const fs = require('fs');

module.exports = () => {
  fs.readdirSync(`${__dirname}/`).forEach((file) => {
    const modelName = file.split('.').slice(0, -1).join('.').toString(); // Handle periods in name
    if (modelName !== 'index') {
      require(`./${modelName}`);
    }
  });
};
