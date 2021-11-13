const findNextSquare = (num) => {
  let result = Number.isInteger(Math.sqrt(num))
    ? Math.pow(Math.sqrt(num) + 1, 2)
    : -1;
  return result;
};

console.log(findNextSquare(114));
console.log(findNextSquare(625));
