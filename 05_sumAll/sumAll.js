const sumAll = function(num1, num2) {
  let upperBounds, lowerBounds, sum;
  
  if (num2 < num1) {
    lowerBounds = num2;
    upperBounds = num1;
  } 
  else {
    lowerBounds = num1;
    upperBounds = num2;
  }

  if (num2 < 0 || num1 < 0) return "ERROR";
  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";

  sum = 0;
  for (let i = lowerBounds; i <= upperBounds; ++i) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
