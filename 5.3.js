const camelCase = (str) => {
  let delmiter = str.includes('_') ? '_' : '-';
  let arr = str.split(delmiter);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
};

console.log(camelCase('the-stealth-warrior'));
console.log(camelCase('The_Stealth_Warrior'));
