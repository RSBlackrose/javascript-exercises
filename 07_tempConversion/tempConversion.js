const ftoc = function(temp) {
  return Math.round(((5 / 9) * (temp - 32)) * 10) / 10;
};

const ctof = function(temp) {
  return Math.round((1.8 * temp + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
