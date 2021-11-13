const abbreviateTwoWords = (str) => {
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase();
  }
  return arr.join('.');
};

console.log(abbreviateTwoWords('Sam Harris'));
