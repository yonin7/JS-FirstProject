const shortestWords = (str) => {
  let words = str.split(' ');
  let wordsLength = words.map((ele) => ele.length);
  let maxIndex = Math.max(...wordsLength);

  for (let i = 0; i != words.length; i++) {
    if (wordsLength[i] == maxIndex) return words[i];
  }
};

console.log(shortestWords('aa aaaa aaa'));
