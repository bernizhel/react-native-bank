const path = require('path');

const pathToRoot = (...segments) => {
  return path.resolve(__dirname, '../../', ...segments);
};

const pathToTemplate = (...segments) => {
  return path.resolve(__dirname, '../templates', ...segments);
};

module.exports = {
  pathToTemplate,
  pathToRoot,
};
