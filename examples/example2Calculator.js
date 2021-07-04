module.exports = {
  add: (...inputs) =>
    inputs.reduce((accumulator, value) => accumulator + value),
  sub: (...inputs) =>
    inputs.reduce((accumulator, value) => accumulator - value),
  mult: (...inputs) =>
    inputs.reduce((accumulator, value) => accumulator * value),
};
