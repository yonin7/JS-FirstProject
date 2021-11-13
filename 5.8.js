const shortestWords = (str) => {
  let words = str.split(' ');
  let wordsLength = words.map((ele) => ele.length);
  return Math.max(...wordsLength);
};

console.log(shortestWords('aa aaaa aaa'));
