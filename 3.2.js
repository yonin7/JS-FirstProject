const peopleOnTheBus = (arr) => {
  let numOfPeople = 0;
  arr.forEach((element) => {
    numOfPeople = element[0] - element[1] + numOfPeople;
  });
  return numOfPeople;
};

console.log(
  peopleOnTheBus([
    [5, 0],
    [2, 3],
    [1, 0],
    [0, 3],
  ])
);
