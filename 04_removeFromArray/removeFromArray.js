const removeFromArray = function(array, ...args) {
  args.forEach(arg => {
    const indexPos = array.findIndex((element) => element === arg);
    if (indexPos >= 0) array.splice(indexPos,1);
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
