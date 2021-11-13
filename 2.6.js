const centuryFromYear = (year) => {
  let century =
    year % 100 == 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;
  return century;
};

console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
