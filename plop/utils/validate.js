const validateByLowerCase = (value) => /^[a-z ]+$/.test(value);

const validateByAtomicDesign = (value) => {
  return ['atoms', 'molecules', 'organisms'].includes(value);
};

module.exports = {
  validateByLowerCase,
  validateByAtomicDesign,
};
