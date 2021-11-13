const toWeirdCase = (str) => {
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 == 0)
        arr[i] =
          arr[i].slice(0, j) +
          arr[i].charAt(j).toUpperCase() +
          arr[i].slice(j + 1);
      else
        arr[i] =
          arr[i].slice(0, j) +
          arr[i].charAt(j).toLowerCase() +
          arr[i].slice(j + 1);
    }
  }
  return arr.join(' ');
};

console.log(toWeirdCase('Weird string case'));
