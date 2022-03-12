const reverseString = function(string) {
  if (string === "") return string;

  const strArray = string.split("");
  const revArray = strArray.reverse(string);
  const joinArray = revArray.join("");
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
