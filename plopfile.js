const helpers = require('./plop/helpers');
const generators = require('./plop/generators');

module.exports = (plop) => {
  for (const helper of helpers) {
    plop.setHelper(helper.name, helper.fn);
  }

  for (const generator of generators) {
    plop.setGenerator(generator.name, generator.options);
  }
};
