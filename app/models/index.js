// module.exports = () => {
//   fs.readdirSync(`${__dirname}/`).forEach((file) => {
//     const modelName = file.split('.').slice(0, -1).join('.').toString(); // Handle periods in nam
//     if (modelName !== 'index') {
//       require(`./${modelName}`);
//     }
//   });
// };
