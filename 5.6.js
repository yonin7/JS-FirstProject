const mask = (str) => {
  if (str.length < 4) return str;
  return '#'.repeat(str.length - 4) + str.slice(-4);
};

console.log(mask('Nananananananananananananananana Batman!'));
